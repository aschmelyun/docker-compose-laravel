<template>
  <div>
    <typography-default />
    <typography-display />
    <typography-blockquotes />
    <typography-list />
    <typography-description />
  </div>
</template>

<script>
import TypographyDefault from './TypographyDefault.vue'
import TypographyDisplay from './TypographyDisplay.vue'
import TypographyBlockquotes from './TypographyBlockquotes.vue'
import TypographyList from './TypographyList.vue'
import TypographyDescription from './TypographyDescription.vue'

export default {
  components: {
    TypographyDefault,
    TypographyDisplay,
    TypographyBlockquotes,
    TypographyList,
    TypographyDescription,
  },
}
</script>
