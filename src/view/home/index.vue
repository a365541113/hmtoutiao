<template>
  <el-container class="home-index">
    <el-aside class="home-left" width="200px">
      <div class="logo"></div>
      <el-radio-group style="margin-bottom: 20px;"></el-radio-group>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-right:none"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-line-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="home-header">
        <div class="header-left">
          <div class="el-icon-s-fold" style="margin-right:20px"></div>
          <span>江苏传智播客教育有限公司</span>
        </div>
        <div class="header-right">
          <img :src="avatar" width="30px" height="30px" style="vertical-align:middle" />
          <el-dropdown>
            <span class="el-dropdown-link">
              {{name}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="setting()">
                <i class="el-icon-setting"></i>个人设置
              </el-dropdown-item>
              <el-dropdown-item @click.native="exit()">
                <i class="el-icon-switch-button"></i>退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <!-- 引入的 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      collapse: false,
      name: '',
      avatar: ''
    }
  },
  created () {
    const user = JSON.parse(window.sessionStorage.getItem('hmtoutiao'))
    this.name = user.name
    this.avatar = user.photo
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    scroll () {
      this.collapse = !this.collapse
    },
    setting () {
      this.$router.push({ path: '/setting' })
    },
    exit () {
      window.sessionStorage.removeItem('hmtoutiao')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped lang='less'>
.home-index {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  //   background-color: pink;
  .home-left {
    background-color: #002033;
    .logo {
      width: 100%;
      height: 60px;
      background: url(../../assets/images/logo_admin.png) no-repeat center
        #002040;
    }
  }
  .home-header {
    width: 100%;
    height: 60px;
    // background-color: pink;
    border-bottom: 1px solid #ccc;
    .header-left {
      float: left;
      line-height: 60px;
    }
    .header-right {
      line-height: 60px;
      float: right;
      font-weight: 900;
      .el-dropdown-link {
        margin-left: 10px;
      }
    }
  }
}
</style>
