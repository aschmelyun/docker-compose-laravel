<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props: {
    data: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.data, this.options)
  },
}
</script>
