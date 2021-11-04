<template>
  <b-card-code
    title="Slot"
  >
    <b-card-text>
      <span>Spin buttons provides two slots </span>
      <code>increment</code>
      <span> and </span>
      <code>decrement</code>
    </b-card-text>

    <b-row>

      <!-- Demo 1 : Number -->
      <b-col md="6">
        <b-form-spinbutton
          v-model="value"
          class="mb-md-0 mb-2"
          min="1"
          max="100"
        >
          <template #increment>
            <feather-icon icon="ChevronUpIcon" />
          </template>
          <template #decrement>
            <feather-icon icon="ChevronDownIcon" />
          </template>
        </b-form-spinbutton>
      </b-col>

      <!-- Demo 2 : Week -->
      <b-col md="6">
        <b-form-spinbutton
          v-model="day"
          min="0"
          max="6"
          wrap
          :formatter-fn="dayFormatter"
        >
          <template #increment>
            <feather-icon icon="ChevronRightIcon" />
          </template>
          <template #decrement>
            <feather-icon icon="ChevronLeftIcon" />
          </template>
        </b-form-spinbutton>
      </b-col>
    </b-row>

    <template #code>
      {{ codeSlots }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormSpinbutton, BRow, BCol, BCardText,
} from 'bootstrap-vue'
import { codeSlots } from './code'

export default {
  components: {
    BFormSpinbutton,
    BCardCode,
    BCardText,
    BRow,
    BCol,
  },
  data() {
    return {
      value: 50,
      codeSlots,
      day: 0,
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    }
  },
  methods: {
    dayFormatter(value) {
      return this.days[value]
    },
  },
}
</script>
