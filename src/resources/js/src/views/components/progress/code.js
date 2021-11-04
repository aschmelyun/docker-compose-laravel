export const codeBasic = `
<template>
  <div class="demo-vertical-spacing">
    <div class="progress-wrapper">
      <b-card-text class="mb-0">
        Reticulating splines… {{ value+'%' }}
      </b-card-text>
      <b-progress
        v-model="value"
        max="100"
      />
    </div>
    <div class="progress-wrapper">
      <b-card-text class="mb-0">
        Reticulating splines… {{ value1+'%' }}
      </b-card-text>
      <b-progress
        v-model="value1"
        max="100"
      />
    </div>
    <div class="progress-wrapper">
      <b-card-text class="mb-0">
        Reticulating splines… {{ value2+'%' }}
      </b-card-text>
      <b-progress
        v-model="value2"
        max="100"
      />
    </div>

    <div class="progress-wrapper">
      <b-card-text class="mb-0">
        Reticulating splines… {{ value3+'%' }}
      </b-card-text>
      <b-progress
        v-model="value3"
        max="100"
      />
    </div>

    <div class="progress-wrapper">
      <b-card-text class="mb-0">
        Reticulating splines… {{ value4+'%' }}
      </b-card-text>
      <b-progress
        v-model="value4"
        max="100"
      />
    </div>
  </div>
</template>

<script>
import { BProgress } from 'bootstrap-vue'

export default {
  components: {
    BProgress,
  },
  data() {
    return {
      value: 0,
      value1: 25,
      value2: 50,
      value3: 75,
      value4: 100,
    }
  },
}
</script>
`

export const codeAnimated = `
<template>
  <b-row
    v-for="bar in bars"
    :key="bar.variant"
  >
    <b-col
      md="2"
      class="pt-2"
    >
      {{ bar.variant }}:
    </b-col>
    <b-col
      md="10"
      class="pt-md-2"
    >
      <b-progress
        :key="bar.variant"
        animated
        :value="bar.value"
        :variant="bar.variant"
        :class="'progress-bar-'+bar.variant"
      />
    </b-col>
  </b-row>
</template>

<script>
import {BProgress, BRow, BCol} from 'bootstrap-vue'

export default {
  components: {
    BProgress,
  },
  data: () => ({
    bars: [
      { variant: 'success', value: 75 },
      { variant: 'info', value: 75 },
      { variant: 'warning', value: 75 },
      { variant: 'danger', value: 75 },
      { variant: 'primary', value: 75 },
      { variant: 'secondary', value: 75 },
    ],
    timer: null,
  }),
  mounted() {
    this.timer = setInterval(() => {
      // eslint-disable-next-line
      this.bars.forEach(bar => (bar.value = 25 + Math.random() * 75))
    }, 2000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
}
</script>
`

export const codeLabel = `
<template>
  <div class="demo-vertical-spacing">
    <div>
      <label>No label</label>
      <b-progress
        value="25"
        max="100"
      />
    </div>

    <div>
      <label>Value label</label>
      <b-progress
        value="35"
        max="100"
        show-value
        variant="secondary"
        class="progress-bar-secondary"
      />
    </div>

    <div>
      <label>Progress label</label>
      <b-progress
        value="45"
        max="100"
        show-progress
        variant="success"
        class="progress-bar-success"
      />
    </div>

    <div>
      <label>Value label with precision</label>
      <b-progress
        value="55"
        max="100"
        precision="2"
        show-value
        variant="danger"
        class="progress-bar-danger"
      />
    </div>

    <div>
      <label>Progress label with precision</label>
      <b-progress
        value="65"
        max="100"
        precision="2"
        show-progress
        variant="warning"
        class="progress-bar-warning"
      />
    </div>
  </div>
</template>

<script>
import { BProgress } from 'bootstrap-vue'

export default {
  components: {
    BProgress,
  },
}
</script>
`

export const codeMultipleBar = `
<template>
  <b-progress :max="max">
    <b-progress-bar
      variant="danger"
      :value="values[0]"
      show-progress
    />
    <b-progress-bar
      variant="warning"
      :value="values[1]"
      show-progress
    />
    <b-progress-bar
      variant="primary"
      :value="values[2]"
      show-progress
    />
  </b-progress>
</template>

<script>
import { BProgressBar, BProgress } from 'bootstrap-vue'

export default {
  components: {
    BProgressBar,
    BProgress,
  },
  data() {
    return {
      values: [15, 50, 10],
      max: 100,
    }
  },
}
</script>
`

export const codeSize = `
<template>
  <div>
    <b-progress
      value="65"
      variant="primary"
      class="progress-xl mb-2"
    />
    <b-progress
      value="65"
      variant="success"
      class="progress-lg mb-2"
    />
    <b-progress
      value="65"
      variant="danger"
      class="progress-md mb-2"
    />
    <b-progress
      value="65"
      variant="info"
      class="progress-sm mb-2"
    />
    <h6>Custom heights</h6>
    <b-progress
      height="1rem"
      value="55"
      show-progress
      class="mb-0"
    />
  </div>
</template>

<script>
import { BProgress } from 'bootstrap-vue'

export default {
  components: {
    BProgress,
  },
}
</script>
`

export const codeStripped = `
<template>
  <div class="demo-vertical-spacing">
    <b-progress
      value="25"
      max="100"
      striped
    />
    <b-progress
      value="35"
      max="100"
      striped
      class="progress-bar-secondary"
      variant="secondary"
    />
    <b-progress
      value="45"
      max="100"
      striped
      variant="success"
      class="progress-bar-success"
    />
    <b-progress
      value="55"
      max="100"
      striped
      variant="danger"
      class="progress-bar-danger"
    />
    <b-progress
      value="65"
      max="100"
      striped
      variant="warning"
      class="progress-bar-warning"
    />
    <b-progress
      value="75"
      max="100"
      striped
      variant="info"
      class="progress-bar-info"
    />
    <b-progress
      value="85"
      max="100"
      striped
      variant="dark"
      class="progress-bar-dark"
    />
  </div>
</template>

<script>
import { BProgress } from 'bootstrap-vue'

export default {
  components: {
    BProgress,
  },
}
</script>

`

export const codeCustomLabel = `
<template>
  <div class="demo-vertical-spacing">
    <div>
      <label>Custom label via default slot</label>
      <b-progress
        :max="max"
      >
        <b-progress-bar :value="value">
          <strong>{{ value.toFixed(2) }} / {{ max }}</strong>
        </b-progress-bar>
      </b-progress>
    </div>

    <div>
      <label>Custom label via property</label>
      <b-progress
        :max="max"
        class="progress-bar-info"
      >
        <b-progress-bar
          :value="value"
          :label="\`\${((value / max) * 100).toFixed(2)}%\`"
          variant="info"
        />
      </b-progress>
    </div>

    <div>
      <label>Custom label via property (HTML support)</label>
      <b-progress
        :max="max"
        class="progress-bar-warning"
      >
        <b-progress-bar
          :value="value"
          :label-html="\`<del>\${value}</del>\`"
          variant="warning"
        />
      </b-progress>
    </div>
  </div>
</template>

<script>
import { BProgress, BProgressBar } from 'bootstrap-vue'

export default {
  components: {
    BProgress,
    BProgressBar,
  },
  data() {
    return {
      value: 33.333333333,
      max: 50,
    }
  },
}
</script>
`

export const codeCustomSize = `
<template>
  <div>
    <h6>Default width</h6>
    <b-progress
      :value="value"
      class="mb-3"
    />

    <h6>Custom widths</h6>
    <b-progress
      :value="value"
      class="w-75 mb-2"
      variant="info"
    />
    <b-progress
      :value="value"
      variant="warning"
      class="w-50 mb-2"
    />
    <b-progress
      :value="value"
      class="w-25 mb-0"
      variant="danger"
    />
  </div>
</template>

<script>
import { BProgress } from 'bootstrap-vue'

export default {
  components: {
    BProgress,
  },
  data: () => ({
    value: 75,
  }),
}
</script>
`

export const codeColored = `
<template>
  <div class="demo-vertical-spacing">
    <b-progress
      value="25"
      max="100"
    />
    <b-progress
      value="35"
      max="100"
      class="progress-bar-secondary"
      variant="secondary"
    />
    <b-progress
      value="45"
      max="100"
      class="progress-bar-success"
      variant="success"
    />
    <b-progress
      value="55"
      max="100"
      class="progress-bar-danger"
      variant="danger"
    />
    <b-progress
      value="65"
      max="100"
      class="progress-bar-warning"
      variant="warning"
    />
    <b-progress
      value="75"
      max="100"
      class="progress-bar-info"
      variant="info"
    />
    <b-progress
      value="85"
      max="100"
      class="progress-bar-dark"
      variant="dark"
    />
  </div>
</template>

<script>
import { BProgress } from 'bootstrap-vue'

export default {
  components: {
    BProgress,
  },
}
</script>
`
