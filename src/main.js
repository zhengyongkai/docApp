import { createApp } from 'vue'
import App from './App.vue'
import 'vant/lib/index.css'
import './index.css'
import router from './router/router'
import wxComponents from '/@components/';
const app = createApp(App)
app.use(wxComponents)
app.use(router)
app.mount('#app')
