export const codeBasic = `
<template>
  <b-pagination-nav
    :link-gen="linkGen"
    :number-of-pages="10"
    use-router
    class="mb-0"
  />
</template>

<script>
import { BPaginationNav } from 'bootstrap-vue'

export default {
  components: {
    BPaginationNav,
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : \`?page=\${pageNum}\`
    },
  },
}
</script>
`

export const codeAlignment = `
<template>
  <div>
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

    <!-- pagination nav -->
    <b-pagination-nav
      number-of-pages="10"
      base-url="#"
      :align="selected"
    />
  </div>
</template>

<script>
import { BPaginationNav, BFormRadio } from 'bootstrap-vue'

export default {
  components: {
    BPaginationNav,
    BFormRadio,
  },
  data() {
    return {
      selected: 'default',
    }
  },
}
</script>
`

export const codeArray = `
<template>
  <div>
    <b-pagination-nav
      :pages="pages1"
      use-router
    />
    <b-pagination-nav
      :pages="pages2"
      use-router
      class="mt-2"
    />
    <b-pagination-nav
      :pages="pages3"
      use-router
      class="mt-2"
    />
  </div>
</template>

<script>
import { BPaginationNav } from 'bootstrap-vue'

export default {
  components: {
    BPaginationNav,
  },
  data() {
    return {
      codeArray,
      // Simple array of strings
      pages1: ['?page=1', '?page=2', '?page=3'],
      // Array of objects with string links
      pages2: [
        { link: '?page=1', text: 'One' },
        { link: '?page=2', text: 'Two' },
        { link: '?page=3', text: 'Three' },
      ],
      pages3: [
        { link: { query: { page: 1 } }, text: 'Page 1' },
        { link: { query: { page: 2 } }, text: 'Page 2' },
        { link: { query: { page: 3 } }, text: 'Page 3' },
      ],
    }
  },
}
</script>
`

export const codeButtonContent = `
<template>
  <!-- Use text in props -->
  <b-pagination-nav
    number-of-pages="10"
    base-url="#"
    first-text="First"
    prev-text="Prev"
    next-text="Next"
    last-text="Last"
  />

  <!-- Use emojis in props -->
  <b-pagination-nav
    number-of-pages="10"
    base-url="#"
    first-text="⏮"
    prev-text="⏪"
    next-text="⏩"
    last-text="⏭"
    class="mt-2"
  />

  <!-- Use HTML and sub-components in slots -->
  <b-pagination-nav
    number-of-pages="10"
    base-url="#"
    class="mt-2"
  >
    <template #first-text>
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
  </b-pagination-nav>
</template>

<script>
import { BPaginationNav, BSpinner } from 'bootstrap-vue'

export default {
  components: {
    BPaginationNav,
    BSpinner,
  },
}
</script>
`

export const codeGoto = `
<template>
  <div>
    <div>
      <h6>Goto first button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        first-number
      />
    </div>

    <div class="mt-2">
      <h6>Goto last button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        last-number
      />
    </div>

    <div class="mt-2">
      <h6>Goto first and last button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        first-number
        last-number
      />
    </div>
  </div>
</template>

<script>
import { BPaginationNav } from 'bootstrap-vue'

export default {
  components: {
    BPaginationNav,
  },
   data() {
    return {
      pages: 100,
      currentPage: 5,
    }
  },
}
</script>
`

export const codeNumberGen = `
<template>
   <b-pagination-nav
    :link-gen="linkGen"
    :page-gen="pageGen"
    :number-of-pages="links.length"
  />
</template>

<script>
import { BPaginationNav } from 'bootstrap-vue'

export default {
  components: {
    BPaginationNav,
  },
  data() {
    return {
      links: ['#foo', '#bar', '#baz', '#faz'],
    }
  },
  methods: {
    linkGen(pageNum) {
      return this.links[pageNum - 1]
    },
    pageGen(pageNum) {
      return this.links[pageNum - 1].slice(1)
    },
  },
}
</script>
`

export const codePill = `
<template>
  <div>
     <div>
      <h6>Small Pills</h6>
      <b-pagination-nav
        pills
        size="sm"
        number-of-pages="10"
        base-url="#"
      />
    </div>

    <div class="mt-2">
      <h6>Default Pills</h6>
      <b-pagination-nav
        pills
        number-of-pages="10"
        base-url="#"
      />
    </div>

    <div class="mt-2">
      <h6>Large Pills</h6>
      <b-pagination-nav
        pills
        size="lg"
        number-of-pages="10"
        base-url="#"
      />
    </div>
  </div>
</template>

<script>
import { BPaginationNav } from 'bootstrap-vue'

export default {
  components: {
    BPaginationNav,
  },
}
</script>
`

export const codeSize = `
<template>
  <div>
    <div>
      <h6>Small</h6>
      <b-pagination-nav
        size="sm"
        number-of-pages="10"
        base-url="#"
      />
    </div>

    <div class="mt-2">
      <h6>Default</h6>
      <b-pagination-nav
        number-of-pages="10"
        base-url="#"
      />
    </div>

    <div class="mt-2">
      <h6>Large</h6>
      <b-pagination-nav
        size="lg"
        number-of-pages="10"
        base-url="#"
      />
    </div>
  </div>
</template>

<script>
import { BPaginationNav } from 'bootstrap-vue'

export default {
  components: {
    BPaginationNav,
  },
}
</script>
`
