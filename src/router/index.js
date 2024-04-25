import { createRouter, createWebHistory } from 'vue-router'

// Import delle pagine
import HomePage from '../assets/pages/HomePage.vue';
import ListRestaurantsPage from '../assets/pages/ListRestaurantsPage.vue';
import NotFoundPage from '../assets/pages/NotFoundPage.vue'

//Rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/list-restaurants', component: ListRestaurantsPage, name: 'list' },
        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:patchMatch(.*)*', redirect: 'not-found' }
    ]
});

export { router }