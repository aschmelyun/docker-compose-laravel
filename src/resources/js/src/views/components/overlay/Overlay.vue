<template>
  <b-row>
    <b-col cols="12">
      <overlay-basic />
      <overlay-backdrop />
      <overlay-fade />
      <overlay-spinner />
      <overlay-corner-round />
      <overlay-custom-content />
      <overlay-no-wrap-mode />
      <overlay-form />
      <overlay-busy-state />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import OverlayBasic from './OverlayBasic.vue'
import OverlayBackdrop from './OverlayBackdrop.vue'
import OverlayFade from './OverlayFade.vue'
import OverlaySpinner from './OverlaySpinner.vue'
import OverlayCornerRound from './OverlayCornerRound.vue'
import OverlayCustomContent from './OverlayCustomContent.vue'
import OverlayNoWrapMode from './OverlayNoWrapMode.vue'
import OverlayForm from './OverlayForm.vue'
import OverlayBusyState from './OverlayBusyState.vue'

export default {
  components: {
    BRow,
    BCol,

    OverlayBasic,
    OverlayBackdrop,
    OverlayFade,
    OverlaySpinner,
    OverlayCornerRound,
    OverlayCustomContent,
    OverlayNoWrapMode,
    OverlayForm,
    OverlayBusyState,
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/components/variables-dark';

.dark-layout {
  div ::v-deep .card .card-body {
      .b-overlay {
        .bg-light {
          background-color: $theme-dark-body-bg !important;
        }
      }
  }
}
</style>
