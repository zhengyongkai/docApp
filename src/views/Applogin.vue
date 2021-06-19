<!--  -->
<template>
  <div>
    <button @click="applogin">登陆</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uuid: "113",
    };
  },
  props: [],
  components: {},
  created() {},
  mounted() {},
  methods: {
    applogin() {
      let { token } = this.$route.query;
      this.$api
        .loginApp({
          uuid: 113,
          token: token,
        })
        .then((res) => {
          alert(res.msg);
          
        })
        .catch((res) => {
          alert(res);
        });
    },
  },
};
</script>
<style lang="scss" scoped></style>
