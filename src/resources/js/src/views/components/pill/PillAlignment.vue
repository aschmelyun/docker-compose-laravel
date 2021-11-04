<template>
  <b-card-code title="Alignments">
    <h6 class="mb-2">
      Left
    </h6>
    <b-tabs
      pills
      align="left"
    >
      <b-tab
        title="Home"
        active
      >
        <b-card-text>
          {{ tabData[0]['home'] }}
        </b-card-text>
      </b-tab>
      <b-tab title="Profile">
        <b-card-text>
          {{ tabData[1]['profile'] }}
        </b-card-text>
      </b-tab>
      <b-tab
        title="Disabled"
        disabled
      >
        {{ tabData[2]['disabled'] }}
      </b-tab>
      <b-tab
        title="About"
      >
        <b-card-text>
          {{ tabData[3]['about'] }}
        </b-card-text>
      </b-tab>
    </b-tabs>
    <h6 class="mt-2 mb-2">
      Center
    </h6>
    <b-tabs
      pills
      align="center"
    >
      <b-tab
        title="Home"
        active
      >
        <b-card-text>
          {{ tabData[0]['home'] }}
        </b-card-text>
      </b-tab>
      <b-tab title="Profile">
        <b-card-text>
          {{ tabData[1]['profile'] }}
        </b-card-text>
      </b-tab>
      <b-tab
        title="Disabled"
        disabled
      >
        {{ tabData[2]['disabled'] }}
      </b-tab>
      <b-tab title="About">
        <b-card-text>
          {{ tabData[3]['about'] }}
        </b-card-text>
      </b-tab>
    </b-tabs>
    <h5 class="mt-2 mb-2">
      Right
    </h5>
    <b-tabs
      pills
      align="right"
    >
      <b-tab
        title="Home"
        active
      >
        <b-card-text>
          {{ tabData[0]['home'] }}
        </b-card-text>
      </b-tab>
      <b-tab title="Profile">
        <b-card-text>
          {{ tabData[1]['profile'] }}
        </b-card-text>
      </b-tab>
      <b-tab
        title="Disabled"
        disabled
      >
        {{ tabData[2]['disabled'] }}
      </b-tab>
      <b-tab title="About">
        <b-card-text>
          {{ tabData[3]['about'] }}
        </b-card-text>
      </b-tab>
    </b-tabs>

    <template #code>
      {{ codeAlignment }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BTabs, BTab, BCardText } from 'bootstrap-vue'
import { codeAlignment } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BTabs,
    BTab,
  },
  data() {
    return {
      tabData: [
        { home: 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry.' },
        { profile: 'Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Pudding candy canes sugar plum cookie chocolate cake powder croissant.' },
        { disabled: 'lorem' },
        { about: 'Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit.' },
      ],
      codeAlignment,
    }
  },
}
</script>
