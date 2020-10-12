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
        <div class="layui-form-item">
          <label class="layui-form-label label-center">用户名</label>
          <ValidationProvider rules="required|email" v-slot="{ errors }">
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
        <div class="layui-form-item">
          <label class="layui-form-label label-center">密码</label>
          <ValidationProvider rules="password" v-slot="{ errors }">
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
        <div class="layui-form-item">
          <label class="layui-form-label label-center">验证码</label>
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
          <div class="layui-form-mid layui-word-aux"></div>
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
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      code: ''
    }
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
      }
    }
  }
</style>
