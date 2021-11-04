import { $themeBreakpoints } from '@themeConfig'

export default {
  watch: {
    $route() {
      if (this.$store.state.app.windowWidth < $themeBreakpoints.xl) {
        this.isVerticalMenuActive = false
      }
    },
  },
}
