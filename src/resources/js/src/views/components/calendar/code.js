export const codeBasic = `
<template>
  <b-row class="text-center">
    <b-col
      md="6"
      class="mt-1"
    >

      <!-- calendar -->
      <b-calendar
        v-model="value"
        locale="en-US"
        @context="onContext"
      />
    </b-col>
    <b-col md="6">

      <!-- prism -->
      <div class="mt-1">
        <prism
          language="javascript"
          class="rounded mb-0"
        >
          Context: {{ context }}
        </prism>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCalendar} from 'bootstrap-vue'
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  components: {
    BRow,
    BCol,
    BCalendar,
    Prism,
  },
  data: () => ({
    value: '',
    context: null,
  }),
  methods: {
    onContext(ctx) {
      this.context = ctx
    },
  },
}
</script>
`

export const codeStates = `
<template>
  <div class="d-flex justify-content-center">
    <div>

      <!-- checkbox -->
      <b-form-group label="Select calendar interactive state">
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

      <!-- calendar -->
      <b-calendar
        id="ex-disabled-readonly"
        :disabled="disabled"
        :readonly="readonly"
      />
    </div>
  </div>
</template>

<script>
import {BFormGroup, BFormRadioGroup, BFormRadio, BCalendar} from 'bootstrap-vue'

export default {
  components: {
    BFormGroup,
    BFormRadioGroup,
    BFormRadio,
    BCalendar,
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

export const codeDisableDate = `
<template>
  <div class="d-flex align-items-center justify-content-center">
    <b-calendar
      v-model="value"
      :date-disabled-fn="dateDisabled"
      locale="en"
    />
  </div>
</template>

<script>
import { BCalendar } from 'bootstrap-vue'

export default {
  components: {
    BCalendar,
  },
  data: () => ({
    value: '',
  }),
  methods: {
    dateDisabled(ymd, date) {
      const weekday = date.getDay()
      const day = date.getDate()
      return weekday === 0 || weekday === 6 || day === 13
    },
  },
}
</script>
`

export const codeMinMaxRange = `
<template>
  <div class="d-flex align-items-center justify-content-center">
    <b-calendar
      v-model="value"
      :min="min"
      :max="max"
      locale="en"
    />
  </div>
</template>

<script>
import { BCalendar } from 'bootstrap-vue'

export default {
  components: {
    BCalendar,
  },
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 2)
    minDate.setDate(15)
    // 15th in two months
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 2)
    maxDate.setDate(15)

    return {
      value: '',
      min: minDate,
      max: maxDate,
    }
  },
}
</script>
`

export const codeVariant = `
<template>
  <div class="d-flex justify-content-center">
    <b-calendar
      selected-variant="success"
      today-variant="info"
    />
  </div>
</template>

<script>
import { BCalendar } from 'bootstrap-vue'

export default {
  components: {
    BCalendar,
  },
}
</script>
`

export const codeWidth = `
<template>
  <b-calendar
    block
    locale="en-US"
  />
</template>

<script>
import { BCalendar } from 'bootstrap-vue'

export default {
  components: {
    BCalendar,
  },
}
</script>
`

export const codeBorderPadding = `
<template>
  <div class="d-flex align-items-center justify-content-center">
    <b-calendar
      class="border rounded p-2"
      locale="en"
    />
  </div>
</template>

<script>
import { BCalendar } from 'bootstrap-vue'

export default {
  components: {
    BCalendar,
  },
}
</script>
`

export const codeFormat = `
<template>
  <b-row class="text-center">
    <b-col md="6">
      <h6>Custom date format:</h6>
      <b-calendar
        :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
        locale="en"
        class="mb-1 mb-md-0"
      />
    </b-col>
    <b-col md="6">
      <h6>Short date format:</h6>
      <b-calendar
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        locale="en"
      />
    </b-col>
  </b-row>
</template>

<script>
import { BCalendar, BRow, BCol } from 'bootstrap-vue'

export default {
  components: {
    BCalendar,
    BRow,
    BCol,
  },
}
</script>
`

export const codeSlot = `
<template>
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
</template>

<script>
import { BCalendar, BButton } from 'bootstrap-vue'

export default {
  components: {
    BCalendar,
    BButton,
  },
  data: () => ({
    value: null,
  }),
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
`

export const codeCustomClass = `
<template>
  <div class="d-flex align-items-center justify-content-center">
    <b-calendar
      v-model="value"
      :date-info-fn="dateClass"
      locale="en"
    />
  </div>
</template>

<script>
import { BCalendar } from 'bootstrap-vue'

export default {
  components: {
    BCalendar,
  },
  data: () => ({
    value: '',
  }),
  methods: {
    dateClass(ymd, date) {
      const day = date.getDate()
      return day >= 10 && day <= 20 ? 'table-info' : ''
    },
  },
}
</script>
`

export const codeInternationalization = `
<template>
  <b-row>
    <b-col cols="12">

      <!-- select locale-->
      <label for="example-locales">Locale:</label>
      <b-form-select
        id="example-locales"
        v-model="locale"
        :options="locales"
      />

      <!-- select weekday-->
      <label
        for="example-weekdays"
        class="mt-2"
      >Start weekday:</label>
      <b-form-select
        id="example-weekdays"
        v-model="weekday"
        :options="weekdays"
      />

      <!-- switch -->
      <div class="demo-inline-spacing">
        <div class="d-flex align-items-center">
          <b-form-checkbox
            v-model="showDecadeNav"
            switch
            inline
          >
            Show decade navigation buttons
          </b-form-checkbox>
        </div>

        <div class="d-flex align-items-center">
          <b-form-checkbox
            v-model="hideHeader"
            switch
            inline
          >
            Hide the date header
          </b-form-checkbox>
        </div>
      </div>
    </b-col>

    <!-- calendar -->
    <b-col
      md="6"
      class="text-center"
    >
      <b-calendar
        v-model="value"
        v-bind="labels[locale] || {}"
        :locale="locale"
        :start-weekday="weekday"
        :hide-header="hideHeader"
        :show-decade-nav="showDecadeNav"
        class="mt-1"
        @context="onContext"
      />
    </b-col>

    <!-- prism -->
    <b-col md="6">
      <prism
        language="javascript"
        class="rounded mt-1 mb-0"
      >
        Context: {{ context }}
      </prism>
    </b-col>
  </b-row>
</template>

<script>
import {BCalendar, BRow, BCol, BFormCheckbox, BFormSelect} from 'bootstrap-vue'

export default {
  components: {
    BCalendar,
    BRow,
    BCol,
    BFormCheckbox,
    BFormSelect,
  },
  data: () => ({
    value: '',
    context: null,
    showDecadeNav: false,
    hideHeader: false,
    locale: 'en-US',
    locales: [
      { value: 'en-US', text: 'English US (en-US)' },
      { value: 'de', text: 'German (de)' },
      { value: 'ar-EG', text: 'Arabic Egyptian (ar-EG)' },
      { value: 'zh', text: 'Chinese (zh)' },
    ],
    weekday: 0,
    weekdays: [
      { value: 0, text: 'Sunday' },
      { value: 1, text: 'Monday' },
      { value: 6, text: 'Saturday' },
    ],
    labels: {
      de: {
        labelPrevDecade: 'Vorheriges Jahrzehnt',
        labelPrevYear: 'Vorheriges Jahr',
        labelPrevMonth: 'Vorheriger Monat',
        labelCurrentMonth: 'Aktueller Monat',
        labelNextMonth: 'Nächster Monat',
        labelNextYear: 'Nächstes Jahr',
        labelNextDecade: 'Nächstes Jahrzehnt',
        labelToday: 'Heute',
        labelSelected: 'Ausgewähltes Datum',
        labelNoDateSelected: 'Kein Datum gewählt',
        labelCalendar: 'Kalender',
        labelNav: 'Kalendernavigation',
        labelHelp: 'Mit den Pfeiltasten durch den Kalender navigieren',
      },
      'ar-EG': {
        labelPrevDecade: 'العقد السابق',
        labelPrevYear: 'العام السابق',
        labelPrevMonth: 'الشهر السابق',
        labelCurrentMonth: 'الشهر الحالي',
        labelNextMonth: 'الشهر المقبل',
        labelNextYear: 'العام المقبل',
        labelNextDecade: 'العقد القادم',
        labelToday: 'اليوم',
        labelSelected: 'التاريخ المحدد',
        labelNoDateSelected: 'لم يتم اختيار تاريخ',
        labelCalendar: 'التقويم',
        labelNav: 'الملاحة التقويم',
        labelHelp: 'استخدم مفاتيح المؤشر للتنقل في التواريخ',
      },
      zh: {
        labelPrevDecade: '过去十年',
        labelPrevYear: '上一年',
        labelPrevMonth: '上个月',
        labelCurrentMonth: '当前月份',
        labelNextMonth: '下个月',
        labelNextYear: '明年',
        labelNextDecade: '下一个十年',
        labelToday: '今天',
        labelSelected: '选定日期',
        labelNoDateSelected: '未选择日期',
        labelCalendar: '日历',
        labelNav: '日历导航',
        labelHelp: '使用光标键浏览日期',
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
