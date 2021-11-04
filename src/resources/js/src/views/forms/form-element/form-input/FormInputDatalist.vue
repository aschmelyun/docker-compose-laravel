<template>
  <b-card-code
    title="Datalist support"
  >
    <b-card-text>
      <span>Datalists are a native HTML tag </span>
      <code>&lt;datalist&gt;</code>
      <span> that contains a list of </span>
      <code>&lt;option&gt;</code>
      <span>
        tags. By assigning an ID to the datalist tag, the list can be references from a text input by adding a
      </span>
      <code>list</code>
      <span> attribute.</span>
    </b-card-text>

    <b-form-group class="mb-0">
      <b-form-input list="my-list-id" />

      <datalist id="my-list-id">
        <option>Manual Option</option>
        <option
          v-for="size in sizes"
          :key="size"
        >
          {{ size }}
        </option>
      </datalist>
    </b-form-group>

    <template #code>
      {{ codeDatalist }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormInput, BCardText, BFormGroup } from 'bootstrap-vue'
import { codeDatalist } from './code'

export default {
  components: {
    BCardCode,
    BFormGroup,
    BCardText,
    BFormInput,
  },
  data() {
    return {
      sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
      codeDatalist,
    }
  },
}
</script>
