<template>
  <div class="popup">
    <van-search
      v-model="popSearchValue"
      show-action
      :place-holder="popPlaceholder"
      @search="onSearch"
      @cancel="onCancel"
      @update:model-value="update"
      shape="round"
    />

    <!-- 父传子组件 -->
    <HotKeyword v-if="(blockShow===1)" :hotKeywordList1="hotKeywordList" @tagClick="tagClick"/>
    <product v-if="(blockShow==2)" :goodsList="goodsList"/>
  </div>
</template>

<script>
import HotKeyword from '@/components/HotKeyword.vue'
import Product from '@/components/ProductList.vue'
export default {
  name: 'MyPopup',
  components: {
    HotKeyword,
    Product
  },
  data () {
    return {
      popSearchValue: '',
      popPlaceholder: '请输入搜索关键字',
      // 热门搜索
      hotKeywordList: [],
      // 1热门搜索 2产品区块
      blockShow: 1,
      // 定义搜索的参数
      orderVal: 'desc',
      categoryId: 0,
      sort: 'id',
      page: 1,
      size: 20,
      // 产品列表
      goodsList: []
    }
  },
  created () {
    this.axios.get('/search/index').then(resp => {
      console.log(resp)
      const { hotKeywordList } = resp.data.data
      this.hotKeywordList = hotKeywordList
    })
  },
  methods: {
    update () {},
    onSearch () {
      this.axios.get('/goods/list', {
        params: {
          keyword: this.popSearchValue,
          order: this.orderVal,
          categoryId: this.categoryId,
          sort: this.sort,
          page: this.page,
          size: this.size
        }
      }).then(resp => {
        console.log(resp)
        if (resp.data.errno === 0) {
          this.blockShow = 2
          const { goodsList } = resp.data.data
          this.goodsList = goodsList
        }
      })
    },
    onCancel () {},
    tagClick (val) {
      console.log(val)
      this.popSearchValue = val
      this.onSearch()
    }
  }
}
</script>

<style scoped>
.popup{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 5;
  background-color: #eee;
}
</style>
