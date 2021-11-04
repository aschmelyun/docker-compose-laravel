<template>
  <b-card class="text-center">
    <b-avatar
      class="mb-1"
      :variant="`light-${color}`"
      size="45"
    >
      <feather-icon
        size="21"
        :icon="icon"
      />
    </b-avatar>
    <div class="truncate">
      <h2 class="mb-25 font-weight-bolder">
        {{ statistic }}
      </h2>
      <span>{{ statisticTitle }}</span>
    </div>
  </b-card>
</template>

<script>
import { BCard, BAvatar } from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BAvatar,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    statistic: {
      type: [Number, String],
      required: true,
    },
    statisticTitle: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
}
</script>
