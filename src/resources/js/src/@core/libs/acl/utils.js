import { getCurrentInstance } from '@vue/composition-api'

/**
 * Returns ability result if ACL is configured or else just return true
 * Useful if you don't know if ACL is configured or not
 * Used in @core files to handle absence of ACL without errors
 * @param {String} action CASL Actions // https://casl.js.org/v4/en/guide/intro#basics
 * @param {String} subject CASL Subject // https://casl.js.org/v4/en/guide/intro#basics
 */
export const can = (action, subject) => {
  const vm = getCurrentInstance().proxy
  return vm.$can ? vm.$can(action, subject) : true
}

/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */
export const canViewVerticalNavMenuLink = item => can(item.action, item.resource)

/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource & Hide group if all of it's children are hidden
 * @param {Object} item navigation object item
 */
// eslint-disable-next-line arrow-body-style
export const canViewVerticalNavMenuGroup = item => {
  // ! This same logic is used in canViewHorizontalNavMenuGroup and canViewHorizontalNavMenuHeaderGroup. So make sure to update logic in them as well
  const hasAnyVisibleChild = item.children.some(i => can(i.action, i.resource))

  // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child
  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild
  }
  return can(item.action, item.resource) && hasAnyVisibleChild
}

/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */
export const canViewVerticalNavMenuHeader = item => can(item.action, item.resource)

/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */
export const canViewHorizontalNavMenuLink = item => can(item.action, item.resource)

/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */
export const canViewHorizontalNavMenuHeaderLink = item => can(item.action, item.resource)

/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource & Hide group if all of it's children are hidden
 * @param {Object} item navigation object item
 */
// eslint-disable-next-line arrow-body-style
export const canViewHorizontalNavMenuGroup = item => {
  // ? Same logic as canViewVerticalNavMenuGroup
  const hasAnyVisibleChild = item.children.some(i => can(i.action, i.resource))

  // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child
  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild
  }
  return can(item.action, item.resource) && hasAnyVisibleChild
}

// eslint-disable-next-line arrow-body-style
export const canViewHorizontalNavMenuHeaderGroup = item => {
  // ? Same logic as canViewVerticalNavMenuGroup but with extra content

  // eslint-disable-next-line arrow-body-style
  const hasAnyVisibleChild = item.children.some(grpOrItem => {
    // If it have children => It's grp
    // Call ACL function based on grp/link
    return grpOrItem.children ? canViewHorizontalNavMenuGroup(grpOrItem) : canViewHorizontalNavMenuLink(grpOrItem)
  })

  // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child
  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild
  }
  return can(item.action, item.resource) && hasAnyVisibleChild
}
