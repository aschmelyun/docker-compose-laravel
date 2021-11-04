<template>
  <div class="heading-elements">
    <ul class="list-inline mb-0">
      <li v-if="availableActions.includes('collapse')">
        <a
          data-action="collapse"
          :class="{ rotate: isCollapsed }"
          @click="$emit('collapse')"
        >
          <feather-icon
            icon="ChevronDownIcon"
            size="16"
          />
        </a>
      </li>
      <li v-if="availableActions.includes('refresh')">
        <a
          data-action="reload"
          @click="$emit('refresh')"
        >
          <feather-icon
            icon="RotateCwIcon"
            size="14"
          />
        </a>
      </li>
      <li v-if="availableActions.includes('close')">
        <a
          data-action="close"
          @click="$emit('close')"
        >
          <feather-icon
            icon="XIcon"
            size="14"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isCollapsed: {
      type: Boolean,
      requried: true,
    },
    availableActions: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
