export const codeAdvance = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="popToast"
    >
      Show Toast with custom content
    </b-button>
  </div>
</template>

<script>
// eslint-disable-next-line
import { BButton, BSpinner } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    // eslint-disable-next-line
    BSpinner,
  },
  directives: {
    Ripple,
  },
  data: () => ({
    count: 0,
  }),
  methods: {
    popToast() {
      // Use a shorter name for this.$createElement
      const h = this.$createElement
      // Increment the toast count
      this.count += 1
      // Create the message
      const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [
        h('b-spinner', { props: { type: 'grow', small: true } }),
        ' Flashy ',
        h('strong', 'toast'),
        \`message #\${this.count}\`,
        h('b-spinner', { props: { type: 'grow', small: true } }),
      ])
      // Create the title
      const vNodesTitle = h('div', { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] }, [
        h('strong', { class: 'mr-2' }, 'The Title'),
        h('small', { class: 'ml-auto font-italics' }, '5 minutes ago'),
      ])
      // Pass the VNodes as an array for message and title
      this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        solid: true,
        variant: 'info',
      })
    },
  },
}
</script>
`

export const codeToastDelay = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="$bvToast.show('example-toast5')"
    >
      Delay
    </b-button>

    <!-- toast -->
    <b-toast
      id="example-toast5"
      auto-hide-delay="10000"
    >
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-center mr-25">
          <b-img
            :src="require('@/assets/images/logo/logo.png')"
            class="rounded mr-2"
            height="18"
            width="25"
            alt="Toast image"
          />
          <strong class="mr-auto">Vue Admin</strong>
          <small class="text-muted">11 mins ago</small>
        </div>
      </template>
      <span>Hello, world! This is a toast message.</span>
    </b-toast>
  </div>
</template>

<script>
import { BToast, BButton, BImg } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BToast,
    BButton,
    BImg,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeBasic = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="$bvToast.show('example-toast')"
    >
      Show toast
    </b-button>

    <!-- toast -->
    <b-toast id="example-toast">
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-center mr-1">
          <b-img
            :src="require('@/assets/images/logo/logo.png')"
            class="mr-1"
            height="18"
            width="25"
            alt="Toast image"
          />
          <strong class="mr-auto">Vue Admin</strong>
          <small class="text-muted">11 mins ago</small>
        </div>
      </template>
      <span>Hello, world! This is a toast message. Hope you're doing well.. :)</span>
    </b-toast>
  </div>
</template>

<script>
import { BButton, BToast, BImg } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BToast,
    BImg,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeLinks = `
<template>
  <div>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="toast()"
    >
      Toast with link
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
  },
  methods: {
    toast() {
      this.$bvToast.toast('Toast with action link', {
        href: '#foo',
        title: 'Example',
      })
    },
  },
}
</script>
`

export const codeTarget = `
<template>
  <div class="demo-inline-spacing">
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="toast('b-toaster-top-right')"
    >
      b-toaster-top-right
    </b-button>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="toast('b-toaster-top-left')"
    >
      b-toaster-top-left
    </b-button>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="toast('b-toaster-top-center')"
    >
      b-toaster-top-center
    </b-button>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="toast('b-toaster-top-full')"
    >
      b-toaster-top-full
    </b-button>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="toast('b-toaster-bottom-right', true)"
    >
      b-toaster-bottom-right
    </b-button>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="toast('b-toaster-bottom-left', true)"
    >
      b-toaster-bottom-left
    </b-button>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="toast('b-toaster-bottom-center', true)"
    >
      b-toaster-bottom-center
    </b-button>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="toast('b-toaster-bottom-full', true)"
    >
      b-toaster-bottom-full
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  data: () => ({
    counter: 0,
  }),
  directives: {
    Ripple,
  },
  methods: {
    toast(toaster, append = false) {
      this.counter += 1
      this.$bvToast.toast(\`Toast \${this.counter} body content\` {
        title: \`Toaster \${toaster}\`,
        toaster,
        solid: true,
        appendToast: append,
      })
    },
  },
}
</script>
`

export const codeTranslucent = `
<template>
  <div class="translucent-wrap bg-primary rounded-bottom p-1">
    <b-toast
      id="example-toast3"
      v-model="visible"
      static
      no-auto-hide
    >
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-center mr-1">
          <b-img
            :src="require('@/assets/images/logo/logo.png')"
            class="mr-1"
            height="18"
            width="25"
            alt="Toast image"
          />
          <strong class="mr-auto">Vue Admin</strong>
          <small class="text-muted">11 mins ago</small>
        </div>
      </template>
      <span>Hello, world! This is a toast message.</span>
    </b-toast>
  </div>
</template>

<script>
import {
  BToast, BImg,
} from 'bootstrap-vue'

export default {
  components: {
    BToast,
    BImg,
  },
   data() {
    return {
      visible: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.translucent-wrap {
  height: 110px;
  position: relative;
}
</style>
`

export const codeVariant = `
<template>
  <div class="demo-inline-spacing">

    <!-- default -->
    <b-button
      variant="gradient-primary"
      @click="makeToast()"
    >
      Default
    </b-button>

    <!-- primary -->
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @click="makeToast('primary')"
    >
      Primary
    </b-button>

    <!-- secondary -->
    <b-button
      v-ripple.400="'rgba(186, 191, 199, 0.15)'"
      variant="outline-secondary"
      @click="makeToast('secondary')"
    >
      Secondary
    </b-button>

    <!-- warning -->
    <b-button
      v-ripple.400="'rgba(255, 159, 67, 0.15)'"
      variant="outline-warning"
      @click="makeToast('warning')"
    >
      Warning
    </b-button>

    <!-- danger -->
    <b-button
      v-ripple.400="'rgba(255, 159, 67, 0.15)'"
      variant="outline-danger"
      @click="makeToast('danger')"
    >
      Danger
    </b-button>

    <!-- success -->
    <b-button
      v-ripple.400="'rgba(40, 199, 111, 0.15)'"
      variant="outline-success"
      @click="makeToast('success')"
    >
      Success
    </b-button>

    <!-- info -->
    <b-button
      v-ripple.400="'rgba(0, 207, 232, 0.15)'"
      variant="outline-info"
      @click="makeToast('info')"
    >
      Info
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
  },
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast('Toast body content', {
        title: \`Variant \${variant || 'default'}\`,
        variant,
        solid: true,
      })
    },
  },
}
</script>
`
