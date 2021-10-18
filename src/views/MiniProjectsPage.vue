<template>
  <div>
    <div class="navigation">
      <el-button type="info" @click="changeToToDo()">Тудушка</el-button>
      <el-button type="info" @click="changeToHabits()">Привычки</el-button>
    </div>
    <div v-if="navigation === 'todo'">
      <ToDo></ToDo>
    </div>

    <div v-if="navigation === 'habits'">
      <Habits></Habits>
    </div>
  </div>

</template>

<script>
import ToDo from '../components/examples/ToDo.vue'
import Habits from '../components/examples/Habits.vue'

export default {
  name: 'MiniProjectsPage',
  components: {
    ToDo,
    Habits
  },
  data () {
    return {
      navigation: 'todo'
    }
  },
  methods: {
    changeToToDo () {
      this.navigation = 'todo'
    },
    changeToHabits () {
      this.navigation = 'habits'
    }
  }
}
</script>

<style scoped>
.navigation {
  padding: 20px;
}
</style>
