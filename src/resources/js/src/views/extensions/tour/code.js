export const codeTour = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="tourStart"
    >
      Start Tour
    </b-button>

    <app-tour :steps="steps" />
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import AppTour from '@core/components/app-tour/AppTour.vue'

export default {
  name: 'ShepherdExample',
  components: {
    BButton,
    AppTour,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      steps: [
        {
          target: '#tour-card',
          header: {
            title: 'Card',
          },
          content: 'This card contains demo for the tour.',
        },
        {
          target: '#tour-card .icon-code',
          header: {
            title: 'View demo Source',
          },
          content: 'If you ever find your self confused, you can click on this code icon to check the source of current demo.',
        },
        {
          target: '#tour-card .btn',
          header: {
            title: 'Trigger Tour',
          },
          content: 'You can click on this button to trigger the tour.',
        },
      ],
    }
  },
  methods: {

    // tour steps
    tourStart() {
      this.$tours.vuexyTour.start()
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/tour.scss';
</style>
`
export const codedefault = 'defaul'
