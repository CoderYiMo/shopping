<template>
  <div class="home">
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="请输入商品关键词" shape="round" disabled @click="goToPopup"/>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#4D4D4D">
      <van-swipe-item v-for="item in swipeList" :key="item.id">
        <van-image :src="item.image_url"/>
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid :column-num="5">
      <van-grid-item v-for="item in gridItemList" :key="item.id">
        <van-image :src="item.icon_url"/>
        <div class="text1">{{item.name}}</div>
      </van-grid-item>
    </van-grid>
    <!-- 分隔栏 -->
    <div class="separator-bar"></div>
    <!-- 品牌制造商直供 -->
    <div>
      <!-- 文字部分 -->
      <div class="text2">品牌制造商直供</div>
      <div>
        <!-- 图片部分 -->
        <van-image v-for="item in imageList" :key="item.id" width="100" height="100" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
      </div>
    </div>
     <!-- 分隔栏 -->
    <div class="separator-bar"></div>
    <!-- 搜索 -->
    <router-view v-slot="{ Component }" v-if="$route.path === '/home/popup'">
      <transition name="van-slide-right">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      value: '',
      gridItemList: [
      ],
      imageList: [
        {},
        {},
        {},
        {}
      ],
      swipeList: [
      ]
    }
  },
  methods: {
    async getSwipeList () {
      const res = await this.axios.get('/index/index')
      // console.log(res)
      const { banner } = res.data.data
      // console.log(banner)
      this.swipeList = banner
    },
    async getGridList () {
      const res = await this.axios.get('/index/index')
      const { channel } = res.data.data
      // console.log(channel)
      this.gridItemList = channel
    },
    goToPopup () {
      this.$router.push('/home/popup')
    }
  },
  created () {
    this.getSwipeList()
    this.getGridList()
  }
}
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    color: rgb(103, 97, 97);
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .van-swipe {
    height: 200px;
  }
  .separator-bar{
    width: 100%;
    height: 20px;
    background-color: #D5D6D2;
  }
  .text1{
    font-size: 12px;
    color: #c6c682;
    margin-top: 7px;
  }
  .text2{
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    line-height: 30px;
  }
</style>
