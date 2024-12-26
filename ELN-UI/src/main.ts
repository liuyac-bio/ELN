//import './assets/main.css' 2024-12-17 14:23:48 禁止Vue原生style 

import { createApp } from 'vue'
//2024-12-17 14:24:08 引入ant-design组件注册
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
//2024-12-17 14:24:36 引入 ant-design style文件
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

app.use(router)
//2024-12-17 14:25:17 将ant-design作为中间件使用
app.use(Antd) 

app.mount('#app')
