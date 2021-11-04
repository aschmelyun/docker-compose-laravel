<template>
  <section id="card-text-alignment">
    <h5 class="mt-3 mb-2">
      Text Alignment
    </h5>
    <b-row>
      <!-- left align -->
      <b-col
        md="6"
        lg="4"
      >
        <b-card
          title="Special title treatment"
          class="mb-3"
        >
          <b-card-text>
            With supporting text below as a natural lead-in to additional content.
          </b-card-text>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
          >
            Go somewhere
          </b-button>
        </b-card>
      </b-col>

      <!-- center align -->
      <b-col
        md="6"
        lg="4"
      >
        <b-card
          title="Special title treatment"
          class="text-center"
        >
          <b-card-text>
            With supporting text below as a natural lead-in to additional content
          </b-card-text>
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
          >
            Go somewhere
          </b-button>
        </b-card>
      </b-col>

      <!-- right align -->
      <b-col
        md="6"
        lg="4"
      >
        <b-card
          class="text-right"
          title="Special title treatment"
        >
          <b-card-text>
            With supporting text below as a natural lead-in to additional content.
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
  </section>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow, BCol, BCard, BCardText, BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
