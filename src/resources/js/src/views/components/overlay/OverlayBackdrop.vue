<template>
  <b-card-code title="Overlay backdrop color">
    <b-card-text>
      <span>You can control the backdrop background color via the </span>
      <code>variant</code>
      <span> prop. The variant is translated into one of Bootstrap's </span>
      <code>background variant utility classes</code>
      <span>. Control the opacity of the backdrop via the</span>
      <code>opacity</code>
      <span> prop (opacity values can range from </span>
      <code>0</code>
      <span> to </span>
      <code>1</code>
      <span>). And background blurring can be controlled via the </span>
      <code>blur</code>
      <span> prop.</span>
    </b-card-text>

    <b-row>
      <b-col
        lg="6"
        aria-controls="overlay-background"
      >
        <b-form-group
          label="Variant"
          label-for="bg-variant"
          label-cols-sm="4"
          label-cols-lg="12"
        >
          <b-form-select
            id="bg-variant"
            v-model="variant"
            :options="variants"
          />
        </b-form-group>
        <b-form-group
          label="Opacity"
          label-for="bg-opacity"
          label-cols-sm="4"
          label-cols-lg="12"
        >
          <b-input-group>
            <b-form-input
              id="bg-opacity"
              v-model="opacity"
              type="range"
              number
              min="0"
              max="1"
              step="0.01"
            />
            <b-input-group-append
              is-text
              class="text-monospace"
            >
              {{ opacity.toFixed(2) }}
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <b-form-group
          label="Blur"
          label-for="bg-blur"
          label-cols-sm="4"
          label-cols-lg="12"
          class="mb-2 mb-lg-0"
        >
          <b-form-select
            id="bg-blur"
            v-model="blur"
            :options="blurs"
          />
        </b-form-group>
      </b-col>
      <b-col lg="6">
        <b-overlay
          id="overlay-background"
          show
          :variant="variant"
          :opacity="opacity"
          :blur="blur"
          rounded="sm"
        >
          <b-card
            title="Card with overlay"
            aria-hidden="true"
            class="mb-0"
          >
            <b-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </b-card-text>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              disabled
              variant="primary"
            >
              Button
            </b-button>
          </b-card>
        </b-overlay>
      </b-col>
    </b-row>

    <template #code>
      {{ codeBackdrop }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BRow,
  BCol,
  BFormGroup,
  BFormSelect,
  BFormInput,
  BInputGroupAppend,
  BCard,
  BOverlay,
  BButton,
  BCardText,
  BInputGroup,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeBackdrop } from './code'

export default {
  components: {
    BCardCode,
    BRow,
    BCol,
    BFormGroup,
    BFormSelect,
    BFormInput,
    BInputGroupAppend,
    BCard,
    BOverlay,
    BButton,
    BCardText,
    BInputGroup,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      variant: 'light',
      opacity: 0.85,
      blur: '2px',
      variants: ['transparent', 'white', 'light', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      blurs: [{ text: 'None', value: '' }, '1px', '2px', '5px', '0.5em', '1rem'],
      codeBackdrop,
    }
  },
}
</script>
