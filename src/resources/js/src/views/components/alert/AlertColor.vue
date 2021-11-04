<template>
  <div>
    <b-card-code
      title="Colors"
    >
      <b-card-text>
        <span>For proper styling of </span>
        <code>&lt;b-alert&gt;</code>
        <span> , use one of the four required contextual variants by setting the </span>
        <code>variant</code>
        <span> prop to one of the following: </span>
        <code>info, success, warning</code>
        <span> or </span>
        <code>danger</code>
        <span> . The default is </span>
        <code>info</code>
        <span> .</span>
      </b-card-text>

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

      <template #code>
        {{ codeAlertColor }}
      </template>
    </b-card-code>
  </div>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BAlert, BCardText } from 'bootstrap-vue'
import { codeAlertColor } from './code'

export default {
  components: {
    BCardCode,
    BAlert,
    BCardText,
  },
  data() {
    return {
      codeAlertColor,
    }
  },
}
</script>
