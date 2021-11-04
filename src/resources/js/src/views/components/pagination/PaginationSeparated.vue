<template>
  <b-card-code title="Separated">
    <b-card-text>
      <span>To make space between seprated icons of pagination use </span>
      <code>.prev-item</code>
      <span> class for the </span>
      <code>prev-class</code>
      <span> prop and </span>
      <code>.next-item</code>
      <span> for the </span>
      <code>next-class</code>
      <span> prop.</span>
    </b-card-text>

    <div class="demo-spacing-0">
      <b-pagination
        v-model="currentPage"
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

    <template #code>
      {{ codeSeparated }}
    </template>
  </b-card-code>
</template>

<script>
import { BPagination, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeSeparated } from './code'

export default {
  components: {
    BCardCode,
    BPagination,
    BCardText,
  },
  data() {
    return {
      codeSeparated,
      currentPage: 1,
      perPage: 1,
      rows: 200,
    }
  },
}
</script>
