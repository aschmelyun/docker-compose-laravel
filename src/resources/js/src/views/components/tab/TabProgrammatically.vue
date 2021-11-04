<template>
  <b-card-code title="Prigrammatic activation">

    <!-- Tabs with card integration -->
    <b-tabs
      v-model="tabIndex"
    >
      <b-tab title="General">
        <b-card-text>
          Cookie cheesecake gummi bears. Topping apple pie chupa chups topping soufflé chocolate bar sesame snaps fruitcake sweet. Danish donut brownie wafer. Jelly beans apple pie wafer danish pastry lollipop biscuit marshmallow
        </b-card-text>
        <b-card-text>
          Pie powder sweet cotton candy topping pie. Chocolate gummi bears tootsie roll gingerbread. Jujubes pie bonbon chocolate cake dragée macaroon candy.
        </b-card-text>
      </b-tab>
      <b-tab title="Edit profile">
        <b-card-text>I'm the second tab</b-card-text>
        <b-card class="border mb-0">
          Apple pie jelly sugar plum cupcake biscuit danish cheesecake danish pastry. Cheesecake lemon  pastry marzipan. Wafer bear claw chocolate bar soufflé gummies sugar plum macaroon brownie.
        </b-card>
      </b-tab>
      <b-tab
        title="Premium Plan"
        disabled
      >
        Sibzamini!
      </b-tab>
      <b-tab title="Info">
        <b-card-text>
          I'm the last tab
        </b-card-text>
        <b-card-text>
          Lemon drops icing chocolate bar icing cheesecake sesame snaps tootsie roll. Bonbon carrot cake biscuit. Apple pie topping jujubes candy gingerbread soufflé chocolate bar. Jelly lollipop candy canes. Lemon drops marshmallow pastry. Carrot cake lollipop cookie cotton candy dragée liquorice.
        </b-card-text>
      </b-tab>
    </b-tabs>

    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-1">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="tabIndex--"
        >
          Previous
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="tabIndex++"
        >
          Next
        </b-button>
      </b-button-group>

      <b-card-text>
        <small>Current Tab: {{ tabIndex }}</small>
      </b-card-text>
    </div>

    <template #code>
      {{ codeProgrammatically }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BButtonGroup, BButton, BCard, BTab, BTabs, BCardText,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeProgrammatically } from './code'

export default {
  components: {
    BCardCode,
    BButtonGroup,
    BButton,
    BCard,
    BTab,
    BTabs,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      tabIndex: 1,
      codeProgrammatically,
    }
  },
}
</script>
