<template>
  <b-card-code title="Close On Click">
    <b-card-text>
      <code>closeOnClick</code>
      <span> is set to </span>
      <code>false</code>
      <span> , the context menu will not automatically close when clicked on. You can toggle this feature on and off in this demo by using the checkbox below.</span>
    </b-card-text>

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

    <template #code>
      {{ codeCloseOnClick }}
    </template>
  </b-card-code>
</template>

<script>
import { BButton, BLink, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import VueContext from 'vue-context'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Ripple from 'vue-ripple-directive'
import { codeCloseOnClick } from './code'

export default {
  components: {
    BButton,
    BLink,
    BCardText,
    BCardCode,
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
      codeCloseOnClick,
    }
  },
  methods: {
    optionClicked(text, icon) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: `You have click on ${text}!`,
          icon,
        },
      })
    },
  },
}
</script>
