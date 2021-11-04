export const codeAlertDefaut = `
<template>
  <div class="demo-spacing-0">
    <b-alert
      variant="primary"
      show
    >
      <div class="alert-body">
        <span><strong>Good Morning!</strong> Start your day with some alerts.</span>
      </div>
    </b-alert>
  </div>
</template>

<script>
import { BAlert} from 'bootstrap-vue'

export default {
  components: {
    BAlert,
  },
}
</script>
`

export const codeAlertTitle = `
<template>
  <div class="demo-spacing-0">
    <b-alert
      variant="warning"
      show
    >
      <h4 class="alert-heading">
        Lorem ipsum dolor sit amet
      </h4>
      <div class="alert-body">
        Lorem ipsum dolor sit amet
        <b-link class="alert-link">
          consectetur
        </b-link>
        adipisicing elit. Ducimus, laborum!
      </div>
    </b-alert>
  </div>
</template>

<script>
import { BAlert, BLink } from 'bootstrap-vue'

export default {
  components: {
    BAlert,
    BLink,
  },
}
</script>
`

export const codeAlertColor = `
<template>
  <div class="demo-spacing-0">
    <!-- primary -->
    <b-alert
      variant="primary"
      show
    >
      <h4 class="alert-heading">
        Primary
      </h4>
      <div class="alert-body">
        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>
      </div>
    </b-alert>

    <!-- secondary -->
    <b-alert
      variant="secondary"
      show
    >
      <h4 class="alert-heading">
        Secondary
      </h4>
      <div class="alert-body">
        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>
      </div>
    </b-alert>

    <!-- success -->
    <b-alert
      variant="success"
      show
    >
      <h4 class="alert-heading">
        Success
      </h4>
      <div class="alert-body">
        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>
      </div>
    </b-alert>

    <!-- danger -->
    <b-alert
      variant="danger"
      show
    >
      <h4 class="alert-heading">
        Danger
      </h4>
      <div class="alert-body">
        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>
      </div>
    </b-alert>

    <!-- warning -->
    <b-alert
      variant="warning"
      show
    >
      <h4 class="alert-heading">
        Warning
      </h4>
      <div class="alert-body">
        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>
      </div>
    </b-alert>

    <!-- info -->
    <b-alert
      variant="info"
      show
    >
      <h4 class="alert-heading">
        Info
      </h4>
      <div class="alert-body">
        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>
      </div>
    </b-alert>

    <!-- dark -->
    <b-alert
      variant="dark"
      show
    >
      <h4 class="alert-heading">
        Dark
      </h4>
      <div class="alert-body">
        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>
      </div>
    </b-alert>
  </div>
</template>

<script>
import { BAlert} from 'bootstrap-vue'

export default {
  components: {
    BAlert
  },
}
</script>
`

export const codeIcon = `
<template>
  <div class="demo-spacing-0">
    <b-alert
      show
      variant="primary"
    >
      <div class="alert-body">
        <feather-icon
          class="mr-25"
          icon="StarIcon"
        />
        <span class="ml-25">Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.</span>
      </div>
    </b-alert>
  </div>
</template>

<script>
import { BAlert } from 'bootstrap-vue'

export default {
  components: {
    BAlert
  },
}
</script>
`

export const codeAutoDismiss = `
<template>
  <div class="demo-spacing-0">
    <b-alert
      v-height-fade.appear
      :show="dismissCountDown"
      dismissible
      class="mb-0"
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <div class="alert-body">
        <span>This alert will dismiss after {{ dismissCountDown }} seconds...</span>
      </div>
    </b-alert>

    <!-- trigger button -->
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      class="mt-75"
      @click="showAlert"
    >
      Show alert with count-down timer
    </b-button>
  </div>
</template>

<script>
import { BAlert, BButton } from 'bootstrap-vue'
import { heightFade } from '@core/directives/animations'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BAlert,
    BButton
  },
  directives: {
    'height-fade': heightFade,
    Ripple,
  },
  data() {
    return {
      dismissSecs: 50,
      dismissCountDown: 0,
    }
  },
   methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
}
</script>
`

export const codeVsupport = `
<template>
  <div class="demo-spacing-0">
    <!-- alert -->
    <b-alert
      v-model="showDismissibleAlert"
      v-height-fade.appear
      variant="danger"
      dismissible
      class="mb-0"
    >
      <div class="alert-body">
        Dismissible Alert!
      </div>
    </b-alert>

    <!-- button -->
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      class="mt-1"
      @click="showDismissibleAlert = !showDismissibleAlert"
    >
      {{ showDismissibleAlert ? 'Hide' : 'Show' }} dismissible alert
    </b-button>
  </div>
</template>

<script>
import { BAlert, BButton } from 'bootstrap-vue'
import { heightFade } from '@core/directives/animations'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BAlert,
    BButton
  },
  directives: {
    'height-fade': heightFade,
    Ripple,
  },
  data: () => ({
    showDismissibleAlert: false,
  }),
}
</script>
`

export const codeAnimation = `
<template>
  <div>
    <!-- dismissible alert -->
    <b-alert
      v-height-fade
      show
      dismissible
      fade
      class="mb-0"
      variant="primary"
    >
      <div class="alert-body">
        <span>Dismissible Alert!</span>
      </div>
    </b-alert>

    <b-card-text class="pt-2 mb-0">
      <span>If you want to show animation even when alert get rendered. You can use </span>
      <code>appear</code>
      <span> modifier</span>
    </b-card-text>

    <!--  show alert with count-down timer button-->
    <div class="demo-inline-spacing mb-1">
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        @click="showAlert"
      >
        Show alert with count-down timer
      </b-button>

      <!-- show dismissible alert button -->
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        @click="showDismissibleAlert = true"
      >
        Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
      </b-button>
    </div>

    <!-- dismissible Alert -->
    <b-alert
      v-height-fade.appear
      variant="danger"
      dismissible
      fade
      :show="showDismissibleAlert"
      class="mb-0"
      @dismissed="showDismissibleAlert = false"
    >
      <div class="alert-body">
        <span>Dismissible Alert!</span>
      </div>
    </b-alert>

    <b-card-text class="m-0 py-1">
      You can even use this on dismissible alerts.
    </b-card-text>

    <!-- count down dismissible alert  -->
    <b-alert
      v-height-fade.appear
      :show="dismissCountDown"
      dismissible
      fade
      variant="warning"
      class="mb-0"
      @dismiss-count-down="countDownChanged"
    >
      <div class="alert-body">
        <span>This alert will dismiss after {{ dismissCountDown }} seconds...</span>
      </div>
    </b-alert>
  </div>
</template>

<script>
import { BAlert, BButton, BCardText } from 'bootstrap-vue'
import { heightFade } from '@core/directives/animations'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BAlert,
    BCardText,
    BButton,
  },
    directives: {
    heightFade,
    Ripple,
  },
  data() {
    return {
      dismissSecs: 50,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
}
</script>
`

export const codeExample = `
<template>
  <div>
    <b-form-group>
      <label>Enter only numbers</label>
      <b-form-input
        v-model="value"
        class="w-25 w-sm-100"
        placeholder="0123456789"
        @keyup="validateInput"
      />
    </b-form-group>

    <!-- alert -->
    <b-alert
      v-height-fade.appear
      variant="danger"
      :show="show"
      class="mb-0"
    >
      <div class="alert-body">
        <feather-icon
          icon="InfoIcon"
          class="mr-50"
        />
        the value is invalid you can only enter numbers
      </div>
    </b-alert>
  </div>
</template>

<script>
import {BAlert, BFormGroup, BFormInput} from 'bootstrap-vue'
import { heightFade } from '@core/directives/animations'

export default {
  components: {
    BAlert,
    BFormGroup,
    BFormInput,
  },
  directives: {
    'height-fade': heightFade,
  },
  data() {
    return {
      value: '',
      show: true,
      codeExample,
    }
  },
  methods: {
    validateInput() {
      if (/^\\d+$/.test(this.value)) {
        this.show = false
      } else {
        this.show = true
      }
    },
  },
}
</script>
`
