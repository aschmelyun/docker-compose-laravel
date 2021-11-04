<template>
  <div>
    <context-menu-simple />
    <context-menu-close-on-click />
  </div>
</template>

<script>
import ContextMenuSimple from './ContextMenuSimple.vue'
import ContextMenuCloseOnClick from './ContextMenuCloseOnClick.vue'

export default {
  components: {
    ContextMenuSimple,
    ContextMenuCloseOnClick,
  },
}
</script>

<style lang="scss" >
@import '~@core/scss/vue/libs/vue-context.scss';
</style>
