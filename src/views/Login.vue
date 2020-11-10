<template>
  <div class="login-wrapper">
    <div class="login">
      <div class="login-header">
        <ul class="nav">
          <li class="nav-item active">
            <router-link :to="{name: 'Login'}">登录</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Register'}">注册</router-link>
          </li>
        </ul>
      </div>
      <form class="layui-form login-content">
        <div v-show="type === 'username'" class="layui-form-item">
          <label class="layui-form-label label-center">用户名</label>
          <ValidationProvider name="username" rules="required" v-slot="{ errors }">
            <div class="layui-input-inline">
              <input
                type="text"
                required
                v-model="username"
                lay-verify="required"
                placeholder="请输入用户名"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="layui-form-mid layui-word-aux">
              <span class="error_desc">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>
        <div v-show="type === 'username'" class="layui-form-item">
          <label class="layui-form-label label-center">密码</label>
          <ValidationProvider name="password" rules="required|password" v-slot="{ errors }">
            <div class="layui-input-inline">
              <input
                type="password"
                required
                v-model="password"
                lay-verify="required"
                placeholder="请输入密码"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="layui-form-mid layui-word-aux">
              <span class="error_desc">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>
        <div v-show="type === 'email'" class="layui-form-item">
          <label class="layui-form-label label-center">邮箱</label>
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
            <div class="layui-input-inline">
              <input
                type="text"
                required
                v-model="email"
                lay-verify="required"
                placeholder="请输入邮箱"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="layui-form-mid layui-word-aux">
              <span class="error_desc">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>
        <div v-show="type === 'email'" class="layui-form-item">
          <label class="layui-form-label label-center">验证码</label>
          <ValidationProvider name="code" rules="required" v-slot="{ errors }">
            <div class="layui-input-inline">
              <input
                type="text"
                required
                v-model="code"
                lay-verify="required"
                placeholder="请输入验证码"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="layui-form-mid layui-word-aux">
              <span class="error_desc">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>
        <div class="layui-form-item">
          <div class="layui-input-block operation">
            <button class="layui-btn" lay-submit lay-filter="formDemo">
              登录
            </button>
            <button type="reset" class="layui-btn layui-btn-primary">
              忘记密码？
            </button>
          </div>
        </div>
        <div class="login-type">
          <span
            v-show="type === 'username'"
            class="type"
            @click="setLoginType('email')">
            使用其他方式登录
          </span>
          <span
            v-show="type === 'email'"
            class="type"
            @click="setLoginType('username')">
            帐号密码登录
          </span>
        </div>
      </form>
    </div>
    <button @click="handleShowAlert">get login</button>
  </div>
</template>

<script>
import auth from '@/model/auth'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      email: '',
      code: '',
      type: 'username'
    }
  },
  methods: {
    handleShowAlert () {
      this.$confirm({
        title: '确认框',
        message: '是否确认输入',
        success: () => {
          console.log('点击了确认')
        },
        fail: () => {
          console.log('点击了取消')
        }
      })
    },
    // get login
    postLogin () {
      const requestData = {
        email: this.email,
        password: this.password,
        code: this.code,
        sid: this.sid
      }
      auth.postLogin(requestData).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    setLoginType (type) {
      this.type = type
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
  .login-wrapper{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .login{
      width: 92%;
      background: #fff;
      padding: 10px;
      .login-header{
        border-bottom: 1px solid #e6e5e5;
        .nav{
          font-size: 14px;
          margin-left: 26px;
          .nav-item{
            display: inline-block;
            width: 70px;
            padding: 2px 0;
            text-align: center;
            letter-spacing: 3px;
            &.active{
              border-bottom: 2px solid #669966;
            }
          }
        }
      }
      .login-content{
        margin-top: 15px;
        .label-center{
          text-align: center;
        }
        .error_desc{
          color: red;
        }
        .operation{
          margin-left: 30px;
        }
        .svg-data{
          position: relative;
          top: -10px;
          cursor: pointer;
        }
        /* 切换登录方式 */
        .login-type{
          margin-left: 30px;
          margin-top: -5px;
          span{
            cursor: pointer;
            color: #007fff;
          }
        }
      }
    }
  }
</style>
