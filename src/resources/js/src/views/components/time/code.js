export const codeBasic = `
<template>
   <b-time locale="en" />
</template>

<script>
import {BTime} from 'bootstrap-vue'

export default {
  components: {
     BTime,
  },
}
</script>
`

export const codeBorderPadding = `
<template>
  <b-time
    class="border rounded p-2"
    locale="en"
  />
</template>

<script>
import { BTime } from 'bootstrap-vue'

export default {
  components: {
    BTime,
  },
}
</script>
`

export const codeInternationalization = `
<template>
  <b-row>
    <b-col
      cols="12"
      class="mb-1"
    >
      <label for="example-locales">Locale:</label>
      <b-form-select
        id="example-locales"
        v-model="locale"
        :options="locales"
      />
    </b-col>
    <b-col md="auto">
      <b-time
        v-bind="labels[locale] || {}"
        :locale="locale"
        show-seconds
        @context="onContext"
      />
    </b-col>
  </b-row>
</template>

<script>
import { BTime, BRow, BCol, BFormSelect} from 'bootstrap-vue'

export default {
  components: {
    BTime,
    BRow,
    BCol,
    BFormSelect,
  },
  data: () => ({
    locale: 'en-US',
    codeInternationalization,
    locales: [
      { value: 'en-US', text: 'English US (en-US)' },
      { value: 'de', text: 'German (de)' },
      { value: 'ar-EG', text: 'Arabic Egyptian (ar-EG)' },
      { value: 'zh', text: 'Chinese (zh)' },
    ],
    labels: {
      de: {
        labelHours: 'Stunden',
        labelMinutes: 'Minuten',
        labelSeconds: 'Sekunden',
        labelIncrement: 'Erhöhen',
        labelDecrement: 'Verringern',
        labelSelected: 'Ausgewählte Zeit',
        labelNoTimeSelected: 'Keine Zeit ausgewählt',
      },
      'ar-EG': {
        labelHours: 'ساعات',
        labelMinutes: 'الدقائق',
        labelSeconds: 'ثواني',
        labelAmpm: 'صباحا مساء',
        labelAm: 'ص',
        labelPm: 'م',
        labelIncrement: 'زيادة',
        labelDecrement: 'إنقاص',
        labelSelected: 'الوقت المحدد',
        labelNoTimeSelected: 'لا وقت المختار',
      },
      zh: {
        labelHours: '小时',
        labelMinutes: '分钟',
        labelSeconds: '秒',
        labelAmpm: '上午下午',
        labelAm: '上午',
        labelPm: '下午',
        labelIncrement: '增量',
        labelDecrement: '减量',
        labelSelected: '选定时间',
        labelNoTimeSelected: '没有选择时间',
      },
    },
  }),
  methods: {
    onContext(ctx) {
      this.context = ctx
    },
  },
}
</script>
`

export const codeSlot = `
<template>
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
</template>

<script>
import { BTime, BButton } from 'bootstrap-vue'

export default {
  components: {
    BTime,
    BButton,
  },
   data() {
    return {
      value: null,
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
`

export const codeSpinbutton = `
<template>
  <div>
    <b-time
      v-model="value"
      show-seconds
      locale="en"
    />
    <div class="mt-1">
      Value: '{{ value }}'
    </div>
  </div>
</template>

<script>
import { BTime } from 'bootstrap-vue'

export default {
  components: {
    BTime,
  },
  data() {
    return {
      value: '',
    }
  },
}
</script>
`

export const codeState = `
<template>
  <div>
    <b-form-group label="Select time interactive state">
      <b-form-radio-group
        v-model="state"
        aria-controls="ex-disabled-readonly"
      >
        <b-form-radio value="disabled">
          Disabled
        </b-form-radio>
        <b-form-radio value="readonly">
          Readonly
        </b-form-radio>
        <b-form-radio value="normal">
          Normal
        </b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <!-- time -->
    <b-time
      id="ex-disabled-readonly"
      :disabled="disabled"
      :readonly="readonly"
    />
  </div>
</template>

<script>
import {BFormRadioGroup, BFormGroup, BFormRadio, BTime} from 'bootstrap-vue'

export default {
  components: {
    BTime,
    BFormRadioGroup,
    BFormGroup,
    BFormRadio,
  },
  data() {
    return {
      state: 'disabled',
    }
  },
  computed: {
    disabled() {
      return this.state === 'disabled'
    },
    readonly() {
      return this.state === 'readonly'
    },
  },
}
</script>
`
