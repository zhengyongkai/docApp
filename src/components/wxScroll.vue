<template>
  <div ref="wrapper" class="scroll-wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    scrollData: {
      type: Array,
      default: null
    },
    pullup: {
      type: Boolean,
      default: false
    },
    pulldown: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  mounted() {
    // 在 DOM 渲染完毕后初始化 better-scroll
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  methods: {
    initScroll() {
      // better-scroll 初始化
      this.bs = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true
      })
      this.bs.on('scroll', () => {
          console.log('scrolling-')
        })
        this.bs.on('scrollEnd', () => {
          console.log('scrollingEnd')
        })
    } 
  }
}
</script>

<style lang="less" scoped>
  .scroll-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>