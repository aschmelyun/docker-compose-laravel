<template>
  <b-card-code
    title="Table Light Component"
    no-body
  >
    <b-table-lite
      hover
      responsive
      :items="items"
    />

    <template #code>
      {{ codeLight }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BTableLite } from 'bootstrap-vue'
import { codeLight } from './code'

export default {
  components: {
    BCardCode,
    BTableLite,
  },
  data() {
    return {
      items: [
        {
          age: 40,
          first_name: 'Dickerson',
          last_name: 'Macdonald',
          Occupation: 'Job',
        },
        {
          age: 21,
          first_name: 'Larsen',
          last_name: 'Shaw',
          Occupation: 'Job',
        },
        {
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson',
          Occupation: 'Bussiness',
        },
        {
          age: 38,
          first_name: 'Jami',
          last_name: 'Carney',
          Occupation: 'Bussiness',
        },
        {
          age: 40,
          first_name: 'James',
          last_name: 'Thomson',
          Occupation: 'Job',
        },
      ],
      codeLight,
    }
  },
}
</script>
