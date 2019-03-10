import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home.vue'
import Products from '@/components/products.vue'
import Login from '@/views/login.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/homePage',
            name: 'homePage',
            component: Home

        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})