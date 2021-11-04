<template>
  <b-card-code title="Page number generation">
    <b-card-text>
      <span>By default, </span>
      <code>&lt;b-pagination-nav&gt;</code>
      <span> renders page numbers (1-N) in the page link buttons. You can override this behaviour by supplying a function reference to the </span>
      <code>page-gen</code>
      <span> property.</span>
    </b-card-text>

    <b-pagination-nav
      :link-gen="linkGen"
      :page-gen="pageGen"
      :number-of-pages="links.length"
    />

    <template #code>
      {{ codeNumberGen }}
    </template>
  </b-card-code>
</template>

<script>
import { BPaginationNav, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeNumberGen } from './code'

export default {
  components: {
    BCardCode,
    BPaginationNav,
    BCardText,
  },
  data() {
    return {
      links: ['#foo', '#bar', '#baz', '#faz'],
      codeNumberGen,
    }
  },
  methods: {
    linkGen(pageNum) {
      return this.links[pageNum - 1]
    },
    pageGen(pageNum) {
      return this.links[pageNum - 1].slice(1)
    },
  },
}
</script>
