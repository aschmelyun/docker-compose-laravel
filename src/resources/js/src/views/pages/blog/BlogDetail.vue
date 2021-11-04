<template>
  <content-with-sidebar
    v-if="Object.keys(blogDetail).length"
    class="cws-container cws-sidebar-right blog-wrapper"
  >

    <!-- content -->
    <div class="blog-detail-wrapper">
      <b-row>
        <!-- blogs -->
        <b-col cols="12">
          <b-card
            :img-src="blogDetail.blog.img"
            img-top
            img-alt="Blog Detail Pic"
            :title="blogDetail.blog.title"
          >
            <b-media no-body>
              <b-media-aside
                vertical-align="center"
                class="mr-50"
              >
                <b-avatar
                  href="javascript:void(0)"
                  size="24"
                  :src="blogDetail.blog.avatar"
                />
              </b-media-aside>
              <b-media-body>
                <small class="text-muted mr-50">by</small>
                <small>
                  <b-link class="text-body">{{ blogDetail.blog.userFullName }}</b-link>
                </small>
                <span class="text-muted ml-75 mr-50">|</span>
                <small class="text-muted">{{ blogDetail.blog.createdTime }}</small>
              </b-media-body>
            </b-media>
            <div class="my-1 py-25">
              <b-link
                v-for="tag in blogDetail.blog.tags"
                :key="tag"
              >
                <b-badge
                  pill
                  class="mr-75"
                  :variant="tagsColor(tag)"
                >
                  {{ tag }}
                </b-badge>
              </b-link>
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="blog-content"
              v-html="blogDetail.blog.content"
            />

            <!-- user commnets -->
            <b-media
              v-for="user in blogDetail.blog.UserComment"
              :key="user.avatar"
              no-body
            >
              <b-media-aside>
                <b-avatar
                  size="60"
                  :src="user.avatar"
                />
              </b-media-aside>
              <b-media-body>
                <h6 class="font-weight-bolder">
                  {{ user.fullName }}
                </h6>
                <b-card-text>
                  {{ user.comment }}
                </b-card-text>
              </b-media-body>
            </b-media>
            <!-- eslint-enable -->
            <hr class="my-2">

            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center mr-1">
                  <b-link class="mr-50">
                    <feather-icon
                      icon="MessageSquareIcon"
                      size="21"
                      class="text-body"
                    />
                  </b-link>
                  <b-link>
                    <div class="text-body">
                      {{ kFormatter(blogDetail.blog.comments) }}
                    </div>
                  </b-link>
                </div>
                <div class="d-flex align-items-center">
                  <b-link class="mr-50">
                    <feather-icon
                      size="21"
                      icon="BookmarkIcon"
                      class="text-body"
                    />
                  </b-link>
                  <b-link>
                    <div class="text-body">
                      {{ kFormatter(blogDetail.blog.bookmarked) }}
                    </div>
                  </b-link>
                </div>
              </div>

              <!-- dropdown -->
              <div class="blog-detail-share">
                <b-dropdown
                  variant="link"
                  toggle-class="p-0"
                  no-caret
                  right
                >
                  <template #button-content>
                    <feather-icon
                      size="21"
                      icon="Share2Icon"
                      class="text-body"
                    />
                  </template>
                  <b-dropdown-item
                    v-for="icon in socialShareIcons"
                    :key="icon"
                    href="#"
                  >
                    <feather-icon
                      :icon="icon"
                      size="18"
                    />
                  </b-dropdown-item>
                </b-dropdown>
              </div>
              <!--/ dropdown -->
            </div>
          </b-card>
        </b-col>
        <!--/ blogs -->

        <!-- blog comment -->
        <b-col
          id="blogComment"
          cols="12"
          class="mt-2"
        >
          <h6 class="section-label">
            Comment
          </h6>
          <b-card
            v-for="(comment,index) in blogDetail.comments"
            :key="index"
          >
            <b-media no-body>
              <b-media-aside class="mr-75">
                <b-avatar
                  :src="comment.avatar"
                  size="38"
                />
              </b-media-aside>
              <b-media-body>
                <h6 class="font-weight-bolder mb-25">
                  {{ comment.userFullName }}
                </h6>
                <b-card-text>{{ comment.commentedAt }}</b-card-text>
                <b-card-text>
                  {{ comment.commentText }}
                </b-card-text>
                <b-link>
                  <div class="d-inline-flex align-items-center">
                    <feather-icon
                      icon="CornerUpLeftIcon"
                      size="18"
                      class="mr-50"
                    />
                    <span>Reply</span>
                  </div>
                </b-link>
              </b-media-body>
            </b-media>
          </b-card>
        </b-col>
        <!--/ blog comment -->

        <!-- Leave a Blog Comment -->
        <b-col
          cols="12"
          class="mt-2"
        >
          <h6 class="section-label">
            Leave a Comment
          </h6>
          <b-card>
            <b-form>
              <b-row>
                <b-col sm="6">
                  <b-form-group class="mb-2">
                    <b-form-input
                      name="name"
                      placeholder="Name"
                    />
                  </b-form-group>
                </b-col>
                <b-col sm="6">
                  <b-form-group class="mb-2">
                    <b-form-input
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                  </b-form-group>
                </b-col>
                <b-col sm="6">
                  <b-form-group class="mb-2">
                    <b-form-input
                      name="website"
                      placeholder="Website"
                    />
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group class="mb-2">
                    <b-form-textarea
                      name="textarea"
                      rows="4"
                      placeholder="Website"
                    />
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="commentCheckmark"
                    name="checkbox-1"
                    class="mb-2"
                  >
                    Save my name, email, and website in this browser for the next time I comment.
                  </b-form-checkbox>
                </b-col>
                <b-col cols="12">
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                  >
                    Post Comment
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
        <!--/ Leave a Blog Comment -->
      </b-row>
      <!--/ blogs -->
    </div>
    <!--/ content -->

    <!-- sidebar -->
    <div
      slot="sidebar"
      class="blog-sidebar py-2 py-lg-0"
    >
      <!-- input search -->
      <b-form-group class="blog-search">
        <b-input-group class="input-group-merge">
          <b-form-input
            id="search-input"
            v-model="search_query"
            placeholder="Search here"
          />
          <b-input-group-append
            class="cursor-pointer"
            is-text
          >
            <feather-icon
              icon="SearchIcon"
            />
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
      <!--/ input search -->

      <!-- recent posts -->
      <div class="blog-recent-posts mt-3">
        <h6 class="section-label mb-75">
          Recent Posts
        </h6>
        <b-media
          v-for="(recentpost,index) in blogSidebar.recentPosts"
          :key="recentpost.img"
          no-body
          :class="index? 'mt-2':''"
        >
          <b-media-aside class="mr-2">
            <b-link>
              <b-img
                :src="recentpost.img"
                :alt="recentpost.img.slice(6)"
                width="100"
                rounded
                height="70"
              />
            </b-link>
          </b-media-aside>
          <b-media-body>
            <h6 class="blog-recent-post-title">
              <b-link class="text-body-heading">
                {{ recentpost.title }}
              </b-link>
            </h6>
            <span class="text-muted mb-0">
              {{ recentpost.createdTime }}
            </span>
          </b-media-body>
        </b-media>
      </div>
      <!--/ recent posts -->

      <!-- categories -->
      <div class="blog-categories mt-3">
        <h6 class="section-label mb-1">
          Categories
        </h6>

        <div
          v-for="category in blogSidebar.categories"
          :key="category.icon"
          class="d-flex justify-content-start align-items-center mb-75"
        >
          <b-link>
            <b-avatar
              rounded
              size="32"
              :variant="tagsColor(category.category)"
              class="mr-75"
            >
              <feather-icon
                :icon="category.icon"
                size="16"
              />
            </b-avatar>
          </b-link>
          <b-link>
            <div class="blog-category-title text-body">
              {{ category.category }}
            </div>
          </b-link>
        </div>
      </div>
      <!--/ categories -->
    </div>
  </content-with-sidebar>
</template>

<script>
import {
  BFormInput,
  BMedia,
  BAvatar,
  BMediaAside,
  BMediaBody,
  BImg,
  BLink,
  BFormGroup,
  BInputGroup,
  BInputGroupAppend,
  BCard,
  BRow,
  BCol,
  BBadge,
  BCardText,
  BDropdown,
  BDropdownItem,
  BForm,
  BFormTextarea,
  BFormCheckbox,
  BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { kFormatter } from '@core/utils/filter'
import ContentWithSidebar from '@core/layouts/components/content-with-sidebar/ContentWithSidebar.vue'

export default {
  components: {
    BFormInput,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    BLink,
    BCard,
    BRow,
    BCol,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BImg,
    BBadge,
    BCardText,
    BDropdown,
    BForm,
    BDropdownItem,
    BFormTextarea,
    BFormCheckbox,
    BButton,
    ContentWithSidebar,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      search_query: '',
      commentCheckmark: '',
      blogDetail: [],
      blogSidebar: {},
      socialShareIcons: ['GithubIcon', 'GitlabIcon', 'FacebookIcon', 'TwitterIcon', 'LinkedinIcon'],
    }
  },
  created() {
    this.$http.get('/blog/list/data/detail').then(res => {
      this.blogDetail = res.data
    })
    this.$http.get('/blog/list/data/sidebar').then(res => {
      this.blogSidebar = res.data
    })
  },
  methods: {
    kFormatter,
    tagsColor(tag) {
      if (tag === 'Quote') return 'light-info'
      if (tag === 'Gaming') return 'light-danger'
      if (tag === 'Fashion') return 'light-primary'
      if (tag === 'Video') return 'light-warning'
      if (tag === 'Food') return 'light-success'
      return 'light-primary'
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-blog.scss';
</style>
