<script>
import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: [],
  mounted () {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: 'Что-то',
            data: this.chartData
          },
          {
            label: 'Что-то',
            data: [3, 6, 22]
          }
        ]
      },
      this.options
    )
  }
}
</script>
