<template>
  <b-card-code title="GeoJSON Map">
    <l-map
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer :url="url" />
      <l-geo-json :geojson="geojson" />
    </l-map>

    <template #code>
      {{ codeGeoJSON }}
    </template>
  </b-card-code>
</template>

<script>
import { LMap, LTileLayer, LGeoJson } from 'vue2-leaflet'
import BCardCode from '@/@core/components/b-card-code/BCardCode.vue'
import { codeGeoJSON } from './code'

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    BCardCode,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.313220, -1.319482],
      geojson: null,
      codeGeoJSON,
    }
  },
  async created() {
    const response = await fetch('https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson')
    this.geojson = await response.json()
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
