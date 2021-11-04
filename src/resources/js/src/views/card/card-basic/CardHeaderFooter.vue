<template>
  <div>
    <h6 class="my-2 text-muted">
      Header and Footer
    </h6>
    <b-row>
      <b-col
        md="6"
        lg="4"
      >

        <!-- card 1 -->
        <b-card
          header="Featured"
          title="Special title treatment"
        >
          <b-card-text>
            With supporting text below as a natural lead-in to additional content natural lead-in to additional content.
          </b-card-text>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
          >
            Go somewhere
          </b-button>
        </b-card>
      </b-col>

      <!-- card 2 -->
      <b-col
        md="6"
        lg="4"
      >
        <b-card
          header="Quote"
          header-tag="h6"
        >
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, Integer posuere erat a ante Integer posuere erat a anteconsectetur.
            </p>
            <footer class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>

      <!-- card 3 -->
      <b-col
        md="6"
        lg="4"
      >
        <b-card
          header="Featured"
          title="Special title treatment"
          footer="2 days ago"
          class="text-center"
          footer-class="text-muted"
        >
          <b-card-text>
            With supporting text below as a natural.
          </b-card-text>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
          >
            Go somewhere
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BCardText, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCard, BRow, BCol, BCardText, BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
