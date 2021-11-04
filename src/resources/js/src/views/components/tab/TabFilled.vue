<template>
  <b-card-code title="Filled">
    <b-tabs
      content-class="pt-1"
      fill
    >
      <b-tab
        title="Home"
      >
        <b-card-text>Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry.</b-card-text>
        <b-card-text>Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.</b-card-text>
      </b-tab>
      <b-tab
        active
        title="Profile"
      >
        <b-card-text>
          Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
        </b-card-text>
        <b-card-text>
          Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Toffee cotton candy liquorice. Oat cake lemon drops gingerbread dessert caramels. Sweet dessert jujubes powder sweet sesame snaps.
        </b-card-text>
      </b-tab>
      <b-tab title="Messages">
        <b-card-text>
          Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry. Oat cake lemon drops gingerbread dessert caramels.Lollipop croissant caramels jelly-o bonbon. Marshmallow tiramisu carrot cake pudding bonbon icing.
        </b-card-text>
        <b-card-text>
          Sugar plum wafer lollipop. Tiramisu danish apple pie powder cookie. Macaroon marzipan toffee carrot cake biscuit cake dragée soufflé. Donut danish cookie sweet topping halvah carrot cake chocolate bonbon.
        </b-card-text>
      </b-tab>
      <b-tab title="Settings">
        <b-card-text>
          Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
        </b-card-text>
        <b-card-text>
          Dragée jelly-o pie halvah pudding bear claw. Carrot cake pie toffee pastry candy canes. Ice cream tiramisu chocolate bar apple pie jujubes croissant toffee. Sweet roll chocolate bar pastry macaroon jelly-o. Jujubes pudding lemon drops dessert cake. Pudding cupcake chupa chups brownie.
        </b-card-text>
      </b-tab>
    </b-tabs>

    <template #code>
      {{ codeFill }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BTabs, BTab, BCardText } from 'bootstrap-vue'
import { codeFill } from './code'

export default {
  components: {
    BCardCode,
    BTabs,
    BTab,
    BCardText,
  },
  data() {
    return {
      codeFill,
    }
  },
}
</script>
