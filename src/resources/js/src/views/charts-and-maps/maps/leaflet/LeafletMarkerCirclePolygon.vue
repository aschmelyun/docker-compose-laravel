<template>
  <b-card-code title="Marker, Circle & Polygon Map">
    <l-map
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer :url="url" />
      <l-marker :lat-lng="markerLatLng" />
      <l-circle
        :lat-lng="circle.center"
        :radius="circle.radius"
        :color="circle.color"
      />
      <l-polygon
        :lat-lngs="polygon.latlngs"
        :color="polygon.color"
      />
    </l-map>

    <template #code>
      {{ codeMarkerPolygon }}
    </template>
  </b-card-code>
</template>

<script>
/* eslint-disable global-require */
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  LMap, LTileLayer, LMarker, LCircle, LPolygon,
} from 'vue2-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { codeMarkerPolygon } from './code'

// eslint-disable-next-line no-underscore-dangle
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})
/* eslint-disable global-require */

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    BCardCode,
    LCircle,
    LPolygon,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 10,
      center: [47.313220, -1.319482],
      markerLatLng: [47.313220, -1.319482],
      circle: {
        center: [47.313220, -1.319482],
        radius: 4500,
        color: '#EA5455',
      },
      polygon: {
        latlngs: [[47.2263299, -1.6222], [47.21024000000001, -1.6270065], [47.1969447, -1.6136169], [47.18527929999999, -1.6143036], [47.1794457, -1.6098404], [47.1775788, -1.5985107], [47.1676598, -1.5753365], [47.1593731, -1.5521622], [47.1593731, -1.5319061], [47.1722111, -1.5143967], [47.1960115, -1.4841843], [47.2095404, -1.4848709], [47.2291277, -1.4683914], [47.2533687, -1.5116501], [47.2577961, -1.5531921], [47.26828069, -1.5621185], [47.2657179, -1.589241], [47.2589612, -1.6204834], [47.237287, -1.6266632], [47.2263299, -1.6222]],
        color: '#7367F0',
      },
      codeMarkerPolygon,
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
