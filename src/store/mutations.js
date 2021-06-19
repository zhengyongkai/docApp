

export default {
  addCart (state, payload) {
    state.cartCount = payload.count
  },
  setToken(state, token) {
    state.token = token;
    window.localStorage.setItem('__token__', token);
  },
  setUserInfo(state, userinfo) {
    state.userInfo = userinfo;
    window.localStorage.setItem('__userinfo__', userinfo);
  },
}
