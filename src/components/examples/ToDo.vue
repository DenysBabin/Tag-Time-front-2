<template>
  <div class="hello">
    <el-input placeholder="Please input" v-model="input"></el-input>
    <el-button type="success" @click="addTask()">Добавить задачу</el-button>

    <el-table
      :data="todolistLocalSt"
      empty-text="Нет данных"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Название"
        width="600">
      </el-table-column>
      <el-table-column
        label="Действия">
        <template slot-scope="scope">
          <div class="events">
            <el-button @click="deleteItem(scope)" type="danger" icon="el-icon-delete" circle></el-button>
            <el-button @click="successTask(scope)" type="success" icon="el-icon-check" circle></el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    msg: String
  },
  data () {
    return {
      input: '',
      message: '',
      todolistLocalSt: []

    }
  },
  mounted () {
    this.todolistLocalSt = JSON.parse(localStorage.getItem('todolist'))

    if (!this.todolistLocalSt) {
      this.todolistLocalSt = []
    }
  },
  methods: {
    addTask () {
      this.message = this.input
      this.todolistLocalSt.push({
        name: this.input
      })

      this.changeLocalSt()
      this.input = ''
    },

    deleteItem (scope) {
      this.todolistLocalSt.splice(scope.$index, 1)
      this.changeLocalSt()
    },

    changeLocalSt () {
      localStorage.setItem('todolist', JSON.stringify(this.todolistLocalSt))
      this.todolistLocalSt = JSON.parse(localStorage.getItem('todolist'))
    },

    successTask (scope) {
      // Тут код подтверждение того, что задача выполнена
      this.$message({
        message: `Задача ${scope.row.name} выполнена!!!`,
        type: 'success'
      })

      this.todolistLocalSt.splice(scope.$index, 1)
      this.changeLocalSt()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.events {
  display: flex;
  flex-direction: row;
}
</style>
