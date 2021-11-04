<template>
  <b-card>
    <h5 class="mb-0">
      Latest Photos
    </h5>
    <b-row>
      <!-- latest photo loop -->
      <b-col
        v-for="data in latestImages"
        :key="data.img"
        md="4"
        cols="6"
        class="profile-latest-img"
      >
        <b-link>
          <b-img
            fluid
            rounded
            :src="data.img"
            :alt="data.img.slice(5)"
          />
        </b-link>
      </b-col>
      <!-- latest photo loop -->
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BRow, BCol, BLink, BImg,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BLink,
    BImg,
  },
  props: {
    latestImages: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
