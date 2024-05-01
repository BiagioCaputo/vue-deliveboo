import { createApp } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.vue';
import { router } from './router';
import { RouterLink } from 'vue-router';

createApp(App).use(router, RouterLink).mount('#app');
