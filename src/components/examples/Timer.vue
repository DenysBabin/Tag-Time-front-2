<template>
  <div class="timers-page">
    <div class="timer-nav">
      <div class="timer-item">
        <el-link type="primary" @click="changeNameToAge()">Age timer</el-link>
      </div>
      <div class="timer-item">
        <el-link type="primary" @click="changeNameToGoal()">Goal timer</el-link>
      </div>
      <div class="timer-item">
        <el-link type="primary" @click="drawer = true">Настройка таймеров</el-link>
      </div>
    </div>

    <div class="timer-show">
      <div class="timer-1" v-if="timerName === 'Age'">
        {{ timerAge }}
      </div>
      <div class="timer-1" v-if="timerName === 'Goal'">
        {{ timerGoal }}
      </div>
    </div>

    <el-drawer
      title="Настройка таймеров"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <div class="drawer">
        <el-date-picker
          class="drawer-item"
          v-model="birthDay"
          type="date"
          placeholder="Выберите дату Рождения">
        </el-date-picker>

        <el-button class="drawer-item" type="primary" @click="changeStartDate()">Сохранить</el-button>
        <el-button class="drawer-item" type="primary" @click="changeStartDateToDenys()">День рождения Дениса</el-button>
      </div>

    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data () {
    return {
      drawer: false,
      direction: 'rtl',
      now: '',
      timerAge: '',
      timerGoal: '',
      startDate: '',
      endDate: '',
      timerName: 'Age',
      birthDay: '',
      birthdayDenys: '2000-12-15T22:20:00'
    }
  },
  mounted () {
    this.setTimerAge()
    this.setTimerGoal()
  },
  methods: {
    setTimerAge () {
      const localBirthDay = JSON.parse(localStorage.getItem('birthdayTimer'))

      if (localBirthDay) {
        this.startDate = new Date(localBirthDay)
      } else {
        this.startDate = new Date(this.birthdayDenys)
      }

      setInterval(() => {
        this.timerAge = this.getNumber(new Date() - this.startDate, 'y')
      }, 50)
    },
    setTimerGoal () {
      const endTimer = new Date('2022-08-16T00:00:00')
      setInterval(() => {
        this.timerGoal = this.getNumber(endTimer - new Date(), 'd')
      }, 50)
    },
    getNumber (val, type = 'y') {
      if (type === 'y') {
        return (val / 1000 / 60 / 60 / 24 / 365).toFixed(9)
      }
      if (type === 'd') {
        return (val / 1000 / 60 / 60 / 24).toFixed(9)
      }
    },
    changeNameToAge () {
      this.timerName = 'Age'
    },
    changeNameToGoal () {
      this.timerName = 'Goal'
    },
    handleClose (done) {
      done()
      // this.$confirm('Are you sure you want to close this?')
      //   .then(_ => {
      //     done()
      //   })
      //   .catch(_ => {})
    },
    changeStartDate () {
      this.startDate = this.birthDay
      localStorage.setItem('birthdayTimer', JSON.stringify(this.startDate))
    },
    changeStartDateToDenys () {
      this.startDate = new Date(this.birthdayDenys)
      localStorage.setItem('birthdayTimer', JSON.stringify(this.startDate))
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-button+.el-button {
  margin-left: 0;
}

.timers-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timer-show {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
}

.timer-1 {
  font-size: 96px;
  width: 554px;
}

.timer-nav {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.timer-item {
  padding: 8px 12px;
}

.drawer {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.drawer-item {
  margin: 4px auto !important;
}
</style>
