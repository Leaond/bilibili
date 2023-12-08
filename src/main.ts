import { createApp } from 'vue'
import './style.css'
// import '@/style'
import router from './router/index'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import gloablComponent from './components/index'

const app = createApp(App)

app.use(ElementPlus).use(gloablComponent).use(router)
app.mount('#app')
