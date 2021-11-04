<template>
  <b-card-code title="Form & Scrolling Modals">

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

    <template #code>
      {{ codeFormScroll }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BButton, BModal, VBModal, BForm, BFormInput, BFormGroup, BCardText } from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { codeFormScroll } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BModal,
    BForm,
    BFormInput,
    BCardText,
    BFormGroup,
    vSelect,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      codeFormScroll,
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

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
</style>
