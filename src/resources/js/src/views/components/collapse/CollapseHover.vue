<template>
  <b-card-code
    title="Hover"
  >
    <b-card-text>
      <span>To create a collapse which opens on hover use prop</span>
      <code>hover</code> <span>with</span>
      <code>&lt;app-collapse&gt;</code>
      <span>components.</span>
    </b-card-text>

    <app-collapse hover>

      <app-collapse-item title="Accordion Item 1">
        Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.
      </app-collapse-item>

      <app-collapse-item title="Accordion Item 2">
        Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.
      </app-collapse-item>

      <app-collapse-item title="Accordion Item 3">
        Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.
      </app-collapse-item>

      <app-collapse-item title="Accordion Item 4">
        Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.
      </app-collapse-item>
    </app-collapse>

    <template #code>
      {{ codeHover }}
    </template>
  </b-card-code>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import { codeHover } from './code'

export default {
  components: {
    BCardCode,
    AppCollapse,
    AppCollapseItem,
    BCardText,
  },
  data() { return { codeHover } },
}
</script>
