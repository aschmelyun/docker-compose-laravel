<template>
  <b-row>
    <b-col cols="12">
      <alert-default />
      <alert-title />
      <alert-color />
      <alert-icon />
      <alert-auto-dismiss />
      <alert-v-model-support />
      <alert-animation />
      <alert-example />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import AlertDefault from './AlertDefault.vue'
import AlertTitle from './AlertTitle.vue'
import AlertIcon from './AlertIcon.vue'
import AlertColor from './AlertColor.vue'
import AlertAutoDismiss from './AlertAutoDismiss.vue'
import AlertVModelSupport from './AlertVModelSupport.vue'
import AlertAnimation from './AlertAnimation.vue'
import AlertExample from './AlertExample.vue'

export default {
  components: {
    BRow,
    BCol,

    AlertDefault,
    AlertTitle,
    AlertIcon,
    AlertColor,
    AlertAutoDismiss,
    AlertVModelSupport,
    AlertAnimation,
    AlertExample,
  },
}
</script>
