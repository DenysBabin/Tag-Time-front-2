<template>
  <div id="app" class="app">
    <div class="navigation">
      <Header></Header>
    </div>

    <div class="pages">
      <router-view/>
    </div>

  </div>
</template>

<script>

import Header from '@/components/NavMenu.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style lang="scss">
body {
  margin: 0;
}

.app {
  display: flex;
  flex-direction: row;
}
</style>
