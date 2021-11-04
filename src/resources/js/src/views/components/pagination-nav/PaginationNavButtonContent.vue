<template>
  <b-card-code title="Button content">
    <b-card-text>
      <code>&lt;b-pagination-nav&gt;</code>
      <span> supports several props/slots that allow you to customize the appearance.</span>
    </b-card-text>

    <!-- Use text in props -->
    <b-pagination-nav
      number-of-pages="10"
      base-url="#"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    />

    <!-- Use emojis in props -->
    <b-pagination-nav
      number-of-pages="10"
      base-url="#"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      last-text="⏭"
      class="mt-2"
    />

    <!-- Use HTML and sub-components in slots -->
    <b-pagination-nav
      number-of-pages="10"
      base-url="#"
      class="mt-2"
    >
      <template #first-text>
        <span class="text-success">First</span>
      </template>
      <template #prev-text>
        <span class="text-danger">Prev</span>
      </template>
      <template #next-text>
        <span class="text-warning">Next</span>
      </template>
      <template #last-text>
        <span class="text-info">Last</span>
      </template>
      <template #ellipsis-text>
        <div>
          <b-spinner
            small
            type="grow"
          />
          <b-spinner
            small
            type="grow"
          />
        </div>
      </template>
      <template #page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </b-pagination-nav>

    <template #code>
      {{ codeButtonContent }}
    </template>
  </b-card-code>
</template>

<script>
import { BPaginationNav, BSpinner, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeButtonContent } from './code'

export default {
  components: {
    BCardCode,
    BPaginationNav,
    BCardText,
    BSpinner,
  },
  data() {
    return {
      codeButtonContent,
    }
  },
}
</script>
