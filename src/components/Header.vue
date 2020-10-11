<template>
  <div class="header">
    <div class="layui-row">
      <div class="layui-col-xs12 layui-col-sm6 layui-col-md6">
        <dl class="nav-left">
          <dt>首页</dt>
          <dd>
            <span class="iconfont icon-common">&#xe70f;</span>
            <span class="nav-info">交流</span>
          </dd>
          <dd>
            <span class="iconfont icon-common">&#xe652;</span>
            <span class="nav-info">案例</span>
          </dd>
          <dd>
            <span class="iconfont icon-common">&#xe674;</span>
            <span class="nav-info">框架</span>
          </dd>
        </dl>
      </div>
      <div class="layui-col-xs12 layui-col-sm6 layui-col-md6">
        <div class="nav-right">
          <div class="login">
            <span class="iconfont icon-common">&#xe611;</span>
            <span class="nav-info">登录</span>
          </div>
          <div class="register">
            <span class="nav-info">注册</span>
            <span class="iconfont icon-common">&#xe6ca;</span>
            <span class="iconfont icon-common weibo">&#xe635;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  padding: 0px 30px;
  line-height: 60px;
  background-color: #24262f;
  color: #efefef;
  .nav-left,
  .nav-right {
    display: flex;
    align-items: center;
    font-size: 14px;
    .icon-common {
      font-size: 22px;
      color: #efefef;
    }
  }
  .nav-left {
    dt {
      margin-right: 40px;
      cursor: pointer;
    }
    dd {
      cursor: pointer;
      .nav-info {
        margin: 0px 20px 0px 10px;
      }
    }
  }
  .nav-right {
    justify-content: flex-end;
    div{
      cursor: pointer;
    }
    .nav-info {
      margin: 0px 15px;
    }
    .register {
      .weibo {
        margin-left: 15px;
      }
    }
  }
}
</style>
