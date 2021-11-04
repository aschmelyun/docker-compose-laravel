<template>
  <div>
    <card-title />
    <card-content-types />
    <card-header-footer />
    <card-text-alignment />
    <card-navigation />
    <card-images />
    <card-style-variation />
    <h5 class="mt-3 mb-0">
      Card Layout
    </h5>
    <card-basic-group />
    <card-basic-decks />
    <card-basic-columns />
  </div>
</template>

<script>
import CardTitle from './CardTitle.vue'
import CardContentTypes from './CardContentTypes.vue'
import CardHeaderFooter from './CardHeaderFooter.vue'
import CardTextAlignment from './CardTextAlignment.vue'
import CardNavigation from './CardNavigation.vue'
import CardImages from './CardImages.vue'
import CardStyleVariation from './CardStyleVariation.vue'
import CardBasicGroup from './CardBasicGroup.vue'
import CardBasicDecks from './CardBasicDecks.vue'
import CardBasicColumns from './CardBasicColumns.vue'

export default {
  components: {
    CardTitle,
    CardContentTypes,
    CardHeaderFooter,
    CardTextAlignment,
    CardNavigation,
    CardImages,
    CardStyleVariation,
    CardBasicGroup,
    CardBasicDecks,
    CardBasicColumns,
  },
}
</script>
