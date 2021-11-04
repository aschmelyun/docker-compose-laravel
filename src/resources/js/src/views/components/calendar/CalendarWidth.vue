<template>
  <b-card-code
    title="Calendar Width"
  >
    <b-card-text>
      <span>To change the width, set the </span>
      <code>width</code>
      <span> prop to any valid CSS width (including units).</span>
    </b-card-text>

    <b-card-text>
      <span>Optionally, make the calendar full width by setting the prop </span>
      <code>block</code>
      <span>, which will make it expand to fit the width of the parent element. The </span>
      <code>width</code>
      <span> prop has no effect when </span>
      <code>block</code>
      <span> is set.</span>
    </b-card-text>

    <b-calendar
      block
      locale="en-US"
    />

    <template #code>
      {{ codeWidth }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BCalendar, BCardText } from 'bootstrap-vue'
import { codeWidth } from './code'

export default {
  components: {
    BCardCode,
    BCalendar,
    BCardText,
  },
  data() {
    return {
      codeWidth,
    }
  },
}
</script>
