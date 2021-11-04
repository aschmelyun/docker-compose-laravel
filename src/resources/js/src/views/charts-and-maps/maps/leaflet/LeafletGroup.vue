<template>
  <b-card-code title="Layer Group">
    <div>
      <b-button
        variant="outline-primary"
        @click="fitPolyline"
      >
        Fit map to polyline
      </b-button>

      <b-row class="mt-2">
        <b-col md="6">
          <b-form-group label="Contol Layers position: ">
            <b-form-select
              v-model="layersPosition"
              :options="Positions"
            />
          </b-form-group>

        </b-col>
        <b-col md="6">
          <b-form-group label="Attribution position:">
            <b-form-select
              v-model="attributionPosition"
              :options="Positions"
            />
          </b-form-group>
        </b-col>
      </b-row>

    </div>

    <!-- map -->
    <l-map
      :zoom.sync="zoom"
      :options="mapOptions"
      :center="center"
      :bounds="bounds"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      style="height: 500px; width: 100%"
    >
      <l-control-layers
        :position="layersPosition"
        :collapsed="false"
        :sort-layers="true"
      />
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        :token="token"
        layer-type="base"
      />
      <l-control-zoom :position="zoomPosition" />
      <l-control-attribution
        :position="attributionPosition"
        :prefix="attributionPrefix"
      />
      <l-control-scale :imperial="imperial" />
      <l-marker
        v-for="marker in markers"
        :key="marker.id"
        :visible="marker.visible"
        :draggable="marker.draggable"
        :lat-lng.sync="marker.position"
        :icon="marker.icon"
        @click="alert(marker)"
      >
        <l-popup :content="marker.tooltip" />
        <l-tooltip :content="marker.tooltip" />
      </l-marker>
      <l-layer-group
        layer-type="overlay"
        name="Layer polyline"
      >
        <l-polyline
          v-for="item in polylines"
          :key="item.id"
          :lat-lngs="item.points"
          :visible="item.visible"
          @click="alert(item)"
        />
      </l-layer-group>
      <l-layer-group
        v-for="item in stuff"
        :key="item.id"
        :visible.sync="item.visible"
        layer-type="overlay"
        name="Layer 1"
      >
        <l-layer-group :visible="item.markersVisible">
          <l-marker
            v-for="marker in item.markers"
            :key="marker.id"
            :visible="marker.visible"
            :draggable="marker.draggable"
            :lat-lng="marker.position"
            @click="alert(marker)"
          />
        </l-layer-group>
        <l-polyline
          :lat-lngs="item.polyline.points"
          :visible="item.polyline.visible"
          @click="alert(item.polyline)"
        />
      </l-layer-group>
    </l-map>

    <template #code>
      {{ codeLayerGroup }}
    </template>
  </b-card-code>
</template>

<script>

/* eslint-disable global-require */
import BCardCode from '@/@core/components/b-card-code/BCardCode.vue'
import {
  BButton, BFormSelect, BRow, BCol, BFormGroup,
} from 'bootstrap-vue'
import {
  LMap,
  LTileLayer,
  LMarker,
  LPolyline,
  LLayerGroup,
  LTooltip,
  LPopup,
  LControlZoom,
  LControlAttribution,
  LControlScale,
  LControlLayers,
} from 'vue2-leaflet'
import { latLngBounds, Icon } from 'leaflet'

import { codeLayerGroup } from './code'

// eslint-disable-next-line no-underscore-dangle
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})
/* eslint-disable global-require */
const markers1 = [
  {
    position: { lng: -1.219482, lat: 47.41322 },
    visible: true,
    draggable: true,
  },
  { position: { lng: -1.571045, lat: 47.457809 } },
  { position: { lng: -1.560059, lat: 47.739323 } },
  { position: { lng: -0.922852, lat: 47.886881 } },
  { position: { lng: -0.769043, lat: 48.231991 } },
  { position: { lng: 0.395508, lat: 48.268569 } },
  { position: { lng: 0.604248, lat: 48.026672 } },
  { position: { lng: 1.2854, lat: 47.982568 } },
  { position: { lng: 1.318359, lat: 47.894248 } },
  { position: { lng: 1.373291, lat: 47.879513 } },
  { position: { lng: 1.384277, lat: 47.798397 } },
  { position: { lng: 1.329346, lat: 47.754098 } },
  { position: { lng: 1.329346, lat: 47.680183 } },
  { position: { lng: 0.999756, lat: 47.635784 } },
  { position: { lng: 0.86792, lat: 47.820532 } },
  { position: { lng: 0.571289, lat: 47.820532 } },
  { position: { lng: 0.439453, lat: 47.717154 } },
  { position: { lng: 0.439453, lat: 47.61357 } },
  { position: { lng: -0.571289, lat: 47.487513 } },
  { position: { lng: -0.615234, lat: 47.680183 } },
  { position: { lng: -0.812988, lat: 47.724545 } },
  { position: { lng: -1.054688, lat: 47.680183 } },
  { position: { lng: -1.219482, lat: 47.41322 } },
]

const poly1 = [
  { lng: -1.219482, lat: 47.41322 },
  { lng: -1.571045, lat: 47.457809 },
  { lng: -1.560059, lat: 47.739323 },
  { lng: -0.922852, lat: 47.886881 },
  { lng: -0.769043, lat: 48.231991 },
  { lng: 0.395508, lat: 48.268569 },
  { lng: 0.604248, lat: 48.026672 },
  { lng: 1.2854, lat: 47.982568 },
  { lng: 1.318359, lat: 47.894248 },
  { lng: 1.373291, lat: 47.879513 },
  { lng: 1.384277, lat: 47.798397 },
  { lng: 1.329346, lat: 47.754098 },
  { lng: 1.329346, lat: 47.680183 },
  { lng: 0.999756, lat: 47.635784 },
  { lng: 0.86792, lat: 47.820532 },
  { lng: 0.571289, lat: 47.820532 },
  { lng: 0.439453, lat: 47.717154 },
  { lng: 0.439453, lat: 47.61357 },
  { lng: -0.571289, lat: 47.487513 },
  { lng: -0.615234, lat: 47.680183 },
  { lng: -0.812988, lat: 47.724545 },
  { lng: -1.054688, lat: 47.680183 },
  { lng: -1.219482, lat: 47.41322 },
]

const tileProviders = [
  {
    name: 'OpenStreetMap',
    visible: true,
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    name: 'OpenTopoMap',
    visible: false,
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution:
      'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  },
]

export default {
  name: 'Example',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolyline,
    LLayerGroup,
    LTooltip,
    LPopup,
    LControlZoom,
    LControlAttribution,
    LControlScale,
    LControlLayers,
    BButton,
    BFormSelect,
    BRow,
    BCol,
    BFormGroup,
    BCardCode,
  },
  data() {
    return {
      codeLayerGroup,
      center: [51.505, -0.09],
      opacity: 0.6,
      token: 'your token if using mapbox',
      mapOptions: {
        zoomControl: false,
        attributionControl: false,
        zoomSnap: true,
      },
      zoom: 3,
      minZoom: 1,
      maxZoom: 20,
      zoomPosition: 'topleft',
      attributionPosition: 'bottomright',
      layersPosition: 'topright',
      attributionPrefix: 'Vue2Leaflet',
      imperial: false,
      Positions: ['topleft', 'topright', 'bottomleft', 'bottomright'],
      tileProviders,
      markers: [
        {
          id: 'm1',
          position: { lat: 51.505, lng: -0.09 },
          tooltip: 'tooltip for marker1',
          draggable: true,
          visible: true,
        },
        {
          id: 'm2',
          position: { lat: 51.8905, lng: -0.09 },
          tooltip: 'tooltip for marker2',
          draggable: true,
          visible: false,
        },
        {
          id: 'm3',
          position: { lat: 51.005, lng: -0.09 },
          tooltip: 'tooltip for marker3',
          draggable: true,
          visible: true,
        },
        {
          id: 'm4',
          position: { lat: 50.7605, lng: -0.09 },
          tooltip: 'tooltip for marker4',
          draggable: true,
          visible: false,
        },
      ],
      polylines: [
        {
          id: 'p1',
          points: [
            { lat: 37.772, lng: -122.214 },
            { lat: 21.291, lng: -157.821 },
            { lat: -18.142, lng: -181.569 },
            { lat: -27.467, lng: -206.973 },
          ],
          visible: true,
        },
        {
          id: 'p2',
          points: [
            [-73.91, 40.78],
            [-87.62, 41.83],
            [-96.72, 32.76],
          ],
          visible: true,
        },
      ],
      stuff: [
        {
          id: 's1',
          markers: markers1,
          polyline: { points: poly1, visible: true },
          visible: true,
          markersVisible: true,
        },
      ],
      bounds: latLngBounds(
        { lat: 51.476483373501964, lng: -0.14668464136775586 },
        { lat: 51.52948330894063, lng: -0.019140238291583955 },
      ),
    }
  },
  methods: {
    alert(item) {
      // eslint-disable-next-line no-alert
      alert(`this is ${JSON.stringify(item)}`)
    },
    addMarker() {
      const newMarker = {
        position: { lat: 50.5505, lng: -0.09 },
        draggable: true,
        visible: true,
      }
      this.markers.push(newMarker)
    },
    removeMarker(index) {
      this.markers.splice(index, 1)
    },
    fitPolyline() {
      const bounds = latLngBounds(markers1.map(o => o.position))
      this.bounds = bounds
    },
  },
}
</script>
