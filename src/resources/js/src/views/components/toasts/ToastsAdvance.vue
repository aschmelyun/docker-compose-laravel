<template>
  <b-card-code title="Advanced usage">
    <b-card-text>
      <span>When using the </span>
      <code>this.$bvToast.toast(...)</code>
      <span>
        method for generating toasts, you may want the toast content to be more than just a string message. As mentioned
        in the Toasts on demand section above, you can pass arrays of
      </span>
      <code>VNodes</code>
      <span> as the message and title for more complex content.</span>
    </b-card-text>

    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="popToast"
    >
      Show Toast with custom content
    </b-button>

    <template #code>
      {{ codeAdvance }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
// eslint-disable-next-line
import { BButton, BSpinner,BCardText } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeAdvance } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
    // eslint-disable-next-line
    BSpinner,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      count: 0,
      codeAdvance,
    }
  },
  methods: {
    popToast() {
      // Use a shorter name for this.$createElement
      const h = this.$createElement
      // Increment the toast count
      this.count += 1
      // Create the message
      const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [
        h('b-spinner', { props: { type: 'grow', small: true } }),
        ' Flashy ',
        h('strong', 'toast'),
        ` message #${this.count} `,
        h('b-spinner', { props: { type: 'grow', small: true } }),
      ])
      // Create the title
      const vNodesTitle = h('div', { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] }, [
        h('strong', { class: 'mr-2' }, 'The Title'),
        h('small', { class: 'ml-auto font-italics' }, '5 minutes ago'),
      ])
      // Pass the VNodes as an array for message and title
      this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        solid: false,
        variant: 'info',
      })
    },
  },
}
</script>
