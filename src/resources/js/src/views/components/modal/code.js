export const codeBasic = `
<template>
  <div>
    <!-- modal trigger button -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-1
        variant="outline-primary"
      >
        Basic Modal
      </b-button>

      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-center
        variant="outline-primary"
      >
        Vertically Center
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-no-backdrop
        variant="outline-primary"
      >
        Disabled Backdrop
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-no-animation
        variant="outline-primary"
      >
        Disabled Animation
      </b-button>
    </div>

    <!-- basic modal -->
    <b-modal
      id="modal-1"
      title="Basic Modal"
      ok-only
      ok-title="Accept"
    >
      <b-card-text>
        <h5>Check First Paragraph</h5>
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie.
        Brownie carrot cake candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake liquorice.
      </b-card-text>
    </b-modal>

    <!-- disable animation-->
    <b-modal
      id="modal-no-animation"
      content-class="shadow"
      title="Disabled Animation"
      no-fade
      ok-only
      ok-title="Accept"
    >
      <b-card-text>
        Chocolate bar jelly dragée cupcake chocolate bar I love donut liquorice.
        Powder I love marzipan donut candy canes jelly-o.
        Dragée liquorice apple pie candy biscuit danish lemon drops sugar plum.
      </b-card-text>
      <b-alert
        show
        variant="success"
      >
        <div class="alert-body">
          Well done! You successfully read this important alert message.
        </div>
      </b-alert>
    </b-modal>

    <!-- modal vertical center -->
    <b-modal
      id="modal-center"
      centered
      title="Vertically Centered"
      ok-only
      ok-title="Accept"
    >
      <b-card-text>
        Croissant jelly-o halvah chocolate sesame snaps.
        Brownie caramels candy canes chocolate cake marshmallow icing lollipop I love.
        Gummies macaroon donut caramels biscuit topping danish.
      </b-card-text>
    </b-modal>

    <!-- modal backdrop -->
    <b-modal
      id="modal-no-backdrop"
      hide-backdrop
      ok-only
      no-close-on-backdrop
      content-class="shadow"
      title="Disabled Backdrop"
      ok-title="Accept"
    >
      <b-card-text>
        <span>We've added the utility class</span>
        <code>'shadow'</code>
        <span>to the modal content for added effect.</span>
      </b-card-text>
      <b-card-text>
        Candy oat cake topping topping chocolate cake. Icing pudding jelly beans I love chocolate carrot cake wafer
        candy canes. Biscuit croissant fruitcake bonbon soufflé.
      </b-card-text>
    </b-modal>
  </div>
</template>

<script>
import { BModal, BButton, VBModal, BAlert} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCardCode,
    BButton,
    BModal,
    BAlert,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
}
</script>
`

export const codeThemes = `
<template>
  <div>
    <!-- button trigger -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-primary
        variant="outline-primary"
      >
        Primary
      </b-button>
      <b-button
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        v-b-modal.modal-seconday
        variant="outline-secondary"
      >
        Secondary
      </b-button>
      <b-button
        v-ripple.400="'rgba(40, 199, 111, 0.15)'"
        v-b-modal.modal-success
        variant="outline-success"
      >
        Success
      </b-button>
      <b-button
        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
        v-b-modal.modal-danger
        variant="outline-danger"
      >
        Danger
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 159, 67, 0.15)'"
        v-b-modal.modal-warning
        variant="outline-warning"
      >
        Warning
      </b-button>
      <b-button
        v-ripple.400="'rgba(0, 207, 232, 0.15)'"
        v-b-modal.modal-info
        variant="outline-info"
      >
        Info
      </b-button>
      <b-button
        v-ripple.400="'rgba(30, 30, 30, 0.15)'"
        v-b-modal.modal-dark
        variant="outline-dark"
      >
        Dark
      </b-button>
    </div>

    <!-- modal -->
    <b-modal
      id="modal-primary"
      ok-only
      ok-title="Accept"
      modal-class="modal-primary"
      centered
      title="Primary Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>

    <b-modal
      id="modal-seconday"
      ok-only
      ok-variant="secondary"
      ok-title="Accept"
      modal-class="modal-secondary"
      centered
      title="Secondary Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>

    <b-modal
      id="modal-success"
      ok-only
      ok-variant="success"
      ok-title="Accept"
      modal-class="modal-success"
      centered
      title="Success Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>

    <b-modal
      id="modal-danger"
      ok-only
      ok-variant="danger"
      ok-title="Accept"
      modal-class="modal-danger"
      centered
      title="Danger Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>

    <b-modal
      id="modal-info"
      ok-only
      ok-variant="info"
      ok-title="Accept"
      modal-class="modal-info"
      centered
      title="Info Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>

    <b-modal
      id="modal-warning"
      ok-only
      ok-variant="warning"
      ok-title="Accept"
      modal-class="modal-warning"
      centered
      title="Warning Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>

    <b-modal
      id="modal-dark"
      ok-only
      ok-variant="dark"
      ok-title="Accept"
      modal-class="modal-dark"
      centered
      title="Dark Modal"
    >
      <b-card-text>
        Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love
        fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder
        cupcake ice cream tootsie roll jelly.
      </b-card-text>
    </b-modal>
  </div>
</template>

<script>
import { BButton, BModal, VBModal } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BModal,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
}
</script>
`

export const codeSize = `
<template>
  <div>
    <!-- trigger button -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-xs
        variant="outline-primary"
      >
        Extra Small
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-sm
        variant="outline-primary"
      >
        Small Modal
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-default
        variant="outline-primary"
      >
        Default Modal
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-lg
        variant="outline-primary"
      >
        Large Modal
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-xl
        variant="outline-primary"
      >
        Extra Large Modal
      </b-button>
    </div>

    <!-- modal -->
    <b-modal
      id="modal-xs"
      cancel-variant="secondary"
      ok-only
      ok-title="Accept"
      centered
      size="xs"
      title="Extra Small Modal"
    >
      <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
    </b-modal>

    <b-modal
      id="modal-sm"
      cancel-variant="secondary"
      ok-only
      ok-title="Accept"
      centered
      size="sm"
      title="Small Modal"
    >
      <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
    </b-modal>

    <b-modal
      id="modal-default"
      ok-only
      ok-title="Accept"
      centered
      title="Default Modal"
    >
      <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
    </b-modal>

    <b-modal
      id="modal-lg"
      ok-only
      ok-title="Accept"
      centered
      size="lg"
      title="Large Modal"
    >
      <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
    </b-modal>

    <b-modal
      id="modal-xl"
      ok-only
      ok-title="Accept"
      centered
      size="xl"
      title="Extra Large Modal"
    >
      <b-card-text>Biscuit chocolate cake gummies. Lollipop I love macaroon bear claw caramels. I love marshmallow tiramisu I love fruitcake I love gummi bears. Carrot cake topping liquorice. Pudding caramels liquorice sweet I love. Donut powder cupcake ice cream tootsie roll jelly.</b-card-text>
    </b-modal>
  </div>
</template>

<script>
import { BButton, BModal, VBModal } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BModal,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
}
</script>
`

export const codeFormScroll = `
<template>
  <div>
     <div class="demo-inline-spacing">
      <!-- modal login button -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-login
        variant="outline-primary"
      >
        Login Form
      </b-button>

      <!-- modal scrolling content button -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-tall
        variant="outline-primary"
      >
        Scrolling Long Content
      </b-button>

      <!-- button Scrolling Content inside Modal-->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-scrollable
        variant="outline-primary"
      >
        Scrolling Content inside Modal
      </b-button>

      <!-- select 2 demo -->
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-select2
        variant="outline-primary"
      >
        Select2 With Modal
      </b-button>
    </div>

    <!-- modal login-->
    <b-modal
      id="modal-login"
      cancel-variant="outline-secondary"
      ok-title="Login"
      cancel-title="Close"
      centered
      title="Login Form"
    >
      <b-form>
        <b-form-group>
          <label for="email">Email:</label>
          <b-form-input
            id="email"
            type="email"
            placeholder="Email Address"
          />
        </b-form-group>
        <b-form-group>
          <label for="password">Password</label>
          <b-form-input
            type="password"
            placeholder="Password"
          />
        </b-form-group>
      </b-form>
    </b-modal>

    <!-- modal scrolling content -->
    <b-modal
      id="modal-tall"
      title="Overflowing Content"
      cancel-variant="outline-secondary"
      cancel-title="Close"
      ok-title="Accept"
    >
      <b-card-text
        v-for="(content,index) in scrollContent"
        :key="index"
      >
        {{ content }}
      </b-card-text>
    </b-modal>

    <!-- modal Scrolling Content inside Modal-->
    <b-modal
      id="modal-scrollable"
      scrollable
      title="Scrollable Content"
      cancel-title="Close"
      ok-title="Accept"
      cancel-variant="outline-secondary"
    >
      <b-card-text
        v-for="(content,index) in scrollContent"
        :key="index"
      >
        {{ content }}
      </b-card-text>
    </b-modal>

    <!-- select 2 demo -->
    <b-modal
      id="modal-select2"
      title="Basic Modal"
      ok-title="submit"
      cancel-variant="outline-secondary"
    >
      <b-form>
        <b-form-group
          label="Enter Name"
          label-for="name"
        >
          <b-form-input
            id="name"
            placeholder="Enter name"
          />
        </b-form-group>
        <b-form-group
          label="Choose the country"
          label-for="vue-select"
        >
          <v-select
            id="vue-select"
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="option"
          />
        </b-form-group>
        <b-form-group
          label="Zip Code"
          label-for="zip-code"
        >
          <b-form-input
            id="zip-code"
            type="number"
            placeholder="Zip Code"
          />
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import {
  BButton, BModal, VBModal, BForm, BFormInput, BFormGroup,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BModal,
    BForm,
    BFormInput,
    BFormGroup,
    vSelect,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      scrollContent: [
        'Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry.',
        'Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.',
        'Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.',
        'Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry.',
        'Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.',
        'Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.',
        'Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry.',
        'Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.',
        'Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.',
        'Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry.',
        'Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.',
        'Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.',
        'Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot cake soufflé halvah.',
      ],
      selected: 'USA',
      option: ['USA', 'Canada', 'Maxico'],
    }
  },
}
</script>
`

export const codeVariant = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      @click="show = true"
    >
      Show Modal
    </b-button>

    <b-modal
      v-model="show"
      title="Modal Variants"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="3" />
          <b-col>Background</b-col>
          <b-col>Text</b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">
            Header
          </b-col>
          <b-col>
            <b-form-select
              v-model="headerBgVariant"
              :options="variants"
            />
          </b-col>
          <b-col>
            <b-form-select
              v-model="headerTextVariant"
              :options="variants"
            />
          </b-col>
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">
            Body
          </b-col>
          <b-col>
            <b-form-select
              v-model="bodyBgVariant"
              :options="variants"
            />
          </b-col>
          <b-col>
            <b-form-select
              v-model="bodyTextVariant"
              :options="variants"
            />
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
            Footer
          </b-col>
          <b-col>
            <b-form-select
              v-model="footerBgVariant"
              :options="variants"
            />
          </b-col>
          <b-col>
            <b-form-select
              v-model="footerTextVariant"
              :options="variants"
            />
          </b-col>
        </b-row>
      </b-container>

      <template #modal-footer>
        <div class="w-100">
          <p class="float-left mb-0">
            Modal Footer Content
          </p>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            size="sm"
            class="float-right"
            @click="show = false"
          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {
  BButton, BModal, VBModal, BContainer, BRow, BCol, BFormSelect,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BCol,
    BContainer,
    BFormSelect,
    BModal,
    BRow,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data: () => ({
    bodyBgVariant: 'light',
    bodyTextVariant: 'dark',
    codeVariant,
    footerBgVariant: 'warning',
    footerTextVariant: 'dark',
    headerBgVariant: 'info',
    headerTextVariant: 'light',
    show: false,
    variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
  }),
}
</script>
`

export const codeDisableFooter = `
<template>
  <div>
    <!-- modal trigger button -->
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-modal.modal-no-footer
      variant="outline-primary"
    >
      Launch Modal
    </b-button>

    <!-- modal -->
    <b-modal
      id="modal-no-footer"
      title="BootstrapVue"
      cancel-disabled
      ok-disabled
      cancel-title="Close"
      cancel-variant="outline-secondary"
      ok-title="Accept"
    >
      <b-card-text>
        Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears
        pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
      </b-card-text>
    </b-modal>
  </div>
</template>

<script>
import { BButton, BModal, VBModal } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BModal,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
}
</script>
`

export const codeFooterSize = `
<template>
  <div>
    <!-- modal trigger button -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-footer-sm
        variant="outline-primary"
      >
        Small Footer Buttons
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-footer-lg
        variant="outline-primary"
      >
        Large Footer Buttons
      </b-button>
    </div>

    <!-- modal -->
    <b-modal
      id="modal-footer-sm"
      title="BootstrapVue"
      button-size="sm"
      ok-title="Accept"
      cancel-title="Close"
      cancel-variant="outline-secondary"
    >
      <b-card-text>
        This modal has small footer buttons.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        A cumque quo delectus, aspernatur quasi sint vitae reiciendis quae? Itaque minima atque quae corporis impedit repellat recusandae consectetur voluptas, at rerum?
      </b-card-text>
    </b-modal>

    <!-- modal -->
    <b-modal
      id="modal-footer-lg"
      title="BootstrapVue"
      button-size="lg"
      cancel-title="Close"
      ok-title="Accept"
      cancel-variant="outline-secondary"
    >
      <b-card-text>
        This modal has large footer buttons.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi, dolorem consequuntur delectus necessitatibus eum expedita culpa laudantium! Quaerat debitis obcaecati doloremque a iusto, soluta ipsa velit. Veritatis, assumenda sapiente?
      </b-card-text>
    </b-modal>
  </div>
</template>

<script>
import { BButton, BModal, VBModal } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BModal,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
}
</script>
`

export const codeMessageBox = `
<template>
  <div>
    <!-- Modal Buttons -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showMsgBoxOne"
      >
        Simple msgBoxConfirm
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showMsgBoxTwo"
      >
        msgBoxConfirm with options
      </b-button>
    </div>

    <!-- modal status -->
    <b-card-text class="mt-2">
      First modal return value: <span class="font-weight-bold">{{ String(boxOne) }}</span>
    </b-card-text>
    <b-card-text class="mb-0">
      Second modal return value: <span class="font-weight-bold">{{ String(boxTwo) }}</span>
    </b-card-text>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
  },
  data: () => ({
    boxOne: '',
    boxTwo: '',
  }),
  methods: {
    showMsgBoxOne() {
      this.boxOne = ''
      this.$bvModal
        .msgBoxConfirm('Are you sure?', {
          cancelVariant: 'outline-secondary',
        })
        .then(value => {
          this.boxOne = value
        })
    },
    showMsgBoxTwo() {
      this.boxTwo = ''
      this.$bvModal
        .msgBoxConfirm('Please confirm that you want to delete everything.', {
          title: 'Please Confirm',
          size: 'sm',
          okVariant: 'primary',
          okTitle: 'Yes',
          cancelTitle: 'No',
          cancelVariant: 'outline-secondary',
          hideHeaderClose: false,
          centered: true,
        })
        .then(value => {
          this.boxTwo = value
        })
    },
  },
}
</script>
`

export const codeMethod = `
<template>
  <div>
    <!-- modal trigger button -->
    <div class="demo-inline-spacing">
      <b-button
        id="show-btn"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="showModal"
      >
        Open Modal
      </b-button>
      <b-button
        id="toggle-btn"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
        @click="toggleModal"
      >
        Toggle Modal
      </b-button>
    </div>

    <!-- modal -->
    <b-modal
      ref="my-modal"
      hide-footer
      title="Using Component Methods"
    >
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        class="mt-3"
        variant="outline-secondary"
        block
        @click="hideModal"
      >
        Close Me
      </b-button>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        class="mt-2"
        variant="outline-primary"
        block
        @click="toggleModal"
      >
        Toggle Me
      </b-button>
    </b-modal>
  </div>
</template>

<script>
import { BButton, BModal } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BModal,
  },
  directives: {
    Ripple,
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
  },
}
</script>
`

export const codeMultiple = `
<template>
  <div>
      <!-- button  -->
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-modal.modal-multi-1
      variant="outline-primary"
    >
      Open First Modal
    </b-button>

    <!-- modal -->
    <b-modal
      id="modal-multi-1"
      size="lg"
      title="First Modal"
      ok-only
      ok-title="Accept"
      no-stacking
    >
      <b-card-text class="my-2">
        First Modal
      </b-card-text>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        v-b-modal.modal-multi-2
        variant="primary"
      >
        Open Second Modal
      </b-button>
    </b-modal>

    <!-- modal -->
    <b-modal
      id="modal-multi-2"
      title="Second Modal"
      ok-only
      ok-title="Accept"
    >
      <b-card-text class="my-2">
        Second Modal
      </b-card-text>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        v-b-modal.modal-multi-3
        size="sm"
        variant="primary"
      >
        Open Third Modal
      </b-button>
    </b-modal>

    <!-- modal -->
    <b-modal
      id="modal-multi-3"
      size="sm"
      title="Third Modal"
      ok-only
      ok-title="Accept"
    >
      <b-card-text class="my-1">
        Third Modal
      </b-card-text>
    </b-modal>
  </div>
</template>

<script>
import { BModal, BButton, VBModal } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BModal,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
}
</script>
`

export const codePrevent = `
<template>
  <div>
     <!-- button -->
    <b-button
      id="toggle-btn"
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-modal.modal-prevent-closing
      variant="outline-primary"
    >
      Open Modal
    </b-button>

    <!-- modal data -->
    <div class="mt-2">
      <p>Submitted Names:</p>
      <div v-if="submittedNames.length === 0">
        --
      </div>
      <b-list-group
        v-else
      >
        <b-list-group-item
          v-for="(data,index) in submittedNames"
          :key="index"
        >
          {{ data }}
        </b-list-group-item>
      </b-list-group>
    </div>

    <!-- modal -->
    <b-modal
      id="modal-prevent-closing"
      ref="my-modal"
      title="Submit Your Name"
      ok-title="Submit"
      cancel-variant="outline-secondary"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form
        ref="form"
        @submit.stop.prevent="handleSubmit"
      >
        <b-form-group
          :state="nameState"
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          />
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import {
  BButton, BFormGroup, BFormInput, BModal, VBModal, BListGroup, BListGroupItem,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BFormGroup,
    BFormInput,
    BListGroup,
    BListGroupItem,
    BModal,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data: () => ({
    name: '',
    nameState: null,
    submittedNames: [],
  }),
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs['my-modal'].toggle('#toggle-btn')
      })
    },
  },
}
</script>
`

export const codeVmodal = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      @click="modalShow = !modalShow"
    >
      Launch Modal
    </b-button>

    <b-modal
      v-model="modalShow"
      title="Using v-model property"
      ok-title="Accept"
      ok-only
    >
      Bonbon caramels muffin.
      Chocolate bar oat cake cookie pastry dragée pastry.
      Carrot cake chocolate tootsie roll chocolate bar candy canes biscuit.
      Gummies bonbon apple pie fruitcake icing biscuit apple pie jelly-o sweet roll.
      Toffee sugar plum sugar plum jelly-o jujubes bonbon dessert carrot cake.
      Cookie dessert tart muffin topping donut icing fruitcake. Sweet roll cotton candy dragée danish Candy canes chocolate bar cookie.
      Gingerbread apple pie oat cake. Carrot cake fruitcake bear claw. Pastry gummi bears marshmallow jelly-o.
    </b-modal>
  </div>
</template>

<script>
import { BButton, BModal } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BModal,
  },
  directives: {
    Ripple,
  },
  data: () => ({
    modalShow: false,
  }),
}
</script>
`
