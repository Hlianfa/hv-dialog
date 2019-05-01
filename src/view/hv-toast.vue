<template>
  <div class="hv-toast" :class="'hv-toast-'+type" :style="positionSetting">
    <i class="iconfont" v-if="type != ''" :class="'icon-hv-dialog-'+type"/>
    <span class="text" v-html="content">{{content}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
      type: "", // infor、success、warning、error
      position: ""
    };
  },
  computed: {
    positionSetting() {
      switch (this.position) {
        case "top":
          return `top: 18vh`;
        case "center":
          return `top: 45vh`;
        case "bottom":
          return `bottom: 18vh`;
        default:
          return `top: 18vh`;
          break;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.hv-toast {
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  border-radius: 8px;
  padding: 6.6px 12.5px;
  font-size: 0.9rem;
  box-shadow: 0 0 2.5px #ddd;
  z-index: 99999999;
  transition: all 0.8s;
  opacity: 1;
  color: #fff;
  background: rgba(0, 0, 0, .6);
  .iconfont {
    margin-right: 3px;
    font-size: .9rem;
  }
}
.hv-toast-infor {
  background: rgba(244, 244, 245, 1);
  .iconfont,
  .text {
    color: #909399 !important;
  }
}
.hv-toast-success {
  background: rgba(240, 249, 235, 1);
  .iconfont,
  .text {
    color: #67c23a !important;
  }
}
.hv-toast-warning {
  background: rgba(253, 246, 236, 1);
  .iconfont,
  .text {
    color: #e6a23c !important;
  }
}
.hv-toast-error {
  background: rgba(254, 240, 240, 1);
  .iconfont,
  .text {
    color: #f56c6c !important;
  }
}
</style>
