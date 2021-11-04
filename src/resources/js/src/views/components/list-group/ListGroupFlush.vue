<template>
  <b-card-code
    title="Flush"
  >
    <b-card-text>
      <span>Use </span>
      <code>flush</code>
      <span> prop for borderless list group.</span>
    </b-card-text>

    <b-list-group flush>
      <b-list-group-item>Sweet gummi bears gingerbread carrot</b-list-group-item>
      <b-list-group-item>Cake macaroon brownie wafer soufflé</b-list-group-item>
      <b-list-group-item>Jelly beans lemon drops</b-list-group-item>
      <b-list-group-item>Lollipop ice cream donut chupa chups</b-list-group-item>
      <b-list-group-item>Chocolate candy canes tootsie roll</b-list-group-item>
    </b-list-group>

    <template #code>
      {{ codeFlush }}
    </template>
  </b-card-code>
</template>

<script>
import { BListGroup, BListGroupItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeFlush } from './code'

export default {
  components: {
    BCardCode,
    BListGroup,
    BCardText,
    BListGroupItem,
  },

  data() {
    return {
      codeFlush,
    }
  },
}
</script>
