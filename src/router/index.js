import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Product from '@/views/Product.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'About',
        path: '/about',
        component: About,
    },
       {
        name: 'Product',
        path: '/product/:name',
        component: Product,
        props: true
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title: '404 Not Fount'
        }
       }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;