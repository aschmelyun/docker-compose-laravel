<template>
  <b-card-code title="Calendar Border & padding">
    <b-card-text>
      Fancy a calendar with a border with padding? Use Bootstrap's border and padding utility classes to add borders and
      padding:
    </b-card-text>

    <div class="d-flex align-items-center justify-content-center">
      <b-calendar
        class="border rounded p-2"
        locale="en"
      />
    </div>

    <template #code>
      {{ codeBorderPadding }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BCalendar, BCardText } from 'bootstrap-vue'
import { codeBorderPadding } from './code'

export default {
  components: {
    BCardCode,
    BCalendar,
    BCardText,
  },
  data() {
    return {
      codeBorderPadding,
    }
  },
}
</script>
