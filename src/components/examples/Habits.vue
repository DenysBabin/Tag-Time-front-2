<template>
  <div>
    <div>
      Привычка бегать
    </div>

    <el-date-picker
      v-model="startData"
      type="date"
      placeholder="Дата старта">
    </el-date-picker>

    <el-input-number v-model="days" :min="1" :max="30"></el-input-number>

    <el-button @click="showHabitTable()" type="success">Показать таблицу</el-button>

    <div class="habit-days">
      <div class="habit-day" v-for="(day, key) in daysHabitsData" :key="key">
        <div class="calendar-day" :class="{'calendar-day-success': day.status === 'true', 'calendar-day-fail': day.status === 'false'}">
          <div class="buttons">
            <div class="buttons-events">
              <el-button @click="confirmHabit(day)" type="success" icon="el-icon-check" circle></el-button>
            </div>
            <div class="buttons-events">
              <el-button @click="rejectHabit(day)" type="danger" icon="el-icon-delete" circle></el-button>
            </div>
          </div>
          <div class="title-day">
            {{ day.date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Habits',
  data () {
    return {
      dataValue: new Date(),
      habitsData: {
      },
      days: 7,
      startData: '',
      data: '',
      daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      daysHabitsData: []
    }
  },
  methods: {
    confirmHabit (day) {
      day.status = 'true'
    },

    rejectHabit (day) {
      day.status = 'false'
      // this.data = this.moment()
      // console.log(this.moment(this.data).format('DD-MM-YYYY'))
      // console.log(this.daysOfWeek[this.moment(this.date).day()])
      // console.log(this.moment(this.data).add(1, 'd').format('DD-MM-YYYY'))
    },
    showHabitTable () {
      if (!this.startData) {
        this.$message({
          message: 'Вы не выбрали дату старта',
          type: 'error'
        })

        return
      }
      this.daysHabitsData = []

      for (let i = 0; i < this.days; i++) {
        const date = this.moment(this.startData).add(i, 'd').format('DD-MM-YYYY')
        console.log(date)
        this.$set(this.daysHabitsData, i, { date: date, status: 'none' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.habit-days {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.habit-day {
  border: 1px solid black;
  margin: 8px;
}

.calendar-day {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.title-day {
  display: flex;
  justify-content: center;
}

.calendar-day-success {
  background-color: greenyellow;
}

.calendar-day-fail {
  background-color: red;
}

.buttons-events {
  margin: auto;
  padding: 4px;
}

.nav {
  display: flex;
  flex-direction: row;
}

.item {
  padding: 8px 16px;
}
</style>
