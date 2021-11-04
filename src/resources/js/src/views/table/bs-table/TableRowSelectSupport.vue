<template>
  <b-card-code
    title="Row select support"
    no-body
  >
    <b-card-body>
      <b-form-group
        label="Selection mode:"
        label-cols-md="3"
        label-align-sm="right"
        class="mb-0"
      >
        <v-select
          v-model="selectMode"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="modes"
        />
      </b-form-group>
    </b-card-body>

    <!-- table -->
    <b-table
      ref="selectableTable"
      selectable
      :select-mode="selectMode"
      :items="items"
      :fields="fields"
      responsive
      class="mb-0"
      @row-selected="onRowSelected"
    >
      <template #cell(avatar)="data">
        <b-avatar :src="data.value" />
      </template>

      <template #cell(status)="data">
        <b-badge :variant="status[1][data.value]">
          {{ status[0][data.value] }}
        </b-badge>
      </template>
    </b-table>

    <!-- buttons -->
    <b-card-body class="demo-inline-spacing pt-0">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="selectAllRows"
      >
        Select all
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="clearSelected"
      >
        Clear selected
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="selectThirdRow"
      >
        Select 3rd row
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="unselectThirdRow"
      >
        Unselect 3rd row
      </b-button>
    </b-card-body>

    <template #code>
      {{ codeRowSelectSupport }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BTable, BButton, BFormGroup, BAvatar, BBadge, BCardBody,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { codeRowSelectSupport } from './code'

export default {
  components: {
    BCardCode,
    BTable,
    BButton,
    BFormGroup,
    BAvatar,
    BCardBody,
    BBadge,
    vSelect,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      modes: ['multi', 'single', 'range'],
      fields: ['id', { key: 'avatar', label: 'Avatar' }, 'full_name', 'post', 'email', 'city', 'start_date', 'salary', 'age', 'experience', { key: 'status', label: 'Status' }],
      /* eslint-disable global-require */
      items: [
        {
          id: 1,

          avatar: require('@/assets/images/avatars/10-small.png'),
          full_name: "Korrie O'Crevy",
          post: 'Nuclear Power Engineer',
          email: 'kocrevy0@thetimes.co.uk',
          city: 'Krasnosilka',
          start_date: '09/23/2016',
          salary: '$23896.35',
          age: '61',
          experience: '1 Year',
          status: 2,
        },
        {
          id: 2,
          avatar: require('@/assets/images/avatars/1-small.png'),
          full_name: 'Bailie Coulman',
          post: 'VP Quality Control',
          email: 'bcoulman1@yolasite.com',
          city: 'Hinigaran',
          start_date: '05/20/2018',
          salary: '$13633.69',
          age: '63',
          experience: '3 Years',
          status: 2,
        },
        {
          id: 3,
          avatar: require('@/assets/images/avatars/9-small.png'),
          full_name: 'Stella Ganderton',
          post: 'Operator',
          email: 'sganderton2@tuttocitta.it',
          city: 'Golcowa',
          start_date: '03/24/2018',
          salary: '$13076.28',
          age: '66',
          experience: '6 Years',
          status: 5,
        },
        {
          id: 4,
          avatar: require('@/assets/images/avatars/3-small.png'),
          full_name: 'Dorolice Crossman',
          post: 'Cost Accountant',
          email: 'dcrossman3@google.co.jp',
          city: 'Paquera',
          start_date: '12/03/2017',
          salary: '$12336.17',
          age: '22',
          experience: '2 Years',
          status: 2,
        },
        {
          id: 5,
          avatar: require('@/assets/images/avatars/4-small.png'),
          full_name: 'Harmonia Nisius',
          post: 'Senior Cost Accountant',
          email: 'hnisius4@gnu.org',
          city: 'Lucan',
          start_date: '08/25/2017',
          salary: '$10909.52',
          age: '33',
          experience: '3 Years',
          status: 2,
        },
        {
          id: 6,
          avatar: require('@/assets/images/avatars/5-small.png'),
          full_name: 'Genevra Honeywood',
          post: 'Geologist',
          email: 'ghoneywood5@narod.ru',
          city: 'Maofan',
          start_date: '06/01/2017',
          salary: '$17803.80',
          age: '61',
          experience: '1 Year',
          status: 1,
        },
        {
          id: 7,
          avatar: require('@/assets/images/avatars/7-small.png'),
          full_name: 'Eileen Diehn',
          post: 'Environmental Specialist',
          email: 'ediehn6@163.com',
          city: 'Lampuyang',
          start_date: '10/15/2017',
          salary: '$18991.67',
          age: '59',
          experience: '9 Years',
          status: 3,
        },
        {
          id: 8,
          avatar: require('@/assets/images/avatars/9-small.png'),
          full_name: 'Richardo Aldren',
          post: 'Senior Sales Associate',
          email: 'raldren7@mtv.com',
          city: 'Skoghall',
          start_date: '11/05/2016',
          salary: '$19230.13',
          age: '55',
          experience: '5 Years',
          status: 3,
        },
        {
          id: 9,
          avatar: require('@/assets/images/avatars/2-small.png'),
          full_name: 'Allyson Moakler',
          post: 'Safety Technician',
          email: 'amoakler8@shareasale.com',
          city: 'Mogilany',
          start_date: '12/29/2018',
          salary: '$11677.32',
          age: '39',
          experience: '9 Years',
          status: 5,
        },
        {
          id: 10,
          avatar: require('@/assets/images/avatars/6-small.png'),
          full_name: 'Merline Penhalewick',
          post: 'Junior Executive',
          email: 'mpenhalewick9@php.net',
          city: 'Kanuma',
          start_date: '04/19/2019',
          salary: '$15939.52',
          age: '23',
          experience: '3 Years',
          status: 2,
        },
      ],
      /* eslint-disable global-require */
      status: [{
        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],
      selectMode: 'multi',
      selected: [],
      codeRowSelectSupport,
    }
  },
  methods: {
    onRowSelected(items) {
      this.selected = items
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows()
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected()
    },
    selectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.selectRow(2)
    },
    unselectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.unselectRow(2)
    },
  },
}
</script>

<style lang="scss">
.b-table-selectable{
  .feather{
    font-size: 1.3rem;
  }
}

</style>
