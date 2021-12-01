<template>
  <div>
    <div class="block">
      <el-date-picker
        v-model="sport.date"
        type="date"
        placeholder="Выберите дату">
      </el-date-picker>
    </div>
    <div class="block">
      <el-input placeholder="Подтягивания" v-model="sport.pullUps"></el-input>
    </div>
    <div class="block">
      <el-input placeholder="Приседания" v-model="sport.squats"></el-input>
    </div>
    <div class="block">
      <el-input placeholder="Брусья" v-model="sport.bars"></el-input>
    </div>
    <div class="block">
      <el-input placeholder="Отжимания" v-model="sport.pushUps"></el-input>
    </div>
    <div class="block">
      <el-input placeholder="Бег" v-model="sport.run"></el-input>
    </div>

    <el-button class="block" type="success" @click="addSport">Добавить</el-button>
  </div>
</template>

<script>
import SportService from '@/services/SportService'
export default {
  name: 'NewPostPage',
  data () {
    return {
      sport: {
        date: '',
        pullUps: '',
        pushUps: '',
        squats: '',
        bars: '',
        run: ''
      }
    }
  },
  methods: {
    async addSport () {
      await SportService.addNewPost({
        date: this.sport.date,
        pullUps: this.sport.pullUps ? this.sport.pullUps : 0,
        pushUps: this.sport.pushUps ? this.sport.pushUps : 0,
        squats: this.sport.squats ? this.sport.squats : 0,
        bars: this.sport.bars ? this.sport.bars : 0,
        run: this.sport.run ? this.sport.run : 0
      })

      this.resetData()
      // this.$router.push({ name: 'Posts' })
    },
    goBack () {
      this.$router.push({ name: 'Posts' })
    },
    resetData () {
      this.sport.date = ''
      this.sport.pullUps = ''
      this.sport.pushUps = ''
      this.sport.squats = ''
      this.sport.bars = ''
      this.sport.run = ''
    }
  }
}
</script>

<style scoped>
.block {
  width: 250px;
  margin: 20px;
}
</style>
