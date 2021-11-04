<template>
  <b-card-code title="Link Badge">
    <b-card-text>
      <span>Use </span>
      <code>href</code>
      <span> prop (links) or </span>
      <code>to</code>
      <span> prop (router-links) for link badges.</span>
    </b-card-text>

    <b-badge
      href="#"
      variant="primary"
    >
      <feather-icon
        icon="LinkIcon"
        class="mr-25"
      />
      <span>Link Badge</span>
    </b-badge>

    <template #code>
      {{ codeLink }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BBadge, BCardText } from 'bootstrap-vue'
import { codeLink } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BBadge,
  },
  data() {
    return {
      codeLink,
    }
  },
}
</script>
