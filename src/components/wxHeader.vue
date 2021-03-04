<template>
  <div class="wx-header van-hairline--bottom wx-background-color">
      <i class="iconfont icon-back1"  v-if="isback"></i>
      <i v-else>&nbsp;&nbsp;&nbsp;&nbsp;</i>
      <div class="wx-header-content">{{content}}</div>
      <i :class="'iconfont '+rightIcon" v-if="rightIcon!=''"></i>
      <div v-else>&nbsp;&nbsp;</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
      content:{
          type: String,
          default: ''
      },
      isback:{
          type: Boolean,
          default: false
      },
      rightIcon:{
          type: String,
          default: ''
      }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
@import "../common/style/mixin";
.wx-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  .dj();
  .widthHeight(100%, 44px);
  line-height: 44px;
  padding: 0 10px;
  .boxSizing();
  color: #252525;
  .wx-header-content {
      font-weight: lighter;
    font-size: 14px;
  }
}
.block {
  height: 44px;
}
</style>
