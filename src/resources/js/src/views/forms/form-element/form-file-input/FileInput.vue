<template>
  <b-row class="match-height">
    <b-col lg="6">
      <file-input-basic />
    </b-col>
    <b-col lg="6">
      <file-input-limiting />
    </b-col>
    <b-col lg="6">
      <file-input-multiple />
    </b-col>
    <b-col lg="6">
      <file-input-drag-drop />
    </b-col>
    <b-col lg="6">
      <file-input-formatter />
    </b-col>
    <b-col lg="6">
      <file-input-contextual-state />
    </b-col>
    <b-col lg="6">
      <file-input-directory />
    </b-col>
    <b-col lg="6">
      <file-input-slot />
    </b-col>
    <b-col lg="6">
      <file-input-size />
    </b-col>
    <b-col lg="6">
      <file-input-clearing />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import FileInputBasic from './FileInputBasic.vue'
import FileInputMultiple from './FileInputMultiple.vue'
import FileInputDragDrop from './FileInputDragDrop.vue'
import FileInputLimiting from './FileInputLimiting.vue'
import FileInputSize from './FileInputSize.vue'
import FileInputFormatter from './FileInputFormatter.vue'
import FileInputContextualState from './FileInputContextualState.vue'
import FileInputClearing from './FileInputClearing.vue'
import FileInputDirectory from './FileInputDirectory.vue'
import FileInputSlot from './FileInputSlot.vue'

export default {
  components: {
    BRow,
    BCol,

    FileInputBasic,
    FileInputMultiple,
    FileInputDragDrop,
    FileInputLimiting,
    FileInputSize,
    FileInputFormatter,
    FileInputContextualState,
    FileInputClearing,
    FileInputDirectory,
    FileInputSlot,
  },
}
</script>
