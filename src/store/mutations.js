

export default {
  setToken(state, token) {
    state.token = token;
    window.localStorage.setItem('__token__', token);
  },
  setUserInfo(state, userinfo) {
    state.userInfo = JSON.parse(userinfo || '');
    window.localStorage.setItem('__userinfo__', userinfo);
  },
}
