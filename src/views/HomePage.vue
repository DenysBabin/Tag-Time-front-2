<template>
  <div class="main-block">
    <div class="title">
      Добро пожаловать на сайт DenBa
    </div>
    <div class="content">
      <div class="card my-sport" @click="goToMySport()">
        <span>Мой</span>
        <span>Спорт</span>
      </div>

      <div class="card my-sport" @click="goToToDoApp()">
        <span>ToDo</span>
        <span>App</span>
      </div>

      <div class="card my-sport" @click="goToToDoApp()">
        <span>ToDo</span>
        <span>App</span>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  methods: {
    goToMySport () {
      this.$router.push({ name: 'Sport' })
    },
    goToToDoApp () {
      this.$router.push({ name: 'TodoApp' })
    }
  }
}
</script>
<style scoped>
.main-block {
  margin: 0 80px;
}

.title {
  font-size: 44px;
  display: flex;
  justify-content: center;
  padding: 40px;
}

.content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.card {
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(114,114,217,0.7819502801120448) 32%, rgba(0,212,255,1) 100%);
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  border-radius: 36px;
  margin: 20px;
}
</style>
