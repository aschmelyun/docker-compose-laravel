<template>
  <b-card
    v-bind="cardAttrs"
    no-body
    v-on="$listeners"
  >
    <div class="card-header">
      <!-- Title & SubTitle -->
      <div>
        <b-card-title>{{ $attrs.title }}</b-card-title>
        <b-card-sub-title v-if="$attrs['sub-title']">
          {{ $attrs['sub-title'] }}
        </b-card-sub-title>
      </div>

      <i
        class="code-toggler feather icon-code cursor-pointer"
        :aria-expanded="!code_visible ? 'true' : 'false'"
        :aria-controls="parentID"
        @click="code_visible = !code_visible"
      />
    </div>

    <template v-if="$attrs['no-body'] !== undefined">
      <slot />

      <!-- Code Content -->
      <b-collapse
        :id="parentID"
        v-model="code_visible"
        class="card-code"
        :visible="code_visible"
      >
        <b-card-body>
          <prism :language="codeLanguage">
            <slot name="code" />
          </prism>
        </b-card-body>
      </b-collapse>
    </template>

    <b-card-body v-else>
      <!-- Card Content -->
      <slot />

      <!-- Code Content -->
      <b-collapse
        :id="parentID"
        v-model="code_visible"
        class="card-code"
        :visible="code_visible"
      >
        <div class="p-1" />
        <prism :language="codeLanguage">
          <slot name="code" />
        </prism>
      </b-collapse>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardTitle, BCardSubTitle, BCardBody, BCollapse,
} from 'bootstrap-vue'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'vue-prism-component'

export default {
  components: {
    BCard,
    BCardTitle,
    BCardSubTitle,
    BCardBody,
    BCollapse,
    Prism,
  },
  inheritAttrs: false,
  props: {
    codeLanguage: {
      default: 'markup',
      type: String,
    },
  },
  data() {
    return {
      parentID: '',
      code_visible: false,
    }
  },
  computed: {
    cardAttrs() {
      const cardAttrs = JSON.parse(JSON.stringify(this.$attrs))
      delete cardAttrs.title
      delete cardAttrs['sub-title']
      return cardAttrs
    },
  },
  created() {
    this.parentID = String(Math.floor(Math.random() * 10) + 1)
  },
}
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/functions';
@import '~@core/scss/base/bootstrap-extended/variables';
@import 'bootstrap/scss/variables';
@import '~@core/scss/base/components/variables-dark';

.card-code {
  pre[class*='language-'] {
    margin: 0;
    max-height: 350px;
    border-radius: 0.5rem;
  }

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background: #2d2d2d;
      border-radius: 100%;

      .dark-layout & {
        background-color: $theme-dark-body-bg !important;
      }
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      background: rgba(241,241,241,.4);
    }

    /* Handle on hover */
    // ::-webkit-scrollbar-thumb:hover {
    // }

    ::-webkit-scrollbar-corner {
      display: none;
    }
}

.code-toggler {
  border-bottom: 1px solid transparent;

  &[aria-expanded='false'] {
    border-bottom-color: $primary;
  }
}

// HTML
.card {
  .card-header .heading-elements {
    position: static;
    background: red;
  }
}
</style>
