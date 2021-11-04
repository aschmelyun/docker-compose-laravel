<template>
  <b-card-code
    title="File name formatting via scoped slot"
  >
    <b-card-text>
      <span>You can use the scoped slot </span>
      <code>file-name</code>
      <span> to render the file names. The scoped slot will receive the following properties: </span>
      <code>files,names</code>
    </b-card-text>

    <b-form-file multiple>
      <template
        slot="file-name"
        slot-scope="{ names }"
      >
        <b-badge variant="primary">
          {{ names[0] }}
        </b-badge>
        <b-badge
          v-if="names.length > 1"
          variant="dark"
          class="ml-1"
        >
          + {{ names.length - 1 }} More files
        </b-badge>
      </template>
    </b-form-file>

    <template #code>
      {{ codeSlot }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormFile, BBadge, BCardText } from 'bootstrap-vue'
import { codeSlot } from './code'

export default {
  components: {
    BCardCode,
    BFormFile,
    BCardText,
    BBadge,
  },
  data() {
    return {
      codeSlot,
    }
  },
}
</script>
