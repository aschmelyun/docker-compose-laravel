<template>
  <b-card-code title="Contextual Classes">
    <b-card-text>
      <span>Use contextual variants to style list items with a stateful background and color, via the</span>
      <code>variant</code>
      <span>prop.</span>
    </b-card-text>

    <b-list-group>
      <b-list-group-item variant="primary">
        Pie fruitcake jelly-o
      </b-list-group-item>
      <b-list-group-item variant="secondary">
        halvah icing marshmallow
      </b-list-group-item>
      <b-list-group-item variant="success">
        Cake caramels donut danish muffin biscuit
      </b-list-group-item>
      <b-list-group-item variant="danger">
        Chocolate cake pie lollipop
      </b-list-group-item>
      <b-list-group-item variant="warning">
        Apple pie toffee pudding gummi bears
      </b-list-group-item>
      <b-list-group-item variant="info">
        Jujubes chupa chups cheesecake tart
      </b-list-group-item>
      <b-list-group-item variant="dark">
        Candy fruitcake bonbon sesame snaps dessert
      </b-list-group-item>
    </b-list-group>

    <template #code>
      {{ codeListGroupContextual }}
    </template>
  </b-card-code>
</template>

<script>
import { BListGroup, BListGroupItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeListGroupContextual } from './code'

export default {
  components: {
    BCardCode,
    BListGroup,
    BListGroupItem,
    BCardText,
  },
  data() {
    return {
      codeListGroupContextual,
    }
  },
}
</script>
