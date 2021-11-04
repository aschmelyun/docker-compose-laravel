export const codeBasic = `
<template>
  <div class="demo-inline-spacing">
    <b-form-checkbox
      checked="true"
      name="check-button"
      switch
      inline
    >
      Active Switch
    </b-form-checkbox>
    <b-form-checkbox
      checked="false"
      name="check-button"
      switch
      inline
    >
      Inactive Switch
    </b-form-checkbox>
    <b-form-checkbox
      checked="true"
      name="check-button"
      switch
      inline
      disabled
    >
      Disabled Active Switch
    </b-form-checkbox>

    <b-form-checkbox
      checked="false"
      name="check-button"
      switch
      inline
      disabled
    >
      Disabled Inactive Switch
    </b-form-checkbox>
  </div>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormCheckbox,
  },
}
</script>
`

export const codeColor = `
<template>
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
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormCheckbox,
  },
}
</script>
`

export const codeIcon = `
<template>
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
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  components: {
    BFormCheckbox,
  },
}
</script>
`

export const codeGroupArray = `
<template>
  <div>
    <b-form-group label="Inline switch style checkboxes">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        switches
        class="demo-inline-spacing"
      />
    </b-form-group>
    <b-form-group label="Stacked (vertical) switch style checkboxes">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        switches
        stacked
      />
    </b-form-group>
  </div>
</template>


<script>
import { BFormCheckboxGroup, BFormGroup } from 'bootstrap-vue'

export default {
  components: {
    BFormGroup,
    BFormCheckboxGroup,
  },
  data() {
    return {
      options: [
        { text: 'Red', value: 'red' },
        { text: 'Green', value: 'green' },
        { text: 'Yellow (disabled)', value: 'yellow', disabled: true },
        { text: 'Blue', value: 'blue' },
      ],
      selected: [],
    }
  },
}
</script>
`
