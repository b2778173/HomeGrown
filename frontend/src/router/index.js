import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home.vue'
import products from '@/components/products.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home

        },
        {
            path: '/products',
            name: 'products',
            component: products
        }
    ]
})