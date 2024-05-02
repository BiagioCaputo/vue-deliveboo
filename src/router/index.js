import { createRouter, createWebHistory } from 'vue-router'

// Import delle pagine
import HomePage from '../assets/pages/HomePage.vue';
import ListRestaurantsPage from '../assets/pages/ListRestaurantsPage.vue';
import TypesRestaurantPage from '../assets/pages/TypesRestaurantPage.vue';
import RestaurantMenuPage from '../assets/pages/RestaurantMenuPage.vue';
import CartPage from '../assets/pages/CartPage.vue';
import NotFoundPage from '../assets/pages/NotFoundPage.vue';

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
        { path: '/types/restaurants', component: TypesRestaurantPage, name: 'type' },
        { path: '/restaurant/:id', component: RestaurantMenuPage, name: 'menu' },
        { path: '/cart', component: CartPage, name: 'cart' },
        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:patchMatch(.*)*', redirect: 'not-found' },
    ]
});

export { router }