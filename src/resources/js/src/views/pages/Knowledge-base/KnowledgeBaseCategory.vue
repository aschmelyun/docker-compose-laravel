<template>
  <div>
    <!-- search input -->
    <section id="kb-category-search">
      <b-card
        no-body
        class="knowledge-base-bg text-center"
        :style="{backgroundImage: `url(${require('@/assets/images/banner/banner.png')})`}"
      >
        <b-card-body class="card-body">
          <h2 class="text-primary">
            Dedicated Source Used on Website
          </h2>
          <b-card-text class="mb-2">
            <span>Popular searches: </span>
            <span class="font-weight-bolder">Sales automation, Email marketing</span>
          </b-card-text>

          <!-- form -->
          <b-form class="kb-search-input">
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="SearchIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="searchbar"
                v-model="knowledgeBaseSearchQuery"
                placeholder="Ask a question...."
              />
            </b-input-group>
          </b-form>
          <!-- form -->
        </b-card-body>
      </b-card>
    </section>
    <!--/ search input -->

    <div id="knowledge-base-category">
      <b-row class="match-height">
        <b-col
          v-for="(data,index) in filteredKB"
          :key="index"
          md="4"
          sm="6"
        >
          <b-card>
            <h6 class="kb-title">
              <feather-icon
                :icon="data.icon"
                size="20"
                class="mr-50"
                :class="data.iconColor"
              />{{ data.title }} ({{ data.questions.length }})
            </h6>
            <b-list-group class="list-group-circle mt-2">
              <b-list-group-item
                v-for="(que) in data.questions"
                :key="que.question"
                class="text-body"
                :to="{ name: 'pages-knowledge-base-question', params: { category: $route.params.category, slug: que.slug } }"
              >
                {{ que.question }}
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>

        <!-- no result found -->
        <b-col
          v-show="!filteredKB.length"
          cols="12"
          class="text-center"
        >
          <h4 class="mt-4">
            Search result not found!!
          </h4>
        </b-col>
        <!--/ no result found -->
      </b-row>
    </div>
  </div>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BListGroup,
  BListGroupItem,
  BCardBody,
  BCardText,
  BForm,
  BInputGroup,
  BInputGroupPrepend,
  BFormInput,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BListGroup,
    BListGroupItem,
    BCardBody,
    BCardText,
    BForm,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput,
  },
  data() {
    return {
      knowledgeBaseSearchQuery: '',
      kb: [],
    }
  },
  computed: {
    filteredKB() {
      const knowledgeBaseSearchQueryLower = this.knowledgeBaseSearchQuery.toLowerCase()
      return this.kb.filter(
        item =>
          // eslint-disable-next-line implicit-arrow-linebreak, operator-linebreak
          item.title.toLowerCase().includes(knowledgeBaseSearchQueryLower) ||
          item.questions.filter(queObj => queObj.question.toLowerCase().includes(knowledgeBaseSearchQueryLower)).length,
      )
    },
  },
  created() {
    // ! You have to update the below API call according to route parameter
    // * We are using fixed API call for all categories for demo purposes
    this.$http.get('/kb/data/category').then(res => {
      this.kb = res.data
    })
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-knowledge-base.scss';
</style>
