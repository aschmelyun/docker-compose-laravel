<template>
  <b-card-code title="Custom Icon">
    <l-map
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />

      <!-- Use default icon -->
      <l-marker :lat-lng="[47.41322, -1.219482]" />

      <!-- Use icon given in icon property -->
      <l-marker
        :lat-lng="[47.41322, -1.209482]"
        :icon="icon"
      />

      <!-- Create image icon (icon) from l-icon tag -->
      <l-marker :lat-lng="[47.41322, -1.199482]">
        <l-icon>
          <b-img
            :src="require('@/assets/images/misc/leaf-red.png')"
            height="50"
          />
        </l-icon>
      </l-marker>
    </l-map>

    <template #code>
      {{ codeCustomIcon }}
    </template>
  </b-card-code>
</template>

<script>

/* eslint-disable global-require */
import { BImg } from 'bootstrap-vue'
import BCardCode from '@/@core/components/b-card-code/BCardCode.vue'
import {
  LMap, LTileLayer, LMarker, LIcon,
} from 'vue2-leaflet'
import { latLng, icon, Icon } from 'leaflet'
import { codeCustomIcon } from './code'

// eslint-disable-next-line no-underscore-dangle
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

export default {
  name: 'Icon',
  components: {
    BImg,
    BCardCode,
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  data() {
    return {
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon: icon({
        iconUrl: require('@/assets/images/misc/leaf-green.png'),
        iconSize: [50, 50],
        iconAnchor: [16, 37],
      }),
      codeCustomIcon,
    }
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
.vue2leaflet-map{
  &.leaflet-container{
    height: 350px;
  }
}
</style>
