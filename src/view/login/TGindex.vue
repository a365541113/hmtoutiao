<template>
    <div class="login-container" >
        <el-card class="login_box">
      <img src="../../assets/images/logo_index.png" alt="">

      <!-- <el-form status-icon :model="loginform" :rules="rules" ref="loginform"> -->
      <el-form ref="loginForm" status-icon :model="loginForm" :rules="loginRules">
        <el-form-item  prop="mobile">
          <el-input v-model="loginform.mobile" placeholder="请输入手机号" ></el-input>
        </el-form-item>

        <el-form-item  prop ="code">
          <el-input v-model="loginform.code" placeholder="请输入验证码" style="width:280px"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked" ></el-checkbox>
          我已阅读并同意 <el-link type="primary">用户协议</el-link> 和 <el-link type="primary">隐私条款</el-link>
        </el-form-item>
        <el-form-item>
          <el-button  @click="login()" style="width:100%" type="primary">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    </div>
</template>

<script>
export default {
  data () {
    var checkmobile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }

    return {
      loginform: {
        mobile: '13911111111',
        code: '246810'
      },

      checked: true,
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkmobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '必须是6个字符', trigger: 'blur' }
        ]
      }
    }
  },
  login () {
    this.$refs.loginform.validate((valid) => {
      if (valid) {
        // 这就是成功了
        this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginform)
          .then((res) => {
            const data = res.data
            console.log(data)
            this.$router.push('/')
          })
          .catch(() => {
            this.$message.error('密码或手机号错误')
          })
      }
    })
  }
}

</script>

<style scoped lang = 'less'>
    .login-container{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: url(../../assets/images/login_bg.jpg) no-repeat center/cover;
        .login_box{
        width: 450px;
        height: 350px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        img{
          display: block;
          width: 200px;
          margin: 10px auto 30px ;
    }
    }
    }

</style>
