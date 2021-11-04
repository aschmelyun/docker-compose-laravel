<!-- =========================================================================================
    File Name: VxTour.vue
    Description: Tour Component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <v-tour
    name="vuexyTour"
    :steps="steps"
  >
    <template slot-scope="tour">
      <transition name="fade">
        <!-- eslint-disable vue/no-use-v-if-with-v-for -->
        <v-step
          v-for="(step, index) of tour.steps"
          v-if="tour.currentStep === index"
          :key="index"
          :step="step"
          :previous-step="tour.previousStep"
          :next-step="tour.nextStep"
          :stop="tour.stop"
          :is-first="tour.isFirst"
          :is-last="tour.isLast"
          :labels="tour.labels"
        >

          <div
            slot="actions"
            class="tour-actions d-flex justify-content-between"
          >
            <!-- Skip Button -->
            <b-button
              v-if="tour.currentStep != tour.steps.length - 1"
              size="sm"
              variant="outline-primary"
              class="btn-tour-skip mr-1"
              @click="tour.stop"
            >
              <span class="mr-25 align-middle">Skip</span>
              <feather-icon
                icon="XIcon"
                size="12"
              />
            </b-button>

            <!-- Previous Button -->
            <b-button
              v-if="tour.currentStep"
              size="sm"
              variant="outline-primary mr-1"
              @click="tour.previousStep"
            >
              <feather-icon
                icon="ChevronLeftIcon"
                size="12"
              />
              <span class="ml-25 align-middle">Previous</span>
            </b-button>

            <!-- Next Button -->
            <b-button
              v-if="tour.currentStep != tour.steps.length - 1"
              size="sm"
              variant="primary"
              class="btn-tour-next"
              @click="tour.nextStep"
            >
              <span class="mr-25 align-middle">Next</span>
              <feather-icon
                icon="ChevronRightIcon"
                size="12"
              />
            </b-button>

            <!-- Finish Button -->
            <b-button
              v-if="tour.currentStep == tour.steps.length - 1"
              size="sm"
              variant="primary"
              class="btn-tour-finish"
              @click="tour.stop"
            >
              <span class="mr-25 align-middle">Finish</span>
              <feather-icon
                icon="CheckCircleIcon"
                size="12"
              />
            </b-button>
          </div>

        </v-step>
        <!-- eslint-enable vue/no-use-v-if-with-v-for -->
      </transition>
    </template>
  </v-tour>
</template>

<script>
import { BButton } from 'bootstrap-vue'

export default {
  name: 'VxTour',
  components: {
    BButton,
  },
  props: {
    steps: {
      required: true,
      type: Array,
    },
  },
}
</script>
