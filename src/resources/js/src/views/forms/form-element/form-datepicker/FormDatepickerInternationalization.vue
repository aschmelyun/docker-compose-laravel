<template>
  <b-card-code title="Internationalization">
    <b-card-text>
      <span>By default </span>
      <code>&lt;b-form-datepicker&gt;</code>
      <span> will use the browser's default locale, but you can specify the locale (or locales) to use via the </span>
      <code>locale</code>
      <span>prop.</span>
    </b-card-text>

    <div>
      <!-- select locale -->
      <label for="example-locales">Locale:</label>
      <b-form-select
        id="example-locales"
        v-model="locale"
        :options="locales"
        class="mb-1"
      />

      <!-- start weekday -->
      <label for="example-weekdays">Start weekday:</label>
      <b-form-select
        id="example-weekdays"
        v-model="weekday"
        :options="weekdays"
        class="mb-1"
      />

      <!-- Show decade navigation -->
      <div>
        <b-form-checkbox
          v-model="showDecadeNav"
          switch
          inline
          class="my-1"
        >
          Show decade navigation buttons
        </b-form-checkbox>

        <!-- Hide calendar header -->
        <b-form-checkbox
          v-model="hideHeader"
          switch
          inline
          class="my-1"
        >
          Hide calendar header
        </b-form-checkbox>
      </div>

      <!-- datapicker -->
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
    </div>

    <template #code>
      {{ codeInternationalization }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormDatepicker, BFormSelect, BFormCheckbox, BCardText,
} from 'bootstrap-vue'
import { codeInternationalization } from './code'

export default {
  components: {
    BCardCode,
    BFormDatepicker,
    BFormSelect,
    BCardText,
    BFormCheckbox,
  },
  data() {
    return {
      value: '',
      locale: 'en-US',
      showDecadeNav: false,
      hideHeader: false,
      codeInternationalization,
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
    }
  },
}
</script>
