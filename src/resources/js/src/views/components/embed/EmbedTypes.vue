<template>
  <b-card-code title="Embed types">
    <b-card-text>
      <span>Supported embed types are iframe (default), video, embed and object, which translate to the standard HTML </span>
      <code>&lt;iframe&gt;</code>
      <span> , </span>
      <code>&lt;video&gt;</code>
      <span> , </span>
      <code>&lt;embed&gt;</code>
      <span> and </span>
      <code>&lt;object&gt;</code>
      <span> elements.</span>
    </b-card-text>

    <div>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        allowfullscreen
      />
    </div>

    <template #code>
      {{ codeTypes }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BEmbed, BCardText } from 'bootstrap-vue'
import { codeTypes } from './code'

export default {
  components: {
    BCardCode,
    BEmbed,
    BCardText,
  },
  data() {
    return { codeTypes }
  },
}
</script>
