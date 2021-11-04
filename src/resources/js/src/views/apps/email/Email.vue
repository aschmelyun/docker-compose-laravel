<template>
  <!-- Need to add height inherit because Vue 2 don't support multiple root ele -->
  <div style="height: inherit">
    <div
      class="body-content-overlay"
      :class="{'show': mqShallShowLeftSidebar}"
      @click="mqShallShowLeftSidebar = false"
    />

    <!-- Email List -->
    <div class="email-app-list">

      <!-- App Searchbar Header -->
      <div class="app-fixed-search d-flex align-items-center">

        <!-- Toggler -->
        <div class="sidebar-toggle d-block d-lg-none ml-1">
          <feather-icon
            icon="MenuIcon"
            size="21"
            class="cursor-pointer"
            @click="mqShallShowLeftSidebar = true"
          />
        </div>

        <!-- Searchbar -->
        <div class="d-flex align-content-center justify-content-between w-100">
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon
                icon="SearchIcon"
                class="text-muted"
              />
            </b-input-group-prepend>
            <b-form-input
              :value="searchQuery"
              placeholder="Search email"
              @input="updateRouteQuery"
            />
          </b-input-group>
        </div>
      </div>

      <!-- App Action Bar -->
      <div class="app-action">
        <div class="action-left">
          <b-form-checkbox
            :checked="selectAllEmailCheckbox"
            :indeterminate="isSelectAllEmailCheckboxIndeterminate"
            @change="selectAllCheckboxUpdate"
          >
            Select All
          </b-form-checkbox>
        </div>
        <div
          v-show="selectedEmails.length"
          class="align-items-center"
          :class="{'d-flex': selectedEmails.length}"
        >

          <!-- Update Mail Folder Dropdown -->
          <b-dropdown
            variant="link"
            no-caret
            toggle-class="p-0"
            right
          >
            <template #button-content>
              <feather-icon
                icon="FolderIcon"
                size="17"
                class="align-middle text-body"
              />
            </template>

            <b-dropdown-item @click="moveSelectedEmailsToFolder('draft')">
              <feather-icon icon="Edit2Icon" />
              <span class="align-middle ml-50">Draft</span>
            </b-dropdown-item>

            <b-dropdown-item @click="moveSelectedEmailsToFolder('spam')">
              <feather-icon icon="InfoIcon" />
              <span class="align-middle ml-50">Spam</span>
            </b-dropdown-item>

            <b-dropdown-item
              v-show="$route.params.folder !== 'trash'"
              @click="moveSelectedEmailsToFolder('trash')"
            >
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Trash</span>
            </b-dropdown-item>
          </b-dropdown>

          <!-- Update Mail Folder Dropdown -->
          <b-dropdown
            variant="link"
            no-caret
            toggle-class="p-0"
            class="ml-1"
            right
          >
            <template #button-content>
              <feather-icon
                icon="TagIcon"
                size="17"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item @click="updateSelectedEmailsLabel('personal')">
              <span class="mr-50 bullet bullet-success bullet-sm" />
              <span>Personal</span>
            </b-dropdown-item>
            <b-dropdown-item @click="updateSelectedEmailsLabel('company')">
              <span class="mr-50 bullet bullet-primary bullet-sm" />
              <span>Company</span>
            </b-dropdown-item>
            <b-dropdown-item @click="updateSelectedEmailsLabel('important')">
              <span class="mr-50 bullet bullet-warning bullet-sm" />
              <span>Important</span>
            </b-dropdown-item>
            <b-dropdown-item @click="updateSelectedEmailsLabel('private')">
              <span class="mr-50 bullet bullet-danger bullet-sm" />
              <span>Private</span>
            </b-dropdown-item>
          </b-dropdown>

          <feather-icon
            icon="MailIcon"
            size="17"
            class="cursor-pointer ml-1"
            @click="markSelectedEmailsAsUnread"
          />

          <feather-icon
            v-show="$route.params.folder !== 'trash'"
            icon="TrashIcon"
            size="17"
            class="cursor-pointer ml-1"
            @click="moveSelectedEmailsToFolder('trash')"
          />

        </div>
      </div>

      <!-- Emails List -->
      <vue-perfect-scrollbar
        :settings="perfectScrollbarSettings"
        class="email-user-list scroll-area"
      >
        <ul class="email-media-list">
          <b-media
            v-for="email in emails"
            :key="email.id"
            tag="li"
            no-body
            :class="{ 'mail-read': email.isRead }"
            @click="updateEmailViewData(email)"
          >

            <b-media-aside class="media-left mr-50">
              <b-avatar
                class="avatar"
                size="40"
                variant="primary"
                :src="email.from.avatar"
              />
              <div class="user-action">
                <b-form-checkbox
                  :checked="selectedEmails.includes(email.id)"
                  @change="toggleSelectedMail(email.id)"
                  @click.native.stop
                />
                <div class="email-favorite">
                  <feather-icon
                    icon="StarIcon"
                    size="17"
                    :class="{ 'text-warning fill-current': email.isStarred }"
                    @click.stop="toggleStarred(email)"
                  />
                </div>
              </div>
            </b-media-aside>

            <b-media-body>
              <div class="mail-details">
                <div class="mail-items">
                  <h5 class="mb-25">
                    {{ email.from.name }}
                  </h5>
                  <span class="text-truncate">{{ email.subject }}</span>
                </div>
                <div class="mail-meta-item">
                  <feather-icon
                    v-if="email.attachments.length"
                    icon="PaperclipIcon"
                  />
                  <span
                    v-for="label in email.labels"
                    :key="label"
                    class="mx-50 bullet bullet-sm"
                    :class="`bullet-${resolveLabelColor(label)}`"
                  />
                  <span class="mail-date">{{ formatDateToMonthShort(email.time, { hour: 'numeric', minute: 'numeric', }) }}</span>
                </div>
              </div>

              <div class="mail-message">
                <p class="text-truncate mb-0">
                  {{ filterTags(email.message) }}
                </p>
              </div>
            </b-media-body>
          </b-media>
        </ul>
        <div
          class="no-results"
          :class="{'show': !emails.length}"
        >
          <h5>No Items Found</h5>
        </div>
      </vue-perfect-scrollbar>
    </div>

    <!-- Email View/Detail -->
    <email-view
      :class="{'show': showEmailDetails}"
      :email-view-data="emailViewData"
      :opended-email-meta="opendedEmailMeta"
      @close-email-view="showEmailDetails = false"
      @move-email-to-folder="moveOpenEmailToFolder"
      @toggle-email-starred="toggleStarred(emailViewData)"
      @update-email-label="updateOpenEmailLabel"
      @mark-email-unread="markOpenEmailAsUnread"
      @change-opened-email="changeOpenedEmail"
    />

    <!-- Sidebar -->
    <portal to="content-renderer-sidebar-left">
      <email-left-sidebar
        :shall-show-email-compose-modal.sync="shallShowEmailComposeModal"
        :emails-meta="emailsMeta"
        :class="{'show': mqShallShowLeftSidebar}"
        @close-left-sidebar="mqShallShowLeftSidebar = false"
      />
    </portal>

    <!-- Compose Email Modal -->
    <email-compose v-model="shallShowEmailComposeModal" />
  </div>
</template>

<script>
import store from '@/store'
import {
  ref, onUnmounted, computed, watch,
  // ref, watch, computed, onUnmounted,
} from '@vue/composition-api'
import {
  BFormInput, BInputGroup, BInputGroupPrepend, BDropdown, BDropdownItem,
  BFormCheckbox, BMedia, BMediaAside, BMediaBody, BAvatar,
} from 'bootstrap-vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { filterTags, formatDateToMonthShort } from '@core/utils/filter'
import { useRouter } from '@core/utils/utils'
import { useResponsiveAppLeftSidebarVisibility } from '@core/comp-functions/ui/app'
import EmailLeftSidebar from './EmailLeftSidebar.vue'
import EmailView from './EmailView.vue'
import emailStoreModule from './emailStoreModule'
import useEmail from './useEmail'
import EmailCompose from './EmailCompose.vue'

export default {
  components: {
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BDropdown,
    BDropdownItem,
    BFormCheckbox,
    BMedia,
    BMediaAside,
    BMediaBody,
    BAvatar,

    // 3rd Party
    VuePerfectScrollbar,

    // App SFC
    EmailLeftSidebar,
    EmailView,
    EmailCompose,
  },
  setup() {
    const EMAIL_APP_STORE_MODULE_NAME = 'app-email'

    // Register module
    if (!store.hasModule(EMAIL_APP_STORE_MODULE_NAME)) store.registerModule(EMAIL_APP_STORE_MODULE_NAME, emailStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(EMAIL_APP_STORE_MODULE_NAME)) store.unregisterModule(EMAIL_APP_STORE_MODULE_NAME)
    })

    const { route, router } = useRouter()
    const { resolveLabelColor } = useEmail()

    // Route Params
    const routeParams = computed(() => route.value.params)
    watch(routeParams, () => {
      // eslint-disable-next-line no-use-before-define
      fetchEmails()
    })

    // Emails & EmailsMeta
    const emails = ref([])
    const emailsMeta = ref({})

    const perfectScrollbarSettings = {
      maxScrollbarLength: 150,
    }

    // Search Query
    const routeQuery = computed(() => route.value.query.q)
    const searchQuery = ref(routeQuery.value)
    watch(routeQuery, val => {
      searchQuery.value = val
    })
    // eslint-disable-next-line no-use-before-define
    watch(searchQuery, () => fetchEmails())
    const updateRouteQuery = val => {
      const currentRouteQuery = JSON.parse(JSON.stringify(route.value.query))

      if (val) currentRouteQuery.q = val
      else delete currentRouteQuery.q

      router.replace({ name: route.name, query: currentRouteQuery })
    }

    const fetchEmails = () => {
      store.dispatch('app-email/fetchEmails', {
        q: searchQuery.value,
        folder: router.currentRoute.params.folder || 'inbox',
        label: router.currentRoute.params.label,
      })
        .then(response => {
          emails.value = response.data.emails
          emailsMeta.value = response.data.emailsMeta
        })
    }

    fetchEmails()

    // ------------------------------------------------
    // Mail Selection
    // ------------------------------------------------
    const selectedEmails = ref([])
    const toggleSelectedMail = mailId => {
      const mailIndex = selectedEmails.value.indexOf(mailId)

      if (mailIndex === -1) selectedEmails.value.push(mailId)
      else selectedEmails.value.splice(mailIndex, 1)
    }
    const selectAllEmailCheckbox = computed(() => emails.value.length && (emails.value.length === selectedEmails.value.length))
    const isSelectAllEmailCheckboxIndeterminate = computed(() => Boolean(selectedEmails.value.length) && emails.value.length !== selectedEmails.value.length)
    const selectAllCheckboxUpdate = val => {
      selectedEmails.value = val ? emails.value.map(mail => mail.id) : []
    }
    // ? Watcher to reset selectedEmails is somewhere below due to watch dependecy fullfilment

    // ------------------------------------------------
    // Mail Actions
    // ------------------------------------------------
    const toggleStarred = email => {
      store.dispatch('app-email/updateEmail', {
        emailIds: [email.id],
        dataToUpdate: { isStarred: !email.isStarred },
      }).then(() => {
        // eslint-disable-next-line no-param-reassign
        email.isStarred = !email.isStarred
      })
    }

    const moveSelectedEmailsToFolder = folder => {
      store.dispatch('app-email/updateEmail', {
        emailIds: selectedEmails.value,
        dataToUpdate: { folder },
      })
        .then(() => { fetchEmails() })
        .finally(() => { selectedEmails.value = [] })
    }

    const updateSelectedEmailsLabel = label => {
      store.dispatch('app-email/updateEmailLabels', {
        emailIds: selectedEmails.value,
        label,
      })
        .then(() => { fetchEmails() })
        .finally(() => { selectedEmails.value = [] })
    }

    const markSelectedEmailsAsUnread = () => {
      store.dispatch('app-email/updateEmail', {
        emailIds: selectedEmails.value,
        dataToUpdate: { isRead: false },
      })
        .then(() => { fetchEmails() })
        .finally(() => { selectedEmails.value = [] })
    }

    // ------------------------------------------------
    // Email Details
    // ------------------------------------------------
    const showEmailDetails = ref(false)
    const emailViewData = ref({})
    const opendedEmailMeta = computed(() => {
      const openedEmailIndex = emails.value.findIndex(e => e.id === emailViewData.value.id)
      return {
        hasNextEmail: Boolean(emails.value[openedEmailIndex + 1]),
        hasPreviousEmail: Boolean(emails.value[openedEmailIndex - 1]),
      }
    })
    const updateEmailViewData = email => {
      // Mark email is read
      store.dispatch('app-email/updateEmail', {
        emailIds: [email.id],
        dataToUpdate: { isRead: true },
      })
        .then(() => {
          // If opened email is unread then decrease badge count for email meta based on email folder
          if (!email.isRead && (email.folder === 'inbox' || email.folder === 'spam')) {
            emailsMeta.value[email.folder] -= 1
          }

          // eslint-disable-next-line no-param-reassign
          email.isRead = true
        })
        .finally(() => {
          emailViewData.value = email
          showEmailDetails.value = true
        })
    }
    const moveOpenEmailToFolder = folder => {
      selectedEmails.value = [emailViewData.value.id]
      moveSelectedEmailsToFolder(folder)
      selectedEmails.value = []
      showEmailDetails.value = false
    }
    const updateOpenEmailLabel = label => {
      selectedEmails.value = [emailViewData.value.id]
      updateSelectedEmailsLabel(label)

      // Update label in opened email
      const labelIndex = emailViewData.value.labels.indexOf(label)
      if (labelIndex === -1) emailViewData.value.labels.push(label)
      else emailViewData.value.labels.splice(labelIndex, 1)

      selectedEmails.value = []
    }

    const markOpenEmailAsUnread = () => {
      selectedEmails.value = [emailViewData.value.id]
      markSelectedEmailsAsUnread()

      selectedEmails.value = []
      showEmailDetails.value = false
    }

    const changeOpenedEmail = dir => {
      const openedEmailIndex = emails.value.findIndex(e => e.id === emailViewData.value.id)
      const newEmailIndex = dir === 'previous' ? openedEmailIndex - 1 : openedEmailIndex + 1
      emailViewData.value = emails.value[newEmailIndex]
    }

    // * If someone clicks on filter while viewing detail => Close the email detail view
    watch(routeParams, () => {
      showEmailDetails.value = false
    })

    // * Watcher to reset selectedEmails
    // ? You can also use showEmailDetails (instead of `emailViewData`) but it will trigger execution twice in this case
    // eslint-disable-next-line no-use-before-define
    watch([emailViewData, routeParams], () => {
      selectedEmails.value = []
    })

    // Compose
    const shallShowEmailComposeModal = ref(false)

    // Left Sidebar Responsiveness
    const { mqShallShowLeftSidebar } = useResponsiveAppLeftSidebarVisibility()

    return {
      // UI
      perfectScrollbarSettings,

      // Emails & EmailsMeta
      emails,
      emailsMeta,

      // Mail Selection
      selectAllEmailCheckbox,
      isSelectAllEmailCheckboxIndeterminate,
      selectedEmails,
      toggleSelectedMail,
      selectAllCheckboxUpdate,

      // Mail Actions
      toggleStarred,
      moveSelectedEmailsToFolder,
      updateSelectedEmailsLabel,
      markSelectedEmailsAsUnread,

      // Email Details
      showEmailDetails,
      emailViewData,
      opendedEmailMeta,
      updateEmailViewData,
      moveOpenEmailToFolder,
      updateOpenEmailLabel,
      markOpenEmailAsUnread,
      changeOpenedEmail,

      // Search Query
      searchQuery,
      updateRouteQuery,

      // UI Filters
      filterTags,
      formatDateToMonthShort,

      // useEmail
      resolveLabelColor,

      // Compose
      shallShowEmailComposeModal,

      // Left Sidebar Responsiveness
      mqShallShowLeftSidebar,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">
@import "~@core/scss/base/pages/app-email.scss";
</style>
