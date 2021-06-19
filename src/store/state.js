export default {
  cartCount: 0,
  token: JSON.parse(window.localStorage.getItem("__token__")) || "",
  userInfo: JSON.parse(window.localStorage.getItem("__userinfo__")) || { },

};
