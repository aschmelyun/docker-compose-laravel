<template>
  <section id="card-style-variation">
    <h5 class="mt-3 mb-2">
      Style Variation
    </h5>
    <b-row>
      <!-- solid color -->
      <b-col
        v-for="(data,index) in solidColor"
        :key="index"
        md="6"
        xl="4"
      >
        <b-card
          :bg-variant="data.bg"
          text-variant="white"
        >
          <b-card-title class="text-white">
            {{ data.title }}
          </b-card-title>
          <b-card-text>
            Some quick example text to build on the card title and make up.
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <!-- outline color -->
    <b-row>
      <b-col
        v-for="(data,index) in solidColor"
        :key="index"
        md="6"
        xl="4"
      >
        <b-card
          :border-variant="data.bg"
          :title="data.title"
          bg-variant="transparent"
          class="shadow-none"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up.
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
  data() {
    return {
      solidColor: [
        { bg: 'primary', title: 'Primary card title' },
        { bg: 'secondary', title: 'Secondary card title' },
        { bg: 'success', title: 'Success card title' },
        { bg: 'danger', title: 'Danger card title' },
        { bg: 'warning', title: 'Warning card title' },
        { bg: 'info', title: 'Info card title' },
      ],
    }
  },
}
</script>
