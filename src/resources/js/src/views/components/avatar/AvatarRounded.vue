<template>
  <b-card-code title="Rounded">
    <b-card-text class="mb-0">
      <span> You can change the rounding by setting the prop</span>
      <code>rounded</code>
      <span>.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-avatar
        rounded="sm"
        variant="light-primary"
      />
      <b-avatar
        rounded
        variant="light-success"
      />
      <b-avatar
        rounded="top"
        variant="light-danger"
      />
      <b-avatar
        rounded="lg"
        variant="light-warning"
      />
      <b-avatar
        rounded="left"
        variant="light-info"
      />
      <b-avatar
        rounded="right"
        variant="light-primary"
      />
      <b-avatar
        rounded="bottom"
        variant="light-dark"
      />
    </div>

    <template #code>
      {{ codeRounded }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAvatar, BCardText } from 'bootstrap-vue'
import { codeRounded } from './code'

export default {
  components: {
    BCardCode,
    BAvatar,
    BCardText,
  },
  data() {
    return {
      codeRounded,
    }
  },
}
</script>
