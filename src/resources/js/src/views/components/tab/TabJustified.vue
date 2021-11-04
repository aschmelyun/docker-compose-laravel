<template>
  <b-card-code title="Justified">
    <b-tabs
      content-class="mt-2"
      justified
    >
      <b-tab
        title="Home"
      >
        <b-card-text>
          Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry.Danish fruitcake bonbon bear claw gummi bears apple pie. Chocolate sweet topping fruitcake cake.
        </b-card-text>
        <b-card-text>
          Dragée jelly-o pie halvah pudding bear claw. Carrot cake pie toffee pastry candy canes. Ice cream tiramisu chocolate bar apple pie jujubes croissant toffee. Sweet roll chocolate bar pastry macaroon jelly-o. Jujubes pudding lemon drops dessert cake. Pudding cupcake chupa chups brownie.
        </b-card-text>
      </b-tab>
      <b-tab
        active
        title="Profile"
      >
        <b-card-text>
          Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.
        </b-card-text>
        <b-card-text>
          Sesame snaps chupa chups jelly-o candy croissant pastry. Lollipop pudding biscuit. Sweet roll candy canes tootsie roll halvah jujubes gummi bears toffee cheesecake. Topping macaroon marshmallow caramels. Pastry caramels pastry.
        </b-card-text>
      </b-tab>
      <b-tab title="Messages">
        <b-card-text>
          Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
        </b-card-text>
        <b-card-text>
          Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.
        </b-card-text>
      </b-tab>
      <b-tab title="Settings">
        <b-card-text>
          Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry.I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie.
        </b-card-text>
        <b-card-text>
          Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
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
