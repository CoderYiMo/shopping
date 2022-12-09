<template>
   <!-- tabbar底部栏 -->
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="special" icon="orders-o" to="/special">专题</van-tabbar-item>
      <van-tabbar-item name="category" icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item name="cart" icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item name="my" icon="user-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
  name: 'my-tabbar',
  data () {
    return {
      active: 'home'
    }
  },
  methods: {
    // tabbar点击时监测
    onChange (name) {
      // console.log(name)
      this.active = name
    }
  }
}
</script>

<style>

</style>
