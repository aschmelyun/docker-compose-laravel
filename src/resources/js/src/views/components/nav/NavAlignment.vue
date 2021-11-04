<template>
  <b-card-code title="Alignment Nav">
    <b-card-text>
      <span>To align your </span>
      <code>&lt;b-nav-item&gt;</code>
      <span> components, use the </span>
      <code>align</code>
      <span> prop. Available values are </span>
      <code>left, center</code>
      <span> and </span>
      <code>right</code>
    </b-card-text>

    <div class="mb-2">
      <b-form-radio
        v-model="selected"
        name="some-radios"
        value="left"
        inline
      >
        Left
      </b-form-radio>
      <b-form-radio
        v-model="selected"
        name="some-radios"
        value="center"
        inline
      >
        Center
      </b-form-radio>
      <b-form-radio
        v-model="selected"
        name="some-radios"
        value="right"
        inline
      >
        Right
      </b-form-radio>
    </div>

    <b-nav :align="selected">
      <b-nav-item active>
        Active
      </b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Link with a long name </b-nav-item>
      <b-nav-item disabled>
        Disabled
      </b-nav-item>
    </b-nav>

    <template #code>
      {{ codeAlignment }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BNav, BNavItem, BFormRadio, BCardText,
} from 'bootstrap-vue'
import { codeAlignment } from './code'

export default {
  components: {
    BCardCode,
    BNav,
    BNavItem,
    BCardText,
    BFormRadio,
  },
  data() {
    return {
      selected: 'center',
      codeAlignment,
    }
  },
}
</script>
