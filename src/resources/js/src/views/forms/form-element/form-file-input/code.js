export const codeBasic = `
<template>
  <div>

    <!-- Styled -->
    <b-form-file
      v-model="file"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    />

    <b-card-text class="my-1">
      Selected file: <strong>{{ file ? file.name : '' }}</strong>
    </b-card-text>

    <b-card-text>
      <span>You can have </span>
      <code>&lt;b-form-file&gt;</code>
      <span> render a browser native file input by setting the </span>
      <code>plain</code>
      <span> prop.</span>
    </b-card-text>

    <!-- Plain mode -->
    <b-form-file
      v-model="file2"
      class="mt-1"
      plain
    />
    <div class="mt-1">
      Selected file: <strong>{{ file2 ? file2.name : '' }}</strong>
    </div>
  </div>
</template>


<script>
import { BFormFile } from 'bootstrap-vue'

export default {
  components: {
    BFormFile,
  },
 data() {
    return {
      file: null,
      file2: null,
    }
  },
}
</script>
`

export const codeDragDrop = `
<template>
  <div>
    <!-- Styled -->
    <b-form-file
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      no-drop
    />
  </div>
</template>

<script>
import { BFormFile } from 'bootstrap-vue'

export default {
  components: {
    BFormFile,
  },
}
</script>
`

export const codeFormatter = `
<template>
  <div>
    <div>
      <b-form-file
        multiple
        :file-name-formatter="formatNames"
      />
    </div>
  </div>
</template>

<script>
import { BFormFile } from 'bootstrap-vue'

export default {
  components: {
    BFormFile,
  },
  methods: {
    formatNames(files) {
      if (files.length === 1) {
        return files[0].name
      }
      return \`\${ files.length } files selected\`
    },
  },
}
</script>
`

export const codeLimiting = `
<template>
  <div>
    <div>
      <!-- Accept all image formats by IANA media type wildcard-->
      <label for="wildcard">Accept all image</label>
      <b-form-file
        id="wildcard"
        accept="image/*"
      />

      <!-- Accept specific image formats by IANA type -->
      <label
        for="IANA"
        class="mt-1"
      >Accept specific image formats by IANA type</label>
      <b-form-file
        id="IANA"
        accept="image/jpeg, image/png, image/gif"
      />

      <!-- Accept specific image formats by extension -->
      <label
        for="extension"
        class="mt-1"
      >Accept specific image formats by extension</label>
      <b-form-file
        id="extension"
        accept=".jpg, .png, .gif"
      />
    </div>
  </div>
</template>

<script>
import { BFormFile } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormFile,
  },
}
</script>
`

export const codeMultiple = `
<template>
  <div>
    <b-form-file
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      multiple
    />
  </div>
</template>

<script>
import { BFormFile } from 'bootstrap-vue'

export default {
  components: {
    BFormFile,
  },
}
</script>
`

export const codeSize = `
<template>
  <div>
    <b-form-group
      label="Small:"
      label-for="file-small"
      label-cols-sm="2"
      label-size="sm"
    >
      <b-form-file
        id="file-small"
        size="sm"
      />
    </b-form-group>

    <b-form-group
      label="Default:"
      label-for="file-default"
      label-cols-sm="2"
    >
      <b-form-file id="file-default" />
    </b-form-group>

    <b-form-group
      label="Large:"
      label-for="file-large"
      label-cols-sm="2"
      label-size="lg"
    >
      <b-form-file
        id="file-large"
        size="lg"
      />
    </b-form-group>
  </div>
</template>

<script>
import { BFormFile, BFormGroup } from 'bootstrap-vue'

export default {
  components: {
    BFormFile,
    BFormGroup,
  },
}
</script>
`

export const codeContextualState = `
<template>
  <div>
    <!-- Styled -->
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    />
  </div>
</template>

<script>
import { BFormFile } from 'bootstrap-vue'

export default {
  components: {
    BFormFile,
  },
  data: () => ({
    file: null,
  }),
}
</script>
`

export const codeClearing = `
<template>
  <div>
    <b-form-file
      ref="file-input"
      v-model="file"
      class="mb-2"
    />

    <b-button
      class="mr-2"
      variant="primary"
      @click="clearFiles"
    >
      Reset via method
    </b-button>
    <b-button
      variant="primary"
      @click="file = null"
    >
      Reset via v-model
    </b-button>

    <p class="mt-2">
      Selected file: <strong>{{ file ? file.name : '' }}</strong>
    </p>
  </div>
</template>

<script>
import { BFormFile, BButton } from 'bootstrap-vue'

export default {
  components: {
    BFormFile,
    BButton,
  },
  data: () => ({
    file: null,
  }),
  methods: {
    clearFiles() {
      this.$refs['file-input'].reset()
    },
  },
}
</script>
`

export const codeDirectory = `
<template>
  <div>
    <b-form-file
        v-model="file"
        directory
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      />
    </b-card-code>
  </div>
</template>

<script>
import { BFormFile } from 'bootstrap-vue'

export default {
  components: {
    BFormFile,
    file:null
  },
}
</script>
`

export const codeSlot = `
<template>
  <b-form-file multiple>
    <template
      slot="file-name"
      slot-scope="{ names }"
    >
      <b-badge variant="primary">
        {{ names[0] }}
      </b-badge>
      <b-badge
        v-if="names.length > 1"
        variant="dark"
        class="ml-1"
      >
        + {{ names.length - 1 }} More files
      </b-badge>
    </template>
  </b-form-file>
</template>


<script>
import { BFormFile, BBadge } from 'bootstrap-vue'

export default {
  components: {
    BFormFile,
    BBadge,
  },
}
</script>
`
