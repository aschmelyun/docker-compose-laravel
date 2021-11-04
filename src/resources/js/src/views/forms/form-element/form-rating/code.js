export const codeBasic = `
<template>
  <div>
    <b-form-rating
      no-border
      v-model="value"
      variant="warning"
    />
    <p class="mt-1">
      Value: {{ value }}
    </p>
    <p>
      <span> Use </span>
      <code>readonly</code>
      <span> prop for readonly mode.</span>
    </p>
    <b-form-rating
      no-border
      v-model="value2"
      inline
      variant="warning"
      readonly
    />
    <p class="mt-1 mb-0">
      Value: {{ value2 }}
    </p>
  </div>
</template>

<script>
import { BFormRating } from 'bootstrap-vue'

export default {
  components: {
    BFormRating,
  },
  data: () => ({
    value: null,
    value2: 2.67,
  }),
}
</script>
`

export const codeBorderLess = `
<template>
  <div>
    <div>
      <label
        for="rating-sm-no-border"
        class="mr-1"
      >Small rating with no border</label>
      <b-form-rating
        id="rating-sm-no-border"
        v-model="value"
        no-border
        variant="warning"
        inline
        size="sm"
      />
    </div>
    <div class="mt-1">
      <label
        for="rating-md-no-border"
        class="mr-1"
      >Default rating (medium) with border</label>
      <b-form-rating
        id="rating-md-no-border"
        v-model="value"
        variant="warning"
        inline
      />
    </div>
    <div class="mt-1">
      <label
        for="rating-lg-no-border"
        class="mr-1"
      >Large rating with no border</label>
      <b-form-rating
        id="rating-lg-no-border"
        v-model="value"
        no-border
        variant="warning"
        size="lg"
        inline
      />
    </div>
    <p class="mt-1 mb-0">
      Value: {{ value }}
    </p>
  </div>
</template>

<script>
import { BFormRating } from 'bootstrap-vue'

export default {
  components: {
    BFormRating,
  },
  data: () => ({
    value: null,
  }),
}
</script>
`

export const codeClearButton = `
<template>
  <div>
    <b-form-rating
      no-border
      v-model="value"
      show-clear
      show-value
      inline
      variant="warning"
    />
  </div>
</template>

<script>
import { BFormRating } from 'bootstrap-vue'

export default {
  components: {
    BFormRating,
  },
  data: () => ({
    value: 2.5,
  }),
}
</script>
`

export const codeDisabled = `
<template>
  <div>
    <label
      class="mr-1"
      for="rating-disabled"
    >Disabled rating</label>
    <b-form-rating
      no-border
      id="rating-disabled"
      value="2.75"
      disabled
      inline
    />
  </div>
</template>

<script>
import { BFormRating } from 'bootstrap-vue'

export default {
  components: {
    BFormRating,
  },
}
</script>
`

export const codeIcon = `
<template>
  <b-form-rating
    show-clear
    variant="danger"
  >
    <feather-icon
      slot="icon-empty"
      icon="FrownIcon"
      size="18"
    />
    <feather-icon
      slot="icon-half"
      icon="MehIcon"
      size="18"
    />
    <feather-icon
      slot="icon-full"
      icon="SmileIcon"
      size="18"
      class="text-success"
    />
    <feather-icon
      slot="icon-clear"
      icon="XCircleIcon"
      size="18"
    />
  </b-form-rating>
</template>

<script>
import { BFormRating } from 'bootstrap-vue'

export default {
  components: {
    BFormRating,
  },
}
</script>
`

export const codeInline = `
<template>
  <div>
    <label
      for="rating-inline"
      class="mr-1"
    >Inline rating:</label>
    <b-form-rating
      no-border
      id="rating-inline"
      inline
      variant="warning"
      value="4"
    />
  </div>
</template>

<script>
import { BFormRating } from 'bootstrap-vue'

export default {
  components: {
    BFormRating,
  },
}
</script>
`

export const codeInputGroup = `
<template>
  <div>
    <b-input-group>
      <b-input-group-prepend>
        <b-button @click="value = null">
          Clear
        </b-button>
      </b-input-group-prepend>
      <b-form-rating
        no-border
        v-model="value"
        inline
        color="#ff8800"
      />
      <b-input-group-append>
        <b-input-group-text class="justify-content-center px-1">
          {{ value }}
        </b-input-group-text>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import {
  BFormRating,
  BInputGroup,
  BInputGroupPrepend,
  BButton,
  BInputGroupAppend,
  BInputGroupText,
} from 'bootstrap-vue'

export default {
  components: {
    BFormRating,
    BInputGroup,
    BInputGroupPrepend,
    BButton,
    BInputGroupAppend,
    BInputGroupText,
  },
  data: () => ({
    value: null,
  }),
}
</script>
`

export const codeInternationalization = `
<template>
  <div>
    <b-form-select
      v-model="locale"
      :options="locales"
      class="mb-2"
    />
    <b-form-rating
      no-border
      v-model="value"
      :locale="locale"
      show-value
      variant="warning"
      precision="1"
      inline
    />
  </div>
</template>


<script>
import { BFormRating, BFormSelect } from 'bootstrap-vue'

export default {
  components: {
    BFormRating,
    BFormSelect,
  },
  data: () => ({
    value: 3.5,
    locale: 'en-US',
    locales: [
      { text: 'English US (en-US)', value: 'en-US' },
      { text: 'French (fr)', value: 'fr' },
      { text: 'Persian (fa)', value: 'fa' },
      { text: 'Arabic Egyptian (ar-EG)', value: 'ar-EG' },
    ],
  }),
}
</script>
`

export const codeNumber = `
<template>
  <div>
    <label
      for="rating-10"
      class="mr-1"
    >Rating with 10 stars:</label>
    <b-form-rating
      no-border
      id="rating-10"
      v-model="value10"
      stars="10"
      inline
      variant="warning"
    />
    <p class="mt-1">
      Value: {{ value10 }}
    </p>

    <label
      for="rating-7"
      class="mr-1"
    >Rating with 7 stars:</label>
    <b-form-rating
      no-border
      id="rating-7"
      v-model="value7"
      stars="7"
      inline
      variant="warning"
    />
    <p class="mt-1">
      Value: {{ value7 }}
    </p>
  </div>
</template>

<script>
import { BFormRating } from 'bootstrap-vue'

export default {
  components: {
    BFormRating,
  },
  data: () => ({
    value10: null,
    value7: null,
  }),
}
</script>
`

export const codeShowValue = `
<template>
  <div>
    <b-form-rating
      no-border
      v-model="value"
      show-value
      inline
      variant="warning"
    />
    <p class="mt-1">
      Value: {{ value }}
    </p>
    <p>Optionally show the maximum rating possible by also setting the prop <code>show-value-max</code> to <code>true</code>:</p>
    <b-form-rating
      no-border
      v-model="value2"
      readonly
      show-value
      variant="warning"
      inline
      precision="2"
    />
    <p class="mt-1">
      Value: {{ value2 }}
    </p>
  </div>
</template>

<script>
import { BFormRating } from 'bootstrap-vue'

export default {
  components: {
    BFormRating,
  },
  data: () => ({
    value: 4,
    value2: 3.555,
  }),
}
</script>
`

export const codeSize = `
<template>
  <div>
     <div class="mb-1">
      <b-form-rating
        id="rating-sm"
        v-model="value"
        size="sm"
        inline

        variant="primary"
      />
    </div>
    <div class="mb-1">
      <b-form-rating
        id="rating-md"
        v-model="value"
        inline

        variant="primary"
      />
    </div>
    <div>
      <b-form-rating
        id="rating-lg"
        v-model="value"
        size="lg"

        inline
        variant="primary"
      />
    </div>
  </div>
</template>

<script>
import { BFormRating } from 'bootstrap-vue'

export default {
  components: {
    BFormRating,
  },
  data: () => ({
    value: null,
  }),
}
</script>
`

export const codeVariant = `
<template>
  <div>
    <div class="demo-inline-spacing">

      <!-- Primary -->
      <b-form-radio
        v-model="selected"
        name="some-radio9"
        value="primary"
        class="custom-control-primary"
      >
        Primary
      </b-form-radio>

      <!-- secondary -->
      <b-form-radio
        v-model="selected"
        name="some-radio9"
        value="secondary"
        class="custom-control-secondary"
      >
        Secondary
      </b-form-radio>

      <!-- success -->
      <b-form-radio
        v-model="selected"
        name="some-radio9"
        value="success"
        class="custom-control-success"
      >
        Success
      </b-form-radio>

      <!-- danger -->
      <b-form-radio
        v-model="selected"
        name="some-radio9"
        value="danger"
        class="custom-control-danger"
      >
        Danger
      </b-form-radio>

      <!-- warning -->
      <b-form-radio
        v-model="selected"
        name="some-radio9"
        value="warning"
        class="custom-control-warning"
      >
        Warning
      </b-form-radio>

      <!-- info -->
      <b-form-radio
        v-model="selected"
        name="some-radio9"
        value="info"
        class="custom-control-info"
      >
        Info
      </b-form-radio>
    </div>

    <!-- Rating -->
    <b-form-rating
      v-model="value"
      :variant="selected"
      inline
      no-border
      class="mt-1"
    />
  </div>
</template>


<script>
import { BFormRating, BFormRadio, BCardText } from 'bootstrap-vue'

export default {
  components: {
    BFormRadio,
    BFormRating,
  },
  data() {
    return {
      value: 3,
      selected: 'primary',
    }
  },
}
</script>
`
