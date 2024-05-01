<script>
import AppJumbo from '../../components/AppJumbo.vue';
import AppSectionRestaurants from '../../components/AppSectionRestaurants.vue';
import AppSectionType from '../../components/AppSectionType.vue';
import AppSectionDelivery from '../../components/AppSectionDelivery.vue';
import { store } from '../../data/store.js';
import axios from 'axios';

const baseUri = 'http://localhost:8000/api';

export default {
    name: 'HomePage',
    components: { AppJumbo, AppSectionRestaurants, AppSectionType, AppSectionDelivery },
    data: () => ({
        store,
        restaurants: [],
        categories: []
    }),

    methods: {
        fetchRestaurants() {
            store.isLoading = true;
            axios.get(`${baseUri}/restaurants`).then(res => {
                this.restaurants = res.data;
            })
                .catch(error => {
                    console.log(error)
                })
                .then(() => {
                    store.isLoading = false
                })
        },

        fetchTypes() {
            store.isLoading = true;
            axios.get(`${baseUri}/types`).then(res => {
                this.categories = res.data;
            })
                .catch(error => {
                    console.log(error)
                })
                .then(() => {
                    store.isLoading = false
                })
        },

    },

    created() {
        this.fetchRestaurants();
        this.fetchTypes();
    }
}
</script>

<template>
    <main>
        <!-- Jumbo -->
        <AppJumbo :title="'Consegna di cibo a domicilio e molto altro'"
            :subtitle="'Ordina dai tuoi ristoranti preferiti, in pochi minuti a casa tua.'" />

        <!--Section Restaurant-->
        <AppSectionRestaurants :restaurants="restaurants" />

        <!--Section Type-->
        <AppSectionType :title="'Le nostre categorie'" :categories="categories" />

        <!--Sezione Delivery-->
        <AppSectionDelivery />


    </main>
</template>

<style lang="scss" scoped></style>