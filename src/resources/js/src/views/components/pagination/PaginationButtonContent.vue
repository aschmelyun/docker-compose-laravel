<template>
  <b-card-code title="Button content">
    <b-card-text>
      <span>For a full list of all available slots see the</span>
      <code>Slots</code>
      <span>section below.</span>
    </b-card-text>

    <div class="demo-spacing-0">
      <!-- Use text in props -->
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        align="left"
        last-text="Last"
      />

      <!-- Use emojis in props -->
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-text="⏮"
        prev-text="⏪"
        next-text="⏩"
        align="left"
        last-text="⏭"
        class="mt-2"
      />

      <!-- Use HTML and sub-components in slots -->
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        align="left"
        class="mt-2"
      >
        <template
          #first-text
        >
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
      </b-pagination>
    </div>

    <template #code>
      {{ codeContent }}
    </template>
  </b-card-code>
</template>

<script>
import { BPagination, BSpinner, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeContent } from './code'

export default {
  components: {
    BCardCode,
    BPagination,
    BSpinner,
    BCardText,
  },
  data() {
    return {
      codeContent,
      currentPage: 1,
      perPage: 10,
      rows: 100,
    }
  },
}
</script>
