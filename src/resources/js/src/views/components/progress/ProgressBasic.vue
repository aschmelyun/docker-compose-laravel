<template>
  <b-card-code title="Basic Progress">

    <div class="demo-vertical-spacing">
      <div class="progress-wrapper">
        <b-card-text class="mb-0">
          Reticulating splines… {{ value+'%' }}
        </b-card-text>
        <b-progress
          v-model="value"
          max="100"
        />
      </div>
      <div class="progress-wrapper">
        <b-card-text class="mb-0">
          Reticulating splines… {{ value1+'%' }}
        </b-card-text>
        <b-progress
          v-model="value1"
          max="100"
        />
      </div>
      <div class="progress-wrapper">
        <b-card-text class="mb-0">
          Reticulating splines… {{ value2+'%' }}
        </b-card-text>
        <b-progress
          v-model="value2"
          max="100"
        />
      </div>

      <div class="progress-wrapper">
        <b-card-text class="mb-0">
          Reticulating splines… {{ value3+'%' }}
        </b-card-text>
        <b-progress
          v-model="value3"
          max="100"
        />
      </div>

      <div class="progress-wrapper">
        <b-card-text class="mb-0">
          Reticulating splines… {{ value4+'%' }}
        </b-card-text>
        <b-progress
          v-model="value4"
          max="100"
        />
      </div>
    </div>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BProgress, BCardText } from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BProgress,
  },
  data() {
    return {
      value: 0,
      value1: 25,
      value2: 50,
      value3: 75,
      value4: 100,
      codeBasic,
    }
  },
}
</script>
