import Vue from 'vue'
import Router from 'vue-router'
import BaseHome from '@/views/BaseHome.vue'
import Home from '@/components/Home.vue'
import Products from '@/components/products.vue'
import Login from '@/views/login.vue'
import ProductDetails from '@/components/productDetails.vue'
import cart from '@/components/cart.vue'
import calendar from '@/views/Calendar.vue'
import calendar2 from '@/views/Calendar2.vue'
import calendar3 from '@/views/Calendar3.vue'
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
        },
        {
            path: '/calendar2',
            name: 'calendar2',
            component: calendar2
        },
        {
            path: '/calendar3',
            name: 'calendar3',
            component: calendar3
        }
    ]
})