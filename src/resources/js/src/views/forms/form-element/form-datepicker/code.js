export const codeBasic = `
<template>
  <div>
    <label for="example-datepicker">Choose a date</label>
    <b-form-datepicker
      id="example-datepicker"
      v-model="value"
      class="mb-1"
    />
    <p>Value: '{{ value }}'</p>
  </div>
</template>

<script>
import { BFormDatepicker } from 'bootstrap-vue'

export default {
  components: {
    BFormDatepicker,
  },
  data: () => ({
    value: '',    codeBasic,    codeBasic,
  }),
}
</script>
`

export const codeButtonOnly = `
<template>
  <div>
    <label for="example-input">Choose a date</label>
    <b-input-group class="mb-1">
      <b-form-input
        id="example-input"
        v-model="value"
        type="text"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
        show-decade-nav
      />
      <b-input-group-append>
        <b-form-datepicker
          v-model="value"
          show-decade-nav
          button-only
          right
          locale="en-US"
          aria-controls="example-input"
          @context="onContext"
        />
      </b-input-group-append>
    </b-input-group>
    <p class="mb-1">
      Value: '{{ value }}'
    </p>
    <p class="mb-1">
      Selected: '{{ selected }}'
    </p>
    <p>Formatted: '{{ formatted }}'</p>
  </div>
</template>

<script>
import {BFormDatepicker, BInputGroup, BInputGroupAppend, BFormInput} from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormDatepicker,
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
  },
  data: () => ({
    value: '',
    formatted: '',
    selected: '',
  }),
  methods: {
    onContext(ctx) {
      // The date formatted in the locale, or the \`label-no - date - selected\` string
      this.formatted = ctx.selectedFormatted
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD
    },
  },
}
</script>
`

export const codeDisableDate = `
<template>
  <div>
    <b-form-datepicker
      v-model="value"
      :date-disabled-fn="dateDisabled"
      locale="en"
    />
  </div>
</template>

<script>
import { BFormDatepicker } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormDatepicker,
  },
  data: () => ({
    value: '',
  }),
  methods: {
    dateDisabled(ymd, date) {
      // Disable weekends (Sunday = \`0\`, Saturday = \`6\`) and
      // disable days that fall on the 13th of the month
      const weekday = date.getDay()
      const day = date.getDate()
      // Return \`true\` if the date should be disabled
      return weekday === 0 || weekday === 6 || day === 13
    },
  },
}
</script>
`

export const codeInternationalization = `
<template>
  <div>
    <label for="example-locales">Locale:</label>
    <b-form-select
      id="example-locales"
      v-model="locale"
      :options="locales"
      class="mb-1"
    />

    <label for="example-weekdays">Start weekday:</label>
    <b-form-select
      id="example-weekdays"
      v-model="weekday"
      :options="weekdays"
      class="mb-1"
    />

    <div class="d-flex align-items-center">
      <b-form-checkbox
        v-model="showDecadeNav"
        switch
        inline
        class="my-1"
      />
      <label class="mr-1">Show decade navigation buttons</label>
      <b-form-checkbox
        v-model="hideHeader"
        switch
        inline
        class="my-1"
      />
      <label>Hide calendar header</label>
    </div>

    <label for="example-i18n-picker">Date picker:</label>
    <b-form-datepicker
      id="example-i18n-picker"
      v-model="value"
      v-bind="labels[locale] || {}"
      :locale="locale"
      :start-weekday="weekday"
      :show-decade-nav="showDecadeNav"
      :hide-header="hideHeader"
      class="mb-1"
    />
    <p>
      Value: <b>'{{ value }}'</b>
    </p>
  </div>
</template>

<script>
import { BFormDatepicker, BFormSelect, BFormCheckbox } from 'bootstrap-vue'

export default {
  components: {
    BFormDatepicker,
    BFormSelect,
    BFormCheckbox,
  },
  data: () => ({
    value: '',
    locale: 'en-US',
    showDecadeNav: false,
    hideHeader: false,
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
}
</script>
`

export const codeOptional = `
<template>
  <div>
    <label for="datepicker-buttons">Date picker with optional footer buttons</label>
    <b-form-datepicker
      id="datepicker-buttons"
      today-button
      reset-button
      close-button
      locale="en"
    />
  </div>
</template>

<script>
import { BFormDatepicker } from 'bootstrap-vue'

export default {
  components: {
    BFormDatepicker,
  },
}
</script>
`

export const codePlaceholder = `
<template>
  <div>
    <label for="datepicker-placeholder">Date picker with placeholder</label>
    <b-form-datepicker
      id="datepicker-placeholder"
      placeholder="Choose a date"
      local="en"
      initial-date="2020-06-16"
    />
  </div>
</template>

<script>
import { BFormDatepicker } from 'bootstrap-vue'

export default {
  components: {
    BFormDatepicker,
  },
}
</script>
`

export const codeMinMax = `
<template>
  <div>
    <b-form-datepicker
      v-model="value"
      :min="min"
      :max="max"
      locale="en"
    />
  </div>
</template>

<script>
import { BFormDatepicker } from 'bootstrap-vue'

export default {
  components: {
    BFormDatepicker,
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

export const codeSize = `
<template>
  <div>
    <label for="datepicker-sm">Small date picker</label>
    <b-form-datepicker
      id="datepicker-sm"
      size="sm"
      local="en"
      class="mb-2"
      today-variant="danger"
    />
    <label for="datepicker-default">Default date picker</label>
    <b-form-datepicker
      id="datepicker-default"
      local="en"
      class="mb-2"
      today-variant="danger"
    />
    <label for="datepicker-lg">Large date picker</label>
    <b-form-datepicker
      id="datepicker-lg"
      size="lg"
      local="en"
    />
  </div>
</template>

<script>
import { BFormDatepicker } from 'bootstrap-vue'

export default {
  components: {
    BFormDatepicker,
  },
}
</script>
`

export const codeState = `
<template>
   <div>
    <b-form-group label="Select date picker interactive state">
      <b-form-radio-group
        v-model="state"
        plain
        class="vs-radio-con"
        aria-controls="ex-disabled-readonly"
      >
        <b-form-radio value="disabled">
          <span class="vs-radio">
            <span class="vs-radio--border" />
            <span class="vs-radio--circle" />
          </span>
          <span class="ml-2">Disabled</span>
        </b-form-radio>
        <b-form-radio value="readonly">
          <span class="vs-radio">
            <span class="vs-radio--border" />
            <span class="vs-radio--circle" />
          </span>
          <span class="ml-2">Readonly</span>
        </b-form-radio>
        <b-form-radio value="normal">
          <span class="vs-radio">
            <span class="vs-radio--border" />
            <span class="vs-radio--circle" />
          </span>
          <span class="ml-2">Normal</span>
        </b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    <b-form-datepicker
      id="ex-disabled-readonly"
      :disabled="disabled"
      :readonly="readonly"
    />
  </div>
</template>

<script>
import {
  BFormDatepicker, BFormGroup, BFormRadio, BFormRadioGroup,
} from 'bootstrap-vue'


export default {
  components: {
    BFormDatepicker,
    BFormGroup,
    BFormRadio,
    BFormRadioGroup,
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

export const codeString = `
<template>
  <div>
    <label for="datepicker-dateformat1">Custom date format</label>
    <b-form-datepicker
      id="datepicker-dateformat1"
      :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
      locale="en"
    />

    <label
      class="mt-2"
      for="datepicker-dateformat2"
    >Short date format</label>
    <b-form-datepicker
      id="datepicker-dateformat2"
      :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
      locale="en"
    />
  </div>
</template>

<script>
import { BFormDatepicker } from 'bootstrap-vue'

export default {
  components: {
    BFormDatepicker,
  },
}
</script>
`

export const codeValidation = `
<template>
  <div>
    <label for="datepicker-invalid">Choose a date (invalid style)</label>
    <b-form-datepicker
      id="datepicker-invalid"
      :state="false"
      class="mb-2"
    />
    <label for="datepicker-valid">Choose a date (valid style)</label>
    <b-form-datepicker
      id="datepicker-valid"
      :state="true"
    />
  </div>
</template>

<script>
import { BFormDatepicker } from 'bootstrap-vue'

export default {
  components: {
    BFormDatepicker,
  },
}
</script>
`

export const codeVariant = `
<template>
  <b-row>
    <b-col md="4">
      <b-form-datepicker
        local="en"
        placeholder="Primary Variant"
        class="mb-1"
        selected-variant="primary"
      />
    </b-col>
    <b-col md="4">
      <b-form-datepicker
        local="en"
        placeholder="Secondary Variant"
        class="mb-1"
        selected-variant="secondary"
      />
    </b-col>
    <b-col md="4">
      <b-form-datepicker
        local="en"
        placeholder="Success Variant"
        class="mb-1"
        selected-variant="success"
      />
    </b-col>
    <b-col md="4">
      <b-form-datepicker
        local="en"
        placeholder="Warning Variant"
        class="mb-1"
        selected-variant="warning"
      />
    </b-col>
    <b-col md="4">
      <b-form-datepicker
        local="en"
        placeholder="Danger Variant"
        class="mb-1"
        selected-variant="danger"
      />
    </b-col>
    <b-col md="4">
      <b-form-datepicker
        local="en"
        placeholder="Info Variant"
        class="mb-1"
        selected-variant="info"
      />
    </b-col>
  </b-row>
</template>

<script>
import { BFormDatepicker, BRow, BCol } from 'bootstrap-vue'

export default {
  components: {
    BFormDatepicker,
    BRow,
    BCol,
  },
}
</script>
`

export const codeFullWith = `
<template>
  <div>
    <label for="datepicker-full-width">Choose a date</label>
      <b-form-datepicker
        id="datepicker-full-width"
        v-model="value"
        menu-class="w-100"
        calendar-width="100%"
        class="mb-2"
      />
  </div>
</template>

<script>
import { BFormDatepicker } from 'bootstrap-vue'

export default {
  components: {
    BFormDatepicker,
  },
  data: () => ({
    value: '',
  }),
}
</script>
`
