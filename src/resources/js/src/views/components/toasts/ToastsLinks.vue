<template>
  <b-card-code title="Links">
    <b-card-text>
      <span>Optionally convert the toast body to a link (</span>
      <code>&lt;a&gt;</code>
      <span>) or </span>
      <code>&lt;router-link&gt;</code>
      <span> (or </span>
      <code>&lt;nuxt-link&gt;</code>
      <span>) via the href and to props respectively. When set, the entire toast body becomes a link.</span>
    </b-card-text>

    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="toast()"
    >
      Toast with link
    </b-button>

    <template #code>
      {{ codeLinks }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BButton, BCardText } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeLinks } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeLinks,
    }
  },
  methods: {
    toast() {
      this.$bvToast.toast('Toast with action link', {
        href: '#foo',
        title: 'Toast Link',
      })
    },
  },
}
</script>
