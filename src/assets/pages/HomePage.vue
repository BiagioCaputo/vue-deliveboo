<script>
import AppJumbo from '../../components/AppJumbo.vue';
import AppSectionRestaurants from '../../components/AppSectionRestaurants.vue';
import AppSectionDelivery from '../../components/AppSectionDelivery.vue';
import { store } from '../../data/store.js';
import axios from 'axios';

const baseUri = 'http://localhost:8000/api';

export default {
    name: 'HomePage',
    components: { AppJumbo, AppSectionRestaurants, AppSectionDelivery },
    data: () => ({
        store,
        restaurants: [],
        categories: [],
        selectedCategories: []
    }),

    methods: {
        fetchRestaurants() {
            store.isLoading = true;
            let url = `${baseUri}/restaurants`;

            // Se ci sono categorie selezionate, aggiungile alla query
            if (this.selectedCategories.length > 0) {
                const categoryQuery = this.selectedCategories.map(catId => `type_id[]=${catId}`).join('&');
                url = `${baseUri}/types/restaurants?${categoryQuery}`;
            }
            console.log('URL della richiesta:', url); // Controlla l'URL della richiesta

            axios.get(url)
                .then(res => {
                    this.restaurants = res.data;
                    console.log('Risposta API:', res.data); // Controlla la risposta della chiamata API
                })
                .catch(error => {
                    console.error('Errore nel recupero dei ristoranti:', error);
                })
                .then(() => {
                    store.isLoading = false;
                });
        },

        // Gestione del clic su una categoria
        toggleCategory(categoryId) {
            // Se la categoria è già selezionata, rimuovila, altrimenti aggiungila
            if (this.selectedCategories.includes(categoryId)) {
                this.selectedCategories = this.selectedCategories.filter(id => id !== categoryId);
            } else {
                this.selectedCategories.push(categoryId);
            }
            // console.log(this.selectedCategories)
            // Aggiorna i ristoranti in base alle categorie selezionate
            this.fetchRestaurants();
        },

        // Chiamata API per ottenere le categorie di ristoranti
        fetchTypes() {
            store.isLoading = true;
            axios.get(`${baseUri}/types`)
                .then(res => {
                    this.categories = res.data;
                })
                .catch(error => {
                    console.error('Errore nel recupero delle categorie di ristoranti:', error);
                })
                .then(() => {
                    store.isLoading = false;
                });
        }

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
        <section class="category">
            <div class="container-desktop">

                <h1 class="title-category text-center">Le nostre categorie</h1>
                <div class="d-flex flex-wrap justify-content-center gap-4 mt-5">

                    <div v-for="category in categories" :key="category.id">

                        <div :class="{ 'active-link': selectedCategories.includes(category.id) }" class="pills"
                            @click="toggleCategory(category.id)">
                            {{ category.label }}
                        </div>
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