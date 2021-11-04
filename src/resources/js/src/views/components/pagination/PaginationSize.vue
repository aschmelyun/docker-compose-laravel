<template>
  <b-card-code title="Button size">
    <b-card-text>
      <span>Optionally change from the default button size by setting the</span>
      <code>size</code>
      <span>prop to either</span>
      <code>'sm'</code>
      <span>for smaller buttons or </span>
      <code>'lg'</code>
      <span>for larger buttons.</span>
    </b-card-text>

    <div>
      <h6>Small</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        size="sm"
      />
    </div>

    <div class="mt-2">
      <h6>Default</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
      />
    </div>

    <div class="mt-2 demo-spacing-0">
      <h6>Large</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        size="lg"
      />
    </div>

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BPagination, BCardText } from 'bootstrap-vue'
import { codeSize } from './code'

export default {
  components: {
    BCardCode,
    BPagination,
    BCardText,
  },
  data() {
    return {
      codeSize,
      currentPage: 1,
      rows: 100,
    }
  },
}
</script>
