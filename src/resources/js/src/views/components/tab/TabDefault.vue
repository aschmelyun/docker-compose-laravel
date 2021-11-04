<template>
  <b-card-code title="Default">
    <b-tabs>
      <b-tab title="Home">
        <b-card-text>
          Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.
        </b-card-text>
        <b-card-text>
          Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw sweet roll.
        </b-card-text>
      </b-tab>
      <b-tab
        active
        title="Service"
      >
        <b-card-text>
          Biscuit macaroon sugar plum sesame snaps oat cake halvah fruitcake pudding cotton candy. Cheesecake tart wafer soufflé. Chocolate marzipan donut pie soufflé dragée cheesecake. Gummi bears dessert croissant chocolate jujubes fruitcake. Pie cupcake halvah.
        </b-card-text>
        <b-card-text>Tiramisu carrot cake marzipan sugar plum powder marzipan sugar plum bonbon powder. Macaroon jujubes ice cream sugar plum lollipop wafer caramels. Cheesecake chocolate tart cake gingerbread fruitcake cake candy jelly-o. Candy cookie lollipop. Wafer lemon drops chocolate cake gummi bears.</b-card-text>
      </b-tab>
      <b-tab
        title="Disabled"
        disabled
      >
        <b-card-text>
          Carrot cake dragée chocolate.
        </b-card-text>
      </b-tab>
      <b-tab title="Account">
        <b-card-text>
          Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie sweet bear claw.
        </b-card-text>
        <b-card-text>
          Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.
        </b-card-text>
      </b-tab>
    </b-tabs>

    <template #code>
      {{ codeDefault }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BTabs, BTab, BCardText } from 'bootstrap-vue'
import { codeDefault } from './code'

export default {
  components: {
    BCardCode,
    BTabs,
    BCardText,
    BTab,
  },
  data() {
    return {
      codeDefault,
    }
  },
}
</script>
