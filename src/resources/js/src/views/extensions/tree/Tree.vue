<template>
  <div>
    <tree-dropdown />
    <tree-search-tree />
    <tree-async-tree />
  </div>
</template>

<script>
import TreeDropdown from './TreeDropdown.vue'
import TreeSearchTree from './TreeSearchTree.vue'
import TreeAsyncTree from './TreeAsyncTree.vue'

export default {
  components: {
    TreeDropdown,
    TreeSearchTree,
    TreeAsyncTree,
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/libs/tree.scss";
</style>
