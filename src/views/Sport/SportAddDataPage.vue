<template>
  <div>
    <div>
      <input type="text" v-model="sport.date">
    </div>
    <div>
      <input type="text" v-model="sport.pullUps">
    </div>
    <div>
      <input type="text" v-model="sport.pushUps">
    </div>
    <div>
      <input type="text" v-model="sport.squats">
    </div>
    <div>
      <input type="text" v-model="sport.run">
    </div>
    <div>
      <input type="text" v-model="sport.press">
    </div>

    <button @click="addSport">Add</button>
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
        run: '',
        press: ''
      }
    }
  },
  methods: {
    async addSport () {
      await SportService.addNewPost({
        date: this.sport.date,
        pullUps: this.sport.pullUps,
        pushUps: this.sport.pushUps,
        squats: this.sport.squats,
        run: this.sport.run,
        press: this.sport.press
      })
      // this.$router.push({ name: 'Posts' })
    },
    goBack () {
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
