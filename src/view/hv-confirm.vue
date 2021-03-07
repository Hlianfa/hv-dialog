<template>
  <div class="hv-confirm" :class="'hv-confirm-'+type" v-if="showDialog">
    <div class="hv-confirm-dialog">
      <div class="hv-confirm-dialog-content">
        <div v-if="type != ''">
          <i class="iconfont" :class="'icon-hv-confirm-'+type"/>
        </div>
        <div
          v-if="innerHtml"
          class="hv-confirm-dialog-content-text"
          v-html="content">
        </div>
        <div
          v-else
          class="hv-confirm-dialog-content-text">
          {{content}}
        </div>
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
      content: '',
      type: '', // success、warning、error
      innerHtml: false,
      confirmButtonText: '',
      cancelButtonText: '',
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
<style scoped>
.hv-confirm {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.hv-confirm-dialog {
  width: 77vw;
  border-radius: 3px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: .5rem;
  text-align: center;
}
.hv-confirm-dialog-content {
  width: 100%;
  padding: .3rem;
}
.hv-confirm-dialog-content .iconfont {
  font-size: 1.5rem;
}
.hv-confirm-dialog-content-text {
  width: 100%;
  color: #7d7e80;
  word-break: break-all;
}
.hv-confirm-dialog-btns {
  width: 100%;
  border-top: 1px solid #f1f3f4;
  display: flex;
  justify-content: space-between;
}
.hv-confirm-dialog-btns-btn {
  width: 50%;
  height: 1rem;
  line-height: 1rem;
  border-right: 1px solid #f1f3f4;
  box-sizing: border-box;
}
.hv-confirm-dialog-btns-btn:last-child {
  color: #1989fa;
  border-right: none;
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
