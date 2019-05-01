<template>
  <div class="hv-confirm" :class="'hv-confirm-'+type" v-if="showDialog">
    <div class="hv-confirm-dialog">
      <div class="hv-confirm-dialog-content">
        <div v-if="type != ''">
          <i class="iconfont" :class="'icon-hv-confirm-'+type"/>
        </div>
        <div class="hv-confirm-dialog-content-text">{{content}}</div>
      </div>
      <div class="hv-confirm-dialog-btns">
        <div class="hv-confirm-dialog-btns-btn" @click="cancelHandler">{{cancelButtonText}}</div>
        <div class="hv-confirm-dialog-btns-btn" @click="confirmHandler">{{confirmButtonText}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDialog: true,
      content: "",
      type: "",// success、warning、error
      confirmButtonText: "",
      cancelButtonText: "",
      confirm: null,
      cancel: null
    };
  },
  methods: {
    cancelHandler() {
      this.showDialog = false;
      this.cancel && this.cancel();
    },
    confirmHandler() {
      this.showDialog = false;
      this.confirm && this.confirm();
    }
  }
};
</script>
<style lang="less" scoped>
.hv-confirm {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  &-dialog {
    width: 77vw;
    border-radius: 8px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 1rem;
    text-align: center;
    &-content {
      width: 100%;
      padding: 20px;
      .iconfont {
        font-size: 2.5rem;
      }
      &-text {
        width: 100%;
        color: #7d7e80;
      }
    }
    &-btns {
      width: 100%;
      border-top: 1px solid #f1f3f4;
      display: flex;
      justify-content: space-between;
      &-btn {
        width: 50%;
        height: 45px;
        line-height: 45px;
        border-right: 1px solid #f1f3f4;
        box-sizing: border-box;
      }
      &-btn:last-child {
        color: #1989fa;
        border-right: none;
      }
    }
  }
}
.hv-confirm-success {
  color: #67c23a;
}
.hv-confirm-warning {
  color: #ffa500;
}
.hv-confirm-error {
  color: #f56c6c;
}
</style>
