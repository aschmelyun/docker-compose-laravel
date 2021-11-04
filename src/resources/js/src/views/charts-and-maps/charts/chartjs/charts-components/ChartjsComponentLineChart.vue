<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    data: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
    plugins: {
      type: Array,
      default: null,
    },
    styles: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.data, this.options, this.plugins, this.styles)
  },
}
</script>
