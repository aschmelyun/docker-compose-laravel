<template>
  <b-card-code title="Popup Map">
    <l-map
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer :url="url" />
      <l-marker :lat-lng="markerLatLng">
        <l-popup>You're here!</l-popup>
      </l-marker>
    </l-map>

    <template #code>
      {{ codePopup }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@/@core/components/b-card-code/BCardCode.vue'
import {
  LMap, LTileLayer, LMarker, LPopup,
} from 'vue2-leaflet'
import { codePopup } from './code'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    BCardCode,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.313220, -1.319482],
      markerLatLng: [47.313220, -1.319482, { draggable: 'true' }],
      codePopup,
    }
  },
}
</script>

<style lang="scss">
.vue2leaflet-map{
  &.leaflet-container{
    height: 350px;
  }
}
</style>
