<!--  -->
<template>
  <div class="main-content">
    <div class="main-top">
      <div class="img">
        <img src="@/assets/maincontent/vesel.png" alt="" />
        <div class="tag">
          <i
            style="font-size:8px;margin-right:5px"
            class="iconfont icon-listen"
          ></i
          >20
        </div>
      </div>
      <div class="content">
        <div class="title-desc">
          <div style="display:flex">
            <div style="font-size:26px;font-weight:550">我的最爱</div>
            <div style="margin-left:auto;font-size:14px">
              <span style="margin-right:10px">编辑</span>
              <span>投稿</span>
            </div>
          </div>
          <div>
            <div>
              <img :src="userInfo.head_img" alt="" /> {{ userInfo.account }}
            </div>
            <div>添加标签</div>
          </div>
        </div>
        <div class="title-tip">
          精心完善歌单信息有机会获得推荐，让更多用户看到你的趣味歌单
        </div>
        <div class="handle-button">
          <div>播放全部</div>
          <div>下载</div>
          <div>批量操作</div>
          <div>分享</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: this.$store.state.userInfo,
    };
  },
  props: [],
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
@import "../common/style/mixin";
.main-content {
  padding: 10px 0;
  .main-top {
    display: flex;
    .img {
      position: relative;
      margin-right: 16px;
      img {
        .borderRadius(5px);
        .widthHeight(110px, 110px);
      }
      .tag {
        position: absolute;
        bottom: 5px;
        right: 5px;
        font-size: 8px;
        min-width: 20px;
        padding: 0 5px;
        .borderRadius(10px);
        font-weight: lighter;
        background: #000;
        color: #fff;
      }
    }
    .content {
        flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 12px;
      .title-desc {
        > div:last-child {
          display: flex;

          margin-top: 5px;
          img {
            .widthHeight(20px, 20px);
            .borderRadius(5px);
            margin-right: 5px;
          }
          > div:first-child {
            margin-right: 20px;
          }
        }
      }
      .title-tip {
        color: #999;
        font-size: 10px;
        margin-top: -5px;
      }
      .handle-button {
        display: flex;
        div {
          margin-right: 10px;
          background: #fff;
          width: 80px;
          text-align: center;
          line-height: 24px;
          height: 24px;
          font-size: 10px;
          .borderRadius(10px);
        }
        > div:first-child {
          background: #1ecf9e;
          color: #fff;
        }
        > div:not(:first-child) {
          background: #eee;
          color: #000;
        }
      }
    }
  }
}
</style>
