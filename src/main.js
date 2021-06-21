import { createApp } from 'vue'
import { ActionBar, ActionBarIcon, ActionBarButton, Divider, Popup, Overlay, Loading, Dialog, ContactCard, Form, AddressEdit, AddressList, Field, CellGroup, Cell, SwipeCell, Stepper, Card, Checkbox, CheckboxGroup, Button, Swipe, SwipeItem, PullRefresh, List, Tab, Tabs, SubmitBar, Toast, Skeleton } from 'vant'
import App from './App.vue'
import store from './store'
import router from './router'
import 'lib-flexible/flexible'
import 'vant/lib/index.css'; // 全局引入样式
import '@/common/mock'
import axios from '@utils/axios'
import http from '@utils/http'
// import '@/common/js/utils.js'
import $api from '@/api'
import BetterScroll from '@/components/wxScroll'
import {message,Icon} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import rightMenu from "@/components/rightmenu";
const app = createApp(App) // 创建实例
app.component('wx-better-scroll', BetterScroll)
app.config.globalProperties.$api = $api
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$http = http;
app.config.globalProperties.$message = message


// 全局过滤器
app.use(ActionBarButton)
  .use(ActionBarIcon)
  .use(ActionBar)
  .use(Divider)
  .use(Popup)
  .use(Overlay)
  .use(Loading)
  .use(Dialog)
  .use(Toast)
  .use(ContactCard)
  .use(Form)
  .use(AddressEdit)
  .use(AddressList)
  .use(Field)
  .use(CellGroup)
  .use(Cell)
  .use(SwipeCell)
  .use(Stepper)
  .use(Card)
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(PullRefresh)
  .use(List)
  .use(Tab)
  .use(Tabs)
  .use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Skeleton)
  .use(Icon)
app.use(router)
app.use(store)
app.use(rightMenu)
app.mount('#app')