import { getCurrentInstance } from '@vue/composition-api'

/**
 * Returns translated string if i18n package is available to Vue
 * If i18n is not configured then it will simply return what is being passed
 * Useful if you don't know if i18n is configured or not
 * Used in @core files to handle absence of i18n without errors
 * @param {String} key i18n key to use for translation
 */
export const t = key => {
  const vm = getCurrentInstance().proxy
  return vm.$t ? vm.$t(key) : key
}

export const _ = null
