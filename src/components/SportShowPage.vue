<template>
  <div class="block">
<!--    <div class="nav">-->
<!--      <div class="nav-item">-->
<!--        <el-link type="primary" @click="goTopullUps()">Подтягивания</el-link>-->
<!--      </div>-->
<!--      <div class="nav-item">-->
<!--        <el-link type="primary" @click="changeNameToGoal()">Отжимания</el-link>-->
<!--      </div>-->
<!--      <div class="nav-item">-->
<!--        <el-link type="primary">Бег</el-link>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div>-->
<!--      <el-input placeholder="Начало" v-model="startPeriod"></el-input>-->
<!--      <el-input placeholder="Конец" v-model="endPeriod"></el-input>-->
<!--      <el-button type="success" @click="saveDates()">Сохранить</el-button>-->
<!--    </div>-->

<!--    <div class="block-days">-->
<!--      <div class="days">-->
<!--        <div class="day">-->
<!--          <div class="day-text">-->
<!--            День Число-->
<!--          </div>-->
<!--          <div class="day-input">-->

<!--            <div>Количество сделать раз на этот день</div>-->
<!--            <el-input placeholder="Коэфициент" v-model="input"></el-input>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <el-button type="success" @clisk="saveDays()">Сохранить</el-button>-->
<!--    </div>-->

    <div class="chart-item">
      <h1>Подтягивания</h1>
      <div class="blockResults">
        <div>
          Уже сделано: {{ done.pullUpsSum }}
        </div>
        <div>
          Осталось сделать: {{ 4500 - done.pullUpsSum }}
        </div>
        <div>
          Надо сделать сегодня: {{ datacollectionPullUps ? (datacollectionPullUps.datasets[1].data[datacollectionPullUps.datasets[1].data.length - 1] * 1.02).toFixed(2) : null}}
        </div>
        <div>
          Надо делать каждый день, если поделить все на дни: {{ (( 4500 - done.pullUpsSum ) / getDays()).toFixed(2)  }}
        </div>
      </div>

      <line-chart
        class="chart"
        :chart-data="datacollectionPullUps"
      />
    </div>

    <div class="chart-item">
      <h1>Приседания</h1>
      <div class="blockResults">
        <div>
          Уже сделано: {{ done.squatsSum }}
        </div>
        <div>
          Осталось сделать: {{ 5000 - done.squatsSum }}
        </div>
        <div>
          Надо сделать сегодня: {{ datacollectionSquats ? (datacollectionSquats.datasets[1].data[datacollectionSquats.datasets[1].data.length - 1] * 1.02).toFixed(2) : null}}
        </div>
        <div>
          Надо делать каждый день, если поделить все на дни: {{ (( 5000 - done.squatsSum ) / getDays()).toFixed(2)  }}
        </div>
      </div>

      <line-chart
        class="chart"
        :chart-data="datacollectionSquats"
      />
    </div>

    <div class="chart-item">
      <h1>Брусья</h1>
      <div class="blockResults">
        <div>
          Уже сделано: {{ done.barsSum }}
        </div>
        <div>
          Осталось сделать: {{ 5500 - done.barsSum }}
        </div>
        <div>
          Надо сделать сегодня: {{ datacollectionBars ? (datacollectionBars.datasets[1].data[datacollectionBars.datasets[1].data.length - 1] * 1.02).toFixed(2) : null}}
        </div>
        <div>
          Надо делать каждый день, если поделить все на дни: {{ (( 5500 - done.barsSum ) / getDays()).toFixed(2)  }}
        </div>
      </div>

      <line-chart
        class="chart"
        :chart-data="datacollectionBars"
      />
    </div>

    <div class="chart-item">
      <h1>Отжимания</h1>
      <div class="blockResults">
        <div>
          Уже сделано: {{ done.pushUpsSum }}
        </div>
        <div>
          Осталось сделать: {{ 6000 - done.pushUpsSum }}
        </div>
        <div>
          Надо сделать сегодня: {{ datacollectionPushUps ? (datacollectionPushUps.datasets[1].data[datacollectionPushUps.datasets[1].data.length - 1] * 1.02).toFixed(2) : null}}
        </div>
        <div>
          Надо делать каждый день, если поделить все на дни: {{ (( 6000 - done.pushUpsSum ) / getDays()).toFixed(2)  }}
        </div>
      </div>

      <line-chart
        class="chart"
        :chart-data="datacollectionPushUps"
      />
    </div>

    <div class="chart-item">
      <h1>Бег</h1>
      <div class="blockResults">
        <div>
          Уже сделано: {{ done.runSum }}
        </div>
        <div>
          Осталось сделать: {{ 150000 - done.runSum }}
          <div>
            <div>
              СПАСИБО ЗА ПРОСМОТР ЭТОГО ДЕРЬМА
            </div>

          </div>
        </div>
        <div>
          Надо сделать сегодня: {{ datacollectionRun ? (datacollectionRun.datasets[1].data[datacollectionRun.datasets[1].data.length - 1] * 1.02).toFixed(2) : null}}
        </div>
        <div>
          Надо делать каждый день, если поделить все на дни: {{ (( 150000 - done.runSum ) / getDays()).toFixed(2)  }}
        </div>
      </div>

      <line-chart
        class="chart"
        :chart-data="datacollectionRun"
      />
    </div>

  </div>
</template>

<script>
import SportService from '@/services/SportService'
import LineChart from '../components/charts/Chart.vue'

export default {
  name: 'SportShowPage',
  components: {
    LineChart
  },
  data () {
    return {
      endDate: '2021-12-26',
      datacollectionPushUps: null,
      datacollectionPullUps: null,
      datacollectionSquats: null,
      datacollectionBars: null,
      datacollectionRun: null,
      endPeriod: '',
      startPeriod: '',
      coeficient: 1.022,
      done: {
        date: [],
        pullUps: [],
        pushUps: [],
        squats: [],
        bars: [],
        run: [],
        pullUpsSum: 0,
        pushUpsSum: 0,
        squatsSum: 0,
        barsSum: 0,
        runSum: 0,
        press: []
      },
      goal: {
        pullUps: [],
        pushUps: [],
        squats: [],
        bars: [],
        run: [],
        press: []
      },
      constantsSport: {
        pullUps: 111,
        pushUps: 148,
        squats: 124,
        bars: 136,
        run: 3700,
        press: 1
      }
    }
  },
  mounted () {
    this.getAllData()
  },
  methods: {
    getDays () {
      const startDate = this.moment(this.moment().format('YYYY/MM/DD'))
      const endDate = this.moment(this.endDate)
      // console.log(startDate)
      // console.log(endDate)
      const result = endDate.diff(startDate, 'days') + 1
      console.log(result)
      return result
    },
    saveDates () {
    },
    saveDays () {
    },
    getAllData () {
      SportService.fetchPosts().then((response) => {
        console.log(response)
        let i = 0
        response.data.sport.forEach((item) => {
          console.log(item)
          this.done.date.push(this.moment(item.date).format('DD-MM-YYYY'))
          this.done.pullUps.push(item.pullUps)
          this.done.pushUps.push(item.pushUps)
          this.done.squats.push(item.squats)
          this.done.bars.push(item.bars)
          this.done.run.push(item.run)

          this.done.pullUpsSum += item.pullUps
          this.done.pushUpsSum += item.pushUps
          this.done.squatsSum += item.squats
          this.done.barsSum += item.bars
          this.done.runSum += item.run

          if (i === 0) {
            this.goal.pullUps.push(this.constantsSport.pullUps)
            this.goal.pushUps.push(this.constantsSport.pushUps)
            this.goal.squats.push(this.constantsSport.squats)
            this.goal.bars.push(this.constantsSport.bars)
            this.goal.run.push(this.constantsSport.run)
          } else {
            this.goal.pullUps.push((this.goal.pullUps[i - 1] * this.coeficient).toFixed(2))
            this.goal.pushUps.push(this.goal.pushUps[i - 1] * this.coeficient)
            this.goal.squats.push(this.goal.squats[i - 1] * this.coeficient)
            this.goal.bars.push(this.goal.bars[i - 1] * this.coeficient)
            this.goal.run.push(this.goal.run[i - 1] * this.coeficient)
          }
          i++
        })
      }).then(() => {
        this.datacollectionPullUps = {
          labels: Array.from(this.done.date),
          datasets: [
            {
              label: 'Сделал',
              backgroundColor: '#f87979',
              data: Array.from(this.done.pullUps)
            },
            {
              label: 'Надо сделать',
              backgroundColor: '#464299',
              data: Array.from(this.goal.pullUps)
            }
          ]
        }

        this.datacollectionPushUps = {
          labels: Array.from(this.done.date),
          datasets: [
            {
              label: 'Сделал',
              backgroundColor: '#f87979',
              data: Array.from(this.done.pushUps)
            },
            {
              label: 'Надо сделать',
              backgroundColor: '#464299',
              data: Array.from(this.goal.pushUps)
            }
          ]
        }

        this.datacollectionSquats = {
          labels: Array.from(this.done.date),
          datasets: [
            {
              label: 'Сделал',
              backgroundColor: '#f87979',
              data: Array.from(this.done.squats)
            },
            {
              label: 'Надо сделать',
              backgroundColor: '#464299',
              data: Array.from(this.goal.squats)
            }
          ]
        }

        this.datacollectionBars = {
          labels: Array.from(this.done.date),
          datasets: [
            {
              label: 'Сделал',
              backgroundColor: '#f87979',
              data: Array.from(this.done.bars)
            },
            {
              label: 'Надо сделать',
              backgroundColor: '#464299',
              data: Array.from(this.goal.bars)
            }
          ]
        }

        this.datacollectionRun = {
          labels: Array.from(this.done.date),
          datasets: [
            {
              label: 'Сделал',
              backgroundColor: '#f87979',
              data: Array.from(this.done.run)
            },
            {
              label: 'Надо сделать',
              backgroundColor: '#464299',
              data: Array.from(this.goal.run)
            }
          ]
        }
      })
    }
  }
}
</script>

<style scoped>
.block {
  width: 100%;
}

.day {
  width: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.day-text {
  display: flex;
  justify-content: center;
}

.blockResults {
  margin: 20px;
}

.block-days {
  margin: 20px;
}

.chart-item {
  width: 100%;
  margin: 20px;
  border-bottom: 2px solid black;
}

.chart {
  width: 500px;
}

</style>
