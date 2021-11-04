<template>
  <b-card-code title="Basic">
    <b-card-text>
      <code>&lt;b-pagination-nav&gt;</code>
      <span> is a custom input component that provides navigational pagination. The total number of pages set with the </span>
      <code>number-of-pages</code>
      <span> prop.</span>
    </b-card-text>

    <b-pagination-nav
      :link-gen="linkGen"
      :number-of-pages="10"
      use-router
      class="mb-0"
    />

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import { BPaginationNav, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BPaginationNav,
  },
  data() {
    return {
      codeBasic,
    }
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
  },
}
</script>
