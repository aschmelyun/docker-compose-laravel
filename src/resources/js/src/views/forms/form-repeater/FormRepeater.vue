<template>
  <div>
    <b-row>
      <b-col cols="12">
        <form-repeater-basic />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import FormRepeaterBasic from './FormRepeaterBasic.vue'

export default {
  components: {
    BRow,
    BCol,

    FormRepeaterBasic,
  },
}
</script>
