<template>
  <!-- Coming soon page-->
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <vuexy-logo />
      <h2 class="brand-text text-primary ml-1">
        Vuexy
      </h2>
    </b-link>

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          We are launching soon 🚀
        </h2>
        <p class="mb-3">
          We're creating something awesome. Please subscribe to get notified when it's ready!
        </p>

        <!-- form -->
        <b-form
          inline
          class="row justify-content-center m-0 mb-2"
          @submit.prevent
        >
          <b-form-input
            id="notify-email"
            class="col-12 col-md-5 mb-1 mr-md-2"
            type="text"
            placeholder="john@example.com"
          />

          <b-button
            variant="primary"
            class="mb-1 btn-sm-block"
            type="submit"
          >
            Notify
          </b-button>
        </b-form>

        <b-img
          fluid
          :src="imgUrl"
          alt="Coming soon page"
        />
      </div>
    </div>
  </div>
<!-- / Coming soon page-->
</template>

<script>
/* eslint-disable global-require */
import { BLink, BForm, BFormInput, BButton, BImg } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'

export default {
  components: {
    VuexyLogo,
    BLink,
    BForm,
    BButton,
    BFormInput,
    BImg,
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/coming-soon.svg'),
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/coming-soon-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/pages/page-misc.scss';
</style>
