<template>
  <div>
    <b-card-code
      title="Slot"
    >
      <b-card-text>
        <span>You may also manually place individual </span>
        <code>&lt;b-breadcrumb-item&gt;</code>
        <span> child components in the default slot of the </span>
        <code>&lt;b-breadcrumb&gt;</code>
        <span> component, as an alternative to using the </span>
        <code>items</code>
        <span> prop, for greater control over the content of each item:</span>
      </b-card-text>

      <b-breadcrumb class="breadcrumb-slash">
        <b-breadcrumb-item href="#home">
          Home
        </b-breadcrumb-item>
        <b-breadcrumb-item href="#foo">
          Chat
        </b-breadcrumb-item>
        <b-breadcrumb-item active>
          Infos
        </b-breadcrumb-item>
      </b-breadcrumb>

      <template #code>
        {{ codeSlot }}
      </template>
    </b-card-code>
  </div>
</template>

<script>
import { BBreadcrumb, BBreadcrumbItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeSlot } from './code'

export default {
  components: {
    BCardCode,
    BBreadcrumb,
    BBreadcrumbItem,
    BCardText,
  },
  data: () => ({
    codeSlot,
  }),
}
</script>
