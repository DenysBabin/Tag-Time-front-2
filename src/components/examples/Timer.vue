<template>
  <div class="timers-page">
    <div class="timer-1">
      {{ timer1 }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data () {
    return {
      now: '',
      timer1: '',
      startDate: '',
      endDate: ''
    }
  },
  mounted () {
    this.setTimer()
  },
  methods: {
    setTimer () {
      this.startDate = new Date('2000-12-15T22:20:00')
      setInterval(() => {
        this.timer1 = this.getNumber(new Date() - this.startDate)
      }, 1)
    },
    getNumber (val) {
      return (val / 1000 / 60 / 60 / 24 / 365).toFixed(9)
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.timers-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.timer-1 {
  font-size: 96px;
  width: 554px;
}
</style>
