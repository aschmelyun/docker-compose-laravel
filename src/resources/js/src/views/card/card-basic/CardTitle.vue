<template>
  <b-row class="match-height">
    <b-col
      md="6"
      lg="4"
    >
      <b-card
        :img-src="require('@/assets/images/slider/04.jpg')"
        img-alt="Card image cap"
        img-top
        title="Card title"
      >

        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </b-card-text>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Go Somewhere
        </b-button>
      </b-card>
    </b-col>
    <b-col
      md="6"
      lg="4"
    >
      <b-card no-body>
        <b-card-body>
          <b-card-title>Card title</b-card-title>
          <b-card-sub-title>Support card subtitle</b-card-sub-title>
        </b-card-body>
        <b-img
          fluid
          :src="require('@/assets/images/slider/03.jpg')"
          alt="Card image cap"
        />
        <b-card-body>
          <b-card-text>Bear claw sesame snaps gummies chocolate.</b-card-text>
          <b-link class="card-link">
            Card link
          </b-link>
          <b-link class="card-link">
            Another link
          </b-link>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col
      md="6"
      lg="4"
    >
      <b-card
        title="Card title"
        sub-title="Support card subtitle"
      >
        <b-img
          fluid
          class="mb-2"
          :src="require('@/assets/images/slider/06.jpg')"
        />
        <b-card-text>Bear claw sesame snaps gummies chocolate.</b-card-text>
        <b-link class="card-link">
          Card link
        </b-link>
        <b-link class="card-link">
          Another link
        </b-link>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import {
  BCard, BCardText, BButton, BRow, BCol, BImg, BCardBody, BCardTitle, BCardSubTitle, BLink,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCard,
    BCardText,
    BButton,
    BCardBody,
    BCardTitle,
    BCardSubTitle,
    BRow,
    BCol,
    BLink,
    BImg,
  },
  directives: {
    Ripple,
  },
}
</script>
