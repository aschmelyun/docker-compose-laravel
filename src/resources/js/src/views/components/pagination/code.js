export const codeBasic = `
<template>
   <b-pagination
    v-model="currentPage"
    hide-goto-end-buttons
    :total-rows="rows"
  />
</template>

<script>
import { BPagination } from 'bootstrap-vue'

export default {
  components: {
    BPagination,
  },
  data() {
    return {
      currentPage: 1,
      perPage: 1,
      rows: 100,
    }
  },
}
</script>
`

export const codeSeparated = `
<template>
  <div class="demo-spacing-0">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      first-number
      last-number
      prev-class="prev-item"
      next-class="next-item"
    >
      <template #prev-text>
        <feather-icon
          icon="ChevronLeftIcon"
          size="18"
        />
      </template>
      <template #next-text>
        <feather-icon
          icon="ChevronRightIcon"
          size="18"
        />
      </template>
    </b-pagination>
  </div>
</template>

<script>
import { BPagination } from 'bootstrap-vue'

export default {
  components: {
    BPagination,
  },
  data: () => ({
    currentPage: 1,
    perPage: 1,
    rows: 200,
  }),
}
</script>
`

export const codeColorOption = `
<template>
  <div class="demo-spacing-0">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      first-number
      last-number
      class="pagination-success"
    >
      <template #prev-text>
        <feather-icon
          size="18"
          icon="ChevronLeftIcon"
        />
      </template>
      <template #next-text>
        <feather-icon
          size="18"
          icon="ChevronRightIcon"
        />
      </template>
    </b-pagination>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      first-number
      last-number
      class="pagination-danger mt-2"
    >
      <template #prev-text>
        <feather-icon
          size="18"
          icon="ChevronLeftIcon"
        />
      </template>
      <template #next-text>
        <feather-icon
          size="18"
          icon="ChevronRightIcon"
        />
      </template>
    </b-pagination>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      first-number
      last-number
      class="pagination-info mb-0"
    >
      <template #prev-text>
        <feather-icon
          size="18"
          icon="ChevronLeftIcon"
        />
      </template>
      <template #next-text>
        <feather-icon
          size="18"
          icon="ChevronRightIcon"
        />
      </template>
    </b-pagination>
  </div>
</template>

<script>
import { BPagination } from 'bootstrap-vue'

export default {
  components: {
    BPagination,
  },
 data() {
    return {
      codeColorOption,
      currentPage: 4,
      perPage: 1,
      rows: 200,
    }
  },
}
</script>
`

export const codeGoto = `
<template>
  <div>
    <div>
      <h6>Goto first button number</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
      />
    </div>
    <div class="mt-2">
      <h6>Goto last button number</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        last-number
      />
    </div>
    <div class="mt-2 demo-spacing-0">
      <h6>Goto first and last button number</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
      />
    </div>
  </div>
</template>

<script>
import { BPagination } from 'bootstrap-vue'

export default {
  components: {
    BPagination,
  },
  data: () => ({
    currentPage: 5,
    perPage: 1,
    rows: 100,
  }),
}
</script>
`

export const codeSize = `
<template>
  <div>
    <div>
      <h6>Small</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        size="sm"
      />
    </div>

    <div class="mt-2">
      <h6>Default</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
      />
    </div>

    <div class="mt-2 demo-spacing-0">
      <h6>Large</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        size="lg"
      />
    </div>
  </div>
</template>

<script>
import { BPagination } from 'bootstrap-vue'

export default {
  components: {
    BPagination,
  },
  data: () => ({
    currentPage: 1,
    rows: 100,
  }),
}
</script>
`

export const codeContent = `
<template>
  <div class="demo-spacing-0">
    <!-- Use text in props -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      align="left"
      last-text="Last"
    />

    <!-- Use emojis in props -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      align="left"
      last-text="⏭"
      class="mt-2"
    />

    <!-- Use HTML and sub-components in slots -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="left"
      class="mt-2"
    >
      <template
        #first-text
      >
        <span class="text-success">First</span>
      </template>
      <template #prev-text>
        <span class="text-danger">Prev</span>
      </template>
      <template #next-text>
        <span class="text-warning">Next</span>
      </template>
      <template #last-text>
        <span class="text-info">Last</span>
      </template>
      <template #ellipsis-text>
        <div>
          <b-spinner
            small
            type="grow"
          />
          <b-spinner
            small
            type="grow"
          />
        </div>
      </template>
      <template #page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
    </b-pagination>
  </div>
</template>

<script>
import { BPagination, BSpinner } from 'bootstrap-vue'

export default {
  components: {
    BPagination,
    BSpinner,
  },
  data: () => ({
    currentPage: 1,
    perPage: 10,
    rows: 100,
  }),
}
</script>
`

export const codePill = `
<template>
  <div>
    <div>
      <h6>Small Pills</h6>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        size="sm"
      />
    </div>

    <div class="mt-2">
      <h6>Default Pills</h6>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
      />
    </div>

    <div class="mt-2 demo-spacing-0">
      <h6>Large Pills</h6>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        size="lg"
      />
    </div>
  </div>
</template>

<script>
import { BPagination } from 'bootstrap-vue'

export default {
  components: {
    BPagination,
  },
  data: () => ({
    currentPage: 1,
    rows: 100,
  }),
}
</script>
`

export const codeAlignment = `
<template>
  <div class="demo-spacing-0">
    <span>Radios using options</span>
    <div class="my-1">
      <b-form-radio
        v-model="selected"
        name="vuexy-radio"
        value="default"
        inline
      >
        Default
      </b-form-radio>
      <b-form-radio
        v-model="selected"
        name="vuexy-radio"
        value="right"
        inline
      >
        Right
      </b-form-radio>
      <b-form-radio
        v-model="selected"
        name="vuexy-radio"
        value="center"
        inline
      >
        Center
      </b-form-radio>
      <b-form-radio
        v-model="selected"
        name="vuexy-radio"
        value="fill"
        inline
      >
        Fill
      </b-form-radio>
    </div>

    <!-- pagination -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      base-url="#"
      :align="selected"
    />
  </div>
</template>

<script>
import { BPagination, BFormRadio } from 'bootstrap-vue'

export default {
  components: {
    BPagination,
    BFormRadio,
  },
  data() {
    return {
      selected: 'default',
      currentPage: 1,
      rows: 100,
    }
  },
}
</script>
`
