<template>
  <!-- Under maintenance-->
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
          Under Maintenance 🛠
        </h2>

        <p class="mb-3">
          Sorry for the inconvenience but we're performing some maintenance at the moment
        </p>

        <b-form
          inline
          class="justify-content-center row m-0 mb-2"
          @submit.prevent
        >
          <b-form-input
            id="notify-email"
            class="col-12 col-md-5 mb-1 mr-md-2"
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

        <!-- img -->
        <b-img
          fluid
          :src="imgUrl"
          alt="Under maintenance page"
        />
      </div>
    </div>
  </div>
<!-- / Under maintenance-->
</template>

<script>
/* eslint-disable global-require */
import { BLink, BFormInput, BButton, BForm, BImg } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'

export default {
  components: {
    BLink,
    BFormInput,
    BButton,
    BForm,
    BImg,
    VuexyLogo,
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/under-maintenance.svg'),
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/under-maintenance-dark.svg')
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
