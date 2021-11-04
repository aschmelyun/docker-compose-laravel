<template>
  <div>
    <clipboard-with-directive />
    <clipboard-without-directive />
  </div>
</template>

<script>
import ClipboardWithDirective from './ClipboardWithDirective.vue'
import ClipboardWithoutDirective from './ClipboardWithoutDirective.vue'

export default {
  components: {
    ClipboardWithDirective,
    ClipboardWithoutDirective,
  },
}
</script>
