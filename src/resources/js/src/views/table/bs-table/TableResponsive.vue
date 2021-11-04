<template>
  <b-card-code
    title="Table Responsive"
    no-body
  >
    <b-table
      responsive
      :items="items"
      :fields="fields"
      class="mb-0"
    >
      <template #cell(Phone)="data">
        <span class="text-nowrap">
          {{ data.value }}
        </span>
      </template>

      <!-- Optional default data cell scoped slot -->
      <template #cell()="data">
        {{ data.value }}
      </template>
    </b-table>

    <template #code>
      {{ codeResponsive }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BTable } from 'bootstrap-vue'
import { codeResponsive } from './code'

export default {
  components: {
    BCardCode,
    BTable,
  },
  data() {
    return {
      fields: [
        'id',
        'first_name',
        'email',
        'gender',
        'ip_address',
        {
          key: 'Phone', label: 'Phone',
        },
        'Country',
      ],
      items: [
        {
          id: '1',
          first_name: 'Marybelle',
          last_name: 'Della Scala',
          email: 'mdellascala0@opensource.org',
          gender: 'Female',
          ip_address: '85.254.7.181',
          Phone: '+86 350 673 7985',
          Country: 'China',

        },
        {
          id: '2',
          first_name: 'Octavia',
          last_name: 'Tohill',
          email: 'otohill1@google.co.jp',
          gender: 'Female',
          ip_address: '93.70.144.212',
          Phone: '+63 938 283 0018',
          Country: 'Philippines',
        },
        {
          id: '3',
          first_name: 'Jennie',
          last_name: 'Geroldi',
          email: 'jgeroldi2@slideshare.net',
          gender: 'Female',
          ip_address: '76.145.147.212',
          Phone: '+81 235 674 0110',
          Country: 'Japan',
        },
        {
          id: '4',
          first_name: 'Vanya',
          last_name: 'Wharby',
          email: 'vwharby3@mozilla.org',
          gender: 'Male',
          ip_address: '139.234.247.155',
          Phone: '+30 349 556 7375',
          Country: 'Greece',
        },
        {
          id: '5',
          first_name: 'Olenka',
          last_name: 'Brawley',
          email: 'obrawleyc@adobe.com',
          gender: 'Female',
          ip_address: '166.183.163.155',
          Phone: '+62 841 824 0990',
          Country: 'Indonesia',
        },
      ],
      codeResponsive,
    }
  },
}
</script>
