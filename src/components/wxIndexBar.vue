<template>
  <div ref="wrapper" class="scroll-wrapper">
    <ul>
      <li v-for="group in data" :key="group" class="list-group" ref="listGroup">
        <h2 class="list-group-title">{{ group.title }}</h2>
        <ul>
          <li
            @click="selectItem(item)"
            v-for="item in group.item.object"
            :key="item"
            class="list-group-item van-hairline--bottom"
          >
            <img class="avatar" :src="item.img" />
            <span class="name">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "IndexBar",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    // 在 DOM 渲染完毕后初始化 better-scroll
    this.$nextTick(() => {
      this.$api.friendList().then((res) => {
        console.log(res);
        this.initScroll();
        this.data = res.data;
        // this.message = res.data.chatmessage;
      });
    });
  },
  methods: {
    initScroll() {
      // better-scroll 初始化
      this.bs = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
      });
      console.log(this.bs);
      this.bs.on("scroll", () => {
        console.log("scrolling-");
      });
      this.bs.on("scrollEnd", () => {
        console.log("scrollingEnd");
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";
.scroll-wrapper {
  overflow: hidden;
  height: 100%;
  .list-group-title {
    padding: 2px 10px;
    background: @primary;
    color: #000;
  }
  .list-group-item {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    .avatar {
      margin-right: 12px;
      .widthHeight(42px, 42px);
      .borderRadius(5px);
    }
  }
}
</style>
