<template>
  <b-card-code title="Buttons">
    <b-card-text>
      <span>Or if you prefer </span>
      <code>&lt;button&gt;</code>
      <span> elements over links, set the </span>
      <code>button</code>
      <span> prop to true.</span>
    </b-card-text>

    <b-list-group>
      <b-list-group-item
        active
        button
      >
        Button item
      </b-list-group-item>
      <b-list-group-item button>
        Button item in list
      </b-list-group-item>
      <b-list-group-item button>
        I am a button
      </b-list-group-item>
      <b-list-group-item
        button
        disabled
      >
        Disabled button
      </b-list-group-item>
      <b-list-group-item button>
        This is a button too
      </b-list-group-item>
    </b-list-group>

    <template #code>
      {{ codeListGroupActionButton }}
    </template>
  </b-card-code>
</template>

<script>
import { BListGroup, BListGroupItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeListGroupActionButton } from './code'

export default {
  components: {
    BCardCode,
    BListGroup,
    BListGroupItem,
    BCardText,
  },
  data() {
    return {
      codeListGroupActionButton,
    }
  },
}
</script>
