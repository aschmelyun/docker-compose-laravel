export const codeBasic = `
<template>
   <div class="demo-inline-spacing">
    <b-form-radio
      v-model="Selected"
      plain
      name="some-radios3"
      value="A"
    >
      Checked
    </b-form-radio>
    <b-form-radio
      v-model="Selected"
      plain
      name="some-radios3"
      value="B"
    >
      Unchecked
    </b-form-radio>
    <b-form-radio
      v-model="Selected1"
      plain
      name="some-radios4"
      value="c"
      disabled
    >
      Checked Disabled
    </b-form-radio>
    <b-form-radio
      v-model="Selected1"
      plain
      name="some-radios4"
      value="d"
      disabled
    >
      Unchecked Disabled
    </b-form-radio>
  </div>
</template>

<script>
import { BFormRadio } from 'bootstrap-vue'

export default {
  components: {
    BFormRadio,
  },
  data() {
    return {
      Selected: 'A',
      Selected1: 'c',
    }
  },
}
</script>
`

export const codeColor = `
<template>
  <div class="demo-inline-spacing">
    <b-form-radio
      v-model="Selected"
      name="some-radio9"
      value="e"
      class="custom-control-primary"
    >
      Primary (Default)
    </b-form-radio>
    <b-form-radio
      v-model="Selected"
      name="some-radio9"
      value="ff"
      class="custom-control-secondary"
    >
      Secondary
    </b-form-radio>
    <b-form-radio
      v-model="Selected"
      name="some-radio9"
      value="g"
      class="custom-control-success"
    >
      Success
    </b-form-radio>
    <b-form-radio
      v-model="Selected"
      name="some-radio9"
      value="i"
      class="custom-control-danger"
    >
      Danger
    </b-form-radio>
    <b-form-radio
      v-model="Selected"
      name="some-radio9"
      value="h"
      class="custom-control-warning"
    >
      Warning
    </b-form-radio>
    <b-form-radio
      v-model="Selected"
      name="some-radio9"
      value="j"
      class="custom-control-info"
    >
      Info
    </b-form-radio>
  </div>
</template>

<script>
import { BFormRadio } from 'bootstrap-vue'

export default {
  components: {
    BFormRadio,
  },
  data() {
    return {
      Selected: 'e',
    }
  },
}
</script>
`

export const codeCustom = `
<template>
   <div class="demo-inline-spacing">
    <b-form-radio
      v-model="Selected"
      name="some-radios"
      value="A"
    >
      Checked
    </b-form-radio>
    <b-form-radio
      v-model="Selected"
      name="some-radios"
      value="B"
    >
      Unchecked
    </b-form-radio>
    <b-form-radio
      v-model="Selected1"
      name="some-radios2"
      value="c"
      disabled
    >
      Checked Disabled
    </b-form-radio>
    <b-form-radio
      v-model="Selected1"
      name="some-radios2"
      value="d"
      disabled
    >
      Unchecked Disabled
    </b-form-radio>
  </div>
</template>

<script>
import { BFormRadio } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormRadio,
  },
  data() {
    return {
      Selected: 'A',
      Selected1: 'c',
    }
  },
}
</script>
`

export const codeSize = `
<template>
  <div>
  <h1>Custom radio button sizes</h1>
    <ul class="list-unstyled mb-0">
      <li class="d-inline-block mr-2">
        <b-form-radio
          name="radio-size"
          size="sm"
        >
          small
        </b-form-radio>
      </li>
      <li class="d-inline-block mr-2">
        <b-form-radio name="radio-size">
          Default
        </b-form-radio>
      </li>
      <li class="d-inline-block mr-2">
        <b-form-radio
          name="radio-size"
          size="lg"
        >
          Large
        </b-form-radio>
      </li>
    </ul>
    <h1>Vuexy radio button sizes</h1>
    <ul class="list-unstyled mb-0">
      <li class="d-inline-block mr-2">
        <b-form-radio
          name="radio-size"
          plain
          class="vs-radio-con"
        >
          <span class="vs-radio vs-radio-sm">
            <span class="vs-radio--border" />
            <span class="vs-radio--circle" />
          </span>
          <span class="ml-50">small</span>
        </b-form-radio>
      </li>
      <li class="d-inline-block mr-2">
        <b-form-radio
          plain
          class="vs-radio-con"
          name="radio-size"
        >
          <span class="vs-radio">
            <span class="vs-radio--border" />
            <span class="vs-radio--circle" />
          </span>
          <span class="ml-50">Default</span>
        </b-form-radio>
      </li>
      <li class="d-inline-block mr-2">
        <b-form-radio
          name="radio-size"
          plain
          class="vs-radio-con"
        >
          <span class="vs-radio vs-radio-lg">
            <span class="vs-radio--border" />
            <span class="vs-radio--circle" />
          </span>
          <span class="ml-50">Large</span>
        </b-form-radio>
      </li>
    </ul>
  </div>
</template>

<script>
import { BFormRadio } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormRadio,
  },
}
</script>
`

export const codeStates = `
<template>
  <div>
    <b-form-radio-group
      v-model="value"
      :options="options"
      :state="state"
      class="demo-inline-spacing"
      name="radio-validation"
    >
      <b-form-invalid-feedback :state="state">
        Please select one
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="state">
        Thank you
      </b-form-valid-feedback>
    </b-form-radio-group>
  </div>
</template>

<script>
import { BFormRadioGroup, BFormInvalidFeedback, BFormValidFeedback } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormRadioGroup,
    BFormInvalidFeedback,
    BFormValidFeedback,
  },
  data() {
    return {
      value: null,
      options: [
        { text: 'First radio', value: 'first' },
        { text: 'Second radio', value: 'second' },
        { text: 'Third radio', value: 'third' },
      ],
    }
  },
  computed: {
    state() {
      return Boolean(this.value)
    },
  },
}
</script>
`

export const codeInlineStack = `
<template>
  <div>
    <b-form-group label="Inline radios (default)">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        class="demo-inline-spacing"
        name="radio-inline"
      />
    </b-form-group>

    <b-form-group label="Stacked radios">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        name="radios-stacked"
        stacked
      />
    </b-form-group>

    <b-card-text class="mt-1 mb-0">
      Selected: <strong>{{ selected }}</strong>
    </b-card-text>
  </div>
</template>

<script>
import { BFormRadioGroup, BFormGroup } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormRadioGroup,
    BFormGroup,
  },
  data() {
    return {
      selected: 'first',
      options: [
        { text: 'First radio', value: 'first' },
        { text: 'Second radio', value: 'second' },
        { text: 'Third radio', value: 'third' },
      ],
    }
  },
}
</script>
`

export const codeArray = `
<template>
  <div>
     <b-form-radio-group
      v-model="selected"
      :options="options"
      class="demo-inline-spacing mb-1"
      value-field="value"
      text-field="text"
      disabled-field="disabled"
    />

    <b-card-text class="mt-1 mb-0">
      Selected: <strong>{{ selected }}</strong>
    </b-card-text>
  </div>
</template>


<script>
import { BFormRadioGroup } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormRadioGroup,
  },
  data() {
    return {
      selected: 'first',
      options: [
        { text: 'Item 1', value: 'first', disabled: false },
        { text: 'Item 2', value: 'second', disabled: false },
        { html: '<b>Item</b> 3', value: 'third', disabled: true },
        { text: 'Item 4', value: 'Item 4', disabled: false },
        { text: 'Item 5', value: 'E', disabled: false },
      ],
    }
  },
}
</script>
`

export const codeFieldNames = `
<template>
  <div>
    <b-form-radio-group
      v-model="selected"
      :options="options"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
      class="demo-inline-spacing"
    />

    <b-card-text class="mt-1 mb-0">
      Selected: <strong>{{ selected }}</strong>
    </b-card-text>
  </div>
</template>

<script>
import { BFormRadioGroup } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormRadioGroup,
  },
  data() {
    return {
      selected: 'A',
      options: [
        { item: 'A', name: 'Option A' },
        { item: 'B', name: 'Option B' },
        { item: 'D', name: 'Option C', notEnabled: true },
        { item: { d: 1 }, name: 'Option D' },
      ],
    }
  },
}
</script>
`
