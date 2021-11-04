<template>
  <b-card-code
    title="Row & Col Style Option"
    no-body
  >
    <b-table
      :items="items"
      :fields="fields"
      :tbody-tr-class="rowClass"
      class="rounded-bottom"
    />

    <template #code>
      {{ codeRowColStyle }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BTable } from 'bootstrap-vue'
import { codeRowColStyle } from './code'

export default {
  components: {
    BCardCode,
    BTable,
  },
  data() {
    return {
      fields: ['first_name', 'last_name', { key: 'age', variant: 'success' }],
      items: [
        {
          age: 40, first_name: 'Dickerson', last_name: 'Macdonald', status: 'awesome',
        },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 89, first_name: 'Olenka', last_name: 'Brawley' },
        { age: 89, first_name: 'Vernon', last_name: 'Perford' },
      ],
      codeRowColStyle,
    }
  },
  methods: {
    rowClass(item, type) {
      const colorClass = 'table-success'
      if (!item || type !== 'row') { return }

      // eslint-disable-next-line consistent-return
      if (item.status === 'awesome') { return colorClass }
    },
  },
}
</script>
