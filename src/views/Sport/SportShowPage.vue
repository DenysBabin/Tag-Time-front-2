<template>
  <div>
    Страница со спортом
    Тут будет ссылка на добавление и также много графиков
  </div>
</template>

<script>
import SportService from '@/services/SportService'
export default {
  name: 'SportShowPage',
  data () {
    return {
      data: [],
      date: [],
      pullUps: [],
      pushUps: [],
      squats: [],
      bars: [],
      run: [],
      press: []
    }
  },
  mounted () {
    // this.getAllData()
  },
  methods: {
    getAllData () {
      this.data = SportService.fetchPosts().data
      this.data.forEach((item) => {
        this.date.push(item.date)
        this.pullUps.push(item.pullUps)
        this.pushUps.push(item.pushUps)
        this.squats.push(item.squats)
        this.bars.push(item.bars)
        this.run.push(item.run)
        this.press.push(item.press)
      })
    }
  }
}
</script>

<style scoped>

</style>
