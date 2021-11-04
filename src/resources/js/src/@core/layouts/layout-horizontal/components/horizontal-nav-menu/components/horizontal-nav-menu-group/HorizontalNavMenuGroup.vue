<template>
  <li
    v-if="canViewVerticalNavMenuGroup(item)"
    class="dropdown dropdown-submenu"
    :class="{
      'show': isOpen,
      'disabled': item.disabled,
      'sidebar-group-active active open': isActive,
      'openLeft': openChildDropdownOnLeft
    }"
    @mouseenter="() => updateGroupOpen(true)"
    @mouseleave="() => updateGroupOpen(false)"
  >
    <b-link
      class="dropdown-item"
      href="#"
      :class="{'dropdown-toggle': item.children}"
      @click="() => updateGroupOpen(!isOpen)"
    >
      <feather-icon :icon="item.icon || 'CircleIcon'" />
      <span class="menu-title">{{ t(item.title) }}</span>
    </b-link>
    <ul
      ref="refChildDropdown"
      class="dropdown-menu"
    >
      <component
        :is="resolveNavItemComponent(child)"
        v-for="child in item.children"
        :key="child.header || child.title"
        ref="groupChild"
        :item="child"
      />
    </ul>
  </li>
</template>

<script>
import { BLink } from 'bootstrap-vue'
import { resolveHorizontalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
import { useUtils as useI18nUtils } from '@core/libs/i18n'
import { useUtils as useAclUtils } from '@core/libs/acl'
import HorizontalNavMenuLink from '../horizontal-nav-menu-link/HorizontalNavMenuLink.vue'

// Composition Function
import useHorizontalNavMenuGroup from './useHorizontalNavMenuGroup'
import mixinHorizontalNavMenuGroup from './mixinHorizontalNavMenuGroup'

export default {
  name: 'HorizontalNavMenuGroup',
  components: {
    HorizontalNavMenuLink,
    BLink,
  },
  mixins: [mixinHorizontalNavMenuGroup],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const {
      refChildDropdown,
      isActive,
      isOpen,
      updateGroupOpen,
      updateIsActive,
      openChildDropdownOnLeft,
    } = useHorizontalNavMenuGroup(props.item)

    const { t } = useI18nUtils()
    const { canViewVerticalNavMenuGroup } = useAclUtils()

    return {
      refChildDropdown,
      openChildDropdownOnLeft,
      resolveNavItemComponent,
      isOpen,
      isActive,
      updateGroupOpen,
      updateIsActive,

      // ACL
      canViewVerticalNavMenuGroup,

      // i18n
      t,
    }
  },
}
</script>

<style>

</style>
