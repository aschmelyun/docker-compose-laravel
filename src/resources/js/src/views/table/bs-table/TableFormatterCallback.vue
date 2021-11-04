<template>
  <b-card-code
    title="Formatter callback"
    no-body
  >
    <b-table
      :fields="fields"
      :items="items"
      responsive
    >
      <template #cell(name)="data">

        <!-- `data.value` is the value after formatted by the Formatter -->
        <b-link :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">
          {{ data.value }}
        </b-link>
      </template>
    </b-table>

    <template #code>
      {{ codeFormatterCallback }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BTable, BLink } from 'bootstrap-vue'
import { codeFormatterCallback } from './code'

export default {
  components: {
    BCardCode,
    BTable,
    BLink,
  },
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Full Name',
          formatter: value => `${value.first} ${value.last}`,
        },
        // A regular column
        'age',
        {
          // A regular column with custom formatter
          key: 'sex',
          formatter: value => value.charAt(0).toUpperCase(),
        },
        {
          // A virtual column with custom formatter
          key: 'birthYear',
          label: 'Birth Year',
          formatter: (value, key, item) => new Date().getFullYear() - item.age,
        },
      ],
      items: [
        { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
        { name: { first: 'Clemens', last: 'Doe' }, sex: 'Female', age: 36 },
        { name: { first: 'Rubin', last: 'Kincade' }, sex: 'male', age: 73 },
        { name: { first: 'Shirley', last: 'Partridge' }, sex: 'female', age: 62 },
        { name: { first: 'Olenka', last: 'Brawley' }, sex: 'female', age: 26 },
      ],
      codeFormatterCallback,
    }
  },
}
</script>
