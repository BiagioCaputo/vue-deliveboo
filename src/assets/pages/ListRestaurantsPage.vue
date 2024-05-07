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
        restaurants: { data: [], links: [] },
        categories: [],
        selectedCategories: [] // Array per memorizzare gli ID delle categorie selezionate
    }),

    methods: {
        // Chiamata API per ottenere tutti i ristoranti
        fetchRestaurants(endpoint) {
            store.isLoading = true;
            let url = `${baseUri}/restaurants`;
            if (endpoint) url = endpoint;
            // Se ci sono categorie selezionate, aggiungile alla query
            if (this.selectedCategories.length > 0) {
                const categoryQuery = this.selectedCategories.map(catId => `type_id[]=${catId}`).join('&');
                url = `${baseUri}/types/restaurants?${categoryQuery}`;
            }


            axios.get(url)
                .then(res => {
                    const { data, links } = res.data
                    this.restaurants = { data, links };

                })
                .catch(error => {
                    console.error('Errore nel recupero dei ristoranti:', error);
                })
                .then(() => {
                    store.isLoading = false;
                });

        },
        resetRestaurants() {

            this.selectedCategories = [],
                this.fetchRestaurants()
        },
        // Gestione del clic su una categoria
        toggleCategory(categoryId) {
            // Se la categoria è già selezionata, rimuovila, altrimenti aggiungila
            if (this.selectedCategories.includes(categoryId)) {
                this.selectedCategories = this.selectedCategories.filter(id => id !== categoryId);
            } else {
                this.selectedCategories.push(categoryId);
            }
            // Aggiorna i ristoranti in base alle categorie selezionate
            this.fetchRestaurants();
            console.log(this.selectedCategories);
        },

        // Chiamata API per ottenere le categorie di ristoranti
        fetchTypes() {
            axios.get(`${baseUri}/types`)
                .then(res => {
                    this.categories = res.data;
                })
                .catch(error => {
                    console.error('Errore nel recupero delle categorie di ristoranti:', error);
                });
        }
    },

    created() {
        // Recupero l'ID del tipo dal localStorage
        const selectedTypeId = localStorage.getItem('selectedTypeId');
        if (selectedTypeId) {
            // Aggiungo direttamente l'ID del tipo all'array selectedCategories
            this.selectedCategories.push(parseInt(selectedTypeId));
            // Rimuovo l'ID del tipo dal localStorage
            localStorage.removeItem('selectedTypeId');
        }

        this.fetchTypes();
        this.fetchRestaurants();
        console.log(this.selectedCategories);
    },
}
</script>
<template>
    <main class="container-main">
        <section class="sidebar mx-3">
            <div class="all">
                <h6>Tutti i ristoranti</h6>
                <ul>
                    <li>
                        <div class="category-list">
                            <div class="category-img">
                                <!-- <img src="" alt=""> -->
                            </div>
                            <span class="category-link" :class="{ 'active-link': !selectedCategories.length }"
                                @click="(resetRestaurants)">Tutti</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="more-filters">
                <h6>Categorie</h6>
                <ul>
                    <li v-for="category in categories" :key="category.id">
                        <div class="category-list" @click="toggleCategory(category.id)">
                            <div class="category-img">
                                <img :src="category.image" alt="">
                            </div>
                            <span class="category-link"
                                :class="{ 'active-link': selectedCategories.includes(category.id) }">
                                {{ category.label }}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <section class="list me-3">
            <h2 v-if="restaurants.data.length > 0">Ristoranti a domicilio</h2>
            <div class="row flex-container">

                <nav v-if="restaurants.data.length != 0" class="col-12 z-0 d-flex justify-content-start ms-3">

                    <ul class="pagination">
                        <li v-for="link in restaurants.links" :key="link.label" class="page-item"
                            :class="[{ active: link.active }, { disabled: !link.url }]">
                            <button class="page-link" :disabled="!link.url" v-html="link.label"
                                @click="fetchRestaurants(link.url)"></button>
                        </li>
                    </ul>
                </nav>

                <!--Nessun risultato-->
                <div v-if="restaurants.data.length == 0" class="col no-result text-center">
                    <h1 class="mb-5">
                        Non ci sono ristoranti per le categorie cercate
                        <i class="fa-regular fa-face-sad-tear"></i>
                    </h1>
                    <img src="/img/astronaut-grey-scale.svg" alt="Astronauta">
                </div>
                <!--Lista ristoranti-->
                <div v-else class="col flex-item" v-for="restaurant in restaurants.data" :key="restaurant.id">
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
    width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-top: 150px;
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
        max-width: 20%;



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

                &:hover {
                    cursor: pointer;
                }

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

                @media screen and (max-width: 768px) {
                    .category-img {
                        display: none;
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
        margin-right: 30px;

        h2 {
            font-weight: 700;
            padding-left: 1rem;
        }

        .row.flex-container {
            display: flex;
            margin: 0 -1rem;
            flex-wrap: wrap;



            .flex-item {
                margin: 1rem;
                flex-shrink: 0;
                flex-grow: 0;
                flex-basis: calc(100% / 3 - 2rem);
                min-width: 300px;
            }
        }
    }


    .no-result {

        h3 {
            text-align: center;
        }

        img {
            width: 600px;
        }
    }

}

@media screen and (max-width: 1280px) {
    .container-main {
        width: 1000px;

        .no-result img {
            width: 500px;
        }
    }
}

@media screen and (max-width: 1020px) {
    .container-main {
        width: 800px;

        .no-result img {
            width: 400px;
        }
    }
}

@media screen and (max-width: 768px) {
    .container-main {
        width: 600px;

        .no-result img {
            width: 300px;
        }

    }
}

@media screen and (max-width: 480px) {
    .container-main {
        width: 400px;

        .no-result img {
            width: 200px;
        }
    }
}
</style>