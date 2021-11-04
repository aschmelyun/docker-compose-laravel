<template>
  <b-card-code title="Limiting to certain file types">
    <b-card-text>
      <span>You can limit the file types by setting the </span>
      <code>accept</code>
      <span>
        prop to a string containing the allowed file type(s). To specify more than one type, separate the values with a
        comma.
      </span>
    </b-card-text>

    <!-- Accept all image formats by IANA media type wildcard-->
    <label for="wildcard">Accept all image</label>
    <b-form-file
      id="wildcard"
      accept="image/*"
    />

    <!-- Accept specific image formats by IANA type -->
    <label
      for="IANA"
      class="mt-1"
    >Accept specific image formats by IANA type</label>
    <b-form-file
      id="IANA"
      accept="image/jpeg, image/png, image/gif"
    />

    <!-- Accept specific image formats by extension -->
    <label
      for="extension"
      class="mt-1"
    >Accept specific image formats by extension</label>
    <b-form-file
      id="extension"
      accept=".jpg, .png, .gif"
    />

    <template #code>
      {{ codeLimiting }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormFile, BCardText } from 'bootstrap-vue'
import { codeLimiting } from './code'

export default {
  components: {
    BCardCode,
    BFormFile,
    BCardText,
  },
  data() {
    return {
      codeLimiting,
    }
  },
}
</script>
