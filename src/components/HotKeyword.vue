<template>
  <div>
    <div class="hot">
      <div class="top">
        <h4>热门搜索</h4>
      </div>
      <div class="down">
        <van-tag v-for="(item,index) in hotKeywordList1" :key="index" plan :type="(item.is_hot === 0 ? 'default' : 'danger')" @click="tagClick">
          {{item.keyword}}
        </van-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotKeyword',
  props: ['hotKeywordList1'],
  data () {
    return {

    }
  },
  methods: {
    tagClick (val) {
      console.log(val.srcElement.innerText)
      this.$emit('tagClick', val.srcElement.innerText)
    }
  }
}
</script>

<style scoped lang="less">
.hot{
  padding: 0 2%;
  background-color: #fff;
  margin-bottom: 2rem;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    h4{
      font-weight: bold;
    }
  }
  .down{
    .van-tag{
      font-size: 1.4rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
      padding: 0.3rem;
    }
  }
}

</style>
