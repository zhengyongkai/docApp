<!--  -->
<template>
  <div>
    <div class="wx-chat-item van-hairline--bottom">
      <div class="item-img">
        <img
          :src="content.img"
        />
      </div>
      <div class="item-chat">
        <div class="chat-title">{{content.name}}</div>
        <div class="chat-content">{{content.text}}</div>
      </div>
      <div class="item-time">{{dealwithTimeByChat(content.time)}}</div>
    </div>
  </div>
</template>
<script>
import {dealwithTimeByChat} from '@/common/js/utils'
export default {
  data() {
    return {};
  },
  props: {
      content:{
          default: function(){
              return {}
          },
          type: Object
      }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
      dealwithTimeByChat:dealwithTimeByChat
  },
};
</script>
<style lang="less" scoped>
@import "../common/style/mixin";
.wx-chat-item {
  display: flex;
  padding: 10px 10px;
  background: @ci;
  .item-img{
      margin-right: 8px;
      img{
          .widthHeight(42px,42px);
          .borderRadius(5px)
      }
  }
  .item-chat{
      .dj(@direction: column);
      .chat-title{
          font-size: 14px;
      }
      .chat-content{
          width:100% ;
          margin-bottom:2px;
          font-size: 12px;
          color: #999;
          .textecli();
          
      }
  }
  .item-time{
      margin-left: auto;
      width: 100px;
      text-align: right;
      color: #999;
  }
}
</style>
