export const codeFloatinLabel = `
<template>
   <b-row>
    <b-col md="4">
      <div class="form-label-group">
        <b-form-input
          id="floating-label1"
          placeholder="Label Placeholder"
        />
        <label for="floating-label1">Label-placeholder</label>
      </div>
    </b-col>
    <b-col md="4">
      <div class="form-label-group has-icon-left">
        <b-form-input
          id="iconLabelLeft"
          placeholder="Icon Left, Default Input"
        />
        <div class="form-control-position">
          <i class="bx bx-user" />
        </div>
        <label for="iconLabelLeft">Icon Left, Default Input</label>
      </div>
    </b-col>
    <b-col md="4">
      <div class="form-label-group">
        <b-form-input
          placeholder="Disabled-placeholder"
          disabled
        />
        <label for="floating-label-disable">Disabled-placeholder</label>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { BFormInput, BRow, BCol } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormInput,
    BRow,
    BCol,
  },
}
</script>
`

export const codeBasic = `
<template>
  <b-row>
    <b-col
      md="6"
      xl="4"
      class="mb-1"
    >

      <!-- basic -->
      <b-form-group
        label="Basic Input"
        label-for="basicInput"
      >
        <b-form-input
          id="basicInput"
          placeholder="Enter Email"
        />
      </b-form-group>
    </b-col>

    <b-col
      md="6"
      xl="4"
      class="mb-1"
    >
      <!-- input text with help -->
      <b-form-group>
        <label for="InputHelp">Input text with help</label>
        <small class="text-muted"> eg. <i>someone@example.com</i></small>
        <b-form-input id="InputHelp" />
      </b-form-group>
    </b-col>

    <b-col
      md="6"
      xl="4"
      class="mb-1"
    >
      <!-- disabled input -->
      <b-form-group
        label="Disabled Input"
        label-for="disabledInput"
      >
        <b-form-input
          id="disabledInput"
          disabled
        />
      </b-form-group>
    </b-col>

    <b-col
      md="6"
      xl="4"
    >
      <!-- with helper text -->
      <b-form-group
        label="With Helper Text"
        label-for="helperInput"
        description="Find helper text here for given textbox."
      >
        <b-form-input
          id="helperInput"
          placeholder="Name"
        />
      </b-form-group>
    </b-col>
    <b-col
      md="6"
      xl="4"
    >
      <!-- readonly input -->
      <b-form-group
        label="Readonly Input"
        label-for="readOnlyInput"
      >
        <b-form-input
          id="readOnlyInput"
          value="You can't update me :P"
          readonly
        />
      </b-form-group>
    </b-col>

    <b-col
      md="6"
      xl="4"
    >
      <!-- static text -->
      <b-form-group
        label="Readonly Static Text"
        label-for="plainTextInput"
      >
        <b-form-input
          id="plainTextInput"
          plaintext
          value="email@pixinvent.com"
        />
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
import {BFormInput, BRow, BCol, BFormGroup} from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BFormGroup,
    BRow,
    BCol,
  },
}
</script>
`

export const codeDatalist = `
<template>
  <b-form-group class="mb-0">
    <b-form-input list="my-list-id" />

    <datalist id="my-list-id">
      <option>Manual Option</option>
      <option
        v-for="size in sizes"
        :key="size"
      >
        {{ size }}
      </option>
    </datalist>
  </b-form-group>
</template>

<script>
import { BFormInput, BFormGroup } from 'bootstrap-vue'

export default {
  components: {
    BFormGroup,
    BFormInput,
  },
  data() {
    return {
      sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
    }
  },
}
</script>
`

export const codeDebounce = `
<template>
  <div>
    <b-form-input
      v-model="value"
      type="text"
      debounce="500"
    />
    <b-card-text class="mt-1 mb-0">
      <strong>Value : </strong><span>{{ value }}</span>
    </b-card-text>
  </div>
</template>

<script>
import { BFormInput, BCardText } from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BCardText,
  },
  data() {
    return {
      value: '',
    }
  },
}
</script>
`

export const codeSize = `
<template>
  <b-row>

    <!-- large -->
    <b-col cols="12">
      <b-form-group
        label="Large"
        label-for="largeInput"
      >
        <b-form-input
          id="largeInput"
          size="lg"
          placeholder="Large Input"
        />
      </b-form-group>
    </b-col>

    <!-- default -->
    <b-col cols="12">
      <b-form-group
        label="Default"
        label-for="defaultLabel"
      >
        <b-form-input
          id="defaultLabel"
          placeholder="Normal Input"
        />
      </b-form-group>
    </b-col>

    <!-- small -->
    <b-col cols="12">
      <b-form-group
        label="Small"
        label-for="smallInput"
      >
        <b-form-input
          id="smallInput"
          size="sm"
          placeholder="Small Input"
        />
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
import {BFormInput, BRow, BCol, BFormGroup} from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BFormGroup,
    BRow,
    BCol,
  },
}
</script>
`

export const codeStates = `
<template>
  <b-row>

    <!-- valid input -->
    <b-col md="6">
      <b-form-group
        label="Valid State"
        label-for="input-valid"
      >
        <b-form-input
          id="input-valid"
          :state="true"
          placeholder="Valid"
        />
        <b-form-valid-feedback>
          This is valid state.
        </b-form-valid-feedback>
      </b-form-group>
    </b-col>

    <!-- invalid input -->
    <b-col md="6">
      <b-form-group
        label="Invalid State"
        label-for="input-invalid"
      >
        <b-form-input
          id="input-invalid"
          :state="false"
          placeholder="Invalid"
        />
        <b-form-invalid-feedback>
          This is invalid state.
        </b-form-invalid-feedback>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
import {
  BFormInput, BRow, BCol, BFormInvalidFeedback, BFormValidFeedback, BFormGroup,
} from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BFormInvalidFeedback,
    BFormValidFeedback,
    BRow,
    BFormGroup,
    BCol,
  },
}
</script>
`

export const codeFormatter = `
<template>
  <div>
    <b-form-group
      label="Text input with formatter (on input)"
      label-for="input-formatter"
      description="We will convert your name to lowercase instantly"
    >
      <b-form-input
        id="input-formatter"
        v-model="text1"
        placeholder="Enter your name"
        :formatter="formatter"
      />
    </b-form-group>
    <b-card-text><strong>Value:</strong> {{ text1 }}</b-card-text>

    <b-form-group
      label="Text input with lazy formatter (on blur)"
      label-for="input-lazy"
      description="This one is a little lazy!"
    >
      <b-form-input
        id="input-lazy"
        v-model="text2"
        placeholder="Enter your name"
        lazy-formatter
        :formatter="formatter"
      />
    </b-form-group>

    <b-card-text class="mb-0">
      <strong>Value:</strong> {{ text2 }}
    </b-card-text>
  </div>
</template>

<script>
import { BFormInput, BFormGroup, BCardText } from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BCardText,
    BFormGroup,
  },
  data() {
    return {
      text1: '',
      text2: '',
    }
  },
  methods: {
    formatter(value) {
      return value.toLowerCase()
    },
  },
}
</script>
`

export const codeValidateTooltips = `
<template>
  <b-form novalidate class="needs-validation" @submit.prevent>
    <b-form-row>

      <!-- valid input  -->
      <b-col
        md="4"
        class="mb-3"
      >
        <label for="input-valid1">Valid Input:</label>
        <b-form-input
          id="input-valid1"
          v-model="value1"
          :state="value1.length > 0"
          placeholder="Valid input"
        />
        <b-form-valid-feedback
          tooltip
        >
          Looks good!
        </b-form-valid-feedback>
        <b-form-invalid-feedback
          tooltip
        >
          Please provide a valid input.
        </b-form-invalid-feedback>
      </b-col>

      <!-- invalid input -->
      <b-col
        md="4"
        class="mb-3"
      >
        <label for="input-invalid1">Invalid Input:</label>
        <b-form-input
          id="input-invalid1"
          v-model="value2"
          :state="value2.length > 0"
          placeholder="Invalid input"
        />
        <b-form-valid-feedback tooltip>
          Looks good!
        </b-form-valid-feedback>
        <b-form-invalid-feedback
          tooltip
        >
          Please provide a valid input.
        </b-form-invalid-feedback>
      </b-col>

      <!-- invalid input -->
      <b-col
        md="4"
        class="mb-3"
      >
        <label for="input-invalid2">Invalid Input:</label>
        <b-form-input
          id="input-invalid2"
          v-model="value3"
          :state="value3.length > 0"
          placeholder="Invalid input"
        />
        <b-form-valid-feedback tooltip>
          Looks good!
        </b-form-valid-feedback>
        <b-form-invalid-feedback tooltip>
          Please provide a valid city.
        </b-form-invalid-feedback>
      </b-col>

      <!-- submit button -->
      <b-col
        cols="12"
      >
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
        >
          Submit
        </b-button>
      </b-col>
    </b-form-row>
  </b-form>
</template>

<script>
import { BFormInput, BCol, BForm, BFormRow, BFormValidFeedback, BFormInvalidFeedback, BButton} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BFormInput,
    BForm,
    BButton,
    BFormRow,
    BFormValidFeedback,
    BFormInvalidFeedback,
    BCol,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      value1: 'John',
      value2: 'Doe',
      value3: '',
    }
  },
}
</script>
`

export const codeFloatingLabelIcon = `
<template>
  <b-row>
    <b-col md="6">
      <div class="form-label-group">
        <b-form-input
          id="floating-label1"
          placeholder="Label Placeholder"
        />
        <label for="floating-label1">Label-placeholder</label>
      </div>
    </b-col>
    <b-col md="6">
      <div class="form-label-group">
        <b-form-input
          placeholder="Disabled-placeholder"
          disabled
        />
        <label for="floating-label-disable">Disabled-placeholder</label>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import {
  BFormInput, BRow, BCol
} from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BRow,
    BCol,
  },
}
</script>
`

export const codeHorizontalSize = `
<template>
  <div>
     <!-- large label  -->
    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="lg"
      label="Large"
      label-for="input-lg"
    >
      <b-form-input
        id="input-lg"
        size="lg"
        placeholder="Large Input"
      />
    </b-form-group>

    <!-- default label -->
    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label="Default"
      label-for="input-default"
    >
      <b-form-input
        id="input-default"
        placeholder="Normal Input"
      />
    </b-form-group>

    <!-- small label -->
    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="sm"
      label="Small"
      label-for="input-sm"
    >
      <b-form-input
        id="input-sm"
        size="sm"
        placeholder="Small Input"
      />
    </b-form-group>
  </div>
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  components: {
    BFormGroup,
    BFormInput,
  },
}
</script>
`
