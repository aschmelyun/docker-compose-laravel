<template>
  <b-card-code title="Pill style">
    <b-card-text>
      <span>Easily switch to pill style buttons by setting the</span>
      <code>pills</code>
      <span>prop.</span>
    </b-card-text>

    <div>
      <h6>Small Pills</h6>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        size="sm"
      />
    </div>

    <div class="mt-2">
      <h6>Default Pills</h6>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
      />
    </div>

    <div class="mt-2 demo-spacing-0">
      <h6>Large Pills</h6>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        size="lg"
      />
    </div>

    <template #code>
      {{ codePill }}
    </template>
  </b-card-code>
</template>

<script>
import { BPagination, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codePill } from './code'

export default {
  components: {
    BCardCode,
    BPagination,
    BCardText,
  },
  data() {
    return {
      codePill,
      currentPage: 1,
      rows: 100,
    }
  },
}
</script>
