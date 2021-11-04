<template>
  <b-row class="match-height">
    <b-col lg="6">
      <avatar-size />
    </b-col>
    <b-col lg="6">
      <avatar-initials />
    </b-col>
    <b-col lg="6">
      <avatar-color />
    </b-col>
    <b-col lg="6">
      <avatar-light-color />
    </b-col>
    <b-col lg="6">
      <avatar-icon />
    </b-col>
    <b-col lg="6">
      <avatar-custom-content />
    </b-col>
    <b-col lg="6">
      <avatar-badge />
    </b-col>
    <b-col lg="6">
      <avatar-badge-content />
    </b-col>
    <b-col lg="6">
      <avatar-badge-position />
    </b-col>
    <b-col ld="6">
      <avatar-offset />
    </b-col>
    <b-col lg="6">
      <avatar-square />
    </b-col>
    <b-col lg="6">
      <avatar-rounded />
    </b-col>
    <b-col lg="6">
      <avatar-group />
    </b-col>
    <b-col lg="6">
      <avatar-group-tooltip />
    </b-col>
    <b-col cols="12">
      <avatar-action />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import AvatarSize from './AvatarSize.vue'
import AvatarInitials from './AvatarInitials.vue'
import AvatarColor from './AvatarColor.vue'
import AvatarLightColor from './AvatarLightColor.vue'
import AvatarAction from './AvatarAction.vue'
import AvatarBadge from './AvatarBadge.vue'
import AvatarBadgePosition from './AvatarBadgePosition.vue'
import AvatarOffset from './AvatarOffset.vue'
import AvatarIcon from './AvatarIcon.vue'
import AvatarCustomContent from './AvatarCustomContent.vue'
import AvatarBadgeContent from './AvatarBadgeContent.vue'
import AvatarSquare from './AvatarSquare.vue'
import AvatarRounded from './AvatarRounded.vue'
import AvatarGroup from './AvatarGroup.vue'
import AvatarGroupTooltip from './AvatarGroupTooltip.vue'

export default {
  components: {
    BRow,
    BCol,

    AvatarInitials,
    AvatarColor,
    AvatarLightColor,
    AvatarSize,
    AvatarAction,
    AvatarBadge,
    AvatarBadgePosition,
    AvatarOffset,
    AvatarIcon,
    AvatarCustomContent,
    AvatarBadgeContent,
    AvatarSquare,
    AvatarRounded,
    AvatarGroup,
    AvatarGroupTooltip,
  },
}
</script>
