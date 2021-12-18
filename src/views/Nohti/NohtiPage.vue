<template>
  <div class="page">
    <div class="image">
      <div>
        <div class="items">
          <div class="item item-1" :style="{backgroundColor: color1 }">
          </div>

          <div class="item item-2" :style="{backgroundColor: color2 }">
          </div>

          <div class="item item-3" :style="{backgroundColor: color3 }">
          </div>

          <div class="item item-4" :style="{backgroundColor: color4 }">
          </div>

          <div class="item item-5" :style="{backgroundColor: color5 }">
          </div>
        </div>

        <img class="image-img" src="../Nohti/Noha.png" alt="">
      </div>

    </div>

    <div class="block">
      <span class="demonstration">Палец 1</span>
      <el-color-picker v-model="color1"></el-color-picker>
    </div>

    <div class="block">
      <span class="demonstration">Палец 2</span>
      <el-color-picker v-model="color2"></el-color-picker>
    </div>

    <div class="block">
      <span class="demonstration">Палец 2</span>
      <el-color-picker v-model="color3"></el-color-picker>
    </div>

    <div class="block">
      <span class="demonstration">Палец 2</span>
      <el-color-picker v-model="color4"></el-color-picker>
    </div>

    <div class="block">
      <span class="demonstration">Палец 2</span>
      <el-color-picker v-model="color5"></el-color-picker>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NohtiPage',
  data () {
    return {
      color1: '',
      color2: '',
      color3: '',
      color4: '',
      color5: ''
    }
  }
}
</script>

<style scoped>
.page {
  background-color: red;
  width: 100%;
  height: 100vh;
}

.image {
  position: relative;
}

.image-img {
  width: 90%;
  position: fixed;
}

.items {
  display: flex;
  flex-direction: row;
}

.item-1 {
  width: 35%;
  height: 100vh;
  position: fixed;
  background-color: orange;
}

.item-2 {
  width: 7%;
  height: 100vh;
  position: fixed;
  background-color: green;
  left: 35%;
}

.item-3 {
  width: 5%;
  height: 100vh;
  position: fixed;
  background-color: white;
  left: 42%;
}

.item-4 {
  width: 5%;
  height: 100vh;
  position: fixed;
  background-color: green;
  left: 47%;
}

.item-5 {
  width: 20%;
  height: 100vh;
  position: fixed;
  background-color: black;
  left: 52%;
}

</style>
