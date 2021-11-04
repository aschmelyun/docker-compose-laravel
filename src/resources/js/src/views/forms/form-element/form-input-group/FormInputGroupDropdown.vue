<template>
  <b-card-code title="Input Groups With Dropdown">
    <b-row>
      <b-col
        lg="6"
        class="mb-1"
      >
        <!-- dropdown in right side -->
        <b-input-group>
          <b-input-group-prepend>
            <b-dropdown
              text="Action"
              variant="outline-primary"
            >
              <b-dropdown-item>Action </b-dropdown-item>
              <b-dropdown-item>Another Action</b-dropdown-item>
              <b-dropdown-item>Something else here</b-dropdown-item>
              <b-dropdown-divider />
              <b-dropdown-item>Separated link</b-dropdown-item>
            </b-dropdown>
          </b-input-group-prepend>
          <b-form-input placeholder="Dropdown on left" />
        </b-input-group>
      </b-col>
      <b-col lg="6">

        <!-- dropdown in both side -->
        <b-input-group>
          <b-input-group-prepend>
            <b-dropdown variant="outline-primary">
              <template #button-content>
                <feather-icon icon="Edit2Icon" />
              </template>
              <b-dropdown-item>Action </b-dropdown-item>
              <b-dropdown-item>Another Action</b-dropdown-item>
              <b-dropdown-item>Something else here</b-dropdown-item>
              <b-dropdown-divider />
              <b-dropdown-item>Separated link</b-dropdown-item>
            </b-dropdown>
          </b-input-group-prepend>
          <b-form-input placeholder="Dropdown on both side" />
          <b-input-group-append>
            <b-dropdown
              text="Action"
              variant="outline-primary"
              right
            >
              <b-dropdown-item>Action </b-dropdown-item>
              <b-dropdown-item>Another Action</b-dropdown-item>
              <b-dropdown-item>Something else here</b-dropdown-item>
              <b-dropdown-divider />
              <b-dropdown-item>Separated link</b-dropdown-item>
            </b-dropdown>
          </b-input-group-append>

        </b-input-group>
      </b-col>
    </b-row>

    <template #code>
      {{ codeDropdown }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BInputGroup,
  BFormInput,
  BInputGroupPrepend,
  BInputGroupAppend,
  BDropdown,
  BDropdownItem,
  BDropdownDivider,
  BRow,
  BCol,
} from 'bootstrap-vue'
import { codeDropdown } from './code'

export default {
  components: {
    BCardCode,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BInputGroupAppend,
    BDropdownDivider,
    BDropdown,
    BDropdownItem,
    BRow,
    BCol,
  },
  data() {
    return {
      codeDropdown,
    }
  },
}
</script>
