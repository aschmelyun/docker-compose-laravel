export const codeBasic = `
<template>
  <div>
    <b-form-timepicker v-model='value' locale='en' />
    <div class='mt-2'>Value: '{{ value }}'</div>
  </div>
</template>

<script>
import AppCard from '@core/components/app-card/AppCard.vue'
import { BFormTimepicker } from 'bootstrap-vue'

export default {
  components: {
    AppCard,
    BFormTimepicker,
  },
  data: () => ({
    value: '',
  }),
}
</script>
`
export const codeButtonOnly = `
<template>
  <div>
    <label for='example-input'>Choose a time</label>
    <b-input-group class='mb-1'>
      <b-form-input id='example-input' v-model='value' type='text' placeholder='HH:mm:ss' />
      <b-input-group-append>
        <b-form-timepicker v-model='value' button-only right show-seconds locale='en' aria-controls='example-input' />
      </b-input-group-append>
    </b-input-group>
    <p>Value: '{{ value }}'</p>
  </div>
</template>

<script>
import AppCard from '@core/components/app-card/AppCard.vue'
import {
  BFormTimepicker, BInputGroup, BFormInput, BInputGroupAppend,
} from 'bootstrap-vue'

export default {
  components: {
    AppCard,
    BFormTimepicker,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
  },
  data: () => ({
    value: '',
  }),
}
</script>
`
export const codeInternationalization = `
<template>
  <b-row>
    <b-col
      cols="12"
      class="mb-3"
    >
      <label for="example-locales">Locale:</label>
      <b-form-select
        id="example-locales"
        v-model="locale"
        :options="locales"
      />
    </b-col>
    <b-col md="6">
      <b-form-timepicker
        v-model="value"
        v-bind="labels[locale] || {}"
        :locale="locale"
        show-seconds
        @context="onContext"
      />
    </b-col>
    <b-col>
      <p>
        Value: <b>'{{ value }}'</b>
      </p>
      <p class="mb-0">
        Context:
      </p>
      <pre class="small">{{ context }}</pre>
    </b-col>
  </b-row>
</template>

<script>
import AppCard from '@core/components/app-card/AppCard.vue'
import {
  BFormTimepicker, BRow, BCol, BFormSelect,
} from 'bootstrap-vue'

export default {
  components: {
    AppCard,
    BFormTimepicker,
    BRow,
    BCol,
    BFormSelect,
  },
  data: () => ({
    value: '',
    context: null,
    locale: 'en-US',
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
        labelCloseButton: 'Schließen',
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
        labelCloseButton: 'قريب',
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
        labelCloseButton: '关',
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
export const codeOptional = `
<template>
  <div>
    <label for="timepicker-buttons">Time picker with optional footer buttons</label>
    <b-form-timepicker
      id="timepicker-buttons"
      now-button
      reset-button
      locale="en"
    />
  </div>
</template>

<script>
import AppCard from '@core/components/app-card/AppCard.vue'
import { BFormTimepicker } from 'bootstrap-vue'

export default {
  components: {
    AppCard,
    BFormTimepicker,
  },
}
</script>
`
export const codePlaceholder = `
<template>
  <div>
    <label for="timepicker-placeholder">Time picker with placeholder</label>
    <b-form-timepicker
      id="timepicker-placeholder"
      placeholder="Choose a time"
      local="en"
    />
  </div>
</template>

<script>
import AppCard from '@core/components/app-card/AppCard.vue'
import { BFormTimepicker } from 'bootstrap-vue'

export default {
  components: {
    AppCard,
    BFormTimepicker,
  },
}
</script>
`
export const codeSecond = `
<template>
  <div>
    <b-form-timepicker
      v-model="value"
      show-seconds
      locale="en"
    />
    <div class="mt-2">
      Value: '{{ value }}'
    </div>
  </div>
</template>

<script>
import AppCard from '@core/components/app-card/AppCard.vue'
import { BFormTimepicker } from 'bootstrap-vue'

export default {
  components: {
    AppCard,
    BFormTimepicker,
  },
  data: () => ({
    value: '',
  }),
}
</script>
`

export const codeSize = `
<template>
  <div>
    <label for="timepicker-sm">Small time picker</label>
    <b-form-timepicker
      id="timepicker-sm"
      size="sm"
      local="en"
      class="mb-2"
    />

    <label for="timepicker-lg">Large time picker</label>
    <b-form-timepicker
      id="timepicker-lg"
      size="lg"
      local="en"
    />
  </div>
</template>

<script>
import AppCard from '@core/components/app-card/AppCard.vue'
import { BFormTimepicker } from 'bootstrap-vue'

export default {
  components: {
    AppCard,
    BFormTimepicker,
  },
}
</script>
`
export const codeState = `
<template>
  <div>
    <b-form-group label="Select time picker interactive state">
      <b-form-radio-group
        v-model="state"
        plain
        class="vs-radio-con"
        aria-controls="ex-disabled-readonly"
      >
        <b-form-radio
          value="disabled"
        >
          <span class="vs-radio">
            <span class="vs-radio--border" />
            <span class="vs-radio--circle" />
          </span>
          <span class="vs-label">Disabled</span>
        </b-form-radio>
        <b-form-radio value="readonly">
          <span class="vs-radio">
            <span class="vs-radio--border" />
            <span class="vs-radio--circle" />
          </span>
          <span class="vs-label">Readonly</span>
        </b-form-radio>
        <b-form-radio value="normal">
          <span class="vs-radio">
            <span class="vs-radio--border" />
            <span class="vs-radio--circle" />
          </span>
          <span class="vs-label">Normal</span>
        </b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    <b-form-timepicker
      id="ex-disabled-readonly"
      :disabled="disabled"
      :readonly="readonly"
    />
  </div>
</template>

<script>
import AppCard from '@core/components/app-card/AppCard.vue'
import {
  BFormTimepicker, BFormGroup, BFormRadioGroup, BFormRadio,
} from 'bootstrap-vue'

export default {
  components: {
    AppCard,
    BFormTimepicker,
    BFormGroup,
    BFormRadioGroup,
    BFormRadio,
  },
  data: () => ({
    state: 'disabled',
  }),
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
export const codeValidation = `
<template>
  <div>
    <label for="timepicker-invalid">Choose a time (invalid style)</label>
    <b-form-timepicker
      id="datepicker-invalid"
      :state="false"
      class="mb-2"
    />

    <label for="timepicker-valid">Choose a time (valid style)</label>
    <b-form-timepicker
      id="datepicker-valid"
      :state="true"
    />
  </div>
</template>

<script>
import AppCard from '@core/components/app-card/AppCard.vue'
import { BFormTimepicker } from 'bootstrap-vue'

export default {
  components: {
    AppCard,
    BFormTimepicker,
  },
}
</script>
`
