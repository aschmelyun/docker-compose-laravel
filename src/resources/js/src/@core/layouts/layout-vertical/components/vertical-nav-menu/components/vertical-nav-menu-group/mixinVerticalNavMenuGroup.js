export default {
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.updateIsActive()
      },
    },
  },
}
