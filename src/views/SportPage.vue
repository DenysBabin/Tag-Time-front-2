<template>
  <div class="content">
    <div class="nav">
      <div class="nav-item">
        <el-link type="primary" @click="addSpartData()">Добавить данные</el-link>
      </div>
      <div class="nav-item">
        <el-link type="primary" @click="showSportData()">Показать статистику</el-link>
      </div>
    </div>

    <div v-if="switcher === 0">
      <SportAddDataPage></SportAddDataPage>
    </div>

    <div v-if="switcher === 1">
      <SportShowPage></SportShowPage>
    </div>
  </div>
</template>

<script>
import SportAddDataPage from '@/components/SportAddDataPage'
import SportShowPage from '@/components/SportShowPage'

export default {
  name: 'SportPage',
  components: {
    SportAddDataPage,
    SportShowPage
  },
  data () {
    return {
      switcher: 0
    }
  },
  methods: {
    addSpartData () {
      this.switcher = 0
    },
    showSportData () {
      this.switcher = 1
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.nav-item {
  padding: 8px 12px;
}
</style>
