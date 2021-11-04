<template>
  <b-card-code
    title="Default slot"
  >
    <b-card-text>
      <span>Provide optional content at the bottom of the time interface via the use of </span>
      <code>default</code>
      <span> slot. The slot can be used to add buttons such as Now or Reset, etc.</span>
    </b-card-text>

    <div>
      <b-time
        v-model="value"
        show-seconds
        locale="en"
      >
        <div
          class="d-flex"
          dir="ltr"
        >
          <b-button
            v-if="value"
            size="sm"
            variant="outline-danger"
            @click="clearTime"
          >
            Clear time
          </b-button>
          <b-button
            size="sm"
            variant="outline-primary"
            class="ml-auto"
            @click="setNow"
          >
            Set Now
          </b-button>
        </div>
      </b-time>
    </div>

    <template #code>
      {{ codeSlot }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BTime, BButton, BCardText } from 'bootstrap-vue'
import { codeSlot } from './code'

export default {
  components: {
    BCardCode,
    BTime,
    BCardText,
    BButton,
  },
  data() {
    return {
      value: null,
      codeSlot,
    }
  },
  methods: {
    setNow() {
      const now = new Date()
      // Grab the HH:mm:ss part of the time string
      this.value = now.toTimeString().slice(0, 8)
    },
    clearTime() {
      this.value = ''
    },
  },
}
</script>
