export const codeBasic = `
<template>
  <b-tabs pills>
    <b-tab
      title="Home"
      active
    >
      <b-card-text>
        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.
      </b-card-text>
    </b-tab>
    <b-tab title="Profile">
      <b-card-text>
        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.
      </b-card-text>
    </b-tab>
    <b-tab
      title="Disable"
      disabled
    >
      <b-card-text>Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.</b-card-text>
    </b-tab>
    <b-tab title="About">
      <b-card-text>
        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.
      </b-card-text>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTab, BTabs } from 'bootstrap-vue'

export default {
  components: {
    BTab,
    BTabs,
  },
}
</script>
`

export const codeBorder = `
<template>
  <div>
    <b-tabs pills content-class="mt-25" nav-class="nav-active-bordered-pill">
      <b-tab title="Pill 1" active>
        <p>
          Oat cake marzipan cake lollipop caramels wafer pie jelly beans. Icing halvah chocolate cake carrot cake. Jelly beans carrot cake marshmallow gingerbread chocolate cake. Gummies cupcake croissant.
        </p>
      </b-tab>
      <b-tab title="Pill 2">
        <p>
          Sugar plum tootsie roll biscuit caramels. Liquorice brownie pastry cotton candy oat cake fruitcake jelly chupa chups. Pudding caramels pastry powder cake soufflé wafer caramels. Jelly-o pie cupcake.
        </p>
      </b-tab>
      <b-tab title="Pill 3">
        <p>
          Biscuit ice cream halvah candy canes bear claw ice cream cake chocolate bar donut. Toffee cotton candy liquorice. Oat cake lemon drops gingerbread dessert caramels. Sweet dessert jujubes powder sweet sesame snaps.
        </p>
      </b-tab>
      <b-tab title="Disabled" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { BTabs, BTab } from 'bootstrap-vue'

export default {
  components: {
    BTabs,
    BTab,
  },
}
</script>
`

export const codeFill = `
<template>
  <b-tabs fill pills>
    <b-tab title="Home" active>
      <b-card-text>
        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.
      </b-card-text>
    </b-tab>
    <b-tab title="Profile">
      <b-card-text>
        About
        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.
      </b-card-text>
    </b-tab>
    <b-tab
      title="Disabled"
      disabled
    >
      <b-card-text>
        Biscuit powder jelly beans.
      </b-card-text>
    </b-tab>
    <b-tab title="About">
      <b-card-text>
        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.
      </b-card-text>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTabs, BTab } from 'bootstrap-vue'

export default {
  components: {
    BTabs,
    BTab,
  },
}
</script>
`

export const codeJustified = `
<template>
  <b-tabs justified pills>
    <b-tab title="Home" active>
      <b-card-text>
        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.
      </b-card-text>
    </b-tab>
    <b-tab title="Profile">
      <b-card-text>
        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.
      </b-card-text>
    </b-tab>
    <b-tab
      title="Disabled"
      disabled
    >
      <b-card-text>
        Tootsie roll oat cake.
      </b-card-text>
    </b-tab>
    <b-tab title="About">
      <b-card-text>
        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.
      </b-card-text>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTabs, BTab } from 'bootstrap-vue'

export default {
  components: {
    BTabs,
    BTab,
  },
}
</script>
`

export const codeVertical = `
<template>
   <b-tabs pills vertical>
      <b-tab
        title="Pill 1"
        active
      >
        <b-card-text>
          Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Bear claw donut sesame snaps bear claw liquorice jelly-o bear claw carrot cake. Icing croissant bonbon biscuit gummi bears.
        </b-card-text>
      </b-tab>
      <b-tab title="Pill 2">
        <b-card-text>
          Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake. Sesame snaps wafer marshmallow danish dragée candy muffin jelly beans tootsie roll. Jelly beans oat cake chocolate cake tiramisu sweet.
        </b-card-text>
      </b-tab>
      <b-tab title="Pill 3">
        <b-card-text>
          Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake. Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop. Danish fruitcake bonbon bear claw gummi bears apple pie.
        </b-card-text>
      </b-tab>
      <b-tab
        title="Disabled"
        disabled
      >
        <b-card-text>Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop.</b-card-text>
      </b-tab>
    </b-tabs>
</template>

<script>
import { BTabs, BTab } from 'bootstrap-vue'

export default {
  components: {
    BTabs,
    BTab,
  },
}
</script>
`

export const codeAlignment = `
<template>
  <div>
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
  </div>
</template>

<script>
import { BTabs, BTab } from 'bootstrap-vue'

export default {
  components: {
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
    }
  },
}
</script>
`

export const codeThemes = `
<template>
  <div>
    <h6>Primary</h6>
    <b-tabs pills nav-class="nav-pill-primary">
      <b-tab title="Active" active/>
      <b-tab title="Link"/>
      <b-tab title="Link"/>
      <b-tab title="Disabled"disabled/>
    </b-tabs>
    <h6>Secondary</h6>
    <b-tabs pills nav-class="nav-pill-secondary">
      <b-tab title="Active" active/>
      <b-tab title="Link"/>
      <b-tab title="Link"/>
      <b-tab title="Disabled" disabled/>
    </b-tabs>
    <h6>Success</h6>
    <b-tabs pills nav-class="nav-pill-success">
      <b-tab title="Active" active />
      <b-tab title="Link"/>
      <b-tab title="Link"/>
      <b-tab title="Disabled" disabled/>
    </b-tabs>
    <h6>Warning</h6>
    <b-tabs pills nav-class="nav-pill-warning">
      <b-tab title="Active" active/>
      <b-tab title="Link"/>
      <b-tab title="Link"/>
      <b-tab title="Disabled" disabled/>
    </b-tabs>
    <h6>Danger</h6>
    <b-tabs pills nav-class="nav-pill-danger">
      <b-tab title="Active" active/>
      <b-tab title="Link"/>
      <b-tab title="Link"/>
      <b-tab title="Disabled" disabled/>
    </b-tabs>
    <h6>Info</h6>
    <b-tabs pills nav-class="nav-pill-info">
      <b-tab title="Active" active/>
      <b-tab title="Link"/>
      <b-tab title="Link"/>
      <b-tab title="Disabled" disabled/>
    </b-tabs>
  </div>
</template>

<script>
import { BTab, BTabs } from 'bootstrap-vue'

export default {
  components: {
    BTab,
    BTabs,
  },
}
</script>
`
