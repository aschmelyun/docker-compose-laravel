<template>
  <div>
    <b-alert
      variant="primary"
      show
    >
      <div class="alert-body">
        <p>
          <strong>Info: </strong>
          <span>This layout can be useful for getting started with empty content section.</span>
        </p>
      </div>
    </b-alert>
  </div>
</template>

<script>
import { BAlert } from 'bootstrap-vue'

export default {
  components: {
    BAlert,
  },
}
</script>
