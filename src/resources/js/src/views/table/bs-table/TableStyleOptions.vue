<template>
  <b-card-code
    title="Table Style Option"
    no-body
  >
    <b-card-body>

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
    </b-card-body>

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

    <template #code>
      {{ codeStyleOption }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BTable, BFormGroup, BFormRadio, BFormCheckbox, BFormRadioGroup, BCardBody,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { codeStyleOption } from './code'

export default {
  components: {
    BCardCode,
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
      codeStyleOption,
    }
  },
}
</script>
