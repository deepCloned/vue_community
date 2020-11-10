<template>
  <div
    v-if="isShow"
    class="alert"
    @click="handleClose">
    <div class="content-wrap">
      <div class="title">
        <h4 class="title-info">{{title}}</h4>
        <span @click="handleClose" class="iconfont cancel-icon">x</span>
      </div>
      <p class="desc">{{message}}</p>
      <div class="confirm">
        <button class="cancel" @click="handleCancel">取消</button>
        <button @click="handleConfirm">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  props: {
    title: {
      type: String,
      default: '这是一段标题'
    },
    message: {
      type: String,
      default: '这是一部分内容'
    },
    isShow: {
      type: Boolean,
      default: false
    },
    success: {
      type: Function,
      default () {
        return () => {}
      }
    },
    fail: {
      type: Function,
      default () {
        return () => {}
      }
    }
  },
  methods: {
    handleClose () {
      this.isShow = false
    },
    handleConfirm () {
      this.handleClose()
      this.success()
    },
    handleCancel () {
      this.handleClose()
      this.fail()
    }
  }
}
</script>

<style lang="scss" scoped>
.alert{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .35);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  .content-wrap{
    background-color: #fff;
    width: 420px;
    border-radius: 4px;
    padding: 10px 15px;
    .title{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title-info{
        font-size: 18px;
        color: #303133;
      }
      .cancel-icon{
        font-size: 14px;
        color: #666666;
        cursor: pointer;
      }
    }
    .desc{
      color: #666666;
      padding: 10px 0;
    }
    .confirm{
      display: flex;
      button{
        padding: 5px 12px;
        cursor: pointer;
        color: #fff;
        background: #409eff;
        font-size: 12px;
        border-radius: 3px;
        border: none;
        &.cancel{
          background: #999;
          margin-left: auto;
        }
      }
    }
  }
}
</style>
