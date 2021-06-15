

export default {
  addCart (state, payload) {
    state.cartCount = payload.count
  },
  setToken(state, token) {
    state.token = token;
    window.localStorage.setItem('__token__', token);
  },
}
