<template>
  <div class="main">
    <div class="todo">
      <div class="todo-add">
        <el-input placeholder="Please input" v-model="message"></el-input>
        <el-button type="success" @click="addTask()">Добавить задачу</el-button>
      </div>

      <el-table
        :data="tableData"
        empty-text="Нет данных"
        style="width: 100%">
        <el-table-column
          prop="message"
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
  </div>
</template>

<script>
import TodoService from '@/services/TodoService'

export default {
  name: 'ToDo',
  data () {
    return {
      message: '',
      tableData: []
    }
  },
  mounted () {
    // this.todolistLocalSt = JSON.parse(localStorage.getItem('todolist'))
    //
    // if (!this.todolistLocalSt) {
    //   this.todolistLocalSt = []
    // }
    this.getData()
  },
  methods: {
    async getData () {
      await TodoService.fetchTodos().then((response) => {
        this.tableData = response.data.todo
      })
    },
    async addTask () {
      await TodoService.addNewTodo({
        date: new Date(),
        message: this.message
      })

      this.message = ''
      this.getData()
    },

    async deleteItem (scope) {
      await TodoService.deleteTodo(scope.row._id)
      this.getData()
    },
    successTask (scope) {
      this.deleteItem(scope)

      this.$message({
        message: `Задача ${scope.row.name} выполнена!!!`,
        type: 'success'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  justify-content: center;
}

.todo {
  margin: 40px;
  width: 800px;
}

.todo-add {
  display: flex;
  margin: 20px;
}

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
