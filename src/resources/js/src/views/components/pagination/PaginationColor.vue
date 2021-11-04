<template>
  <b-card-code title="Color Option">
    <b-card-text>
      <span>To add pagination with different color option, use class</span>
      <code>.pagination-{colorName}</code>
      <span>with </span>
      <code>&lt;b-pagination&gt;</code>
      <span>components.</span>
    </b-card-text>

    <!-- pagination -->
    <div class="demo-spacing-0">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        first-number
        last-number
        class="pagination-success"
      >
        <template #prev-text>
          <feather-icon
            size="18"
            icon="ChevronLeftIcon"
          />
        </template>
        <template #next-text>
          <feather-icon
            size="18"
            icon="ChevronRightIcon"
          />
        </template>
      </b-pagination>

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        first-number
        last-number
        class="pagination-danger mt-2"
      >
        <template #prev-text>
          <feather-icon
            size="18"
            icon="ChevronLeftIcon"
          />
        </template>
        <template #next-text>
          <feather-icon
            size="18"
            icon="ChevronRightIcon"
          />
        </template>
      </b-pagination>

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        first-number
        last-number
        class="pagination-info mb-0"
      >
        <template #prev-text>
          <feather-icon
            size="18"
            icon="ChevronLeftIcon"
          />
        </template>
        <template #next-text>
          <feather-icon
            size="18"
            icon="ChevronRightIcon"
          />
        </template>
      </b-pagination>
    </div>

    <template #code>
      {{ codeColorOption }}
    </template>
  </b-card-code>
</template>

<script>
import { BPagination, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeColorOption } from './code'

export default {
  components: {
    BCardCode,
    BPagination,
    BCardText,
  },
  data() {
    return {
      codeColorOption,
      currentPage: 4,
      perPage: 1,
      rows: 200,
    }
  },
}
</script>
