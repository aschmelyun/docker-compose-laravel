<template>
  <li class="nav-item nav-search">

    <!-- Icon -->
    <a
      href="javascript:void(0)"
      class="nav-link nav-link-search"
      @click="showSearchBar = true"
    >
      <feather-icon
        icon="SearchIcon"
        size="21"
      />
    </a>

    <!-- Input -->
    <div
      class="search-input"
      :class="{'open': showSearchBar}"
    >
      <div class="search-input-icon">
        <feather-icon icon="SearchIcon" />
      </div>
      <!-- <input type="text" placeholder="Explore Vuexy...." class="form-control-input"> -->
      <!-- @keyup.esc="escPressed" -->
      <!-- @keyup.enter="suggestionSelected" -->
      <b-form-input
        v-if="showSearchBar"
        v-model="searchQuery"
        placeholder="Explore Vuexy"
        autofocus
        autocomplete="off"
        @keyup.up="increaseIndex(false)"
        @keyup.down="increaseIndex"
        @keyup.esc="showSearchBar = false; resetsearchQuery()"
        @keyup.enter="suggestionSelected"
        @blur.stop="showSearchBar = false; resetsearchQuery()"
      />
      <div
        class="search-input-close"
        @click="showSearchBar = false; resetsearchQuery()"
      >
        <feather-icon icon="XIcon" />
      </div>

      <!-- Suggestions List -->
      <vue-perfect-scrollbar
        :settings="perfectScrollbarSettings"
        class="search-list search-list-main scroll-area overflow-hidden"
        :class="{'show': searchQuery}"
        tagname="ul"
      >
        <li
          v-for="(suggestion_list, grp_name, grp_index) in filteredData"
          :key="grp_index"
          class="suggestions-groups-list"
        >

          <!-- Group Header -->
          <p class="suggestion-group-title">
            <span>
              {{ title(grp_name) }}
            </span>
          </p>

          <!-- Suggestion List of each group -->
          <ul>
            <li
              v-for="(suggestion, index) in suggestion_list"
              :key="index"
              class="suggestion-group-suggestion cursor-pointer"
              :class="{'suggestion-current-selected': currentSelected === `${grp_index}.${index}`}"
              @mouseenter="currentSelected = `${grp_index}.${index}`"
              @mousedown.prevent="suggestionSelected(grp_name, suggestion)"
            >
              <b-link
                v-if="grp_name === 'pages'"
                class="p-0"
              >
                <feather-icon
                  :icon="suggestion.icon"
                  class="mr-75"
                />
                <span class="align-middle">{{ suggestion.title }}</span>
              </b-link>
              <template v-else-if="grp_name === 'files'">
                <div class="d-flex align-items-center">
                  <b-img
                    :src="suggestion.icon"
                    class="mr-1"
                    height="32"
                  />
                  <div>
                    <p>{{ suggestion.file_name }}</p>
                    <small>by {{ suggestion.from }}</small>
                  </div>
                  <small class="ml-auto">{{ suggestion.size }}</small>
                </div>
              </template>
              <template v-else-if="grp_name === 'contacts'">
                <div class="d-flex align-items-center">
                  <b-avatar
                    :src="suggestion.img"
                    class="mr-1"
                    size="32"
                  />
                  <div>
                    <p>{{ suggestion.name }}</p>
                    <small>{{ suggestion.email }}</small>
                  </div>
                  <small class="ml-auto">{{ suggestion.time }}</small>
                </div>
              </template>
            </li>

            <li
              v-if="!suggestion_list.length && searchQuery"
              class="suggestion-group-suggestion no-results"
            >
              <p>No Results Found.</p>
            </li>
          </ul>
        </li>
      </vue-perfect-scrollbar>
    </div>
  </li>
</template>

<script>
import {
  BFormInput, BLink, BImg, BAvatar,
} from 'bootstrap-vue'
import { ref, watch } from '@vue/composition-api'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import useAutoSuggest from '@core/components/app-auto-suggest/useAutoSuggest'
import { title } from '@core/utils/filter'
import router from '@/router'
import store from '@/store'
import searchAndBookmarkData from '../search-and-bookmark-data'

export default {
  components: {
    BFormInput,
    BLink,
    BImg,
    BAvatar,
    VuePerfectScrollbar,
  },
  setup() {
    const showSearchBar = ref(false)

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
    }

    const suggestionSelected = (grpName, suggestion) => {
      // If parameter is not provided => Use current selected
      if (!suggestion) {
        // If currentSelected value is -1 => No value/item is selected (Prevent Errors)
        /* eslint-disable no-use-before-define, no-param-reassign */
        if (currentSelected.value !== -1) {
          /* eslint-disable no-use-before-define, no-param-reassign */
          const [grpIndex, itemIndex] = currentSelected.value.split('.')
          grpName = Object.keys(filteredData.value)[grpIndex]
          suggestion = filteredData.value[grpName][itemIndex]
          /* eslint-enable */
        }
      }
      if (grpName === 'pages') router.push(suggestion.route).catch(() => {})
      // eslint-disable-next-line no-use-before-define
      resetsearchQuery()
      showSearchBar.value = false
    }

    const {
      searchQuery,
      resetsearchQuery,
      filteredData,
    } = useAutoSuggest({ data: searchAndBookmarkData, searchLimit: 4 })

    watch(searchQuery, val => {
      store.commit('app/TOGGLE_OVERLAY', Boolean(val))
    })

    const currentSelected = ref(-1)
    watch(filteredData, val => {
      if (!Object.values(val).some(obj => obj.length)) {
        currentSelected.value = -1
      } else {
        // Auto Select first item if it's not item-404
        let grpIndex = null

        // eslint-disable-next-line no-restricted-syntax
        for (const [index, grpSuggestions] of Object.values(val).entries()) {
          if (grpSuggestions.length) {
            grpIndex = index
            break
          }
        }

        if (grpIndex !== null) currentSelected.value = `${grpIndex}.0`
      }
    })

    const increaseIndex = (val = true) => {
      /* eslint-disable no-lonely-if, no-plusplus */

      // If there's no matching items
      if (!Object.values(filteredData.value).some(grpItems => grpItems.length)) return

      const [grpIndex, itemIndex] = currentSelected.value.split('.')

      const grpArr = Object.entries(filteredData.value)
      const activeGrpTotalItems = grpArr[grpIndex][1].length

      if (val) {
        // If active item is not of last item in grp
        if (activeGrpTotalItems - 1 > itemIndex) {
          currentSelected.value = `${grpIndex}.${Number(itemIndex) + 1}`

        // If active item grp is not last in grp list
        } else if (grpIndex < grpArr.length - 1) {
          for (let i = Number(grpIndex) + 1; i < grpArr.length; i++) {
            // If navigating group have items => Then move in that group
            if (grpArr[i][1].length > 0) {
              currentSelected.value = `${Number(i)}.0`
              break
            }
          }
        }
      } else {
        // If active item is not of first item in grp
        if (Number(itemIndex)) {
          currentSelected.value = `${grpIndex}.${Number(itemIndex) - 1}`

        // If active item grp  is not first in grp list
        } else if (Number(grpIndex)) {
          for (let i = Number(grpIndex) - 1; i >= 0; i--) {
            // If navigating group have items => Then move in that group
            if (grpArr[i][1].length > 0) {
              currentSelected.value = `${i}.${grpArr[i][1].length - 1}`
              break
            }
          }
        }
      }
      /* eslint-enable no-lonely-if, no-plusplus */
    }

    return {
      showSearchBar,
      perfectScrollbarSettings,
      searchAndBookmarkData,
      title,
      suggestionSelected,
      currentSelected,
      increaseIndex,

      // AutoSuggest
      searchQuery,
      resetsearchQuery,
      filteredData,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/components/variables-dark';

ul
{
  list-style: none;
  padding: 0;
  margin: 0;
}
p {
  margin: 0;
}

/* .app-auto-suggest {
  position: relative;
}

.auto-suggest-suggestions-list {
  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);
  border-radius: 6px;
  position: absolute;
  top: calc(100% + 1rem);
  background-color: white;
  width: 100%;
} */

.suggestion-group-title {
  font-weight: 500;
  padding: .75rem 1rem .25rem;
}

.suggestion-group-suggestion {
  padding: .75rem 1rem
}

.suggestion-current-selected {
  background-color: $body-bg;

  .dark-layout & {
    background-color: $theme-dark-body-bg;
  }
}
</style>
