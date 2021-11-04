<template>
  <b-card-code title="Icons">
    <b-card-text class="mb-0">
      <span>Use class </span>
      <code>.switch-icon-left & .switch-icon-right</code>
      <span> inside of</span>
      <code>&lt;b-form-checkbox switch&gt;</code>
      <span> to create a switch with icon.</span>
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
        >
          <span class="switch-icon-left">
            <feather-icon icon="BellIcon" />
          </span>
          <span class="switch-icon-right">
            <feather-icon icon="BellOffIcon" />
          </span>
        </b-form-checkbox>
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
        >
          <span class="switch-icon-left">
            <feather-icon icon="CheckIcon" />
          </span>
          <span class="switch-icon-right">
            <feather-icon icon="XIcon" />
          </span>
        </b-form-checkbox>
      </div>

      <!-- success -->
      <div>
        <b-card-text class="mb-0">
          Success
        </b-card-text>
        <b-form-checkbox
          class="custom-control-success"
          name="check-button"
          switch
        >
          <span class="switch-icon-left">
            <feather-icon icon="Volume2Icon" />
          </span>
          <span class="switch-icon-right">
            <feather-icon icon="VolumeXIcon" />
          </span>
        </b-form-checkbox>
      </div>

      <!-- danger -->
      <div>
        <b-card-text class="mb-0">
          Danger
        </b-card-text>
        <b-form-checkbox
          class="custom-control-danger"
          name="check-button"
          switch
        >
          <span class="switch-icon-left">
            <feather-icon icon="CameraIcon" />
          </span>
          <span class="switch-icon-right">
            <feather-icon icon="CameraOffIcon" />
          </span>
        </b-form-checkbox>
      </div>

      <!-- warning -->
      <div>
        <b-card-text class="mb-0">
          Warning
        </b-card-text>
        <b-form-checkbox
          class="custom-control-warning"
          name="check-button"
          switch
        >
          <span class="switch-icon-left">
            <feather-icon icon="MicIcon" />
          </span>
          <span class="switch-icon-right">
            <feather-icon icon="MicOffIcon" />
          </span>
        </b-form-checkbox>
      </div>

      <!-- info -->
      <div>
        <b-card-text class="mb-0">
          Info
        </b-card-text>
        <b-form-checkbox
          class="custom-control-info"
          name="check-button"
          switch
        >
          <span class="switch-icon-left">
            <feather-icon icon="WifiIcon" />
          </span>
          <span class="switch-icon-right">
            <feather-icon icon="WifiOffIcon" />
          </span>
        </b-form-checkbox>
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
        >
          <span class="switch-icon-left">
            <feather-icon icon="GithubIcon" />
          </span>
          <span class="switch-icon-right">
            <feather-icon icon="GitlabIcon" />
          </span>
        </b-form-checkbox>
      </div>
    </div>

    <template #code>
      {{ codeIcon }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormCheckbox, BCardText } from 'bootstrap-vue'
import { codeIcon } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormCheckbox,
  },
  data() {
    return {
      codeIcon,
    }
  },
}
</script>
