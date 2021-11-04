<template>
  <b-card-code title="Providing an array of pages">
    <b-card-text>
      <span>Rather than using </span>
      <code>number-of-pages</code>
      <span> to auto generate page links, you can pass an array of links via the </span>
      <code>pages</code>
      <span> prop.</span>
    </b-card-text>

    <b-pagination-nav
      :pages="pages1"
      use-router
    />
    <b-pagination-nav
      :pages="pages2"
      use-router
      class="mt-2"
    />
    <b-pagination-nav
      :pages="pages3"
      use-router
      class="mt-2"
    />

    <template #code>
      {{ codeArray }}
    </template>
  </b-card-code>
</template>

<script>
import { BPaginationNav, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeArray } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BPaginationNav,
  },
  data() {
    return {
      codeArray,
      // Simple array of strings
      pages1: ['?page=1', '?page=2', '?page=3'],
      // Array of objects with string links
      pages2: [
        { link: '?page=1', text: 'One' },
        { link: '?page=2', text: 'Two' },
        { link: '?page=3', text: 'Three' },
      ],
      // Array of objects with router `to` locations
      pages3: [
        { link: { query: { page: 1 } }, text: 'Page 1' },
        { link: { query: { page: 2 } }, text: 'Page 2' },
        { link: { query: { page: 3 } }, text: 'Page 3' },
      ],
    }
  },
}
</script>
