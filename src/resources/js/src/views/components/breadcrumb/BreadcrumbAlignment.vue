<template>
  <div>
    <b-card-code
      title="Alignment"
    >
      <b-card-text>
        <span>Use class </span>
        <code>.justify-content-{direction}</code>
        <span> to align breadcrumb to center.</span>
      </b-card-text>

      <div id="breadcrumb-alignment">
        <div class="d-flex justify-content-start breadcrumb-wrapper">
          <b-breadcrumb :items="items" />
        </div>
        <div class="d-flex justify-content-center breadcrumb-wrapper my-1">
          <b-breadcrumb :items="items" />
        </div>
        <div class="d-flex justify-content-end breadcrumb-wrapper pr-1">
          <b-breadcrumb :items="items" />
        </div>
      </div>

      <template #code>
        {{ codeAlignment }}
      </template>
    </b-card-code>
  </div>
</template>

<script>
import { BBreadcrumb, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeAlignment } from './code'

export default {
  components: {
    BCardCode,
    BBreadcrumb,
    BCardText,
  },
  data() {
    return {
      codeAlignment,
      items: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Library',
        },
        {
          text: 'Data',
          active: true,
        },
      ],
    }
  },
}
</script>
