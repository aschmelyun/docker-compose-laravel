<template>
  <div
    id="knowledge-base-article"
  >
    <b-row>

      <!-- related question -->
      <b-col
        lg="3"
        md="5"
        order="2"
        order-md="1"
      >
        <b-card>
          <h6 class="kb-title">
            <feather-icon
              icon="InfoIcon"
              size="20"
              class="mr-50"
            />
            Related Questions
          </h6>
          <b-list-group class="list-group-circle mt-1">
            <b-list-group-item
              v-for="(que,index) in kb_question.relatedQuestions"
              :key="index"
              href="javascript:void(0)"
              class="text-body"
            >
              {{ que.question }}
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
      <!--/ related question -->

      <b-col
        lg="9"
        md="7"
        order="1"
        order-md="2"
      >
        <b-card>

          <!-- Title -->
          <b-card-title class="mb-1">
            <feather-icon
              icon="SmartphoneIcon"
              size="21"
            />

            {{ kb_question.title }}
          </b-card-title>
          <b-card-text class="mb-2">
            Last updated on {{ kb_question.lastUpdated }}
          </b-card-text>

          <!-- Content -->
          <!-- eslint-disable vue/no-v-html -->
          <div
            class="question-content"
            v-html="kb_question.content"
          />
          <!-- eslint-enable -->
        </b-card>
      </b-col>
    </b-row>

  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { BRow, BCol, BCard, BListGroup, BListGroupItem, BCardText, BCardTitle } from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BListGroup,
    BCardText,
    BCardTitle,
    BListGroupItem,
  },
  data() {
    return {
      kb_question: {},
    }
  },
  created() {
    // ! You have to update the below API call according to route parameter
    // * We are using fixed API call for all categories for demo purposes
    this.$http.get('/kb/data/question').then(res => {
      this.kb_question = res.data
    })
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-knowledge-base.scss';
</style>
