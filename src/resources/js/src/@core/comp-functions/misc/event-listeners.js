import { ref, onUnmounted } from '@vue/composition-api'

export const useScrollListener = () => {
  const scrolledTo = ref(null)

  const scrollHandler = () => {
    scrolledTo.value = window.scrollY
  }

  window.addEventListener('scroll', scrollHandler)
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler)
  })

  return {
    scrolledTo,
  }
}

export const _ = null
