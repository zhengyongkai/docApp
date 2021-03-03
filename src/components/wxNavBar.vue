<template>
  <div class="nav-bar van-hairline--top wx-background-color">
    <ul class="nav-list">
      <router-link tag="li" class="nav-list-item active" to="home">
        <i class="icon iconfont icon-chat"></i>
        <span>微信</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="address">
        <i class="iconfont icon-tongxunlu"></i>
        <span>通讯录</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="find">
        <i class="iconfont icon-danyehuaban"></i>
        <span>发现</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="my">
        <i class="iconfont icon-wo"></i>
        <span>我</span>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="less" scoped >
    @import '../common/style/mixin';
    .nav-bar{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      // padding: 2px 0;
      z-index: 1000;
      background: #fff;
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
      .nav-list {
       
        width: 100%;
        .dj();
        flex-direction: row;
        padding: 0;
        .nav-list-item {
          display: flex;
          padding: 2px 0;
          flex: 1;
          flex-direction: column;
          text-align: center;
          color: #666;
          &.router-link-active {
            color:#05C160;
            background: rgba(5,193,96,0.1);
          }
          i {
            text-align: center;
            font-size: 20px;
          }
          span{
            font-size: 10px;
          }
          .van-icon-shopping-cart-o {
            margin: 0 auto;
            margin-bottom: 2px;
          }
        }
      }
    }
</style>
