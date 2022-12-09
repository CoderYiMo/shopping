<template>
  <div>
    <ul>
      <li v-for="item in goodsList" :key="item.id">
        <img :src="item.list_pic_url" alt=""/>
        <div>{{item.name}}</div>
        <div class="price">{{item.retail_price}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['goodsList'],
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
ul{
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #eee;

  li{
    width: 48%;
    margin-bottom: 1rem;
    background-color: #fff;
    text-align: center;
    line-height: 2.4rem;

    img{
      width: 100%;
    }
    .prece{
      color:red;
    }
  }
}
</style>
