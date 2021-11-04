<template>
  <b-row>
    <b-col cols="12">
      <toastification-variant />
      <toastification-position />
      <toastification-icon />
      <toastification-timeout />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import ToastificationVariant from './ToastificationVariant.vue'
import ToastificationPosition from './ToastificationPosition.vue'
import ToastificationIcon from './ToastificationIcon.vue'
import ToastificationTimeout from './ToastificationTimeout.vue'

export default {
  components: {
    BRow,
    BCol,

    ToastificationVariant,
    ToastificationPosition,
    ToastificationIcon,
    ToastificationTimeout,
  },
}
</script>
