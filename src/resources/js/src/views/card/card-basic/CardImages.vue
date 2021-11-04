<template>
  <section id="card-images">
    <h5 class="mt-3 mb-2">
      Images
    </h5>
    <b-row>

      <!-- image top -->
      <b-col
        md="6"
        xl="4"
      >
        <b-card
          :img-src="require('@/assets/images/slider/06.jpg')"
          img-top
          img-alt="card img"
          title="Card title"
          class="mb-3"
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </b-card-text>
          <b-card-text>
            <small class="text-muted">Last updated 3 mins ago</small>
          </b-card-text>
        </b-card>
      </b-col>

      <!-- img bottom -->
      <b-col
        md="6"
        xl="4"
      >
        <b-card
          :img-src="require('@/assets/images/slider/09.jpg')"
          img-bottom
          img-alt="card img"
          title="Card title"
          class="mb-3"
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </b-card-text>
          <b-card-text>
            <small class="text-muted">Last updated 3 mins ago</small>
          </b-card-text>
        </b-card>
      </b-col>

      <!-- img overlay -->
      <b-col
        md="6"
        xl="4"
      >
        <b-card
          :img-src="require('@/assets/images/slider/10.jpg')"
          overlay
          text-variant="white"
          img-alt="card img"
          body-class="bg-overlay"
        >
          <b-card-title class="text-white">
            Card title
          </b-card-title>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </b-card-text>
          <b-card-text>
            <small class="text-muted">Last updated 3 mins ago</small>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BCardTitle,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    BCardTitle,
  },
}
</script>
