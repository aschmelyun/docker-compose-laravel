<template>
  <b-row>
    <b-col cols="12">
      <h6 class="my-3 text-muted">
        Card Columns
      </h6>
    </b-col>

    <b-col md="12">
      <b-card-group columns>

        <!-- card image top -->
        <b-card
          :img-src="require('@/assets/images/slider/06.jpg')"
          img-top
          img-alt="card img"
          title="Card title that wraps to a new line"
          class="position-static"
        >
          <b-card-text>
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </b-card-text>
        </b-card>

        <!-- only text-->
        <b-card class="position-static">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </b-card>

        <!-- card image top -->
        <b-card
          :img-src="require('@/assets/images/slider/01.jpg')"
          img-alt="card img"
          img-top
          title="Card title"
          class="position-static"
        >
          <b-card-text>This card has supporting text below as a natural lead-in to additional content.</b-card-text>
          <b-card-text>
            <small class="text-muted">Last updated 3 mins ago</small>
          </b-card-text>
        </b-card>

        <!-- primary bg card -->
        <b-card
          text-variant="white"
          bg-variant="primary"
          align="center"
          class="position-static"
        >
          <blockquote class="blockquote  mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
            <footer class="blockquote-footer text-white opacity-75">
              <small>
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </b-card>

        <!-- algin center card -->
        <b-card
          align="center"
          class="position-static"
          title="Card title"
        >
          <b-card-text>
            This card has supporting text below as a natural lead-in to additional content.
          </b-card-text>
          <b-card-text><small class="text-muted">Last updated 3 mins ago</small></b-card-text>
        </b-card>

        <!-- overlay card -->
        <b-card
          overlay
          :img-src="require('@/assets/images/slider/02.jpg')"
          img-alt="overlay img"
          class="position-static"
        />

        <!-- right align card -->
        <b-card
          align="right"
          class="position-static"
        >
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </b-card>

        <!-- card title  -->
        <b-card
          title="Card title"
          class="position-static"
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
          </b-card-text>
          <b-card-text>
            <small class="text-muted">Last updated 3 mins ago</small>
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-col>
  </b-row>
</template>

<script>
import {
  BRow, BCol, BCardGroup, BCard, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BCardGroup,
    BCard,
    BCardText,
  },
  directives: {
    Ripple,
  },
}
</script>
