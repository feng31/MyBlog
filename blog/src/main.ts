import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import './index.css'
import './shim-vue.d.ts'

// const app = createApp(App)
// app.use(router)
// app.mount('#app')
createApp(App).mount('#app')
