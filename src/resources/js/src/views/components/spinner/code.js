export const codeBorder = `
<template>
  <b-spinner label="Loading..." />
</template>

<script>
import { BSpinner } from 'bootstrap-vue'

export default {
  components: {
    BSpinner,
  },
}
</script>
`

export const codeBorderColor = `
<template>
  <div class="demo-inline-spacing">
    <b-spinner
      v-for="variant in variants"
      :key="variant"
      class="mr-1"
      :variant="variant"
    />
  </div>
</template>

<script>
import { BSpinner } from 'bootstrap-vue'

export default {
  components: {
    BSpinner,
  },
  data: () => ({
    variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],
  }),
}
</script>
`

export const codeButton = `
<template>
  <div>
    <b-button
      variant="primary"
      disabled
      class="mr-1"
    >
      <b-spinner small />
      <span class="sr-only">Loading...</span>
    </b-button>

    <b-button
      variant="primary"
      disabled
      class="mr-1"
    >
      <b-spinner small />
      Loading...
    </b-button>

    <b-button
      variant="primary"
      disabled
      class="mr-1"
    >
      <b-spinner
        small
        type="grow"
      />
      <span class="sr-only">Loading...</span>
    </b-button>

    <b-button
      variant="primary"
      disabled
      class="mr-1"
    >
      <b-spinner
        small
        type="grow"
      />
      Loading...
    </b-button>
  </div>
</template>

<script>
import { BSpinner, BButton } from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BSpinner,
  },
}
</script>
`

export const codeFlex = `
<template>
  <div>
    <div class="d-flex justify-content-center mb-1">
      <b-spinner label="Loading..." />
    </div>
    <div class="d-flex align-items-center">
      <strong>Loading...</strong>
      <b-spinner class="ml-auto" />
    </div>
  </div>
</template>

<script>
import { BSpinner } from 'bootstrap-vue'

export default {
  components: {
    BSpinner,
  },
}
</script>
`

export const codeFloat = `
<template>
  <div class="clearfix">
    <b-spinner class="float-right" label="Floated Right" />
  </div>
</template>

<script>
import { BSpinner } from 'bootstrap-vue'

export default {
  components: {
    BSpinner,
  },
}
</script>
`

export const codeGrow = `
<template>
  <b-spinner type="grow" label="Loading..." />
</template>

<script>
import { BSpinner } from 'bootstrap-vue'

export default {
  components: {
    BSpinner,
  },
}
</script>
`

export const codeGrowColor = `
<template>
  <div class="d-flex flex-wrap">
    <b-spinner
      v-for="variant in variants"
      :key="variant"
      :variant="variant"
      class="mr-1"
      type="grow"
    />
  </div>
</template>

<script>
import { BSpinner } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BSpinner,
  },
  data: () => ({
    variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],
  }),
}
</script>
`

export const codeSize = `
<template>
  <div class="text-center d-flex justify-content-between">
    <div>
      <b-spinner
        small
        class="mr-1"
        label="Small Spinner"
      />
      <b-spinner
        small
        label="Small Spinner"
        type="grow"
      />
    </div>
    <div>
      <b-spinner
        class="mr-1"
        label="Small Spinner"
      />
      <b-spinner
        label="Small Spinner"
        type="grow"
      />
    </div>
    <div>
      <b-spinner
        style="width: 3rem; height: 3rem;"
        class="mr-1"
        label="Large Spinner"
      />
      <b-spinner
        style="width: 3rem; height: 3rem;"
        label="Large Spinner"
        type="grow"
      />
    </div>
  </div>
</template>

<script>
import { BSpinner } from 'bootstrap-vue'

export default {
  components: {
    BSpinner,
  },
}
</script>
`

export const codeTextAlign = `
<template>
  <div class="text-center">
    <b-spinner variant="primary" label="Text Centered" />
  </div>
</template>

<script>
import { BSpinner } from 'bootstrap-vue'

export default {
  components: {
    BSpinner,
  }
}
</script>
`
