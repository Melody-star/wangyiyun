import { createApp } from 'vue'
import App from './App.vue'
//vuex
import store from './store'
//vant标签栏
import { Tabbar, TabbarItem } from 'vant';
import router from './router/index.js'

const app = createApp(App)
app.use(router)

//vuex
app.use(store)

//vant标签栏
app.use(Tabbar);
app.use(TabbarItem);

//ConfigProvider 全局配置
import { ConfigProvider } from 'vant';
app.use(ConfigProvider);

//Sticky 粘性布局
import { Sticky } from 'vant';
app.use(Sticky);

//Popup 弹出层
import { Popup } from 'vant';
app.use(Popup);


app.mount('#app')





