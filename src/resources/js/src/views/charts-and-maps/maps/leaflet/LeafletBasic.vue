<template>
  <b-card-code title="Basic Map">
    <l-map
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer :url="url" />
      <l-circle
        :lat-lng="circle.center"
        :radius="circle.radius"
        :color="circle.color"
      />
    </l-map>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { LMap, LTileLayer, LCircle } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import { codeBasic } from './code'

export default {
  components: {
    LMap,
    LTileLayer,
    LCircle,
    BCardCode,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.313220, -1.319482],
      circle: {
        center: [47.413220, -1.0482],
        radius: 4500,
        color: '#EA5455',
      },
      codeBasic,
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
