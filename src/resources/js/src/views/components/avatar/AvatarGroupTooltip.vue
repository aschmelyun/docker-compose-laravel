<template>
  <b-card-code title="Avatar Group with Tooltip">
    <b-card-text>
      <span>Use bootstrapVue's </span>
      <code>VBTooltip</code>
      <span> directive with avatar to use tooltip. </span>
      <span>Add class </span>
      <code>pull-up</code>
      <span> for pull up the avatar on hover.</span>
    </b-card-text>

    <b-avatar-group size="32px">
      <b-avatar
        v-b-tooltip.hover
        class="pull-up"
        title="Jenny Looper"
        :src="require('@/assets/images/portrait/small/avatar-s-5.jpg')"
      />
      <b-avatar
        v-b-tooltip.hover
        class="pull-up"
        title="Darcey Nooner"
        variant="primary"
        :src="require('@/assets/images/portrait/small/avatar-s-7.jpg')"
      />
      <b-avatar
        v-b-tooltip.hover
        class="pull-up"
        title="Julee Rossignol"
        :src="require('@/assets/images/portrait/small/avatar-s-10.jpg')"
      />
      <b-avatar
        v-b-tooltip.hover
        class="pull-up"
        title="Elicia Rieske"
        variant="danger"
        :src="require('@/assets/images/portrait/small/avatar-s-8.jpg')"
      />
      <b-avatar
        v-b-tooltip.hover
        class="pull-up"
        title="Vinnie Mostowy"
        :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
      />
    </b-avatar-group>

    <template #code>
      {{ codeGroupTooltip }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BAvatarGroup, BAvatar, BCardText, VBTooltip,
} from 'bootstrap-vue'
import { codeGroupTooltip } from './code'

export default {
  components: {
    BCardCode,
    BAvatarGroup,
    BAvatar,
    BCardText,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  data() {
    return {
      codeGroupTooltip,
    }
  },
}
</script>
