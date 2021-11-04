<template>
  <b-card-code title="Colors">
    <b-card-text class="mb-0">
      <span>Use class </span>
      <code>.custom-control-#{$color-name}</code>
      <span> with </span>
      <code>&lt;b-form-checkbox switch&gt;</code>
      <span>
        to change switch's color
      </span>
    </b-card-text>

    <div class="demo-inline-spacing">

      <!-- primary -->
      <div>
        <b-card-text class="mb-0">
          Primary
        </b-card-text>
        <b-form-checkbox
          checked="true"
          class="custom-control-primary"
          name="check-button"
          switch
        />
      </div>

      <!-- secondary -->
      <div>
        <b-card-text class="mb-0">
          Secondary
        </b-card-text>
        <b-form-checkbox
          checked="true"
          class="custom-control-secondary"
          name="check-button"
          switch
        />
      </div>

      <!-- success -->
      <div>
        <b-card-text class="mb-0">
          Success
        </b-card-text>
        <b-form-checkbox
          checked="true"
          class="custom-control-success"
          name="check-button"
          switch
        />
      </div>

      <!-- danger -->
      <div>
        <b-card-text class="mb-0">
          Danger
        </b-card-text>
        <b-form-checkbox
          checked="true"
          class="custom-control-danger"
          name="check-button"
          switch
        />
      </div>

      <!-- warning -->
      <div>
        <b-card-text class="mb-0">
          Warning
        </b-card-text>
        <b-form-checkbox
          checked="true"
          class="custom-control-warning"
          name="check-button"
          switch
        />
      </div>

      <!-- info -->
      <div>
        <b-card-text class="mb-0">
          Info
        </b-card-text>
        <b-form-checkbox
          checked="true"
          class="custom-control-info"
          name="check-button"
          switch
        />
      </div>

      <!-- dark -->
      <div>
        <b-card-text class="mb-0">
          Dark
        </b-card-text>
        <b-form-checkbox
          checked="true"
          class="custom-control-dark"
          name="check-button"
          switch
        />
      </div>
    </div>

    <template #code>
      {{ codeColor }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormCheckbox, BCardText } from 'bootstrap-vue'
import { codeColor } from './code'

export default {
  components: {
    BCardCode,
    BFormCheckbox,
    BCardText,
  },
  data() {
    return {
      codeColor,
    }
  },
}
</script>
