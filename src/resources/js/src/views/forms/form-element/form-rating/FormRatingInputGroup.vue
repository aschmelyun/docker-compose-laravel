<template>
  <b-card-code
    title="Input Group"
  >
    <b-card-text>
      <span>The following is an example of placing </span>
      <code>&lt;b-form-rating&gt;</code>
      <span> in an input group:</span>
    </b-card-text>

    <div>
      <b-input-group>
        <b-input-group-prepend>
          <b-button @click="value = null">
            Clear
          </b-button>
        </b-input-group-prepend>
        <b-form-rating
          v-model="value"
          inline
          color="#ff8800"
        />
        <b-input-group-append>
          <b-input-group-text class="justify-content-center px-1">
            {{ value }}
          </b-input-group-text>
        </b-input-group-append>
      </b-input-group>
    </div>

    <template #code>
      {{ codeInputGroup }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormRating,
  BInputGroup,
  BInputGroupPrepend,
  BButton,
  BInputGroupAppend,
  BInputGroupText,
  BCardText,
} from 'bootstrap-vue'
import { codeInputGroup } from './code'

export default {
  components: {
    BCardCode,
    BFormRating,
    BInputGroup,
    BInputGroupPrepend,
    BButton,
    BInputGroupAppend,
    BInputGroupText,
    BCardText,
  },
  data() {
    return {
      value: 3,
      codeInputGroup,
    }
  },
}
</script>
