import { createRouter, createWebHistory } from 'vue-router'

// Import delle pagine
import HomePage from '../assets/pages/HomePage.vue';

//Rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage }
    ]
});

export { router }