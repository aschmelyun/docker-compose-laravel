<template>
  <div class="mb-1">
    <b-card-code title="Accordion">
      <b-card-text>
        <span>Turn a group of </span>
        <code>&lt;app-collapse&gt;</code>
        <span> components into an accordion by supplying an accordion group identifier via the </span>
        <code>accordion</code>
        <span> prop. Note that only one collapse in an accordion group can be open at a time.</span>
      </b-card-text>

      <app-collapse accordion>
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
        {{ codeAccordionDefault }}
      </template>
    </b-card-code>
  </div>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import { codeAccordionDefault } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    AppCollapse,
    AppCollapseItem,
  },
  data() { return { codeAccordionDefault } },
}
</script>
