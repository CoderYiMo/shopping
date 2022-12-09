<template>
  <div>
    <!-- 用户登陆条 -->
    <van-row>
      <van-col span="6">
        <van-image round :src="userImg" class="user-image"/>
      </van-col>
      <van-col span="16" class="user-name" @click="showDialog = true">{{nickName}}</van-col>
      <van-col span="2" class="user-arrow"><van-icon name="arrow" /></van-col>
    </van-row>
    <!-- 宫格 -->
    <van-grid :column-num="3">
      <van-grid-item icon="label-o" text="我的订单" />
      <van-grid-item icon="bill-o" text="优惠券" />
      <van-grid-item icon="gift-o" text="礼品卡" />
      <van-grid-item icon="star-o" text="我的收藏" />
      <van-grid-item icon="location-o" text="我的足迹" />
      <van-grid-item icon="contact" text="会员福利" />
      <van-grid-item icon="aim" text="地址管理" />
      <van-grid-item icon="warn-o" text="账号安全" />
      <van-grid-item icon="service-o" text="联系客服" />
      <van-grid-item icon="question-o" text="帮助中心" />
      <van-grid-item icon="smile-comment-o" text="意见反馈" />
    </van-grid>
    <!--  登录弹窗-->
    <van-dialog v-model:show="showDialog" title=" " :showConfirmButton="false" :closeOnClickOverlay="true" :beforeClose="onBeforeClose">
      <van-form @submit="login" class="form-style" ref="loginForm">
        <van-cell-group inset>
          <van-field v-model="username" name="username" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
          <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]"/>
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </van-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nickName: '请登录',
      userImg: require('@/assets/img/my/user.png'),
      showDialog: false,
      username: '',
      password: ''
    }
  },
  created () {
    // console.log('触发了created函数')
    this.checkLoginStatus()
  },
  methods: {
    async login (values) {
      // console.log(values)
      const res = await this.axios.post('/auth/loginByWeb', {
        username: this.username,
        pwd: this.password
      })
      // console.log(res)
      if (res.data.errno === 0) {
        const token = res.data.data.token
        const userInfo = res.data.data.userInfo
        const userInfoStr = JSON.stringify(userInfo)
        localStorage.setItem('token', token)
        localStorage.setItem('userInfo', userInfoStr)
        this.nickName = userInfo.nickname
        this.userImg = userInfo.avatar

        // this.onBeforeClose()

        this.onBeforeClose()
        this.showDialog = false
      }
    },
    onBeforeClose () {
      this.$refs.loginForm.resetValidation()
      this.username = ''
      this.password = ''
      return true
    },
    checkLoginStatus () {
      const token = localStorage.getItem('token')
      // console.log(token)
      if (token != null) {
        const userInfo = localStorage.getItem('userInfo')
        const userInfoObj = JSON.parse(userInfo)
        this.nickName = userInfoObj.nickname
        this.userImg = userInfoObj.avatar
      }
    }
  }
}
</script>

<style scoped lang="less">
.van-row{
  width: 100%;
  height: 20%;
  background-color: #333;
  color: white;
  font-size: 1.8rem;
  .user-image{
    height:60%;
    padding-top: 20%;
  }
  .user-name{
    font-size: 30px;
    padding-top: 9%;
    display: flex;
  }
  .user-arrow{
    padding-top: 10%;
    padding-right:1%;
  }
}
.form-style{
  // background-color: #333;
}
</style>
