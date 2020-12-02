import Router from 'vue-router';
import Lifa from '../components/Lifa.vue'
import App from '../App.vue'

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'app',
            component: App,
        },
         {
            path: '/lifa',
            name: 'lifa',
            component: Lifa,
        }
    ]
})
