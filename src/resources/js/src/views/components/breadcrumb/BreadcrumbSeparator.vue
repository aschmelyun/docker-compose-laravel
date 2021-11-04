<template>
  <b-card-code title="Separator">
    <b-card-text>
      <span>These breadcrumbs are only for demo puropses. You can change breadcrumb seprator by changing </span>
      <code>$breadcrumb-divider</code>
      <span> variable value in scss</span>
    </b-card-text>

    <div id="component-breadcrumbs">
      <b-breadcrumb
        class="breadcrumb-slash"
        :items="items"
      />
      <b-breadcrumb
        class="breadcrumb-dots"
        :items="items"
      />
      <b-breadcrumb
        class="breadcrumb-dashes"
        :items="items"
      />
      <b-breadcrumb
        class="breadcrumb-pipes"
        :items="items"
      />
      <b-breadcrumb
        class="breadcrumb-chevron mb-0"
        :items="items"
      />
    </div>

    <template #code>
      {{ codeSeparator }}
    </template>
  </b-card-code>
</template>

<script>
import { BBreadcrumb, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeSeparator } from './code'

export default {
  components: {
    BCardCode,
    BBreadcrumb,
    BCardText,
  },
  data() {
    return {
      codeSeparator,
      items: [
        {
          text: 'Home',
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
