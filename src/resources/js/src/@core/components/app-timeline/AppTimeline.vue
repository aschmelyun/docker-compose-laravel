<template>
  <ul
    v-bind="$attrs"
    class="app-timeline"
    v-on="$listeners"
  >
    <slot />
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app-timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  margin-left: 1rem;
}
</style>
