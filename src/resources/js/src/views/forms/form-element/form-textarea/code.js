export const codeAutoHeight = `
<template>
  <b-row>
    <b-col
      xl="6"
      cols="12"
    >
      <label for="textarea-auto-height">Auto height:</label>
      <b-form-textarea
        id="textarea-auto-height"
        placeholder="Auto height textarea"
        rows="3"
        max-rows="8"
      />
    </b-col>
    <b-col
      xl="6"
      cols="12"
    >
      <label for="textarea-no-auto-shrink">No auto-shrink:</label>
      <b-form-textarea
        id="textarea-no-auto-shrink"
        placeholder="Auto height (no-shrink) textarea"
        rows="3"
        max-rows="8"
        no-auto-shrink
      />
    </b-col>
  </b-row>
</template>

<script>
import { BFormTextarea, BRow, BCol } from 'bootstrap-vue'

export default {
  components: {
    BFormTextarea,
    BRow,
    BCol,
  },
}
</script>
`

export const codeDebounce = `
<template>
  <div>
    <b-form-textarea
      v-model="value"
      debounce="500"
      rows="3"
      max-rows="5"
    />
    <pre class="mt-1">{{ value }}</pre>
  </div>
</template>

<script>
import { BFormTextarea } from 'bootstrap-vue'

export default {
  components: {
    BFormTextarea,
  },
  data: () => ({
    value: '',
  }),
}
</script>
`

export const codeDefault = `
<template>
  <div>
    <label for="textarea-default">Textarea</label>
    <b-form-textarea
      id="textarea-default"
      placeholder="Textarea"
      rows="3"
    />
  </div>
</template>

<script>
import { BFormTextarea, BCardText } from 'bootstrap-vue'

export default {
  components: {
    BCardText,
    BFormTextarea,
  },
}
</script>

`

export const codeDisableResize = `
<template>
  <div>
    <b-form-textarea
      id="textarea-no-resize"
      placeholder="Fixed height textarea"
      rows="3"
      no-resize
    />
  </div>
</template>

<script>
import { BFormTextarea } from 'bootstrap-vue'

export default {
  components: {
    BFormTextarea,
  },
}
</script>
`

export const codeFloatingLabel = `
<template>
  <div class="form-label-group">
    <b-form-textarea
      id="textarea"
      rows="3"
      placeholder="Label in Textarea"
    />
    <label for="label-textarea">Label in Textarea</label>
  </div>
</template>

<script>
import { BFormTextarea } from 'bootstrap-vue'

export default {
  components: {
    BFormTextarea,
  },
}
</script>
`

export const codeFormatter = `
<template>
  <div>
    <b-form-group
      class="mb-0"
      label="Textarea with formatter (on input)"
      label-for="textarea-formatter"
      description="We will convert your text to lowercase instantly"
    >
      <b-form-textarea
        id="textarea-formatter"
        v-model="text1"
        placeholder="Enter your text"
        :formatter="formatter"
      />
    </b-form-group>
    <p><b>Value:</b> {{ text1 }}</p>

    <b-form-group
      class="mb-0"
      label="Textarea with lazy formatter (on blur)"
      label-for="textarea-lazy"
      description="This one is a little lazy!"
    >
      <b-form-textarea
        id="textarea-lazy"
        v-model="text2"
        placeholder="Enter your text"
        lazy-formatter
        :formatter="formatter"
      />
    </b-form-group>
    <p><b>Value:</b> {{ text2 }}</p>
  </div>
</template>

<script>
import { BFormTextarea, BFormGroup } from 'bootstrap-vue'

export default {
  components: {
    BFormTextarea,
    BFormGroup,
  },
  data: () => ({
    text1: '',
    text2: '',
  }),
  methods: {
    formatter(value) {
      return value.toLowerCase()
    },
  },
}
</script>
`

export const codeRows = `
<template>
  <b-form-textarea
    id="textarea-rows"
    placeholder="Tall textarea"
    rows="8"
  />
</template>

<script>
import { BFormTextarea} from 'bootstrap-vue'

export default {
  components: {
    BFormTextarea,
  },
}
</script>
`

export const codeReadonly = `
<template>
  <div>
    <b-form-textarea
      id="textarea-plaintext"
      plaintext
      :value="text"
    />
  </div>
</template>

<script>
import { BFormTextarea } from 'bootstrap-vue'

export default {
  components: {
    BFormTextarea,
  },
  data: () => ({
    text: "This is some text.\nIt is read only and doesn't look like an input.",
  }),
}
</script>
`

export const codeSize = `
<template>
  <b-row>
    <b-col sm="2">
      <label
        for="textarea-small"
        class="text-nowrap"
      >Small:</label>
    </b-col>
    <b-col
      sm="10"
      class="mb-1"
    >
      <b-form-textarea
        id="textarea-small"
        size="sm"
        placeholder="Small textarea"
      />
    </b-col>
    <b-col sm="2">
      <label
        for="textarea-default"
        class="text-nowrap"
      >Default:</label>
    </b-col>
    <b-col
      sm="10"
      class="mb-1"
    >
      <b-form-textarea
        id="textarea-default"
        placeholder="Default textarea"
      />
    </b-col>
    <b-col sm="2">
      <label
        for="textarea-large"
        class="text-nowrap"
      >Large:</label>
    </b-col>
    <b-col
      sm="10"
      class="mb-1"
    >
      <b-form-textarea
        id="textarea-large"
        size="lg"
        placeholder="Large textarea"
      />
    </b-col>
  </b-row>
</template>

<script>
import { BFormTextarea, BRow, BCol } from 'bootstrap-vue'

export default {
  components: {
    BFormTextarea,
    BRow,
    BCol,
  },
}
</script>
`

export const codeStates = `
<template>
  <b-form-textarea
    id="textarea-state"
    v-model="text"
    :state="text.length <= 10"
    placeholder="Enter only 10 characters"
    rows="3"
  />
</template>

<script>
import { BFormTextarea } from 'bootstrap-vue'

export default {
  components: {
    BFormTextarea,
  },
  data() {
    return {
      text: '',
    }
  },
}
</script>
`

export const codeCounter = `
<template>
  <div>
    <b-form-textarea
      id="textarea-state"
      v-model="text"
      :state="text.length <= 10"
      placeholder="Enter only 10 characters"
      rows="3"
    />
  </div>
</template>

<script>
import { BFormTextarea } from 'bootstrap-vue'

export default {
  components: {
    BFormTextarea,
  },
  data: () => ({
    value: '',
    maxChar: 20,
  }),
}
</script>
`
