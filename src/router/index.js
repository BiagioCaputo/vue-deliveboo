import { createRouter, createWebHistory } from 'vue-router'

// Import delle pagine
import HomePage from '../assets/pages/HomePage.vue';
import ListRestaurantsPage from '../assets/pages/ListRestaurantsPage.vue';
import RestaurantMenuPage from '../assets/pages/RestaurantMenuPage.vue';
import CartPage from '../assets/pages/CartPage.vue';
import NotFoundPage from '../assets/pages/NotFoundPage.vue';
import ResultPaymentPage from '../assets/pages/ResultPaymentPage.vue';

//Rotte
const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active-link',
    scrollBehavior() {
        return { top: 0 }
    },
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/restaurants', component: ListRestaurantsPage, name: 'list' },
        { path: '/restaurant/:id', component: RestaurantMenuPage, name: 'menu' },
        { path: '/cart', component: CartPage, name: 'cart' },
        { path: '/result_payment', component: ResultPaymentPage, name: 'resultPaymentPage' },
        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:patchMatch(.*)*', redirect: 'not-found' },
    ]
});

export { router }