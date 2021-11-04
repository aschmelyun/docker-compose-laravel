<template>
  <b-row>

    <!-- Link Badge -->
    <b-col md="6">
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
          pill
          variant="primary"
        >
          Primary
        </b-badge>

        <template #code>
          {{ codeLinkBadge }}
        </template>
      </b-card-code>
    </b-col>

    <!-- Block Badge -->
    <b-col md="6">
      <b-card-code title="Block Badge Pill">
        <b-card-text>
          <span>Use </span>
          <code>.d-block</code>
          <span> class with </span>
          <code>&lt;b-badge&gt;</code>
          <span>, to display pill badge as a block element.</span>
        </b-card-text>

        <b-badge
          href="#"
          class="d-block"
          pill
          variant="danger"
        >
          Block Badge Pill
        </b-badge>

        <template #code>
          {{ codeLinkBlock }}
        </template>
      </b-card-code>
    </b-col>

  </b-row>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BBadge, BRow, BCol, BCardText,
} from 'bootstrap-vue'
import { codeLinkBadge, codeLinkBlock } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BBadge,
    BRow,
    BCol,
  },
  data() {
    return {
      codeLinkBadge, codeLinkBlock,
    }
  },
}
</script>
