<template>
  <b-row>
    <b-col cols="12">
      <aspect-default />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import AspectDefault from './AspectDefault.vue'

export default {
  components: {
    BRow,
    BCol,
    AspectDefault,
  },
}
</script>
