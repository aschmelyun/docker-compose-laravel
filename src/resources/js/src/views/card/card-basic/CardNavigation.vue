<template>
  <section id="card-navigation">
    <h5 class="mt-3 mb-2">
      Navigation
    </h5>
    <b-row>

      <!-- pill tabs inside card -->
      <b-col md="6">
        <b-card class="text-center">
          <b-tabs
            pills
            nav-class="mb-3"
          >
            <b-tab
              title="Home"
              active
            >
              <b-card-title>Special title treatment</b-card-title>
              <b-card-text>
                With supporting text below as a natural lead-in to additional content
              </b-card-text>
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                variant="outline-primary"
              >
                Go home
              </b-button>
            </b-tab>
            <b-tab title="Profile">
              <b-card-title>Special title treatment</b-card-title>
              <b-card-text>
                With supporting text below as a natural lead-in to additional content
              </b-card-text>
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                variant="outline-primary"
              >
                Go home
              </b-button>
            </b-tab>
            <b-tab
              title="Disable"
              disabled
            />
          </b-tabs>
        </b-card>
      </b-col>

      <b-col md="6">
        <b-card class="text-center">
          <b-tabs nav-class="mb-3">
            <b-tab
              title="Home"
              active
            >
              <b-card-title>Special title treatment</b-card-title>
              <b-card-text>
                With supporting text below as a natural lead-in to additional content
              </b-card-text>
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                variant="outline-primary"
              >
                Go home
              </b-button>
            </b-tab>
            <b-tab title="Profile">
              <b-card-title>Special title treatment</b-card-title>
              <b-card-text>
                With supporting text below as a natural lead-in to additional content
              </b-card-text>
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                variant="outline-primary"
              >
                Go home
              </b-button>
            </b-tab>
            <b-tab
              title="Disable"
              disabled
            />
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import {
  BRow, BCol, BCard, BTab, BTabs, BCardText, BCardTitle, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BTab,
    BTabs,
    BCardText,
    BCardTitle,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
