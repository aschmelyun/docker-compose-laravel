<template>
  <b-card-code title="Disabled Items">
    <b-card-text>
      <span>Set the </span>
      <code>disabled</code>
      <span> prop on a </span>
      <code>&lt;b-list-group-item&gt;</code>
      <span> to make it appear disabled (also works with actionalable items. see below).</span>
    </b-card-text>

    <b-list-group>
      <b-list-group-item disabled>
        Cras justo odio
      </b-list-group-item>
      <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item>Morbi leo risus</b-list-group-item>
      <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
      <b-list-group-item>Vestibulum at eros</b-list-group-item>
    </b-list-group>

    <template #code>
      {{ codeListGroupDisable }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BListGroup, BListGroupItem, BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeListGroupDisable } from './code'

export default {
  components: {
    BCardCode,
    BListGroup,
    BListGroupItem,
    BCardText,
  },
  data() {
    return {
      codeListGroupDisable,
    }
  },
}
</script>
