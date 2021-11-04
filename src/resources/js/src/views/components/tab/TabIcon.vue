<template>
  <b-card-code title="Tabs Icon">
    <b-tabs>
      <b-tab>
        <template #title>
          <feather-icon icon="HomeIcon" />
          <span>Home</span>
        </template>

        <b-card-text>
          Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.
        </b-card-text>
        <b-card-text>
          Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake. Candy cookie sweet roll bear claw sweet roll
        </b-card-text>
      </b-tab>
      <b-tab active>
        <template #title>
          <feather-icon icon="ToolIcon" />
          <span>Services</span>
        </template>

        <b-card-text>
          Muffin cupcake candy chocolate cake gummi bears fruitcake donut dessert pie. Wafer toffee bonbon dragée. Jujubes cotton candy gummies chupa chups. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Candy cookie sweet roll bear claw sweet roll. Cake tiramisu cotton candy gingerbread cheesecake toffee cake. Cookie liquorice dessert candy canes jelly.
        </b-card-text>
        <b-card-text>
          Sweet chocolate muffin fruitcake gummies jujubes pie lollipop. Brownie marshmallow caramels gingerbread jelly beans chocolate bar oat cake wafer. Chocolate bar danish icing sweet apple pie jelly-o carrot cake cookie cake.
        </b-card-text>
      </b-tab>
      <b-tab disabled>
        <template #title>
          <feather-icon icon="EyeOffIcon" />
          <span>Disabled</span>
        </template>

        <b-card-text>
          Halvah dessert fruitcake toffee oat cake tart oat cake topping jelly beans. Pudding sweet pie pastry lemon drops jujubes danish pie gingerbread. Liquorice powder wafer.
        </b-card-text>
      </b-tab>
      <b-tab>
        <template #title>
          <feather-icon icon="UserIcon" />
          <span>Account</span>
        </template>

        <b-card-text>
          Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee apple pie chocolate bar biscuit tart croissant. Lemon drops danish cookie. Oat cake macaroon icing tart lollipop cookie sweet bear claw.
        </b-card-text>
        <b-card-text>
          Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.
        </b-card-text>
      </b-tab>
    </b-tabs>

    <template #code>
      {{ codeIcon }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BTabs, BTab, BCardText } from 'bootstrap-vue'
import { codeIcon } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BTabs,
    BTab,
  },
  data() {
    return {
      codeIcon,
    }
  },
}
</script>
