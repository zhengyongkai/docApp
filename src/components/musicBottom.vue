<!--  -->
<template>
  <div class="musicBottom">
    <div class="svg">
      <div style="display:flex;height:5px;align-items:center" @mousedown="down">
        <div class="jindu" :style="'width:' + width + '%'"></div>
        <div style="flex:1;background:#eee;height:1px"></div>
      </div>
    </div>
    <div class="play-info">
      <div class="bottom-left">
        <img src="@/assets/yuyizhixia.jpg" />
        <div class="left-info">
          <div style="display:flex">
            <div>天外来物</div>
            <div style="color:#999;margin-left:5px;margin-right:10px"></div>
            <i class="iconfont icon-VIP vip"></i>
            <i class="iconfont icon-shipin"></i>
          </div>
          <div class="handle-icon">
            <i class="iconfont icon-shoucang"></i>
            <i class="iconfont icon-xiazai"></i>
            <i class="iconfont icon-pinglun"></i>
          </div>
        </div>
      </div>
      <div class="bottom-center">
        <div class="handle-icon">
          <i class="iconfont icon-suijibofang"></i>
          <i class="iconfont icon-shangyishou"></i>
          <i
            class="iconfont "
            :class="!play ? 'icon-bofang' : 'icon-zanting'"
            @click="handle('play')"
          ></i>
          <i class="iconfont icon-xiayishou"></i>
          <i class="iconfont icon-yinliang1"></i>
        </div>
      </div>
      <div class="bottom-right">
        <div class="timeline">{{currentTime}} / {{duration}}</div>
        <div class="showci">词</div>
        <div class="gedan"><i class="iconfont icon-gedan"></i>500</div>
      </div>
    </div>
    <audio type="audio/mp3" ref="audio" hidden @timeupdate="timeUpdate">
      <source src="@/assets/music/tianwailaiwu.mp3" />
    </audio>
  </div>
</template>
<script>
export default {
  name: "musicBottom",
  data() {
    return {
      width: 0,
      timer: null,
      play: false,
      currentTime : "00:00",
      duration:  "00:00"
    };
  },
  props: [],
  components: {},
  created() {},
  mounted() {
    
  },
  methods: {
    down(event){
      this.width = (event.offsetX / event.target.clientWidth ) * 100
    },
    format(seconds) {
			let hour = Math.floor(seconds / 3600) >= 10 ? Math.floor(seconds / 3600) : '0' + Math.floor(seconds / 3600);
			seconds -= 3600 * hour;
			let min = Math.floor(seconds / 60) >= 10 ? Math.floor(seconds / 60) : '0' + Math.floor(seconds / 60);
			seconds -= 60 * min;
			let sec = seconds >= 10 ? seconds : '0' + seconds;
			return hour + ':' + min + ':' + sec;
		},
    handle(type) {
      switch (type) {
        case "play":
          this.play = !this.play;
          // this.$emit("handle", this.play);
          if (!this.play) {
            this.$refs.audio.pause();
          } else {
            this.$refs.audio.play();
          }
          this.duration = this.format(parseInt(this.$refs.audio.duration))
          break;
      }
    },
    timeUpdate(time){
      this.currentTime =  this.format(parseInt(time.target.currentTime))
      this.width = (time.target.currentTime / time.target.duration) * 100
    }
  },
  onUnmounted() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>
<style lang="less" scoped>
.musicBottom {
  height: 60px;

  position: fixed;
  left: 25%;
  font-size: 10px;
  right: 0;
  bottom: 0;
  background: #fff;
  .jindu {
    background: #1ecf9e;
    height: 1px;
  }
  .jindu::after {
    content: "";
    float: right;
    display: block;
    width: 3px;
    height: 3px;
    background: #1ecf99;
    border-radius: 50%;
    margin-top: -1px;
  }

  .play-info {
    padding: 16px 8px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    .bottom-left {
      width: 30%;
      display: flex;
      img {
        width: 30px;
        border-radius: 5px;
      }
      .left-info {
        margin-left: 10px;
        font-size: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        i {
          margin-right: 8px;
        }
        .vip {
          color: #1ecf9e;
        }
      }
    }
    .bottom-center {
      width: 40%;
      text-align: center;

      .handle-icon {
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        :nth-child(1),
        :nth-child(5) {
          font-size: 14px;
        }
        :nth-child(2),
        :nth-child(4) {
          font-size: 18px;
        }
        :nth-child(3) {
          font-size: 20px;
          color: #1ecf9e;
        }
      }
    }
    .bottom-right {
      flex: 1;
      width: 30%;
      text-align: right;
      display: flex;
      align-items: center;
      .showci {
        color: #1ecf9e;
        margin: 0 5px;
      }
      .timeline {
        color: #999;
      }
      .gedan {
        display: flex;
        align-items: center;
        color: #1ecf9e;
        i {
          margin-right: 2px;
        }
      }
    }
  }
}
</style>
