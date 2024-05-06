<script>
import AppJumbo from '../../components/AppJumbo.vue';
import AppSectionRestaurants from '../../components/AppSectionRestaurants.vue';
import AppSectionDelivery from '../../components/AppSectionDelivery.vue';
import { store } from '../../data/store.js';
import axios from 'axios';
import { router } from '../../router/index.js'; //importo il router per poter spostarmi nella lista categorie all'interno di una funzione

const baseUri = 'http://localhost:8000/api';

export default {
    name: 'HomePage',
    components: { AppJumbo, AppSectionRestaurants, AppSectionDelivery },
    data: () => ({
        store,
        popularRestaurants: [],
        popularTypes: [],
    }),

    methods: {
        //Chiamata per i ristoranti con più ordini e le loro categorie
        fetchPopularRestaurants() {
            store.isLoading = true;
            axios.get(`${baseUri}/popular-restaurants`)
                .then(res => {
                    this.popularRestaurants = res.data.popularRestaurants;
                    this.popularTypes = res.data.popularTypes;
                })
                .catch(error => {
                    console.error('Errore nel recupero dei ristoranti:', error);
                })
                .then(() => {
                    store.isLoading = false;
                });
        },

        saveTypeInLS(typeId) {
            // Salviamo l'ID del tipo nel localStorage
            localStorage.setItem('selectedTypeId', typeId);
            // Vai alla pagina della lista dei ristoranti
            router.push({ name: 'list' });
        }

    },

    created() {
        this.fetchPopularRestaurants();
    }
}
</script>

<template>
    <main>
        <!-- Jumbo -->
        <AppJumbo :title="'Consegna di cibo a domicilio e molto altro'"
            :subtitle="'Ordina dai tuoi ristoranti preferiti, in pochi minuti a casa tua.'" />

        <!--Section Restaurant-->
        <AppSectionRestaurants :restaurants="popularRestaurants" />

        <!--Section Type-->
        <section class="category">
            <div class="container-desktop">

                <h1 class="title-category text-center">Le tipologie più cercate</h1>
                <div class="d-flex flex-wrap justify-content-center gap-4 mt-5">

                    <div v-for="type in popularTypes" :key="type.id" @click="saveTypeInLS(type.id)" class="pills">
                        {{ type.label }}
                    </div>

                </div>
            </div>
        </section>
        <img class="wave-img" src="/img/jumbotron-wave-desktop.svg" alt="jumbo-wave">

        <!--Sezione Delivery-->
        <AppSectionDelivery />


    </main>
</template>

<style lang="scss" scoped>
.category {
    background-image: url('/img/main-waves-desktop.svg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 500px;

    h1 {
        font-weight: 700;
        padding-top: 190px;
    }

    .pills.active-link {
        background-color: #00A082;
        color: #fff3da;
    }

    .pills {
        background-color: #fff3da;
        padding: 10px 15px;
        border-radius: 50px;
        font-weight: 700;
        text-decoration: none;
        color: black;

    }

    .pills:hover {
        background-color: #00A082;
        color: #fff3da;
        cursor: pointer;
    }

}
</style>