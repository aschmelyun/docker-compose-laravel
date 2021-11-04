<template>
  <b-card>
    <h5 class="mb-1">
      Polls
    </h5>
    <b-card-text>Who is the best actor in Marvel Cinematic Universe?</b-card-text>

    <div
      v-for="data in pollsData"
      :key="data.name"
      class="polls-info mt-2"
    >
      <!-- radio -->
      <div class="d-flex justify-content-between">
        <b-form-radio
          v-model="Selected"
          name="polls"
          :value="data.username"
          class="mb-25"
        >
          {{ data.name }}
        </b-form-radio>
        <div class="text-right">
          {{ data.result }}
        </div>
      </div>
      <!--/ radio -->

      <!-- progress -->
      <b-progress
        :value="data.result"
        max="100"
        height="6px"
        class="my-50"
      />
      <!--/ progress -->

      <!-- avatar group -->
      <b-avatar-group
        size="26"
        class="mt-1"
      >
        <b-avatar
          v-for="avatar in data.votedUser"
          :key="avatar.img"
          v-b-tooltip.hover.bottom="avatar.username"
          :src="avatar.img"
          class="pull-up"
        />
      </b-avatar-group>
      <!--/ avatar group -->
    </div>
  </b-card>
</template>

<script>
import {
  BCard, BFormRadio, BProgress, BAvatarGroup, BCardText, BAvatar, VBTooltip,
} from 'bootstrap-vue'

export default {
  components: {
    BCard, BFormRadio, BProgress, BAvatarGroup, BCardText, BAvatar,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  props: {
    pollsData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      Selected: '',
    }
  },
}
</script>
