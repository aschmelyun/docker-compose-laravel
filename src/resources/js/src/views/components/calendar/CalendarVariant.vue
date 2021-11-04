<template>
  <b-card-code title="Calendar Variant">
    <b-card-text>
      <span>The selected date button (background color) defaults to the </span>
      <code>'primary'</code>
      <span> theme variant. You can change this to any of the Bootstrap v4 theme variant colors: </span>
      <code>'secondary', 'success', 'danger', 'warning', 'info'</code>
      <span>, etc, via the </span>
      <code>selected-variant</code>
      <span> prop.</span>
    </b-card-text>

    <div class="d-flex justify-content-center">
      <b-calendar
        selected-variant="success"
        today-variant="info"
      />
    </div>

    <template #code>
      {{ codeVariant }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BCalendar, BCardText } from 'bootstrap-vue'
import { codeVariant } from './code'

export default {
  components: {
    BCardCode,
    BCalendar,
    BCardText,
  },
  data() {
    return {
      codeVariant,
    }
  },
}
</script>
