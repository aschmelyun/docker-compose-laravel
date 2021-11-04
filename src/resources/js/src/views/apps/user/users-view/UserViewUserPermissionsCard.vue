<template>
  <b-card
    no-body
  >
    <b-card-body>
      <b-card-title>Permissions</b-card-title>
      <b-card-sub-title>Permission according to roles</b-card-sub-title>
    </b-card-body>
    <b-table
      striped
      responsive
      :items="permissionsData"
      class="mb-0"
    >

      <template #cell(module)="data">
        {{ data.value }}
      </template>
      <template #cell()="data">
        <b-form-checkbox
          disabled
          :checked="data.value"
        />
      </template>

    </b-table>
  </b-card>
</template>

<script>
import {
  BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox,
} from 'bootstrap-vue'

export default {
  components: {
    BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox,
  },
  setup() {
    const permissionsData = [
      {
        module: 'Admin',
        read: true,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: 'Staff',
        read: false,
        write: true,
        create: false,
        delete: false,
      },
      {
        module: 'Author',
        read: true,
        write: false,
        create: true,
        delete: false,
      },
      {
        module: 'Contributor',
        read: false,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: 'User',
        read: false,
        write: false,
        create: false,
        delete: true,
      },
    ]

    return {
      permissionsData,
    }
  },
}
</script>

<style>

</style>
