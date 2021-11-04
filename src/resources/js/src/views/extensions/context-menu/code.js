export const codeSimple = `
<template>
  <div>

    <!-- button -->
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @contextmenu.prevent="$refs.menu.open"
    >
      Right click on me
    </b-button>

    <!-- context -->
    <vue-context ref="menu">
      <li>
        <b-link
          v-for="data in menuData"
          :key="data.text"
          class="d-flex align-items-center"
          @click="optionClicked(data.text,data.icon)"
        >
          <feather-icon
            :icon="data.icon"
            size="16"
          />
          <span class="ml-75">{{ data.text }}</span>
        </b-link>
      </li>
    </vue-context>
  </div>
</template>

<script>
import { BButton, BLink } from 'bootstrap-vue'
import { VueContext } from 'vue-context'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    VueContext,
    BLink,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      menuData: [
        { icon: 'PlusIcon', text: 'New' },
        { icon: 'FileIcon', text: 'Open' },
        { icon: 'SaveIcon', text: 'Save' },
        { icon: 'SaveIcon', text: 'Save As' },
        { icon: 'XIcon', text: 'Close' },
      ],
      codeSimple,
    }
  },
  methods: {
    optionClicked(text, icon) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: \`You have click on \${text}!\`,
          icon,
        },
      })
    },
  },
}
</script>
`

export const codeCloseOnClick = `
<template>
  <div>

    <!-- button -->
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      @contextmenu.prevent="$refs.menuProp.open"
    >
      Right click on me - Do not close
    </b-button>

    <!-- context -->
    <vue-context
      ref="menuProp"
      :close-on-click="false"
    >
      <li
        v-for="data in menuData"
        :key="data.icon"
      >
        <b-link
          class="d-flex align-items-center"
          @click="optionClicked(data.text,data.icon)"
        >
          <feather-icon
            :icon="data.icon"
            size="16"
          />
          <span class="ml-75">{{ data.text }}</span>
        </b-link>
      </li>
    </vue-context>
  </div>
</template>

<script>
import { BButton, BLink } from 'bootstrap-vue'
import { VueContext } from 'vue-context'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BLink,
    VueContext,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      menuData: [
        { icon: 'ChevronRightIcon', text: 'Next' },
        { icon: 'ChevronLeftIcon', text: 'Previous' },
        { icon: 'PlusIcon', text: 'Increase' },
        { icon: 'MinusIcon', text: 'Decrease' },
        { icon: 'ShuffleIcon', text: 'Random' },
      ],
    }
  },
  methods: {
    optionClicked(text, icon) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: \`You have click on \${text}!\`,
          icon,
        },
      })
    },
  },
}
</script>
`
