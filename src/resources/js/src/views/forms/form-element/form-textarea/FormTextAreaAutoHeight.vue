<template>
  <b-card-code
    title="Auto height"
  >
    <b-card-text>
      <span>To set the initial minimum height (in rows), set the</span>
      <code>rows</code>
      <span> prop to the desired number of lines (or leave it at the default of </span>
      <code>2</code>
      <span>), And then set maximum rows that the text area will grow to (before showing a scrollbar) by setting the
      </span>
      <code>max-rows</code>
      <span>prop to the maximum number of lines of text.</span>
    </b-card-text>
    <b-card-text>
      <span>To make the height </span>
      <code>sticky</code>
      <span> (i.e. never shrink), set the </span>
      <code>no-auto-shrink</code>
      <span> prop to </span>
      <code>true</code>
      <span>. The </span>
      <code>no-auto-shrink</code>
      <span> props has no effect if </span>
      <code>max-rows</code>
      <span> is not set or is equal to or less than rows.</span>
    </b-card-text>

    <b-row>
      <b-col
        xl="6"
        cols="12"
      >
        <label for="textarea-auto-height">Auto height:</label>
        <b-form-textarea
          id="textarea-auto-height"
          placeholder="Auto height textarea"
          rows="3"
          max-rows="8"
          class="mb-1 mb-xl-0"
        />
      </b-col>
      <b-col
        xl="6"
        cols="12"
      >
        <label for="textarea-no-auto-shrink">No auto-shrink:</label>
        <b-form-textarea
          id="textarea-no-auto-shrink"
          placeholder="Auto height (no-shrink) textarea"
          rows="3"
          max-rows="8"
          no-auto-shrink
        />
      </b-col>
    </b-row>

    <template #code>
      {{ codeAutoHeight }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormTextarea, BRow, BCol, BCardText,
} from 'bootstrap-vue'
import { codeAutoHeight } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormTextarea,
    BRow,
    BCol,
  },
  data() {
    return {
      codeAutoHeight,
    }
  },
}
</script>
