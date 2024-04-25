import { createRouter, createWebHistory } from 'vue-router'

// Import delle pagine
import HomePage from '../assets/pages/HomePage.vue';
import ListRestaurantsPage from '../assets/pages/ListRestaurantsPage.vue';

//Rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/list-restaurants', component: ListRestaurantsPage }
    ]
});

export { router }