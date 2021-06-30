<!--  -->
<template>
  <div class="main">
    <div class="center">
      <div class="left">
        <div class="logo"><img src="@/assets/logo.jpg" /></div>
        <div class="scroll-content">
          <div>
            <div class="title">在线音乐</div>
            <div class="left-items">
              <div
                class="left-item"
                @click="selectItem('1')"
                :class="select == '1' ? 'select' : ''"
              >
                <i class="iconfont icon-rementuijian"></i><span>推荐</span>
              </div>
              <div
                class="left-item"
                @click="selectItem('2')"
                :class="select == '2' ? 'select' : ''"
              >
                <i class="iconfont icon-yinle"></i><span>音乐馆</span>
              </div>
              <div
                class="left-item"
                @click="selectItem('3')"
                :class="select == '3' ? 'select' : ''"
              >
                <i class="iconfont icon-shipin"></i><span>视频</span>
              </div>
              <div
                class="left-item"
                @click="selectItem('4')"
                :class="select == '4' ? 'select' : ''"
              >
                <i class="iconfont icon-diantai"></i><span>电台</span>
              </div>
            </div>
          </div>
          <div class="myMusic">
            <div class="title">我的音乐</div>
            <div class="left-items">
              <div
                class="left-item"
                @click="selectItem('5')"
                :class="select == '5' ? 'select' : ''"
              >
                <i class="iconfont icon-xihuan"></i><span>我喜欢</span>
              </div>
              <div
                class="left-item"
                @click="selectItem('6')"
                :class="select == '6' ? 'select' : ''"
              >
                <i class="iconfont icon-diannao"></i><span>本地和下载</span>
              </div>
              <div
                class="left-item"
                @click="selectItem('7')"
                :class="select == '7' ? 'select' : ''"
              >
                <i class="iconfont icon-lishi"></i><span>播放历史</span>
              </div>
              <div
                class="left-item"
                @click="selectItem('8')"
                :class="select == '8' ? 'select' : ''"
              >
                <i class="iconfont icon-shiting" />
                <div class="item-content">
                  <div>试听列表</div>
                  <div class="bofang">
                    <i
                      class="iconfont icon-bofangzhong"
                      :class="select == '8' ? 'bofangzhongselect' : ''"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="myMusic">
            <div class="title">
              <div>创建的歌单</div>
              <div class="icon">
                <i class="iconfont icon-add1" @click="addMusicShow"></i>
                <i
                  class="iconfont "
                  :class="createMusicShow ? 'icon-zhankai' : 'icon-shouqi'"
                  @click="show('createMusicShow')"
                ></i>
              </div>
            </div>
            <div class="left-items" v-show="createMusicShow">
              <div class="left-item" v-show="createInputVisable">
                <input
                  type="text"
                  v-model.trim="addInfo.songsheet"
                  placeholder="请输入名称（回车添加）"
                  @keyup.enter="addSongSheet"
                />
              </div>
              <div
                class="left-item"
                @click="selectItem(i + 9)"
                :class="select == i + 9 ? 'select' : ''"
                v-for="(v, i) in mySongSheet"
                :key="i"
              >
                <div style="width: 100%;" v-if="v.canedit">
                  <input
                    type="text"
                    style="color:#000;width:94%"
                    :value="v.group_name"
                    @keyup.enter="(target) => updateSongSheet(v, target)"
                    placeholder="请输入名称（回车修改）"
                  />
                </div>
                <div style="display:flex;width: 100%;" v-else>
                  <div class="text-overflow" style="width:70%">{{ v.group_name }}</div>
                  <div class="left-control">
                    <div
                      style="margin-right:10px;"
                      @click="editGroupNameShow(v)"
                    >
                      <edit-outlined />
                    </div>
                    <div @click.prevent="deleteSongSheet(v)">
                      <delete-outlined />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="myMusic">
            <div class="title">
              <div>我的音乐</div>
              <div class="icon">
                <i class="iconfont icon-add1"></i>
                <i
                  class="iconfont "
                  :class="favMusicShow ? 'icon-zhankai' : 'icon-shouqi'"
                  @click="show('favMusicShow')"
                ></i>
              </div>
            </div>
            <div class="left-items" v-if="favMusicShow">
              <div
                class="left-item"
                @click="selectItem('11')"
                :class="select == '11' ? 'select' : ''"
              >
                <span>收藏歌单</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="musicTop">
          <div class="musicTopContent">
            <div class="backNext">
              <i class="iconfont icon-left1"></i>
              <i class="iconfont icon-right1"></i>
            </div>
            <div class="msc-index">
              <div class="msc-index-search">
                <div class="icon">
                  <i class="iconfont icon-search search-icon" />
                </div>
                <input v-model="search" placeholder="搜索音乐" />
              </div>
            </div>
            <div class="msc-right">
              <img :src="userInfo.head_img" />
              <div>{{ userInfo.account }}</div>
            </div>
          </div>
        </div>
        <div class="musicContent"><router-view></router-view></div>
        <!-- <musicBottom @handle="onHandle"></musicBottom> -->
      </div>
    </div>
  </div>
</template>
<script>
// import musicBottom from "@/components/musicBottom.vue";
import EditOutlined from "@ant-design/icons-vue/EditOutlined";
import DeleteOutlined from "@ant-design/icons-vue/DeleteOutlined";
export default {
  data() {
    return {
      select: "1",
      createMusicShow: true,
      favMusicShow: false,
      userInfo: this.$store.state.userInfo,
      createInputVisable: false,
      addInfo: {
        songsheet: "",
      },
      mySongSheet: [],
    };
  },
  props: [],
  components: {
    // musicBottom: musicBottom,
    EditOutlined,
    DeleteOutlined,
  },
  created() {
    this.getSongSheet();
  },
  mounted() {},
  methods: {
    getSongSheet() {
      this.$api.getSongSheet().then((res) => {
        this.mySongSheet = res.list;
      });
    },
    selectItem(val) {
      this.select = val;
    },
    show(key) {
      this[key] = !this[key];
    },
    onHandle() {},
    addMusicShow() {
      this.closeInput();
      this.createMusicShow = true;
      this.createInputVisable = !this.createInputVisable;
    },
    deleteSongSheet(item) {
      this.$api
        .deleteSongSheet({
          group_id: item.group_id,
        })
        .then(() => {
          this.$message.success("删除成功");
          this.getSongSheet();
        });
    },
    updateSongSheet(item, e) {
      let value = e.target.value;
      if (value == item.group_name) {
        item.canedit = false;
        return false;
      }
      if (!item.group_name || value === "") {
        this.$message.info("请输入歌单名字");
        return false;
      }
      this.$api
        .editSongSheet({
          group_id: item.group_id,
          group_name: value,
        })
        .then(() => {
          this.$message.success("修改成功");
          item.canedit = false;
          this.getSongSheet();
        });
    },
    closeInput() {
      this.createInputVisable = false;
      this.mySongSheet.forEach((element) => {
        element.canedit = false;
      });
    },
    editGroupNameShow(v) {
      this.closeInput();
      v.canedit = true;
      this.$forceUpdate();
    },
    addSongSheet() {
      if (!this.addInfo.songsheet || this.addInfo.songsheet === "") {
        this.$message.info("请输入歌单名字");
        return false;
      }
      this.$api
        .addSongSheet({
          group_name: this.addInfo.songsheet,
        })
        .then(() => {
          this.$message.success("添加成功");
          this.mySongSheet.unshift({
            group_name: this.addInfo.songsheet,
          });
          this.createInputVisable = false;
          this.addInfo.songsheet = "";
        });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../common/style/mixin";
.main {
  background: @primary;
  font-size: 14px;
}
.center {
  width: 65%;
  height: 90%;
  background: #fff;
  .borderRadius(8px);
  overflow: hidden;
  display: flex;
}
.left {
  width: 25%;
  padding: 16px 0;
  padding: 10px 0;
  padding-left: 10px;
  background: @bc;
  box-sizing: border-box;
  // text-align: center;
  .logo {
    font-size: 14px;
    text-align: center;
    margin-bottom: 10px;
    padding-right: 10px;
    img {
      width: 100%;
    }
  }
  .title {
    display: flex;
    font-size: 10px;
    color: @title;
    padding: 0 10px;
    margin-bottom: 10px;
    .icon {
      margin-left: auto;
      i {
        margin-left: 5px;
      }
    }
  }
  .left-items {
    .left-item {
      font-size: 12px;
      margin-bottom: 5px;
      padding: 5px 0 5px 10px;
      display: flex;
      align-items: center;
      i {
        font-size: 12px;
        margin-right: 10px;
      }
      .item-content {
        display: flex;
        flex: 1;
        align-items: center;
        .bofang {
          margin-left: auto;
          color: #1ecf9e;
        }
      }
      .left-control {
        display: none;
        color: #999;
        margin-left: auto;
        align-items: center;
        margin-right: 10px;
      }
    }
    .left-item:hover {
      background: #eee;
      .borderRadius(5px);
      .left-control {
        display: flex;
      }
    }
  }
  //myMusic
  .myMusic {
    margin-top: 20px;
  }
}
.right {
  flex: 1;
  position: relative;
  background: #fafafa;
  .musicTop {
    height: 50px;
    position: fixed;
    left: 25%;
    right: 0;
    .musicTopContent {
      padding: 16px 24px;
      display: flex;
      align-items: center;
      .backNext {
        i {
          margin-right: 16px;
          font-size: 14px;
        }
      }
      .msc-right {
        margin-left: auto;
        display: flex;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
          margin-right: 10px;
          border-radius: 50%;
        }
        div {
          font-size: 14px;
        }
      }
      .msc-index {
        font-size: 12px;
        margin: 2px 0;
        width: 160px;
        .msc-index-search {
          display: flex;
          height: 24px;
          border: 1px solid #eaeaea;
          -webkit-box-shadow: 0px 5px 5px #f5f5f5;
          -moz-box-shadow: 0px 5px 5px #f5f5f5;
          box-shadow: 0px 5px 5px #f5f5f5;
          border-radius: 20px;
          .icon {
            width: 15px;
            margin: 0 3px;
            line-height: 22px;
            height: 24px;
            text-align: center;
            .search-icon {
              width: 20px;
              height: 20px;
              color: #e4e4e4;
            }
          }
          input {
            flex: 1;
            width: 100%;
            border: 0;
            outline: none; // 去除选中状态边框
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            color: #333;
            text-shadow: none;
            background-color: transparent;
            cursor: text;
            overflow: hidden;
          }
        }
      }
      ::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #e2e2e2;
        font-size: 12px;
        display: none;
      }
      ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #e2e2e2;
        font-size: 12px;
        display: none;
      }
      :-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #e2e2e2;
        font-size: 12px;
        display: none;
      }
    }
  }
}

.select {
  background: #1ecf9e !important;
  color: #fff !important;
  .borderRadius(5px);
}
.bofangzhongselect {
  color: #fff;
}
.scroll-content {
  height: 84%;
}
</style>
