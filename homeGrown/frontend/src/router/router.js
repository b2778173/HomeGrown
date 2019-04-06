import Vue from 'vue'
import Router from 'vue-router'
import BaseHome from '@/views/BaseHome.vue'
import Home from '@/components/Home.vue'
import Products from '@/components/products.vue'
import Login from '@/views/login.vue'
import ProductDetails from '@/components/productDetails.vue'
import cart from '@/components/cart.vue'
import calendar from '@/views/Calendar.vue'
// Vue.config.devtools = true;

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
                },
                {
                    path: 'productDetails',
                    name: 'productDetails',
                    component: ProductDetails
                },
                {
                    path: '/cart',
                    name: 'cart',
                    component: cart
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: calendar
        }
    ]
})