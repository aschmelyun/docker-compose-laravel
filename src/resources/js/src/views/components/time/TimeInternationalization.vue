<template>
  <b-card-code title="Internationalization">
    <b-card-text>
      <span>You can specify the locale (or locales) to use via the </span>
      <code>locale</code>
      <span>
        prop.
      </span>
    </b-card-text>

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

    <template #code>
      {{ codeInternationalization }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BTime, BRow, BCol, BFormSelect, BCardText,
} from 'bootstrap-vue'
import { codeInternationalization } from './code'

export default {
  components: {
    BCardCode,
    BTime,
    BRow,
    BCol,
    BFormSelect,
    BCardText,
  },
  data() {
    return {
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
    }
  },
  methods: {
    onContext(ctx) {
      this.context = ctx
    },
  },
}
</script>
