<template>
  <b-row>
    <b-col cols="12">
      <quill-editor-snow />
      <quill-editor-bubble />
      <quill-editor-custom />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import QuillEditorSnow from './QuillEditorSnow.vue'
import QuillEditorBubble from './QuillEditorBubble.vue'
import QuillEditorCustom from './QuillEditorCustom.vue'

export default {
  components: {
    BRow,
    BCol,

    QuillEditorSnow,
    QuillEditorBubble,
    QuillEditorCustom,
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/quill.scss';
</style>
