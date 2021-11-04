export const codeColor = `
<template>
  <div class="demo-inline-spacing">
    <b-form-checkbox
      v-model="selected"
      value="A"
      class="custom-control-primary"
    >
      Primary
    </b-form-checkbox>
    <b-form-checkbox
      v-model="selected"
      value="CC"
      class="custom-control-secondary"
    >
      Secondary
    </b-form-checkbox>
    <b-form-checkbox
      v-model="selected"
      value="C"
      class="custom-control-success"
    >
      Success
    </b-form-checkbox>

    <b-form-checkbox
      v-model="selected"
      value="F"
      class="custom-control-danger"
    >
      Danger
    </b-form-checkbox>

    <b-form-checkbox
      v-model="selected"
      value="D"
      class="custom-control-warning"
    >
      Warning
    </b-form-checkbox>
    <b-form-checkbox
      v-model="selected"
      value="G"
      class="custom-control-info"
    >
      Info
    </b-form-checkbox>
  </div>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  components: {
    BFormCheckbox,
  },
  data() {
    return {
      selected: ['A', 'C', 'CC', 'B', 'D', 'E', 'F', 'G'],
    }
  },
}
</script>
`

export const codeCustom = `
<template>
  <div class="demo-inline-spacing">
    <b-form-checkbox
      v-model="selected"
      value="A"
    >
      Checked
    </b-form-checkbox>
    <b-form-checkbox
      v-model="selected"
      value="B"
    >
      Unchecked
    </b-form-checkbox>
    <b-form-checkbox
      v-model="selected"
      value="C"
      disabled
    >
      Checked disabled
    </b-form-checkbox>
    <b-form-checkbox
      v-model="selected"
      value="D"
      disabled
    >
      Unchecked disabled
    </b-form-checkbox>
  </div>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  components: {
    BFormCheckbox,
  },
   data() {
    return {
      selected: ['B', 'C'],
    }
  },
}
</script>
`

export const codeSize = `
<template>
  <div>
  <h1>Custom Chekbox Sizes</h1>
   <ul class="list-unstyled mb-0">
      <li class="d-inline-block mr-2 mb-1">
        <b-form-checkbox
          v-model="selected"
          size="sm"
          value="x"
        >
          Small
        </b-form-checkbox>
      </li>
      <li class="d-inline-block mr-2 mb-1">
        <b-form-checkbox
          v-model="selected"
          value="z"
        >
          Default
        </b-form-checkbox>
      </li>
      <li class="d-inline-block mr-2 mb-1">
        <b-form-checkbox
          v-model="selected"
          size="lg"
          value="y"
        >
          Large
        </b-form-checkbox>
      </li>
    </ul>

    <h1>Vuexy Chekbox Sizes</h1>
    <ul class="list-unstyled mb-0">
      <li class="d-inline-block mr-2 mb-1">
        <b-form-checkbox
          v-model="selected"
          value="a"
          plain
          class="vs-checkbox-con pl-0"
        >
          <span class="vs-checkbox vs-checkbox-sm">
            <span class="vs-checkbox--check">
              <i class="vs-icon feather icon-check" />
            </span>
          </span>
          <span class="vs-label">small</span>
        </b-form-checkbox>
      </li>
      <li class="d-inline-block mr-2 mb-1">
        <b-form-checkbox
          v-model="selected"
          value="b"
          plain
          class="vs-checkbox-con pl-0"
        >
          <span class="vs-checkbox">
            <span class="vs-checkbox--check">
              <i class="vs-icon feather icon-check" />
            </span>
          </span>
          <span class="vs-label">Default</span>
        </b-form-checkbox>
      </li>
      <li class="d-inline-block mr-2 mb-1">
        <b-form-checkbox
          v-model="selected"
          value="c"
          plain
          class="vs-checkbox-con pl-0"
        >
          <span class="vs-checkbox vs-checkbox-lg">
            <span class="vs-checkbox--check">
              <i class="vs-icon feather icon-check" />
            </span>
          </span>
          <span class="vs-label">Large</span>
        </b-form-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormCheckbox,
  },
  data: () => ({
    selected: ['y', 'x', 'z', 'c'],
  }),
}
</script>
`

export const codeStates = `
<template>
  <div>
    <b-form-checkbox-group
      v-model="value"
      :options="options"
      :state="state"
      class="demo-inline-spacing"
      name="checkbox-validation"
    >
      <b-form-invalid-feedback :state="state">
        Please select two
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="state">
        Thank you
      </b-form-valid-feedback>
    </b-form-checkbox-group>
  </div>
</template>

<script>
import { BFormCheckboxGroup, BFormInvalidFeedback, BFormValidFeedback } from 'bootstrap-vue'

export default {
  components: {
    BFormCheckboxGroup,
    BFormInvalidFeedback,
    BFormValidFeedback,
    BCardCode,
  },
  data() {
    return {
      value: [],
      options: [
        { text: 'First Check', value: 'first' },
        { text: 'Second Check', value: 'second' },
        { text: 'Third Check', value: 'third' },
      ],
    }
  },
  computed: {
    state() {
      return this.value.length === 2
    },
  },
}
</script>
`

export const codeBasic = `
<template>
  <div class="demo-inline-spacing">
    <b-form-checkbox
      v-model="selected"
      value="A"
      plain
    >
      Checked
    </b-form-checkbox>
    <b-form-checkbox
      v-model="selected"
      value="B"
      plain
    >
      Unchecked
    </b-form-checkbox>
    <b-form-checkbox
      v-model="selected"
      value="C"
      plain
      disabled
    >
      Checked disabled
    </b-form-checkbox>
    <b-form-checkbox
      v-model="selected"
      value="D"
      plain
      disabled
    >
      Unchecked disabled
    </b-form-checkbox>
  </div>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue'

export default {
  components: {
    BFormCheckbox,
    BCardCode,
  },
 data() {
    return {
      selected: ['A', 'C']
    }
  },
}
</script>
`

export const codemultipleChoice = `
<template>
  <div>
     <!-- custom checkbox -->
    <b-form-group label="Using options array:">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        name="flavour-1"
        class="demo-inline-spacing"
      />
    </b-form-group>

    <!-- using sub-components -->
    <b-form-group label="Using sub-components:">
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected"
        name="flavour-2"
        class="demo-inline-spacing"
      >
        <b-form-checkbox value="orange">
          Orange
        </b-form-checkbox>
        <b-form-checkbox value="apple">
          Apple
        </b-form-checkbox>
        <b-form-checkbox value="pineapple">
          Pineapple
        </b-form-checkbox>
        <b-form-checkbox value="grape">
          Grape
        </b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <b-card-text class="mb-0">
      Selected: <strong>{{ selected }}</strong>
    </b-card-text>
  </div>
</template>

<script>
import {BFormGroup, BFormCheckboxGroup, BCardText, BFormCheckbox} from 'bootstrap-vue'

export default {
  components: {
    BFormCheckbox,
    BFormCheckboxGroup,
    BCardCode,
    BFormGroup,
  },
  data() {
    return {
      selected: [],
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' },
      ],
    }
  },
}
</script>
`

export const codeChangeNames = `
<template>
  <b-form-checkbox-group
    v-model="selected"
    :options="options"
    value-field="item"
    text-field="name"
    disabled-field="notEnabled"
    class="demo-inline-spacing"
  />
</template>

<script>
import { BFormCheckboxGroup } from 'bootstrap-vue'

export default {
  components: {
    BFormCheckboxGroup,
    BCardCode,
  },
  data() {
    return {
      selected: [],
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

export const codeInlineStacked = `
<template>
  <div>
    <b-form-group label="Form-checkbox-group inline checkboxes (default)">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        name="flavour-1a"
        class="demo-inline-spacing"
      />
    </b-form-group>

    <b-form-group label="Form-checkbox-group stacked checkboxes">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        name="flavour-2a"
        class="demo-inline-spacing"
        stacked
      />
    </b-form-group>

    <b-form-group label="Individual stacked checkboxes (default)">
      <b-form-checkbox
        v-for="option in options"
        :key="option.value"
        v-model="selected"
        :value="option.value"
        name="flavour-3a"
      >
        {{ option.text }}
      </b-form-checkbox>
    </b-form-group>

    <b-form-group label="Individual inline checkboxes">
      <b-form-checkbox
        v-for="option in options"
        :key="option.value"
        v-model="selected"
        :value="option.value"
        name="flavour-4a"
        inline
      >
        {{ option.text }}
      </b-form-checkbox>
    </b-form-group>
  </div>
</template>

<script>
import { BFormCheckboxGroup, BFormCheckbox, BFormGroup } from 'bootstrap-vue'

export default {
  components: {
    BFormCheckboxGroup,
    BFormCheckbox,
    BFormGroup,
    BCardCode,
  },
  data() {
    return {
      selected: [],
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' },
      ],
    }
  },
}
</script>
`

export const codeIndeterminate = `
<template>
  <div>
    <!-- checkbox -->
    <b-form-checkbox
      v-model="checked"
      :indeterminate.sync="indeterminate"
    >
      Click me to see what happens
    </b-form-checkbox>

    <!-- button -->
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      class="mt-1"
      variant="outline-primary"
      @click="toggleIndeterminate"
    >
      Toggle Indeterminate State
    </b-button>

    <div class="mt-1">
      Checked: <strong>{{ checked }}</strong><br>
      Indeterminate: <strong>{{ indeterminate }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormCheckbox, BButton } from 'bootstrap-vue'

export default {
  components: {
    BFormCheckbox,
    BCardCode,
    BButton,
  },
   directives: {
    Ripple,
  },
  data() {
    return {
      checked: true,
      indeterminate: true,
    }
  },
  methods: {
    toggleIndeterminate() {
      this.indeterminate = !this.indeterminate
    },
  },
}
</script>
`
