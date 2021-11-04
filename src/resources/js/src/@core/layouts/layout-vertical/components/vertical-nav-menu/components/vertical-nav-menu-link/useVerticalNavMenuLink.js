import { ref } from '@vue/composition-api'
import { isNavLinkActive, navLinkProps } from '@core/layouts/utils'

export default function useVerticalNavMenuLink(item) {
  const isActive = ref(false)

  const linkProps = navLinkProps(item)

  const updateIsActive = () => {
    isActive.value = isNavLinkActive(item)
  }

  return {
    isActive,
    linkProps,
    updateIsActive,
  }
}
