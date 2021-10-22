<template>
  <div>
    <div class="navigation">
      <el-button type="info" @click="changeToToDo()">Тудушка</el-button>
      <el-button type="info" @click="changeToHabits()">Привычки</el-button>
      <el-button type="info" @click="changeToTasks()">Задачи</el-button>
      <el-button type="info" @click="changeToPomodoro()">Помодоро</el-button>
      <el-button type="info" @click="changeToTimer()">Таймеры</el-button>
      <el-button type="info" @click="changeToTimerNewPage()">Таймеры (новая страница)</el-button>
    </div>
    <div v-if="navigation === 'todo'">
      <ToDo></ToDo>
    </div>

    <div v-if="navigation === 'habits'">
      <Habits></Habits>
    </div>

    <div v-if="navigation === 'timer'">
      <Timer></Timer>
    </div>

    <div v-if="navigation === 'task'">
      <TaskBar></TaskBar>
    </div>

    <div v-if="navigation === 'pomodoro'">
      <Pomodoro></Pomodoro>
    </div>
  </div>

</template>

<script>
import ToDo from '../components/examples/ToDo.vue'
import Habits from '../components/examples/Habits.vue'
import Timer from '../components/examples/Timer.vue'
import TaskBar from '../components/examples/TaskBar.vue'
import Pomodoro from '../components/examples/Pomodoro.vue'

export default {
  name: 'MiniProjectsPage',
  components: {
    ToDo,
    Habits,
    Timer,
    TaskBar,
    Pomodoro
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
    },
    changeToTimer () {
      this.navigation = 'timer'
    },
    changeToTimerNewPage () {
      this.$router.push('/timers')
    },
    changeToTasks () {
      this.navigation = 'task'
    },
    changeToPomodoro () {
      this.navigation = 'pomodoro'
    }
  }
}
</script>

<style scoped>
.navigation {
  padding: 20px;
}
</style>
