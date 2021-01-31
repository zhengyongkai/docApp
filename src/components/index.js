import wxHeader from "./headers/wx-headers.vue";
const components = [wxHeader];
export default {
  install(Vue) {
    components.map((el) => Vue.component(el.name, el));
    //   Vue.use(Loading.directive);
  },
};
