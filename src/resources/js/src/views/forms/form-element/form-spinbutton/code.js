export const codeBasic = `
<template>
  <div>
    <label for="demo-sb">Spin Button</label>
    <b-form-spinbutton
      id="demo-sb"
      v-model="value"
      min="1"
      max="100"
    />
    <p class="mt-1">
      Value: {{ value }}
    </p>
    <b-alert
      class="mb-0"
      show
      variant="success"
    >
      <div class="alert-body">
        <span>The </span>
        <code>ArrowUp</code>
        <span> and </span>
        <code>ArrowDown</code>
        <span> keys can be used to increment or decrement the value.</span>
      </div>
    </b-alert>
  </div>
</template>

<script>
import { BFormSpinbutton, BAlert } from 'bootstrap-vue'

export default {
  components: {
    BFormSpinbutton,
    BAlert,
  },
  data: () => ({
    value: 50,
    codeBasic,
  }),
}
</script>
`
export const codeDisabledReadonly = `
<template>
  <b-row>
    <b-col
      md="6"
      class="mb-2"
    >
      <label for="sb-disabled">Disabled spin button</label>
      <b-form-spinbutton
        id="sb-disabled"
        v-model="value"
        disabled
      />
    </b-col>
    <b-col
      md="6"
      class="mb-2"
    >
      <label
        for="sb-readonly"
        class=""
      >Readonly spin button</label>
      <b-form-spinbutton
        id="sb-readonly"
        v-model="value"
        readonly
      />
    </b-col>
  </b-row>
</template>

<script>
import { BFormSpinbutton, BRow, BCol } from 'bootstrap-vue'

export default {
  components: {
    BFormSpinbutton,
    BRow,
    BCol,
  },
  data: () => ({
    value: 50,
    codeDisabledReadonly,
  }),
}
</script>
`
export const codeInline = `
<template>
  <div>
    <label
      for="sb-inline"
      class="mr-1"
    >Inline spin button</label>
    <b-form-spinbutton
      id="sb-inline"
      v-model="value"
      inline
    />
  </div>
</template>

<script>
import { BFormSpinbutton } from 'bootstrap-vue'

export default {
  components: {
    BFormSpinbutton,
  },
  data: () => ({
    value: 50,
  }),
}
</script>
`
export const codeLocale = `
<template>
  <div>
    <label for="sb-locales">Locale</label>
    <b-form-select
      id="sb-locales"
      v-model="locale"
      :options="locales"
    />
    <label
      for="sb-local"
      class="mt-2"
    >Spin button with locale</label>
    <b-form-spinbutton
      id="sb-locale"
      v-model="value"
      :locale="locale"
      min="0"
      max="10"
      step="0.125"
    />
    <p class="mt-1">
      Value: {{ value }}
    </p>
  </div>
</template>

<script>
import { BFormSpinbutton, BFormSelect } from 'bootstrap-vue'

export default {
  components: {
    BFormSpinbutton,
    BFormSelect,
  },
  data: () => ({
    value: 0,
    locale: 'fr-CA',
    locales: [
      { value: 'en', text: 'English' },
      { value: 'de', text: 'German' },
      { value: 'fr-CA', text: 'French (Canadian)' },
      { value: 'fa', text: 'Persian' },
      { value: 'ar-EG', text: 'Arabic (Egyptian)' },
    ],
  }),
}
</script>
`

export const codeMinMax = `
<template>
  <div>
    <label for="sb-maxmin">Spin button with min 0 and max 10</label>
    <b-form-spinbutton
      id="sb-maxmin"
      v-model="value"
      min="0"
      max="10"
    />
  </div>
</template>

<script>
import { BFormSpinbutton } from 'bootstrap-vue'

export default {
  components: {
    BFormSpinbutton,
  },
  data: () => ({
    value: 50,
  }),
}
</script>
`
export const codeSize = `
<template>
  <div>
    <div>
      <label for="sb-small">Spin button - Small size</label>
      <b-form-spinbutton
        id="sb-small"
        size="sm"
        placeholder="--"
        class="mb-1"
      />

      <label for="sb-default">Spin button - Default size</label>
      <b-form-spinbutton
        id="sb-default"
        placeholder="--"
        class="mb-1"
      />

      <label for="sb-large">Spin button - Large size</label>
      <b-form-spinbutton
        id="sb-large"
        size="lg"
        placeholder="--"
        class="mb-1"
      />
    </div>
  </div>
</template>

<script>
import { BFormSpinbutton } from 'bootstrap-vue'

export default {
  components: {
    BFormSpinbutton,
  },
}
</script>
`

export const codeVertical = `
<template>
  <div>
    <label for="sb-vertical">Vertical spin button</label><br>
    <b-form-spinbutton
      id="sb-vertical"
      v-model="value"
      vertical
    />
  </div>
</template>

<script>
import { BFormSpinbutton } from 'bootstrap-vue'

export default {
  components: {
    BFormSpinbutton,
  },
  data: () => ({
    value: 50,
  }),
}
</script>
`
export const codeWrap = `
<template>
  <div>
    <label for="sb-wrap">Wrapping value spin button</label>
    <b-form-spinbutton
      id="sb-wrap"
      wrap
      min="1"
      max="25"
      placeholder="--"
    />
  </div>
</template>

<script>
import { BFormSpinbutton } from 'bootstrap-vue'

export default {
  components: {
    BFormSpinbutton,
  },
}
</script>
`
export const codeWidth = `
<template>
  <div>
    <b-form-group>
      <b-form-spinbutton
        v-model="value"
        min="0"
        max="10"
        step="0.125"
        class="w-100"
      />
    </b-form-group>
    <b-form-group>
      <b-form-spinbutton
        v-model="value"
        min="0"
        max="10"
        step="0.125"
        class="w-75"
      />
    </b-form-group>
    <b-form-group>
      <b-form-spinbutton
        v-model="value"
        min="0"
        max="10"
        step="0.125"
        class="w-50"
      />
    </b-form-group>
  </div>
</template>

<script>
import { BFormSpinbutton, BFormGroup } from 'bootstrap-vue'

export default {
  components: {
    BFormSpinbutton,
    BFormGroup,
  },
  data: () => ({
    value: 0,
  }),
}
</script>
`

export const codeValidation = `
<template>
  <div>
    <b-form-spinbutton
      id="sb-inline"
      v-model="value"
      :state="Boolean(value >= 50)"
    />
  </div>
</template>

<script>
import { BFormSpinbutton } from 'bootstrap-vue'

export default {
  components: {
    BFormSpinbutton,
  },
  data: () => ({
    value: 50,
  }),
}
</script>
`
export const codeStep = `
<template>
  <div>
    <label for="sb-step">Spin button with step of 0.25</label>
    <b-form-spinbutton
      id="sb-step"
      v-model="value1"
      step="0.25"
    />
  </div>
</template>

<script>
import { BFormSpinbutton } from 'bootstrap-vue'

export default {
  components: {
    BFormSpinbutton,
  },
  data: () => ({
    value1: 50,
  }),
}
</script>
`
export const codeFormater = `
<template>
  <div>
    <label
      for="sb-days"
      class="mt-2"
    >Spin button with formatter</label>
    <b-form-spinbutton
      id="sb-days"
      v-model="value"
      :formatter-fn="dayFormatter"
      min="0"
      max="6"
      wrap
    />
    <p class="mt-1 mb-0">
      Value: {{ value }}
    </p>
  </div>
</template>

<script>
import { BFormSpinbutton } from 'bootstrap-vue'

export default {
  components: {
    BFormSpinbutton,
  },
  data: () => ({
    value: 0,
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  }),
  methods: {
    dayFormatter(value) {
      return this.days[value]
    },
  },
}
</script>
`

export const codeSlots = `
<template>
  <b-card-code
    title="Basic Spinbutton"
  >
    <b-row>
      <b-col md="6">
        <b-form-spinbutton
          v-model="value"
          class="mb-md-0 mb-2"
          min="1"
          max="100"
        >
          <template #increment>
            <feather-icon icon="ChevronUpIcon" />
          </template>
          <template #decrement>
            <feather-icon icon="ChevronDownIcon" />
          </template>
        </b-form-spinbutton>
      </b-col>
      <b-col md="6">
        <b-form-spinbutton
          v-model="day"
          min="0"
          max="6"
          wrap
          :formatter-fn="dayFormatter"
        >
          <template #increment>
            <feather-icon icon="ChevronRightIcon" />
          </template>
          <template #decrement>
            <feather-icon icon="ChevronLeftIcon" />
          </template>
        </b-form-spinbutton>
      </b-col>
    </b-row>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormSpinbutton, BRow, BCol } from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BFormSpinbutton,
    BCardCode,
    BRow,
    BCol,
  },
  data: () => ({
    value: 50,
    codeBasic,
    day: 0,
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  }),
  methods: {
    dayFormatter(value) {
      return this.days[value]
    },
  },
}
</script>
`
