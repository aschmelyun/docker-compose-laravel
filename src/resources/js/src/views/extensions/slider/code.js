export const codeSingle = `
<template>
  <vue-slider
    v-model="value"
    :direction="direction"
  />
</template>

<script>
import VueSlider from 'vue-slider-component'
import store from '@/store/index'

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 50,
      dir: 'ltr',
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
}
</script>
`

export const codeMultiple = `
<template>
  <div>
    <b-card-text>
      <span>Set multiple value to slider for multiple </span>
      <code>dots</code>
    </b-card-text>

    <!-- sliders -->
    <vue-slider
      v-model="value_2"
      :direction="direction"
      class="mb-2"
    />
    <vue-slider
      v-model="value_3"
      :direction="direction"
      class="mb-2"
    />
    <vue-slider
      v-model="value_4"
      :direction="direction"
    />
  </div> 
</template>

<script>
import VueSlider from 'vue-slider-component'
import store from '@/store/index'

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value_2: [0, 50],
      value_3: [0, 50, 80],
      value_4: [0, 50, 80, 100],
      dir: 'ltr',
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
}
</script>
`

export const codeRange = `
<template>
  <!-- slider -->
  <vue-slider
    v-model="value"
    :min="0"
    :max="1"
    :direction="direction"
    :interval="0.01"
  />
</template>

<script>
import VueSlider from 'vue-slider-component'
import store from '@/store/index'

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 0.3,
      dir: 'ltr',
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
}
</script>
`

export const codeRTL = `
<template>
  <!-- slider -->
  <vue-slider
    v-model="value"
    direction="rtl"
  />
</template>

<script>
import VueSlider from 'vue-slider-component'

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 50,
    }
  },
}
</script>
`

export const codeLazy = `
<template>
  <div>
    <b-card-text>value: {{ value }}</b-card-text>

    <!-- slider -->
    <vue-slider
      v-model="value"
      :lazy="true"
      :direction="direction"
    />
  </div>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 0,
      dir: 'ltr',
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
}
</script>
`

export const codeDisabled = `
<template>
  <div>
    <!--disabled slider -->
    <vue-slider
      v-model="value1"
      :disabled="true"
      class="mb-2"
      :direction="direction"
    />

    <!-- disabled dot -->
    <vue-slider
      v-model="value2"
      :dot-options="dotOptions"
      :order="false"
      :direction="direction"
    />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import store from '@/store/index'

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      dir: 'ltr',
      value1: 0,
      value2: [0, 50],
      dotOptions: [{
        disabled: false,
      }, {
        disabled: true,
      }],
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
}
</script>
`

export const codeAdsorb = `
<template>
  <div>
    <vue-slider
      v-model="value1"
      :adsorb="true"
      :interval="10"
      :marks="true"
      class="mb-3"
      :direction="direction"
    />
    <vue-slider
      v-model="value2"
      :adsorb="true"
      :data="data"
      :marks="true"
      class="mb-3"
      :direction="direction"
    />
    <vue-slider
      v-model="value3"
      :adsorb="true"
      :marks="marks"
      :included="true"
      class="mb-2"
      :direction="direction"
    />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import store from '@/store/index'

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value1: 20,
      value2: 'c',
      value3: 60,
      data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      marks: [0, 10, 30, 60, 100],
      dir: 'ltr',
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
}
</script>
`

export const codeContained = `
<template>
  <!-- contatined -->
  <div class="wrap">
    <vue-slider :direction="direction" />
    <b-card-text>contained: false</b-card-text>
    <vue-slider
      :direction="direction"
      :contained="true"
    />
    <b-card-text>contained: true</b-card-text>
  </div>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'

export default {
  components: {
    BCardText,
    VueSlider,
  },
  data() {
    return {
      value: 50,
      dir: 'ltr',
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
}
</script>

<style lang="scss" >
// container style
.wrap {
  border-left: 1px dashed #ddd;
  border-right: 1px dashed #ddd;
  padding: 10px 0;
}
</style>
`

export const codebehavior = `
<template>
  <div>

    <!-- default slider -->
    <h6>Default</h6>
    <b-card-text>It is the default behavior of slider.</b-card-text>

    <!-- slider -->
    <vue-slider
      v-model="value"
      :direction="direction"
    />

    <!-- drang and click slider -->
    <h6 class="mt-2">
      Drag on Click
    </h6>
    <b-card-text>
      <span>When </span>
      <code>drag-on-click</code>
      <span> is set to </span>
      <code>true</code>
      <span>, can drag the slider directly when pressing the process.</span>
    </b-card-text>

    <!-- slider -->
    <vue-slider
      v-model="value1"
      :direction="direction"
      :drag-on-click="true"
    />

    <!-- process not filled slider -->
    <h6 class="mt-2">
      Process not filled
    </h6>
    <b-card-text>
      <span>User </span>
      <code>process</code>
      <span> prop false for unfill the processbar.</span>
    </b-card-text>

    <!-- slider -->
    <vue-slider
      v-model="value2"
      :direction="direction"
      :process="false"
    />

    <!-- min and max slider -->
    <h6 class="mt-2">
      Min & Max
    </h6>
    <b-card-text>
      <span>Use </span>
      <code>min-range</code>
      <span> and </span>
      <code>max-range</code>
      <span> prop to limit the slider.</span>
    </b-card-text>

    <!-- slider -->
    <vue-slider
      v-model="value3"
      :min-range="10"
      :direction="direction"
      :max-range="50"
    />

    <!-- fixed slider  -->
    <h6 class="mt-2">
      Fixed
    </h6>
    <b-card-text>
      <span>Use </span>]
      <code>fixed</code>
      <span> prop to fixed the slider.</span>
    </b-card-text>

    <!-- slider -->
    <vue-slider
      v-model="value4"
      :direction="direction"
      :fixed="true"
    />
  </div>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'

export default {
  components: {
    VueSlider,
    BCardText,
  },
  data() {
    return {
      value: 10,
      value1: 30,
      value2: 50,
      value3: [10, 40],
      value4: [10, 50],
      dir: 'ltr',
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
}
</script>
`

export const codeColors = `
<template>
  <div>
    <!-- primary -->
    <h6>Default / Primary Color Slider</h6>
    <vue-slider
      v-model="value"
      :tooltip="'none'"
      :direction="direction"
      class="mb-2"
    />

    <!-- secondary -->
    <h6>Secondary Color Slider</h6>
    <vue-slider
      v-model="value1"
      :tooltip="'none'"
      class="mb-2 vue-slider-secondary"
      :direction="direction"
    />

    <!-- success -->
    <h6>Success Color Slider</h6>
    <vue-slider
      v-model="value2"
      :tooltip="'none'"
      class="mb-2 vue-slider-success"
      :direction="direction"
    />

    <!-- danger -->
    <h6>Danger Color Slider</h6>
    <vue-slider
      v-model="value4"
      :tooltip="'none'"
      class="mb-2 vue-slider-danger"
      :direction="direction"
      :fixed="true"
    />

    <!-- warning -->
    <h6>Warning Color Slider</h6>
    <vue-slider
      v-model="value3"
      :tooltip="'none'"
      class="mb-2 vue-slider-warning"
      :direction="direction"
    />

    <!-- info -->
    <h6>Info Color Slider</h6>
    <vue-slider
      v-model="value5"
      :tooltip="'none'"
      :min-range="20"
      :max-range="50"
      class="mb-2 vue-slider-info"
      :direction="direction"
    />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import store from '@/store/index'

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 50,
      value1: [0, 50],
      value2: [0, 30, 100],
      value3: 45,
      value4: [30, 60],
      value5: [20, 40],
      value6: [0, 20, 40, 60, 80, 100],
      dir: 'ltr',
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
}
</script>
`

export const codeInput = `
<template>
  <div>
    <!-- input -->
    <div class="d-flex">
      <b-form-group class="mr-2">
        <b-form-select
          v-model="ldot"
        >
          <b-form-select-option
            v-for="n in 100"
            :key="n"
            :value="n"
          >
            {{ n }}
          </b-form-select-option>
        </b-form-select>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="rdot"
        />
      </b-form-group>
    </div>

    <!-- slider -->
    <vue-slider
      v-model="value"
      :direction="direction"
    />
  </div>
</template>

<script>
import {
  BFormSelect, BFormSelectOption, BFormGroup, BFormInput,
} from 'bootstrap-vue'
import VueSlider from 'vue-slider-component'
import store from '@/store/index'

export default {
  components: {
    VueSlider,
    BFormSelect,
    BFormGroup,
    BFormInput,
    BFormSelectOption,
  },
  data() {
    return {
      ldot: 1,
      rdot: 50,
      dir: 'ltr',
    }
  },
  computed: {
    value: {
      get() {
        return [this.ldot, this.rdot]
      },
      set([ldot, rdot]) {
        this.ldot = ldot
        this.rdot = rdot
      },
    },
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = 'rtl'
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = 'ltr'
      return this.dir
    },
  },
}
</script>
`

export const codeVerticalDefault = `
<template>
  <div class="d-flex justify-content-center">
    <vue-slider
      v-model="value"
      direction="btt"
      :height="200"
      :process="false"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#7267f0'}"
    />
    <vue-slider
      v-model="value1"
      direction="btt"
      :height="200"
      :process="false"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#82868B'}"
    />
    <vue-slider
      v-model="value2"
      direction="btt"
      :height="200"
      :process="false"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#28C76F'}"
    />
    <vue-slider
      v-model="value3"
      direction="btt"
      :height="200"
      :process="false"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#FF9F43'}"
    />
    <vue-slider
      v-model="value4"
      direction="btt"
      :height="200"
      :process="false"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#EA5455'}"
    />
    <vue-slider
      v-model="value5"
      direction="btt"
      :height="200"
      :process="false"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#00CFE8'}"
    />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 60,
      value1: 50,
      value2: 40,
      value3: 60,
      value4: 70,
      value5: 85,
    }
  },
}
</script>
`

export const codeConntectLower = `
<template>
  <div class="d-flex justify-content-center">
    <vue-slider
      v-model="value"
      direction="ttb"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#7267f0'}"
    />
    <vue-slider
      v-model="value1"
      direction="ttb"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#82868B'}"
      :process-style="{backgroundColor:'#82868B'}"
    />
    <vue-slider
      v-model="value2"
      direction="ttb"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#28C76F'}"
      :process-style="{backgroundColor:'#28C76F'}"
    />
    <vue-slider
      v-model="value3"
      direction="ttb"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#FF9F43'}"
      :process-style="{backgroundColor:'#FF9F43'}"
    />
    <vue-slider
      v-model="value4"
      direction="ttb"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#EA5455'}"
      :process-style="{backgroundColor:'#EA5455'}"
    />
    <vue-slider
      v-model="value5"
      direction="ttb"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#00CFE8'}"
      :process-style="{backgroundColor:'#00CFE8'}"
    />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 60,
      value1: 50,
      value2: 40,
      value3: 60,
      value4: 70,
      value5: 85,
    }
  },
}
</script>
`

export const codeConnectUpper = `
<template>
  <div class="d-flex justify-content-center">
    <vue-slider
      v-model="value"
      direction="btt"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#7267f0'}"
    />
    <vue-slider
      v-model="value1"
      direction="btt"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#82868B'}"
      :process-style="{backgroundColor:'#82868B'}"
    />
    <vue-slider
      v-model="value2"
      direction="btt"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#28C76F'}"
      :process-style="{backgroundColor:'#28C76F'}"
    />
    <vue-slider
      v-model="value3"
      direction="btt"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#FF9F43'}"
      :process-style="{backgroundColor:'#FF9F43'}"
    />
    <vue-slider
      v-model="value4"
      direction="btt"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#EA5455'}"
      :process-style="{backgroundColor:'#EA5455'}"
    />
    <vue-slider
      v-model="value5"
      direction="btt"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#00CFE8'}"
      :process-style="{backgroundColor:'#00CFE8'}"
    />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 60,
      value1: 50,
      value2: 40,
      value3: 60,
      value4: 70,
      value5: 85,
    }
  },
}
</script>
`

export const codeTooltips = `
<template>
  <div class="d-flex justify-content-center">
    <vue-slider
      v-model="value"
      direction="btt"
      :tooltip="'always'"
      :height="200"
      class="mr-4"
      :process="false"
      :dot-style="{backgroundColor:'#7267f0'}"
    />
    <vue-slider
      v-model="value5"
      direction="btt"
      :height="200"
      :process="false"
      :tooltip="'always'"
      class="mr-4"
      :dot-style="{backgroundColor:'#28C76F'}"
    />
    <vue-slider
      v-model="value3"
      direction="btt"
      :process="false"
      :tooltip="'always'"
      :height="200"
      class="mr-4"
      :dot-style="{backgroundColor:'#FF9F43'}"
    />
  </div>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BRow, BCol } from 'bootstrap-vue'
import VueSlider from 'vue-slider-component'

export default {
  components: {
    VueSlider,
    BCardCode,
    BRow,
    BCol,
  },
  data() {
    return {
      value1: 50,
      value3: 60,
      value5: 85,
    }
  },
}
</script>
`

export const codeTopBottom = `
<template>
  <div class="d-flex justify-content-center">
    <vue-slider
      v-model="value"
      direction="btt"
      :height="200"
      class="mr-4"
      :adsorb="true"
      :tooltip="'none'"
      :interval="20"
      :marks="true"
      :dot-style="{backgroundColor:'#7267f0'}"
    />
    <vue-slider
      v-model="value6"
      direction="btt"
      :height="200"
      :adsorb="true"
      :data="data"
      :marks="true"
      class="mr-4"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#28C76F'}"
      :process-style="{backgroundColor:'#28C76F'}"
    />
    <vue-slider
      v-model="value3"
      direction="btt"
      :height="200"
      :adsorb="true"
      :included="true"
      :marks="marks"
      class="mr-4"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#FF9F43'}"
      :process-style="{backgroundColor:'#FF9F43'}"
    />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 60,
      value3: 60,
      value6: 'a',
      data: ['a', 'b', 'c', 'd', 'e'],
      marks: [0, 10, 30, 60, 100],
    }
  },
}
</script>
`

export const codeLimit = `
<template>
  <div class="d-flex justify-content-center">
    <vue-slider
      v-model="value7"
      direction="btt"
      :height="200"
      :min-range="20"
      :max-range="50"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#7267f0'}"
    />
    <vue-slider
      v-model="value8"
      direction="btt"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :fixed="true"
      :dot-style="{backgroundColor:'#82868B'}"
      :process-style="{backgroundColor:'#82868B'}"
    />
    <vue-slider
      v-model="value7"
      direction="btt"
      :height="200"
      :min-range="20"
      :max-range="50"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#28C76F'}"
      :process-style="{backgroundColor:'#28C76F'}"
    />
    <vue-slider
      v-model="value8"
      direction="btt"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :fixed="true"
      :dot-style="{backgroundColor:'#FF9F43'}"
      :process-style="{backgroundColor:'#FF9F43'}"
    />
    <vue-slider
      v-model="value7"
      direction="btt"
      :height="200"
      :min-range="20"
      :max-range="50"
      class="mr-1"
      :tooltip="'none'"
      :dot-style="{backgroundColor:'#EA5455'}"
      :process-style="{backgroundColor:'#EA5455'}"
    />
    <vue-slider
      v-model="value8"
      direction="btt"
      :height="200"
      class="mr-1"
      :tooltip="'none'"
      :fixed="true"
      :dot-style="{backgroundColor:'#00CFE8'}"
      :process-style="{backgroundColor:'#00CFE8'}"
    />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value7: [20, 50],
      value8: [40, 80],
    }
  },
}
</script>
`
