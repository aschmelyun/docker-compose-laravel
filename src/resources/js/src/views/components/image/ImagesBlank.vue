<template>
  <b-card-code title="Blank (or solid color) images">
    <b-card-text class="mb-0">
      <code>&lt;b-img&gt;</code>
      <span>
        provides built-in support for generating blank images (transparent by default) of any width and height, by
        setting the
      </span>
      <code>blank</code>
      <span> prop, and specifying </span>
      <code>width</code>
      <span> and </span>
      <code>height</code>
      <span>values (in pixels). You can apply any of the other </span>
      <code>&lt;b-img&gt;</code>
      <span> props to change the style/behavior of the generated image.</span>
    </b-card-text>

    <div class="demo-inline-spacing">

      <!--transparent img -->
      <b-img
        v-bind="mainProps"
        rounded
        alt="Transparent image"
        class="d-inline-block border"
      />

      <!-- primary color  -->
      <b-img
        v-bind="mainProps"
        blank-color="#5A8DEE"
        rounded
        alt="HEX shorthand color image (#777)"
        class="d-inline-block"
      />

      <!-- secondary -->
      <b-img
        v-bind="mainProps"
        blank-color="#82868b"
        rounded
        alt="Named color image (red)"
        class="d-inline-block"
      />

      <!-- success -->
      <b-img
        v-bind="mainProps"
        blank-color="#39DA8A"
        rounded
        alt="Named color image (black)"
        class="d-inline-block"
      />

      <!-- warning -->
      <b-img
        v-bind="mainProps"
        blank-color="#FDAC41"
        alt="RGBa color image"
        rounded
        class="d-inline-block"
      />

      <!-- danger -->
      <b-img
        v-bind="mainProps"
        blank-color="#FF5B5C"
        rounded
        alt="HEX color image"
        class="d-inline-block"
      />

      <!-- info -->
      <b-img
        v-bind="mainProps"
        blank-color="#00CFDD"
        rounded
        alt="HEX shorthand color (#88f)"
        class="d-inline-block"
      />
    </div>

    <template #code>
      {{ codeBlank }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BImg, BCardText } from 'bootstrap-vue'
import { codeBlank } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BImg,
  },
  data() {
    return {
      mainProps: {
        blank: true,
        width: 75,
        height: 75,
        class: 'm1',
      },
      codeBlank,
    }
  },
}
</script>
