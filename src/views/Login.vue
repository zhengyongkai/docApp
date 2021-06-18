<!--  -->
<template>
  <div class="main">
    <div class="center">
      <div class="login-content">
        <div class="login-top">
          <div
            class="item"
            @click="choose(1)"
            :class="itemType == 1 ? 'select' : ''"
          >
            QQ登陆
          </div>
          <div
            class="item"
            @click="choose(2)"
            :class="itemType == 2 ? 'select' : ''"
          >
            微信登陆
          </div>
        </div>
        <div v-if="itemType == 1">
          <div class="qq_login">
            <h3>账号密码登陆</h3>
            <div>推荐使用手机QQ扫码登录，防止盗号。</div>
            <div style="margin-top:20px">
              <input
                type="text"
                v-model="formData.username"
                placeholder="支持QQ号登陆"
              />
            </div>
            <div>
              <input
                type="password"
                v-model="formData.password"
                placeholder="请输入密码"
              />
            </div>
          </div>
          <div class="login_button" @click="login">
            登陆并授权
          </div>
          <div class="handle">
            注册新账号
          </div>
        </div>
        <div v-else>
          <div class="qq_login">
            <div style="position:relative;width:100%">
              <img
                :src="qrCode"
                alt=""
                style="width:300px;height:300px"
              /><br />
              <div class="cover" v-if="guoqi" @click="getNewCode">
                <div style="margin-top: 80px;">
                  <i class="iconfont icon-8" />
                </div>
              </div>
            </div>
            扫码登陆
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemType: 1,
      formData: {
        username: "",
        password: "",
      },
      qrCode: "",
      num: 0,
      guoqi: false,
      timer: null,
    };
  },
  props: [],
  components: {},
  created() {},
  mounted() {
    this.getQrCode("sss");
  },
  unmounted() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    getNewCode() {
      this.getQrCode();
    },
    getQrCode() {
      //
      this.$api.getqrCode().then((res) => {
        clearInterval(this.timer);
        this.qrCode = res.qrcode;
        this.guoqi = false;
        this.timer = setInterval(() => {
          if (this.num == 60) {
            this.num = 0;
            this.guoqi = true;
          } else {
            this.num++;
            this.$api
              .checklogin({
                token: res.token,
              })
              .then((res) => {
                if (res.user.account) {
                  this.$message.success("扫码登陆成功");
                  this.$store.commit(
                    "setToken",
                    JSON.stringify(res.user.token)
                  );
                  this.$router.replace({ name: "index" });
                }
              });
          }
        }, 1000);
      });
    },
    choose(type) {
      this.itemType = type;
    },
    login() {
      if (this.formData.username == "" || this.formData.password == "") {
        this.$message.info("请输入账号密码");
        return false;
      }
      //登陆
      this.$api.login(this.formData).then((res) => {
        this.$message.success("登陆成功");
        this.$store.commit("setToken", JSON.stringify(res.token));
        this.$router.replace({ name: "index" });
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../common/style/mixin";
.main {
  background: @primary;
  font-size: 12px;
}
.center {
  width: 36%;
  height: 60%;
  background: #fff;
  .borderRadius(10px);
  -webkit-box-shadow: 3px 3px 3px 3px #eee;
  -moz-box-shadow: 3px 3px 3px 3px #eee;
  box-shadow: 3px 3px 3px 3px #eee;
  display: flex;
}
.login-content {
  margin: 0 auto;
  padding: 20px 10px;
  .login-top {
    width: 160px;
    margin: 0 auto;
    display: flex;
    background: #eee;
    height: 30px;
    line-height: 28px;
    border-radius: 20px;
    .item {
      width: 50%;
      text-align: center;
    }
    .select {
      background: #fff;
      border-radius: 20px;
      border: 1px solid #eee;
    }
  }
}
.qq_login {
  margin-top: 20px;
  text-align: center;
  input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #eee;
    height: 30px;
  }
  input:focus {
    border: 1px solid @blue;
  }
  .cover {
    position: absolute;
    background: #333;
    opacity: 0.8;
    color: #000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    i {
      font-size: 64px;
    }
  }
}
.login_button {
  margin-top: 20px;
  height: 30px;
  width: 100%;
  background: @blue;
  color: #fff;
  line-height: 30px;
  text-align: center;
}
.handle {
  text-align: center;
  margin-top: 16px;
  font-size: 10px;
}
</style>
