<template>
  <layout-horizontal>

    <router-view />

    <app-customizer
      v-if="showCustomizer"
      slot="customizer"
    />
  </layout-horizontal>

</template>

<script>
import LayoutHorizontal from '@core/layouts/layout-horizontal/LayoutHorizontal.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import { $themeConfig } from '@themeConfig'

export default {
  components: {
    LayoutHorizontal,
    AppCustomizer,
  },
  data() {
    return {
      showCustomizer: $themeConfig.layout.customizer,
    }
  },
}
</script>
