<template>
  <div
    role="tablist"
    class="collapse-icon"
    :class="collapseClasses"
  >
    <slot />
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  props: {
    accordion: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'default',
    },
  },
  data() {
    return {
      collapseID: '',
    }
  },
  computed: {
    collapseClasses() {
      const classes = []

      // Collapse Type
      const collapseVariants = {
        default: 'collapse-default',
        border: 'collapse-border',
        shadow: 'collapse-shadow',
        margin: 'collapse-margin',
      }
      classes.push(collapseVariants[this.type])

      return classes
    },
  },
  created() {
    this.collapseID = uuidv4()
  },
}
</script>
