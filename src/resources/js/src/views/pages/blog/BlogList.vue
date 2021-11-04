<template>
  <content-with-sidebar class="blog-wrapper">

    <!-- blogs -->
    <b-row class="blog-list-wrapper">
      <b-col
        v-for="blog in blogList"
        :key="blog.img"
        md="6"
      >
        <b-card
          tag="article"
          no-body
        >
          <b-link :to="{ name: 'pages-blog-detail', params: { id: blog.id } }">
            <b-img
              :src="blog.img"
              :alt="blog.img.slice(5)"
              class="card-img-top"
            />
          </b-link>
          <b-card-body>
            <b-card-title>
              <b-link
                :to="{ name: 'pages-blog-detail', params: { id: blog.id } }"
                class="blog-title-truncate text-body-heading"
              >
                {{ blog.title }}
              </b-link>
            </b-card-title>
            <b-media no-body>
              <b-media-aside
                vertical-align="center"
                class="mr-50"
              >
                <b-avatar
                  href="javascript:void(0)"
                  size="24"
                  :src="blog.avatar"
                />
              </b-media-aside>
              <b-media-body>
                <small class="text-muted mr-50">by</small>
                <small>
                  <b-link class="text-body">{{ blog.userFullName }}</b-link>
                </small>
                <span class="text-muted ml-75 mr-50">|</span>
                <small class="text-muted">{{ blog.blogPosted }}</small>
              </b-media-body>
            </b-media>
            <div class="my-1 py-25">
              <b-link
                v-for="(tag,index) in blog.tags"
                :key="index"
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
            <b-card-text class="blog-content-truncate">
              {{ blog.excerpt }}
            </b-card-text>
            <hr>
            <div class="d-flex justify-content-between align-items-center">
              <b-link :to="{ path: `/pages/blog/${blog.id}#blogComment`}">
                <div class="d-flex align-items-center text-body">
                  <feather-icon
                    icon="MessageSquareIcon"
                    class="mr-50"
                  />
                  <span class="font-weight-bold">{{ kFormatter(blog.comment) }} Comments</span>
                </div>
              </b-link>
              <b-link
                :to="{ name: 'pages-blog-detail', params: { id: blog.id } }"
                class="font-weight-bold"
              >
                Read More
              </b-link>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col cols="12">
        <!-- pagination -->
        <div class="my-2">
          <b-pagination
            v-model="currentPage"
            align="center"
            :total-rows="rows"
            first-number
            last-number
            prev-class="prev-item"
            next-class="next-item"
          >
            <template #prev-text>
              <feather-icon
                icon="ChevronLeftIcon"
                size="18"
              />
            </template>
            <template #next-text>
              <feather-icon
                icon="ChevronRightIcon"
                size="18"
              />
            </template>
          </b-pagination>
        </div>
      </b-col>
    </b-row>

    <!--/ blogs -->

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
            <b-link :to="{ name: 'pages-blog-detail', params:{ id :recentpost.id } }">
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
              <b-link
                :to="{ name: 'pages-blog-detail', params:{ id :recentpost.id } }"
                class="text-body-heading"
              >
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
    <!--/ sidebar -->
  </content-with-sidebar>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BFormInput,
  BCardText,
  BCardTitle,
  BMedia,
  BAvatar,
  BMediaAside,
  BMediaBody,
  BImg,
  BCardBody,
  BLink,
  BBadge,
  BFormGroup,
  BInputGroup,
  BInputGroupAppend,
  BPagination,
} from 'bootstrap-vue'
import { kFormatter } from '@core/utils/filter'
import ContentWithSidebar from '@core/layouts/components/content-with-sidebar/ContentWithSidebar.vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BFormInput,
    BCardText,
    BCardBody,
    BCardTitle,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    BLink,
    BBadge,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BImg,
    BPagination,
    ContentWithSidebar,
  },
  data() {
    return {
      search_query: '',
      blogList: [],
      blogSidebar: {},
      currentPage: 1,
      perPage: 1,
      rows: 140,
    }
  },
  created() {
    this.$http.get('/blog/list/data').then(res => {
      this.blogList = res.data
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
