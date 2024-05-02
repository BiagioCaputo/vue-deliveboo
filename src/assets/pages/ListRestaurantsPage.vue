<script>
import AppCardRestaurant from '../../components/AppCardRestaurant.vue';
import { store } from '../../data/store.js'
import axios from 'axios';

const baseUri = 'http://localhost:8000/api';

export default {
    name: 'ListRestaurantsPage',
    components: { AppCardRestaurant },
    data: () => ({
        store,
        restaurants: [],
        categories: []
    }),

    methods: {
        fetchRestaurants() {
            // Accendo il loader
            store.isLoading = true;

            // Variabile per recuperare i dati in query string
            const queryParams = this.$route.query;

            let query;

            // Se ci sono parametri in query string, aggiungili all'URL della richiesta
            if (Object.keys(queryParams).length > 0) {
                query = `type_id[]=${queryParams.type}`;
            }

            axios.get(`${baseUri}/restaurants`).then(res => {
                this.restaurants = res.data;
                console.log(baseUri)
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
                    store.isLoading = false;
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
    <main class="container-main">
        <section class="sidebar">
            <div class="all">
                <h6>Tutti i ristoranti</h6>
                <ul>
                    <li>
                        <RouterLink :to="{ name: 'list' }" class="category-list">
                            <div class="category-img ms-2">
                                <!-- <img src="" alt=""> -->
                            </div>
                            <span class="category-link">Tutti</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="more-filters">
                <h6>Categorie</h6>
                <ul>
                    <!-- TODO Modificare parametro del RouterLink -->
                    <li v-for="category in categories" :key="category.id">
                        <RouterLink :to="{ name: 'type', query: { 'type_id[]': category.id } }" class="category-list">
                            <div class="category-img">
                                <img :src="category.image" alt="">
                            </div>
                            <span class="category-link">
                                {{ category.label }}
                            </span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </section>

        <section class="list">
            <h2>Ristoranti a domicilio</h2>
            <div class="row flex-container">
                <div class="col flex-item" v-for="restaurant in restaurants" :key="restaurant.id">
                    <RouterLink :to="{ name: 'menu', params: { id: restaurant.id } }" class="text-decoration-none">
                        <AppCardRestaurant :restaurant="restaurant" />
                    </RouterLink>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.active-link {
    background-color: #FFC244;
    border-radius: 100px;
    padding: 0 5px;
}



.container-main {
    width: 1100px;
    margin: 0 auto;

    display: flex;

    padding-top: 200px;
    padding-bottom: 50px;

    h6 {
        font-weight: 700;
        font-size: 0.9rem;
    }

    ul {
        list-style-type: none;
        padding-left: 0;
    }

    .sidebar {
        width: 20%;

        ul {
            margin-bottom: 20px;

            .category-list {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 5px;
                border-bottom: 1px solid #e4e4e4;
                padding: 5px 0;
                font-size: 15px;

                color: black;
                text-decoration: none;

                .category-img {
                    width: 35px;
                    height: 35px;
                    background-color: #fff3da;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        width: 80%;
                        height: 80%;
                    }
                }

                .category-link {

                    border-radius: 100px;
                    padding: 0 5px;

                    &:hover {
                        background-color: #FFC244;
                    }
                }

            }
        }

    }

    .list {
        width: 80%;

        h2 {
            font-weight: 700;
            padding-left: 1rem;
        }

        .row.flex-container {
            display: flex;
            margin: 0 -1rem;
            flex-wrap: wrap;

            .col.flex-item {
                margin: 1rem;
                flex-basis: calc(100% / 3 - 2rem);
                flex-grow: 0;
            }
        }
    }
}
</style>