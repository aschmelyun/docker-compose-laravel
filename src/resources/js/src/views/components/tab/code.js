export const codeDefault = `
<template>
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
</template>

<script>
import { BTabs, BTab } from 'bootstrap-vue'

export default {
  components: {
    BTabs,
    BCardText,
    BTab,
  },
}
</script>
`

export const codeAlignment = `
<template>
  <!-- left align -->
  <h6>Left</h6>
  <div class="mb-3">
    <b-tabs align="left">
      <b-tab title="Home" />
      <b-tab
        active
        title="Service"
      />
      <b-tab title="Account" />
    </b-tabs>
  </div>

  <!-- center align -->
  <h6>
    Center
  </h6>
  <div class="mb-3">
    <b-tabs align="center">
      <b-tab
        title="Home"
        active
      />
      <b-tab title="Service" />
      <b-tab title="Account" />
    </b-tabs>
  </div>

  <!-- right align -->
  <h5>Right</h5>
  <b-tabs align="right">
    <b-tab title="Home" />
    <b-tab title="Service" />
    <b-tab
      active
      title="Account"
    />
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

export const codeFill = `
<template>
  <b-tabs content-class="pt-1" fill>
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
</template>

<script>
import { BTabs, BTab, BCardText } from 'bootstrap-vue'

export default {
  components: {
    BTabs,
    BTab,
    BCardText,
  },
}
</script>
`

export const codeJustified = `
<template>
  <b-tabs content-class="mt-2" justified>
    <b-tab title="Home">
      <b-card-text>
        Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry.Danish fruitcake bonbon bear claw gummi bears apple pie. Chocolate sweet topping fruitcake cake.
      </b-card-text>
      <b-card-text>
        Dragée jelly-o pie halvah pudding bear claw. Carrot cake pie toffee pastry candy canes. Ice cream tiramisu chocolate bar apple pie jujubes croissant toffee. Sweet roll chocolate bar pastry macaroon jelly-o. Jujubes pudding lemon drops dessert cake. Pudding cupcake chupa chups brownie.
      </b-card-text>
    </b-tab>
    <b-tab
      active
      title="Profile"
    >
      <b-card-text>
        Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.
      </b-card-text>
      <b-card-text>
        Sesame snaps chupa chups jelly-o candy croissant pastry. Lollipop pudding biscuit. Sweet roll candy canes tootsie roll halvah jujubes gummi bears toffee cheesecake. Topping macaroon marshmallow caramels. Pastry caramels pastry.
      </b-card-text>
    </b-tab>
    <b-tab title="Messages">
      <b-card-text>
        Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
      </b-card-text>
      <b-card-text>
        Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.
      </b-card-text>
    </b-tab>
    <b-tab title="Settings">
      <b-card-text>
        Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry.I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie.
      </b-card-text>
      <b-card-text>
        Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
      </b-card-text>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTabs, BTab, BCardText } from 'bootstrap-vue'

export default {
  components: {
    BCardText,
    BTabs,
    BTab,
  },
}
</script>
`

export const codeLazy = `
<template>
  <b-tabs content-class="mt-1">
    <!-- This tabs content will always be mounted -->
    <b-tab title="Regular tab">
      <b-alert
        variant="info"
        show
        class="mb-0"
      >
        <div class="alert-body">
          I'm always mounted
        </div>
      </b-alert>
    </b-tab>

    <!-- This tabs content will not be mounted until the tab is shown -->
    <!-- and will be un-mounted when hidden -->
    <b-tab
      title="Lazy tab"
      lazy
    >
      <b-alert
        variant="info"
        show
        class="mb-0"
      >
        <div class="alert-body">
          I'm lazy mounted!
        </div>
      </b-alert>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTabs, BTab, BAlert} from 'bootstrap-vue'

export default {
  components: {
    BTabs,
    BTab,
    BAlert,
  },
}
</script>
`

export const codeDynamic = `
<template>
  <b-tabs>
      <!-- Render Tabs, supply a unique \`key\` to each tab -->
      <b-tab
        v-for="i in tabs"
        :key="'dyn-tab-' + i"
        :title="'Tab ' + i"
      >
        Tab contents {{ i }}
        <b-button
          size="sm"
          variant="danger"
          class="float-right"
          @click="closeTab(i)"
        >
          Close tab
        </b-button>
      </b-tab>

      <!-- New Tab Button (Using tabs-end slot) -->
      <template #tabs-end>
        <b-nav-item
          role="presentation"
          @click.prevent="newTab"
        >
          <b>+</b>
        </b-nav-item>
      </template>

      <!-- Render this if no tabs -->
      <template #empty>
        <div class="text-center text-muted">
          There are no open tabs<br>
          Open a new tab using the <b>+</b> button above.
        </div>
      </template>
    </b-tabs>
</template>

<script>
import {
  BTabs, BTab, BNavItem, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BTabs,
    BTab,
    BNavItem,
    BButton,
  },
  data() {
    return {
      tabs: [1],
      tabCounter: 1,
    }
  },
   methods: {
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i += 1) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1)
        }
      }
    },
    newTab() {
      this.tabs.push((this.tabCounter += 1))
    },
  },
}
</script>
`

export const codeIcon = `
<template>
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
</template>

<script>
import { BTabs, BTab, BCardText } from 'bootstrap-vue'

export default {
  components: {
    BCardText,
    BTabs,
    BTab,
  },
}
</script>
`

export const codeProgrammatically = `
<template>
  <!-- Tabs with card integration -->
  <b-tabs v-model="tabIndex">
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
</template>

<script>
import { BButtonGroup, BButton, BCard, BTab, BTabs} from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BButtonGroup,
    BButton,
    BCard,
    BTab,
    BTabs,
  },
  data: () => ({
    tabIndex: 1,
  }),
}
</script>
`

export const codePosition = `
<template>
  <b-tabs>
    <!-- top position -->
    <b-tab title="Top">
      <b-tabs content-class="mt-2">
        <b-tab title="Tab 1">
          <b-card-text>
            Oat cake marzipan cake lollipop caramels wafer pie jelly beans. Icing halvah chocolate cake carrot cake. Jelly beans carrot cake marshmallow gingerbread chocolate cake. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Gummies cupcake croissant.
          </b-card-text>
        </b-tab>
        <b-tab
          active
          title="Tab 2"
        >
          <b-card-text>
            Sugar plum tootsie roll biscuit caramels. Liquorice brownie pastry cotton candy oat cake fruitcake jelly chupa chups. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Pudding caramels pastry powder cake soufflé wafer caramels. Jelly-o pie cupcake.
          </b-card-text>
        </b-tab>
        <b-tab title="Tab 2">
          <b-card-text>
            Biscuit ice cream halvah candy canes bear claw ice cream cake chocolate bar donut. Toffee cotton candy liquorice. Oat cake lemon drops gingerbread dessert caramels. Sweet dessert jujubes powder sweet sesame snaps. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut.
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-tab>

    <!-- right position -->
    <b-tab title="Right">
      <b-tabs
        vertical
        end
        nav-class="nav-right"
        nav-wrapper-class="nav-vertical"
      >
        <b-tab
          active
          title="Tab 1"
        >
          <b-card-text>
            Oat cake marzipan cake lollipop caramels wafer pie jelly beans. Icing halvah chocolate cake carrot cake. Jelly beans carrot cake marshmallow gingerbread chocolate cake. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Gummies cupcake croissant.
          </b-card-text>
          <b-card-text>
            Sweet chocolate muffin fruitcake gummies jujubes pie lollipop. Brownie marshmallow caramels gingerbread jelly beans chocolate bar oat cake wafer.
          </b-card-text>
        </b-tab>
        <b-tab title="Tab 2">
          <b-card-text>
            Sugar plum tootsie roll biscuit caramels. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Liquorice brownie pastry cotton candy oat cake fruitcake jelly chupa chups. Pudding caramels pastry powder cake soufflé wafer caramels. Jelly-o pie cupcake.
          </b-card-text>
          <b-card-text>
            Sweet chocolate muffin fruitcake gummies jujubes pie lollipop. Brownie marshmallow caramels gingerbread jelly beans chocolate bar oat cake wafer.
          </b-card-text>
        </b-tab>
        <b-tab title="Tab 3">
          <b-card-text>
            Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Biscuit ice cream halvah candy canes bear claw ice cream cake chocolate bar donut. Toffee cotton candy liquorice. Oat cake lemon drops gingerbread dessert caramels. Sweet dessert jujubes powder sweet sesame snaps.
          </b-card-text>
          <b-card-text>
            Candy cookie sweet roll bear claw sweet roll. Cake tiramisu cotton candy gingerbread cheesecake toffee cake. Cookie liquorice dessert candy canes jelly.
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-tab>

    <!-- bottom position -->
    <b-tab title="Bottom">
      <b-tabs end>
        <b-tab
          title="Tab 1"
          active
        >
          <b-card-text>
            Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy
            cake muffin croissant tart dessert.
          </b-card-text>
          <b-card-text>
            Tiramisu caramels candy canes chocolate cake sweet roll liquorice
            icing cupcake.
          </b-card-text>
        </b-tab>
        <b-tab title="Tab 2">
          <b-card-text>
            Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan
            carrot cake. Chocolate bar danish icing sweet apple pie jelly-o carrot cake cookie cake.
          </b-card-text>
          <b-card-text>
            Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon
            biscuit gummi bears.
          </b-card-text>
        </b-tab>
        <b-tab title="Tab 3">
          <b-card-text>
            Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice
            cheesecake cookie chupa chups marshmallow oat cake biscuit.
          </b-card-text>
          <b-card-text>
            Dessert toffee fruitcake ice cream powder tootsie roll cake.
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-tab>

    <!-- left position -->
    <b-tab
      active
      title="Left"
    >
      <b-tabs
        vertical
        nav-wrapper-class="nav-vertical"
      >
        <b-tab
          active
          title="Tab 1"
        >
          <b-card-text>
            Oat cake marzipan cake lollipop caramels wafer pie jelly beans. Icing halvah chocolate cake carrot cake. Jelly beans carrot cake marshmallow gingerbread chocolate cake. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Gummies cupcake croissant.
          </b-card-text>
          <b-card-text>
            Sweet chocolate muffin fruitcake gummies jujubes pie lollipop. Brownie marshmallow caramels gingerbread jelly beans chocolate bar oat cake wafer.
          </b-card-text>
        </b-tab>
        <b-tab title="Tab 2">
          <b-card-text>
            Sugar plum tootsie roll biscuit caramels. Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Liquorice brownie pastry cotton candy oat cake fruitcake jelly chupa chups. Pudding caramels pastry powder cake soufflé wafer caramels. Jelly-o pie cupcake.
          </b-card-text>
          <b-card-text>
            Chocolate bar danish icing sweet apple pie jelly-o carrot cake cookie cake.
          </b-card-text>
        </b-tab>
        <b-tab title="Tab 3">
          <b-card-text>
            Sweet fruitcake cheesecake biscuit cotton candy. Cookie powder marshmallow donut. Biscuit ice cream halvah candy canes bear claw ice cream cake chocolate bar donut. Toffee cotton candy liquorice. Oat cake lemon drops gingerbread dessert caramels. Sweet dessert jujubes powder sweet sesame snaps.
          </b-card-text>
          <b-card-text>
            Candy cookie sweet roll bear claw sweet roll. Cake tiramisu cotton candy gingerbread cheesecake toffee cake. Cookie liquorice dessert candy canes jelly.
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTabs, BTab, BCardText } from 'bootstrap-vue'

export default {
  components: {
    BCardText,
    BTabs,
    BTab,
  },
}
</script>
`
