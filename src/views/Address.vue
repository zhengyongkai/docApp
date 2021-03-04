<!--  -->
<template>
  <div>
      <wx-header :content="'通讯录'" :rightIcon="'icon-add'"></wx-header>
      <div class="wx-chat-content">
        <div>
          <div class="wx-chat-search wx-background-color">
            <div class="wx-search-content" contenteditable="true" >
             <div v-if='showIcon'><i class="iconfont icon-search " ></i>搜索</div> 
            </div>
          </div>
        </div>
    </div>
       <wx-nav-bar ></wx-nav-bar >
  </div>
</template>
<script>
import wxHeader from "@/components/wxHeader.vue";
import wxNavBar from '@/components/wxNavBar.vue'
export default {
  data() {
    return {
      showIcon:true
    };
  },
  props: [],
  components: {
    "wx-header": wxHeader,
    'wx-nav-bar': wxNavBar
  },
  created() {},
  mounted() {},
  methods: {},
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
  overflow: scroll;
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
}</style>
