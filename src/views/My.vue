<!--  -->
<template>
  <div>
      <wx-header :content="'消息'" :rightIcon="'icon-add'"></wx-header>
       <wx-nav-bar :content="'消息'"></wx-nav-bar >
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
<style lang="scss" scoped></style>
