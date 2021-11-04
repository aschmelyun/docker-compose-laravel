<template>
  <b-card
    no-body
    class="business-card"
  >
    <b-card-header class="pb-1">
      <b-card-title>For Business Sharks</b-card-title>
      <feather-icon
        icon="MoreVerticalIcon"
        size="18"
        class="cursor-pointer"
      />
    </b-card-header>

    <b-card-body>
      <b-card-text>Here, i focus ona range of items and featured that we use in life without giving them</b-card-text>
      <h6 class="mb-75">
        Basic price is $130
      </h6>
      <div class="business-items">
        <div
          v-for="businessItem in businessItems"
          :key="businessItem.option"
          class="business-item"
        >
          <div class="d-flex align-items-center justify-content-between">
            <b-form-checkbox :checked="businessItem.checked">
              {{ businessItem.option }}
            </b-form-checkbox>
            <b-badge :variant="businessItem.badgeColor">
              {{ businessItem.money }}
            </b-badge>
          </div>
        </div>
      </div>

      <!-- button -->
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        block
      >
        Purchase
      </b-button>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardBody, BCardText, BFormCheckbox, BBadge, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCard,
    BBadge,
    BButton,
    BCardHeader,
    BCardTitle,
    BCardBody,
    BCardText,
    BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      businessItems: [
        {
          option: 'Option #1', money: '+$39', badgeColor: 'light-success', checked: false,
        },
        {
          option: 'Option #2', money: '+85', badgeColor: 'light-primary', checked: true,
        },
        {
          option: 'Option #3', money: '+$199', badgeColor: 'light-success', checked: false,
        },
        {
          option: 'Option #4', money: '+$459', badgeColor: 'light-success', checked: false,
        },
      ],
    }
  },
}
</script>
