<template>
  <b-card-code title="Badges">
    <b-card-text>
      <span>Use Utility classes </span>
      <code>.d-flex .justify-content-between align-items-center</code>
      <span> to create space between badge and your content.</span>
    </b-card-text>

    <!-- badge -->
    <b-list-group>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <span>Biscuit jelly beans macaroon danish pudding.</span>
        <b-badge
          variant="primary"
          pill
          class="badge-round"
        >
          8
        </b-badge>
      </b-list-group-item>

      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <span>chocolate cheesecake candy</span>
        <b-badge
          variant="primary"
          pill
          class="badge-round"
        >
          7
        </b-badge>
      </b-list-group-item>

      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <span>Oat cake icing pastry pie carrot</span>
        <b-badge
          variant="primary"
          pill
          class="badge-round"
        >
          6
        </b-badge>
      </b-list-group-item>
    </b-list-group>

    <template #code>
      {{ codeListGroupBadge }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BListGroup, BListGroupItem, BBadge, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeListGroupBadge } from './code'

export default {
  components: {
    BCardCode,
    BBadge,
    BListGroup,
    BCardText,
    BListGroupItem,
  },
  data() {
    return {
      codeListGroupBadge,
    }
  },
}
</script>
