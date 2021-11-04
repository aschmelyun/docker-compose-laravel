<template>
  <b-card-code title="Default">
    <b-card-text>
      <span>Use </span>
      <code>app-collapse</code>
      <span>
        component to easily toggle visibility of almost any content on your pages. Includes support for making
        accordions.
      </span>
    </b-card-text>

    <app-collapse>

      <app-collapse-item title="Collapse Item 1">
        Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie
        brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly
        marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly
        beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.
      </app-collapse-item>

      <app-collapse-item title="Collapse Item 2">
        Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie
        brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly
        marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly
        beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.
      </app-collapse-item>

      <app-collapse-item title="Collapse Item 3">
        Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie
        brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly
        marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly
        beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.
      </app-collapse-item>

      <app-collapse-item title="Collapse Item 4">
        Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie
        brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly
        marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly
        beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.
      </app-collapse-item>
    </app-collapse>

    <template #code>
      {{ codeCollapseDefault }}
    </template>
  </b-card-code>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import { codeCollapseDefault } from './code'

export default {
  components: {
    BCardCode,
    AppCollapse,
    AppCollapseItem,
    BCardText,
  },
  data() { return { codeCollapseDefault } },
}
</script>
