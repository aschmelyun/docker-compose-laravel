<template>
  <b-card-code title="Alignment">
    <b-card-text>
      <span>By default the pagination component is left aligned. Change the alignment to </span>
      <code>center, right</code>
      <span> (</span>
      <code>right</code>
      <span> is an alias for </span>
      <code>end</code>
      <span> )</span>
      <span>, or </span>
      <code>fill</code>
      <span> by setting the prop </span>
      <code>align</code>
      <span> to the appropriate value.</span>
    </b-card-text>

    <div class="demo-spacing-0">
      <span>Radios using options</span>
      <div class="my-1">
        <b-form-radio
          v-model="selected"
          name="vuexy-radio"
          value="default"
          inline
        >
          Default
        </b-form-radio>
        <b-form-radio
          v-model="selected"
          name="vuexy-radio"
          value="right"
          inline
        >
          Right
        </b-form-radio>
        <b-form-radio
          v-model="selected"
          name="vuexy-radio"
          value="center"
          inline
        >
          Center
        </b-form-radio>
        <b-form-radio
          v-model="selected"
          name="vuexy-radio"
          value="fill"
          inline
        >
          Fill
        </b-form-radio>
      </div>

      <!-- pagination -->
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        base-url="#"
        :align="selected"
      />
    </div>

    <template #code>
      {{ codeAlignment }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BPagination, BFormRadio, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeAlignment } from './code'

export default {
  components: {
    BCardCode,
    BPagination,
    BFormRadio,
    BCardText,
  },
  data() {
    return {
      selected: 'default',
      codeAlignment,
      currentPage: 1,
      rows: 100,
    }
  },
}
</script>
