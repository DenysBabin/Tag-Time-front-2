<template>
  <div class="pomodoro-page">
    <div class="content">
      {{ timerString }}
    </div>
    <div class="settings">
      <el-button type="info" @click="startPomodoro()">Старт</el-button>
      <el-button type="info" @click="stopPomodoro()">Стоп</el-button>
      <el-button type="info" @click="resetPomodoro()">Перезапуск</el-button>
      <span>Работа</span>
      <el-input-number v-model="work" @change="handleChangeWork" :min="1" :max="150"></el-input-number>
      <span>Отдых</span>
      <el-input-number v-model="chil" @change="handleChangeChil" :min="1" :max="60"></el-input-number>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pomodoro',
  data () {
    return {
      work: '',
      chil: '',
      timer: '',
      timerString: ''
    }
  },
  methods: {
    startPomodoro () {
      let time = this.work * 60
      const timer = setInterval(() => {
        let calcTime = time
        const seconds = calcTime % 60
        calcTime = (calcTime - seconds) / 60
        const minutes = calcTime % 60
        const hours = (calcTime - minutes) / 60

        if (time <= 0) {
          clearInterval(timer)

          this.$message({
            message: 'Таймер закончился',
            type: 'success'
          })
        } else {
          this.timerString = `${hours}:${minutes}:${seconds}`
        }
        --time
      }, 1000)
    },
    handleChangeWork () {
      this.timer = this.work
    },
    handleChangeChil () {
      this.timer = this.chil
    }
  }
}
</script>

<style scoped>

</style>
