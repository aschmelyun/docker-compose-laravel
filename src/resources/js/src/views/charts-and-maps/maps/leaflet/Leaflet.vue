<template>
  <b-row>
    <b-col cols="12">
      <leaflet-basic />
      <leaflet-marker-circle-polygon />
      <leaflet-popup />
      <leaflet-geo-jSON />
      <leaflet-group />
      <leaflet-custom-icon />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import LeafletBasic from './LeafletBasic.vue'
import LeafletMarkerCirclePolygon from './LeafletMarkerCirclePolygon.vue'
import LeafletPopup from './LeafletPopup.vue'
import LeafletGeoJSON from './LeafletGeoJSON.vue'
import LeafletGroup from './LeafletGroup.vue'
import LeafletCustomIcon from './LeafletCustomIcon.vue'

export default {
  components: {
    BRow,
    BCol,

    LeafletBasic,
    LeafletMarkerCirclePolygon,
    LeafletPopup,
    LeafletGeoJSON,
    LeafletGroup,
    LeafletCustomIcon,
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/map-leaflet.scss';
</style>
