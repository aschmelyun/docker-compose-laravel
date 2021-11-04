<template>
  <b-row>
    <b-col cols="12">
      <breadcrumb-default />
      <breadcrumb-separator />
      <breadcrumb-slot />
      <breadcrumb-alignment />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import BreadcrumbDefault from './BreadcrumbDefault.vue'
import BreadcrumbSeparator from './BreadcrumbSeparator.vue'
import BreadcrumbSlot from './BreadcrumbSlot.vue'
import BreadcrumbAlignment from './BreadcrumbAlignment.vue'

export default {
  components: {
    BRow,
    BCol,

    BreadcrumbDefault,
    BreadcrumbSeparator,
    BreadcrumbSlot,
    BreadcrumbAlignment,
  },
}
</script>
