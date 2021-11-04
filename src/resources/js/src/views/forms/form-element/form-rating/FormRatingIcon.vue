<template>
  <b-card-code
    title="Icon"
  >
    <b-card-text>
      <span>By default </span>
      <code>&lt;b-form-rating&gt;</code>
      <span> uses the Bootstrap Icons icons </span>
      <code>'star', 'star-half', 'star-fill',</code>
      <span> and the icon </span>
      <code>'x'</code>
      <span> (for the optional clear button). You can specify alternate Bootstrap Icons to use via the </span>
      <code> icon-empty, icon-half, icon-full</code>
      <span> and </span>
      <code>icon-clear</code>
      <span> props.</span>
    </b-card-text>

    <b-form-rating
      show-clear
      variant="danger"
    >
      <feather-icon
        slot="icon-empty"
        icon="FrownIcon"
        size="18"
      />
      <feather-icon
        slot="icon-half"
        icon="MehIcon"
        size="18"
      />
      <feather-icon
        slot="icon-full"
        icon="SmileIcon"
        size="18"
        class="text-success"
      />
      <feather-icon
        slot="icon-clear"
        icon="XCircleIcon"
        size="18"
      />
    </b-form-rating>

    <template #code>
      {{ codeIcon }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRating, BCardText } from 'bootstrap-vue'
import { codeIcon } from './code'

export default {
  components: {
    BCardCode,
    BFormRating,
    BCardText,
  },
  data() {
    return {
      codeIcon,
    }
  },
}
</script>
