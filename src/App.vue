<template>
  <div>
    <router-view/>
    <MyTabBar/>
  </div>
</template>

<script>
import myTabBar from '@/components/MyTabBar.vue'
export default {
  components: {
    MyTabBar: myTabBar
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
