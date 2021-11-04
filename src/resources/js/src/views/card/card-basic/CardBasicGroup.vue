<template>
  <b-row>
    <b-col cols="12">
      <h6 class="my-3 text-muted">
        Card Groups
      </h6>
    </b-col>
    <b-col cols="12">
      <b-card-group class="mb-0">

        <!-- card 1 -->
        <b-card
          :img-src="require('@/assets/images/slider/01.jpg')"
          img-alt="Card image cap"
          img-top
          no-body
        >
          <b-card-body>
            <b-card-title>Card title</b-card-title>
            <b-card-text>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </b-card-text>
          </b-card-body>
          <b-card-footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </b-card-footer>
        </b-card>

        <!-- card 2 -->
        <b-card
          :img-src="require('@/assets/images/slider/05.jpg')"
          img-alt="Card image cap"
          img-top
          no-body
        >
          <b-card-body>
            <b-card-title>Card title</b-card-title>
            <b-card-text>
              This card has supporting text below as a natural lead-in to additional content.
            </b-card-text>
          </b-card-body>
          <b-card-footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </b-card-footer>
        </b-card>

        <!-- card 3 -->
        <b-card
          :img-src="require('@/assets/images/slider/03.jpg')"
          img-alt="Card image cap"
          img-top
          no-body
        >
          <b-card-body>
            <b-card-title>Card title</b-card-title>
            <b-card-text>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            </b-card-text>
          </b-card-body>
          <b-card-footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </b-card-footer>
        </b-card>
      </b-card-group>
    </b-col>
  </b-row>
</template>

<script>
import {
  BRow, BCol, BCardGroup, BCard, BCardText, BCardFooter, BCardBody, BCardTitle,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCardGroup,
    BCard,
    BCardText,
    BCardFooter,
    BCardBody,
    BCardTitle,
  },
}
</script>
