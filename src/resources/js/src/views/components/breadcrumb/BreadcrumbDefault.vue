<template>
  <b-card-code title="Default">
    <b-breadcrumb
      :items="items"
    />

    <template #code>
      {{ codeDefault }}
    </template>
  </b-card-code>
</template>

<script>
import { BBreadcrumb } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeDefault } from './code'

export default {
  components: {
    BCardCode,
    BBreadcrumb,
  },
  data() {
    return {
      codeDefault,
      items: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Library',
        },
        {
          text: 'Data',
          active: true,
        },
      ],
    }
  },
}
</script>
