<!--  -->
<template>
  <div>
    <wx-header :content="'通讯录'" :rightIcon="'icon-add'"></wx-header>
    <div class="wx-chat-content">
      <div class="wx-chat-content" ref="wrapper">
        <div>
          <div>
            <div class="wx-chat-search wx-background-color">
              <div class="wx-search-content" contenteditable="true">
                <div v-if="showIcon">
                  <i class="iconfont icon-search "></i>搜索
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul>
              <li
                v-for="(group, key) in data"
                :key="group"
                class="list-group"
                :ref="'listGroup-' + key"
              >
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
        </div>
      </div>
    </div>
    <div class="list-fixed" v-show="fixedTitle">
      <div class="fixed-title">{{ fixedTitle }}</div>
    </div>
    <div class="list-shortcut">
      <ul>
        <li
          v-for="(item, index) in shortcutList"
          :data-index="index"
          :key="index"
          @click="change(index)"
          class="item"
          :class="{ current: currentIndex === index }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <wx-nav-bar></wx-nav-bar>
  </div>
</template>
<script>
import wxHeader from "@/components/wxHeader.vue";
import wxNavBar from "@/components/wxNavBar.vue";
import wxIndexBar from "@/components/wxIndexBar.vue";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      data: [],
      showIcon: true,
      bs: null,
      shortcutList: ["A", "B", "C", "D","E",'F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      currentIndex: 0,
      list: [],
      scrollY:-1
    };
  },
  computed: {
    fixedTitle() {
      if (this.scrollY > -80 ) {
        return "";
      }
      return this.data[this.currentIndex]
        ? this.data[this.currentIndex].title
        : "";
    },
  },
  props: [],
  components: {
    "wx-header": wxHeader,
    "wx-nav-bar": wxNavBar,
    [wxIndexBar.name]: wxIndexBar,
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh();
      }, 200);
    },
  },

  created() {},
  mounted() {
    // 在 DOM 渲染完毕后初始化 better-scroll
    this.$nextTick(() => {
      this.$api.friendList().then((res) => {
        this.data = res.data;
        this.initScroll();
      });
      // this.message = res.data.chatmessage;
    });
  },
  methods: {
    change(index) {
      if(!this.$refs["listGroup-" + index]){
        return 
      }
      this.bs.scrollToElement(this.$refs["listGroup-" + index], 200);
    },
    _calculateHeight() {
      this.listHeight = [];
      let height = 90;
      this.listHeight.push(height);
      for (let i = 0; i < this.data.length; i++) {
        let item = this.$refs["listGroup-" + i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    refresh() {
      this.bs && this.bs.refresh();
      this._calculateHeight();
    },
    initScroll() {
      // better-scroll 初始化
      this.bs = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
      });
      this.bs.on("scroll", (pos) => {
        let newY = pos.y;
        if (newY > 0) {
          this.currentIndex = 0;
          return;
        }
        this.scrollY = newY ;
        let listHeight = this.listHeight;
        // 在中间部分滚动
        for (let i = 0; i < listHeight.length - 1; i++) {
          let height1 = listHeight[i];
          let height2 = listHeight[i + 1];
          if (-newY >= height1 && -newY < height2) {
            this.currentIndex = i;
            return;
          }
        }
      });
      // this.bs.on("scrollEnd", () => {
      //   console.log("scrollingEnd");
      // });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../common/style/mixin";
.wx-chat-content {
  position: fixed;
  left: 0;
  right: 0;
  top: 45px;
  bottom: 50px;
  overflow: hidden;
}
.wx-chat-search {
  width: 100%;
  height: 55px;
  overflow: hidden;
}
.wx-search-content {
  // .dj();
  width: 95%;
  height: 35px;
  text-align: center;
  color: #999;
  font-size: 14px;
  line-height: 35px;
  border-radius: 5px;
  background: #fff;
  margin: 10px auto;
  i {
    margin-right: 10px;
    font-size: 14px;
  }
}

.list-group-title {
  padding: 2px 10px;
  background: @primary;
  font-weight: lighter;
  font-family: Helvetica;
  font-size: 14px;
  color: gray;
}
.list-group-item {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-size: 16px;
  .avatar {
    margin-right: 12px;
    .widthHeight(42px, 42px);
    .borderRadius(5px);
  }
}
.list-shortcut {
  position: absolute;
  z-index: 30;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  padding: 20px 0;
  border-radius: 10px;
  text-align: center;
  font-family: Helvetica;
  .item {
    margin-bottom: 5px;
  }
}
.current {
  color: red;
}
.list-fixed {
  position: absolute;
  top: 40px;
  background: #fff;
  color:#05C160;
  left: 0;
  width: 100%;
  .fixed-title {
    height: 30px;
    font-family: Helvetica;
    line-height: 30px;
    padding-left: 10px;
  }
}
</style>
