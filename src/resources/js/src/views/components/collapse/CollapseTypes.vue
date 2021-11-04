<template>
  <b-card-code title="Types">
    <b-card-text class="mb-0">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dolores nostrum modi,
      dolor, neque distinctio vel ut itaque numquam quos magni dolore ea earum tempore est excepturi perspiciatis, placeat odio.
    </b-card-text>
    <!-- radio button -->
    <b-form-group>
      <b-form-radio-group
        id="radio-group-2"
        v-model="collapseType"
        name="radio-sub-component"
        class="demo-inline-spacing"
      >
        <b-form-radio value="default">
          Default
        </b-form-radio>
        <b-form-radio value="shadow">
          Shadow
        </b-form-radio>
        <b-form-radio value="margin">
          Margin
        </b-form-radio>
        <b-form-radio value="border">
          Border
        </b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <!-- types -->
    <app-collapse
      accordion
      :type="collapseType"
    >

      <app-collapse-item title="Accordion Item 1">
        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.
      </app-collapse-item>

      <app-collapse-item title="Accordion Item 2">
        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.
      </app-collapse-item>

      <app-collapse-item title="Accordion Item 3">
        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.
      </app-collapse-item>

      <app-collapse-item title="Accordion Item 4">
        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.
      </app-collapse-item>
    </app-collapse>

    <template #code>
      {{ codeCollapseTypes }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import {
  BFormRadioGroup, BFormRadio, BFormGroup, BCardText,
} from 'bootstrap-vue'
import { codeCollapseTypes } from './code'

export default {
  components: {
    BCardCode,
    AppCollapse,
    AppCollapseItem,
    BFormRadioGroup,
    BFormRadio,
    BCardText,
    BFormGroup,
  },
  data() {
    return {
      collapseType: 'default',
      codeCollapseTypes,
    }
  },
}
</script>
