<template>
  <b-card-code
    title="Control sizing"
  >
    <b-card-text>
      <span>Set text height using the </span>
      <code>size</code>
      <span> prop to </span>
      <code>sm</code>
      <span> or </span>
      <code>lg</code>
      <span> for small or large respectively.</span>
    </b-card-text>

    <b-row>
      <b-col sm="2">
        <label
          for="textarea-small"
          class="text-nowrap"
        >Small:</label>
      </b-col>
      <b-col
        sm="10"
        class="mb-1"
      >
        <b-form-textarea
          id="textarea-small"
          size="sm"
          placeholder="Small textarea"
        />
      </b-col>
      <b-col sm="2">
        <label
          for="textarea-default"
          class="text-nowrap"
        >Default:</label>
      </b-col>
      <b-col
        sm="10"
        class="mb-1"
      >
        <b-form-textarea
          id="textarea-default"
          placeholder="Default textarea"
        />
      </b-col>
      <b-col sm="2">
        <label
          for="textarea-large"
          class="text-nowrap"
        >Large:</label>
      </b-col>
      <b-col
        sm="10"
        class="mb-1"
      >
        <b-form-textarea
          id="textarea-large"
          size="lg"
          placeholder="Large textarea"
        />
      </b-col>
    </b-row>

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormTextarea, BRow, BCol, BCardText,
} from 'bootstrap-vue'
import { codeSize } from './code'

export default {
  components: {
    BCardCode,
    BFormTextarea,
    BRow,
    BCardText,
    BCol,
  },
  data() {
    return {
      codeSize,
    }
  },
}
</script>
