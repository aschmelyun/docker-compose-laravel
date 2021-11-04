<template>
  <div>
    <div class="text-center">
      <!-- Avatar -->
      <b-avatar
        size="72px"
        class="mr-1"
        :src="require('@/assets/images/portrait/small/avatar-s-8.jpg')"
      />

      <!-- Name -->
      <b-card-text class="mt-2 h4 color-inherit text-reset">
        Black Widow
      </b-card-text>
    </div>

    <b-list-group class="mt-3 rounded-0">
      <b-list-group-item
        v-for="item in sidebarItems"
        :key="item.title"
        class="bg-transparent"
      >
        <feather-icon
          class="align-text-bottom"
          :icon="item.icon"
        />
        <span
          class="ml-1"
          v-text="item.title"
        />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import {
  BAvatar, BListGroup, BListGroupItem, BCardText,
} from 'bootstrap-vue'

export default {
  components: {
    BAvatar,
    BListGroup,
    BListGroupItem,
    BCardText,
  },
  data() {
    return {
      sidebarItems: [
        { title: 'Dashboard', icon: 'GridIcon' },
        { title: 'Analytics', icon: 'ActivityIcon' },
        { title: 'History', icon: 'RefreshCwIcon' },
        { title: 'Configuration', icon: 'SettingsIcon' },
        { title: 'Profile', icon: 'UserIcon' },
      ],
    }
  },
}
</script>
