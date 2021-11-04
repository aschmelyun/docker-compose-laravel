<template>
  <b-card-code
    title="Internationalization"
  >
    <b-card-text>
      <span>By default </span>
      <code>&lt;b-form-timepicker&gt;</code>
      <span> will use the browser's default locale, but you can specify the locale (or locales) to use via the </span>
      <code>locale</code>
      <span>
        prop. The prop accepts either a single locale string, or an array of locale strings (listed in order of most
        preferred locale to least prefered).
      </span>
    </b-card-text>

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
        <b-card-text>
          Value: <b>'{{ value }}'</b>
        </b-card-text>
        <b-card-text class="mb-0">
          Context:
        </b-card-text>
        <pre class="small">{{ context }}</pre>
      </b-col>
    </b-row>

    <template #code>
      {{ codeInternationalization }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormTimepicker, BRow, BCol, BFormSelect, BCardText,
} from 'bootstrap-vue'
import { codeInternationalization } from './code'

export default {
  components: {
    BCardCode,
    BFormTimepicker,
    BRow,
    BCol,
    BFormSelect,
    BCardText,
  },
  data() {
    return {
      value: '',
      context: null,
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
          value: '',
          context: null,
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
    }
  },
  methods: {
    onContext(ctx) {
      this.context = ctx
    },
  },
}
</script>
