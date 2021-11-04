<template>
  <b-row class="match-height">
    <b-col md="6">
      <media-left-align />
    </b-col>
    <b-col md="6">
      <media-right-align />
    </b-col>
    <b-col md="6">
      <media-left-align-border />
    </b-col>
    <b-col md="6">
      <media-right-align-border />
    </b-col>
    <b-col cols="12">
      <media-nested />
    </b-col>
    <b-col cols="12">
      <media-vertical-align />
    </b-col>
    <b-col cols="12">
      <media-no-body />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import MediaLeftAlign from './MediaLeftAlign.vue'
import MediaRightAlign from './MediaRightAlign.vue'
import MediaLeftAlignBorder from './MediaLeftAlignBorder.vue'
import MediaRightAlignBorder from './MediaRightAlignBorder.vue'
import MediaNested from './MediaNested.vue'
import MediaVerticalAlign from './MediaVerticalAlign.vue'
import MediaNoBody from './MediaNoBody.vue'

export default {
  components: {
    BRow,
    BCol,

    MediaLeftAlign,
    MediaRightAlign,
    MediaLeftAlignBorder,
    MediaRightAlignBorder,
    MediaNested,
    MediaVerticalAlign,
    MediaNoBody,
  },
}
</script>
