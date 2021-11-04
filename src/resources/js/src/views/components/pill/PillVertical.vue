<template>
  <b-card-code title="Vertically Stacked Pills">

    <b-tabs
      pills
      vertical
    >
      <b-tab
        title="Pill 1"
        active
      >
        <b-card-text>
          Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Bear claw donut sesame snaps bear claw liquorice jelly-o bear claw carrot cake. Icing croissant bonbon biscuit gummi bears.
        </b-card-text>
      </b-tab>
      <b-tab title="Pill 2">
        <b-card-text>
          Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake. Sesame snaps wafer marshmallow danish dragée candy muffin jelly beans tootsie roll. Jelly beans oat cake chocolate cake tiramisu sweet.
        </b-card-text>
      </b-tab>
      <b-tab title="Pill 3">
        <b-card-text>
          Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake. Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop. Danish fruitcake bonbon bear claw gummi bears apple pie.
        </b-card-text>
      </b-tab>
      <b-tab
        title="Disabled"
        disabled
      >
        <b-card-text>Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop.</b-card-text>
      </b-tab>
    </b-tabs>

    <template #code>
      {{ codeVertical }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BTabs, BTab, BCardText } from 'bootstrap-vue'
import { codeVertical } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BTabs,
    BTab,
  },
  data() {
    return {
      codeVertical,
    }
  },
}
</script>
