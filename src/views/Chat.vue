<!--  -->
<template>
  <div>
      <wx-header :content="'微信(1932)'" :rightIcon="'icon-add'"></wx-header>
       <div class="wx-chat-content">
           <wx-better-scroll  ref="scroll">
                <div class="wx-chat-search wx-background-color">
                    <div class="wx-search-content">
                        <i class="iconfont "></i>搜索
                    </div>
                </div>
           </wx-better-scroll>
       </div>
      <wx-nav-bar></wx-nav-bar >
  </div>
</template>
<script>
import wxHeader from "@/components/wxHeader.vue";
import wxNavBar from '@/components/wxNavBar.vue'
export default {
  data() {
    return {};
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
@import '../common/style/mixin';
.wx-chat-content{
    position: fixed;
    left:0;
    right:0;
    top:44.5px;
    bottom: 50px;
    overflow: hidden;
}
.wx-chat-search{
    width: 100%;
    height: 40px;
}
.wx-search-content{
    // .dj();
    width: 95%;
    height: 35px;
    text-align: center;
    color: #999;
    font-size: 14px;
    line-height: 35px;
    border-radius: 5px;
    background: #fff;
    margin: 0 auto;
}

</style>
