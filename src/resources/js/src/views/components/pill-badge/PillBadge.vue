<template>
  <div>
    <pill-badge-contextual />
    <pill-badge-glow />
    <pill-badge-light />
    <pill-badge-notification />
    <pill-badge-link-block />
  </div>
</template>

<script>
import PillBadgeContextual from './PillBadgeContextual.vue'
import PillBadgeGlow from './PillBadgeGlow.vue'
import PillBadgeLight from './PillBadgeLight.vue'
import PillBadgeNotification from './PillBadgeNotification.vue'
import PillBadgeLinkBlock from './PillBadgeLinkBlock.vue'

export default {
  components: {
    PillBadgeContextual,
    PillBadgeGlow,
    PillBadgeLight,
    PillBadgeNotification,
    PillBadgeLinkBlock,
  },
}
</script>
