
export default {
  cartCount: 0,
  token: JSON.parse(window.localStorage.getItem('__token__')) || '',
}
