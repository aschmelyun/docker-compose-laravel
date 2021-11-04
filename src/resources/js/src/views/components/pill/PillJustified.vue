<template>
  <b-card-code title="Justified">
    <b-tabs
      justified
      pills
    >
      <b-tab
        title="Home"
        active
      >
        <b-card-text>
          Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.
        </b-card-text>
      </b-tab>
      <b-tab title="Profile">
        <b-card-text>
          Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.
        </b-card-text>
      </b-tab>
      <b-tab
        title="Disabled"
        disabled
      >
        <b-card-text>
          Tootsie roll oat cake.
        </b-card-text>
      </b-tab>
      <b-tab title="About">
        <b-card-text>
          Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.
        </b-card-text>
      </b-tab>
    </b-tabs>

    <template #code>
      {{ codeJustified }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BTabs, BTab, BCardText } from 'bootstrap-vue'
import { codeJustified } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BTabs,
    BTab,
  },
  data() {
    return {
      codeJustified,
    }
  },
}
</script>
