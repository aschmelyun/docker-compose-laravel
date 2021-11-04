<template>
  <b-card-code title="Default slot">
    <b-card-text>
      <span>Provide optional content at the bottom of the calendar interface via the use of default slot. The slot can be
        used to add buttons such as
      </span>
      <code>Select Today</code>
      <span> or </span>
      <code>Reset</code>
      <span>, etc.</span>
    </b-card-text>

    <div class="d-flex align-items-center justify-content-center">
      <b-calendar
        v-model="value"
        value-as-date
        locale="en"
      >
        <div
          class="d-flex"
          dir="ltr"
        >
          <b-button
            v-if="value"
            size="sm"
            variant="outline-secondary"
            @click="clearDate"
          >
            Clear date
          </b-button>
          <b-button
            size="sm"
            variant="outline-primary"
            class="ml-auto"
            @click="setToday"
          >
            Set Today
          </b-button>
        </div>
      </b-calendar>
    </div>

    <template #code>
      {{ codeSlot }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BCalendar, BButton, BCardText } from 'bootstrap-vue'
import { codeSlot } from './code'

export default {
  components: {
    BCardCode,
    BCalendar,
    BButton,
    BCardText,
  },
  data() {
    return {
      value: null,
      codeSlot,
    }
  },
  methods: {
    setToday() {
      const now = new Date()
      this.value = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    },
    clearDate() {
      this.value = ''
    },
  },
}
</script>
