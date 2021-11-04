<template>
  <b-card-code title="Custom content">
    <b-list-group>
      <b-list-group-item
        active
        class="flex-column align-items-start"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 text-white">
            List group item heading
          </h5>
          <small class="text-secondary">3 days ago</small>
        </div>
        <b-card-text class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </b-card-text>
        <small class="text-secondary">Donec id elit non mi porta.</small>
      </b-list-group-item>

      <b-list-group-item class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">
            List group item heading
          </h5>
          <small class="text-secondary">3 days ago</small>
        </div>
        <b-card-text class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </b-card-text>
        <small class="text-secondary">Donec id elit non mi porta.</small>
      </b-list-group-item>

      <b-list-group-item class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">
            Disabled List group item
          </h5>
          <small class="text-secondary">3 days ago</small>
        </div>
        <b-card-text class="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </b-card-text>
        <small class="text-secondary">Donec id elit non mi porta.</small>
      </b-list-group-item>
    </b-list-group>

    <template #code>
      {{ codeCustom }}
    </template>
  </b-card-code>
</template>

<script>
import { BListGroup, BListGroupItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeCustom } from './code'

export default {
  components: {
    BCardCode,
    BListGroup,
    BListGroupItem,
    BCardText,
  },
  data() {
    return {
      codeCustom,
    }
  },
}
</script>
