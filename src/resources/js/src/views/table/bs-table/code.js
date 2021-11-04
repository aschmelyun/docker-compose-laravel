export const codeBasic = `
<template>
  <b-table responsive="sm" :items="items"/>
</template>

<script>
import { BTable } from 'bootstrap-vue'

export default {
  components: {
    BTable,
  },
  data() {
    return {
      items: [
        {
          age: 40, first_name: 'Dickerson', last_name: 'Macdonald', Occupation: 'Job',
        },
        {
          age: 21, first_name: 'Larsen', last_name: 'Shaw', Occupation: 'Job',
        },
        {
          age: 89, first_name: 'Geneva', last_name: 'Wilson', Occupation: 'Bussiness',
        },
        {
          age: 38, first_name: 'Jami', last_name: 'Carney', Occupation: 'Bussiness',
        },
        {
          age: 40, first_name: 'James', last_name: 'Thomson', Occupation: 'Job',
        },
      ],
    }
  },
}
</script>
`

export const codeStyleOption = `
<template>
  <div>
    <!-- checkbox -->
    <b-form-group>
      <label class="mb-0">Table Options</label>
      <div class="demo-inline-spacing">
        <b-form-checkbox
          v-model="striped"
        >
          Striped
        </b-form-checkbox>
        <b-form-checkbox
          v-model="bordered"
        >
          Bordered
        </b-form-checkbox>
        <b-form-checkbox
          v-model="borderless"
        >
          Borderless
        </b-form-checkbox>
        <b-form-checkbox
          v-model="outlined"
        >
          Outlined
        </b-form-checkbox>
        <b-form-checkbox
          v-model="small"
        >
          Small
        </b-form-checkbox>
        <b-form-checkbox
          v-model="hover"
        >
          Hover
        </b-form-checkbox>
        <b-form-checkbox
          v-model="dark"
        >
          Dark
        </b-form-checkbox>
        <b-form-checkbox
          v-model="fixed"
        >
          Fixed
        </b-form-checkbox>
        <b-form-checkbox
          v-model="footClone"
        >
          Foot Clone
        </b-form-checkbox>
        <b-form-checkbox
          v-model="noCollapse"
        >
          No border collapse
        </b-form-checkbox>
      </div>
    </b-form-group>

    <!-- radio -->
    <b-form-group
      label="Head Variant"
      label-cols-lg="2"
    >
      <b-form-radio-group
        v-model="headVariant"
      >
        <b-form-radio
          :value="null"
        >
          None
        </b-form-radio>
        <b-form-radio
          value="light"
        >
          Light
        </b-form-radio>
        <b-form-radio
          value="dark"
        >
          Dark
        </b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <!-- variant select -->
    <b-form-group
      label="Table Variant"
      label-for="table-style-variant"
      label-cols-lg="2"
      class="mb-0"
    >
      <v-select
        v-model="tableVariant"
        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
        label="tableVariants"
        :options="tableVariants"
      />
    </b-form-group>

    <!-- table -->
    <b-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :items="items"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
    />
  </div>
</template>

<script>
import {
  BTable, BFormGroup, BFormRadio, BFormCheckbox, BFormRadioGroup, BCardBody,
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BTable,
    BFormGroup,
    BCardBody,
    vSelect,
    BFormRadio,
    BFormCheckbox,
    BFormRadioGroup,
  },
  data() {
    return {
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 89, first_name: 'Olenka', last_name: 'Brawley' },
        { age: 89, first_name: 'Vernon', last_name: 'Perford' },
      ],
      tableVariants: [
        'none',
        'primary',
        'secondary',
        'info',
        'danger',
        'warning',
        'success',
        'light',
        'dark',
      ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: 'none',
      noCollapse: false,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
</style>
`

export const codeRowColStyle = `
<template>
  <b-table
    :items="items"
    :fields="fields"
    :tbody-tr-class="rowClass"
    class="rounded-bottom"
  />
</template>

<script>
import { BTable } from 'bootstrap-vue'

export default {
  components: {
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
`

export const codeResponsive = `
<template>
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
</template>

<script>
import { BTable } from 'bootstrap-vue'

export default {
  components: {
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
    }
  },
}
</script>
`

export const codeFormatterCallback = `
<template>
   <b-table
    :fields="fields"
    :items="items"
  >
    <template #cell(name)="data">
      <a :href="\`#\${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}\`">{{ data.value }}</a>
    </template>
  </b-table>
</template>

<script>
import { BTable } from 'bootstrap-vue'

export default {
  components: {
    BTable,
  },
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Full Name',
          formatter: value => \`\${value.first} \${value.last}\`,
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
    }
  },
}
</script>
`

export const codeDataRendering = `
<template>
  <div>
    <b-table
      small
      :fields="fields"
      :items="items"
      responsive="sm"
    >
      <!-- A virtual column -->
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>

      <!-- A custom formatted column -->
      <template #cell(name)="data">
        {{ data.value.first+' - '+ data.value.last }}
      </template>

      <!-- A custom formatted column -->
      <template #cell(Popularity)="data">
        <b-progress
          :value="data.value.value"
          max="100"
          :variant="data.value.variant"
          striped
        />
      </template>

      <template #cell(order_status)="data">
        <b-badge
          pill
          :variant="data.value.variant"
        >
          {{ data.value.status }}
        </b-badge>
      </template>

      <!-- A virtual composite column -->
      <template #cell(price)="data">
        {{ '$'+data.value }}
      </template>

      <!-- Optional default data cell scoped slot -->
      <template #cell()="data">
        {{ data.value }}
      </template>
    </b-table>
  </div>
</template>

<script>
import { BTable, BProgress, BBadge } from 'bootstrap-vue'

export default {
  components: {
    BTable,
    BProgress,
    BBadge,
  },
  data() {
    return {
      fields: [
        // A virtual column that doesn't exist in items
        'index',
        // A column that needs custom formatting
        { key: 'name', label: 'Name' },
        'Category',
        // A regular column
        { key: 'Popularity', label: 'Popularity' },
        // A regular column
        { key: 'order_status', label: 'Order Status' },
        // A virtual column made up from two fields
        { key: 'price', label: 'Price' },
      ],
      items: [
        {
          name: { first: 'Fitbit', last: 'Activity Tracker' },
          Category: 'Fitness',
          order_status: { status: 'Delivered', variant: 'success' },
          Popularity: { value: 50, variant: 'success' },
          price: 99.99,
        },
        {
          name: { first: 'Fitbit ', last: 'Flex Wireless Activity' },
          Category: 'Fitness',
          order_status: { status: 'Pending', variant: 'primary' },
          Popularity: { value: 36, variant: 'primary' },
          price: 89.85,
        },
        {
          name: { first: 'Fitbit', last: 'Sleep Tracker Wristband' },
          Category: 'Fitness',
          order_status: { status: 'Delivered', variant: 'success' },
          Popularity: { value: 76, variant: 'success' },
          price: 65.25,
        },
        {
          name: { first: 'Fitbit', last: 'Sleep Wristband' },
          Category: 'Fitness',
          order_status: { status: 'On Hold', variant: 'warning' },
          Popularity: { value: 55, variant: 'warning' },
          price: 75.55,
        },
        {
          name: { first: 'Fitbit', last: 'Clip for Zip Wireless Activity Trackers' },
          Category: 'Fitness',
          order_status: { status: 'Canceled', variant: 'danger' },
          Popularity: { value: 75, variant: 'danger' },
          price: 105.55,
        },
      ],
    }
  },
}
</script>
`

export const codeSticky = `
<template>
  <div>
    <div class="d-flex mb-2">
      <b-form-checkbox
        v-model="stickyHeader"
        class="vs-checkbox-con mr-1"
        plain
      >
        <span class="vs-checkbox">
          <span class="vs-checkbox--check">
            <i class="vs-icon feather icon-check" />
          </span>
        </span>
        <span class="vs-label">Sticky header</span>
      </b-form-checkbox>
      <b-form-checkbox
        v-model="noCollapse"
        class="vs-checkbox-con"
        plain
      >
        <span class="vs-checkbox">
          <span class="vs-checkbox--check">
            <i class="vs-icon feather icon-check" />
          </span>
        </span>
        <span class="vs-label">No border collapse</span>
      </b-form-checkbox>
    </div>
    <b-table
      :sticky-header="stickyHeader"
      :no-border-collapse="noCollapse"

      responsive
      :items="items"
      :fields="fields"
    >
      <template #head(id)>
        <div class="text-nowrap">
          Row ID
        </div>
      </template>

      <template #head()="scope">
        <div class="text-nowrap">
          {{ scope.label }}
        </div>
      </template>

      <template #cell(avatar)="data">
        <b-avatar
          class="mr-1"
          :src="data.value"
        />
      </template>

      <template #cell(status)="data">
        <b-badge :variant="status[1][data.value]">
          {{ status[0][data.value] }}
        </b-badge>
      </template>

      <template #cell()="data">
        <span class="text-nowrap">{{ data.value }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import {
  BTable, BFormCheckbox, BAvatar, BBadge,
} from 'bootstrap-vue'

export default {
  components: {
    BTable,
    BFormCheckbox,
    BAvatar,
    BBadge,
  },
  data() {
    return {
      stickyHeader: true,
      noCollapse: false,
      fields: [
        {
          key: 'id', stickyColumn: true, isRowHeader: true, variant: 'primary',
        },
        {
          key: 'avatar', label: 'Avatar',
        },
        'full_name',
        { key: 'post', stickyColumn: true, variant: 'info' },
        'email',
        'city',
        'start_date',
        'salary',
        'age',
        'experience',
        { key: 'status', label: 'Status' },
      ],
      items: [
        {
          id: 1,
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
      status: [{
        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],
    }
  },
}
</script>
`

export const codeRowDetailsSupport = `
<template>
  <div>
    <b-table
      :items="items"
      :fields="fields"
      striped
      responsive
    >
      <template #cell(show_details)="row">
        <b-form-checkbox
          v-model="row.detailsShowing"
          plain
          class="vs-checkbox-con"
          @change="row.toggleDetails"
        >
          <span class="vs-checkbox">
            <span class="vs-checkbox--check">
              <i class="vs-icon feather icon-check" />
            </span>
          </span>
          <span class="vs-label">{{ row.detailsShowing ? 'Hide' : 'Show' }}</span>
        </b-form-checkbox>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col
              md="4"
              class="mb-1"
            >
              <strong>Full Name : </strong>{{ row.item.full_name }}
            </b-col>
            <b-col
              md="4"
              class="mb-1"
            >
              <strong>Post : </strong>{{ row.item.post }}
            </b-col>
            <b-col
              md="4"
              class="mb-1"
            >
              <strong>Email : </strong>{{ row.item.email }}
            </b-col>
            <b-col
              md="4"
              class="mb-1"
            >
              <strong>City : </strong>{{ row.item.city }}
            </b-col>
            <b-col
              md="4"
              class="mb-1"
            >
              <strong>Salary : </strong>{{ row.item.salary }}
            </b-col>
            <b-col
              md="4"
              class="mb-1"
            >
              <strong>Age : </strong>{{ row.item.age }}
            </b-col>
          </b-row>

          <b-button
            size="sm"
            variant="outline-secondary"
            @click="row.toggleDetails"
          >
            Hide Details
          </b-button>
        </b-card>
      </template>

      <template #cell(avatar)="data">
        <b-avatar :src="data.value" />
      </template>

       <template #cell(status)="data">
        <b-badge :variant="status[1][data.value]">
          {{ status[0][data.value] }}
        </b-badge>
      </template>
    </b-table>
  </div>
</template>

<script>
import {
  BTable, BFormCheckbox, BButton, BCard, BRow, BCol, BAvatar, BBadge,
} from 'bootstrap-vue'

export default {
  components: {
    BTable,
    BButton,
    BFormCheckbox,
    BCard,
    BRow,
    BCol,
    BBadge,
    BAvatar,
  },
  data() {
    return {
      fields: ['show_details', 'id', { key: 'avatar', label: 'Avatar' }, 'full_name', 'post', 'email', 'city', 'start_date', 'salary', 'age', 'experience', { key: 'status', label: 'Status' }],
      items: [
        {
          id: 1,
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
      status: [{
        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],
    }
  },
}
</script>
`

export const codeRowSelectSupport = `
<template>
  <div>
    <b-form-group
      label="Selection mode:"
      label-cols-md="4"
    >
      <!-- <b-form-select
        v-model="selectMode"
        :options="modes"
      /> -->
      <v-select
        v-model="selectMode"
        label="title"
        :options="modes"
      />
    </b-form-group>

    <b-table
      ref="selectableTable"
      selectable
      :select-mode="selectMode"
      :items="items"
      :fields="fields"
      responsive="sm"
      @row-selected="onRowSelected"
    >
      <!-- Example scoped slot for select state illustrative purposes -->
      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <i class="feather icon-disc primary" />
        </template>

        <template v-else>
          <i class="feather icon-circle" />
        </template>
      </template>

      <template #cell(avatar)="data">
        <b-avatar :src="data.value" />
      </template>

       <template #cell(status)="data">
        <b-badge :variant="status[1][data.value]">
          {{ status[0][data.value] }}
        </b-badge>
      </template>
    </b-table>

    <b-button
      size="sm"
      class="mr-1"
      variant="primary"
      @click="selectAllRows"
    >
      Select all
    </b-button>
    <b-button
      size="sm"
      class="mr-1"
      variant="primary"
      @click="clearSelected"
    >
      Clear selected
    </b-button>
    <b-button
      size="sm"
      variant="primary"
      class="mr-1"
      @click="selectThirdRow"
    >
      Select 3rd row
    </b-button>
    <b-button
      variant="primary"
      size="sm"
      class="mr-1"
      @click="unselectThirdRow"
    >
      Unselect 3rd row
    </b-button>
  </div>
</template>

<script>
import {
  BTable, BButton, BFormGroup, BAvatar, BBadge,
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BTable,
    BButton,
    BFormGroup,
    BAvatar,
    BBadge,
    vSelect,
  },
  data() {
    return {
      // selectedCheck: false,
      modes: ['multi', 'single', 'range'],
      fields: ['selected', 'id', { key: 'avatar', label: 'Avatar' }, 'full_name', 'post', 'email', 'city', 'start_date', 'salary', 'age', 'experience', { key: 'status', label: 'Status' }],
      items: [
        {
          id: 1,
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
          avatar: require('@/assets/images/avatars/5-small.png'),
          full_name: 'Genevra Honeywood',
          post: 'Geologist',
          email: 'ghoneywood5@narod.ru',
          city: 'Maofan',
          start_date: '06/01/2017',
          salary: '$17803.80',
          status: [{
        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],age: '61',
          experience: '1 Year',
          status: 1,
        },
        {
          id: 7,
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
      status: [{
        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],
      selectMode: 'multi',
      selected: [],
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
`

export const codeKitchenSink = `
<template>
  <b-row>
    <b-col
      md="2"
      sm="4"
      class="my-1"
    >
      <b-form-group
        class="mb-0"
      >
        <label class="d-inline-block text-sm-left mr-50">Per page</label>
        <b-form-select
          id="perPageSelect"
          v-model="perPage"
          size="sm"
          :options="pageOptions"
          class="w-50"
        />
      </b-form-group>
    </b-col>
    <b-col
      md="4"
      sm="8"
      class="my-1"
    >
      <b-form-group
        label="Sort"
        label-cols-sm="3"
        label-align-sm="right"
        label-size="sm"
        label-for="sortBySelect"
        class="mb-0"
      >
        <b-input-group size="sm">
          <b-form-select
            id="sortBySelect"
            v-model="sortBy"
            :options="sortOptions"
            class="w-75"
          >
            <template v-slot:first>
              <option value="">
                -- none --
              </option>
            </template>
          </b-form-select>
          <b-form-select
            v-model="sortDesc"
            size="sm"
            :disabled="!sortBy"
            class="w-25"
          >
            <option :value="false">
              Asc
            </option>
            <option :value="true">
              Desc
            </option>
          </b-form-select>
        </b-input-group>
      </b-form-group>
    </b-col>
    <b-col
      md="6"
      class="my-1"
    >
      <b-form-group
        label="Filter"
        label-cols-sm="3"
        label-align-sm="right"
        label-size="sm"
        label-for="filterInput"
        class="mb-0"
      >
        <b-input-group size="sm">
          <b-form-input
            id="filterInput"
            v-model="filter"
            type="search"
            placeholder="Type to Search"
          />
          <b-input-group-append>
            <b-button
              :disabled="!filter"
              @click="filter = ''"
            >
              Clear
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>

    <b-col cols="12">
      <b-table
        striped
        hover
        responsive
        :per-page="perPage"
        :current-page="currentPage"
        :items="items"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        :filter="filter"
        :filter-included-fields="filterOn"
        @filtered="onFiltered"
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
    </b-col>

    <b-col
      cols="12"
    >
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="center"
        size="sm"
        class="my-0"
      />
    </b-col>
  </b-row>
</template>

<script>
import {
  BTable, BAvatar, BBadge, BRow, BCol, BFormGroup, BFormSelect, BPagination, BInputGroup, BFormInput, BInputGroupAppend, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BTable,
    BAvatar,
    BBadge,
    BRow,
    BCol,
    BFormGroup,
    BFormSelect,
    BPagination,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
  },
  data() {
    return {
      perPage: 5,
      pageOptions: [3, 5, 10],
      totalRows: 1,
      currentPage: 1,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: '',
      },
      fields: [
        {
          key: 'id', label: 'Id',
        },
        {
          key: 'avatar', label: 'Avatar',
        },
        { key: 'full_name', label: 'Full Name', sortable: true },
        { key: 'post', label: 'Post', sortable: true },
        'email',
        'city',
        'start_date',
        'salary',
        'age',
        'experience',
        { key: 'status', label: 'Status', sortable: true },
      ],
      items: [
        {
          id: 1,
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
          // eslint-disable-next-line global-require
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
      status: [{
        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }))
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = \`Row index: \${index}\`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
  },
}
</script>
`

export const codeLight = `
<template>
  <b-table-lite
    hover
    :items="items"
  />
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BTableLite } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BTableLite,
  },
  data() {
    return {
      items: [
        {
          age: 40, first_name: 'Dickerson', last_name: 'Macdonald', Occupation: 'Job',
        },
        {
          age: 21, first_name: 'Larsen', last_name: 'Shaw', Occupation: 'Job',
        },
        {
          age: 89, first_name: 'Geneva', last_name: 'Wilson', Occupation: 'Bussiness',
        },
        {
          age: 38, first_name: 'Jami', last_name: 'Carney', Occupation: 'Bussiness',
        },
        {
          age: 40, first_name: 'James', last_name: 'Thomson', Occupation: 'Job',
        },
      ],
    }
  },
}
</script>
`

export const codeSimple = `
<template>
  <div>
    <b-table-simple
      hover
      small
      caption-top
      responsive
    >
      <caption>Items sold in August, grouped by Country and City:</caption>
      <colgroup><col><col></colgroup>
      <colgroup><col><col><col></colgroup>
      <colgroup><col><col></colgroup>
      <b-thead head-variant="light">
        <b-tr>
          <b-th colspan="2">
            Region
          </b-th>
          <b-th colspan="3">
            Clothes
          </b-th>
          <b-th colspan="2">
            Accessories
          </b-th>
        </b-tr>
        <b-tr>
          <b-th>Country</b-th>
          <b-th>City</b-th>
          <b-th>Trousers</b-th>
          <b-th>Skirts</b-th>
          <b-th>Dresses</b-th>
          <b-th>Bracelets</b-th>
          <b-th>Rings</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-th rowspan="3">
            Belgium
          </b-th>
          <b-th class="text-right">
            Antwerp
          </b-th>
          <b-td>56</b-td>
          <b-td>22</b-td>
          <b-td>43</b-td>
          <b-td variant="success">
            72
          </b-td>
          <b-td>23</b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-right">
            Gent
          </b-th>
          <b-td>46</b-td>
          <b-td variant="warning">
            18
          </b-td>
          <b-td>50</b-td>
          <b-td>61</b-td>
          <b-td variant="danger">
            15
          </b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-right">
            Brussels
          </b-th>
          <b-td>51</b-td>
          <b-td>27</b-td>
          <b-td>38</b-td>
          <b-td>69</b-td>
          <b-td>28</b-td>
        </b-tr>
        <b-tr>
          <b-th rowspan="2">
            The Netherlands
          </b-th>
          <b-th class="text-right">
            Amsterdam
          </b-th>
          <b-td variant="success">
            89
          </b-td>
          <b-td>34</b-td>
          <b-td>69</b-td>
          <b-td>85</b-td>
          <b-td>38</b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-right">
            Utrecht
          </b-th>
          <b-td>80</b-td>
          <b-td variant="danger">
            12
          </b-td>
          <b-td>43</b-td>
          <b-td>36</b-td>
          <b-td variant="warning">
            19
          </b-td>
        </b-tr>
      </b-tbody>
      <b-tfoot>
        <b-tr>
          <b-td
            colspan="7"
            variant="secondary"
            class="text-right"
          >
            Total Rows: <b>5</b>
          </b-td>
        </b-tr>
      </b-tfoot>
    </b-table-simple>
  </div>
</template>
`
