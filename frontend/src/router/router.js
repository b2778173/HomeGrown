import Vue from 'vue'
import Router from 'vue-router'
import BaseHome from '@/views/BaseHome.vue'
import Home from '@/components/Home.vue'
import Products from '@/components/products.vue'
import Login from '@/views/login.vue'
import SideBar from '@/components/sideBar'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'BaseHome',
            component: BaseHome,
            children: [{
                path: 'homePage',
                name: 'homePage',
                component: Home
            }, {
                path: '/products',
                name: 'products',
                component: Products
            }, ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})