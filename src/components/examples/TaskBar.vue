<template>
  <div class="page-task">
    Страница Задач
    <el-progress :text-inside="true" :stroke-width="24" :percentage="10" status="success"></el-progress>
    <el-input placeholder="Please input" v-model="tasks"></el-input>
    <div v-for="( task, key ) in parseInt(tasks)" :key="key">
      <el-checkbox v-model="checked">Task {{ task }}</el-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskBar',
  data () {
    return {
      tasks: ''
    }
  }
}
</script>

<style scoped>

</style>
