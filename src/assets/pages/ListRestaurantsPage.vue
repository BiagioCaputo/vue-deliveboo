<script>
import { RouterLink } from 'vue-router';
import { store } from '../../data/store.js'
import axios from 'axios';

const baseUri = 'http://localhost:8000/api/';
const endpoint = 'http://localhost:8000/api/restaurants';
const Types = 'http://localhost:8000/api/types';

export default {
    name: 'ListRestaurantsPage',
    data: () => ({
        store,
        restaurants: [],
        categories: []
    }),

    methods: {
        fetchRestaurants() {
            axios.get(endpoint).then(res => {
                this.restaurants = res.data;
            })
        },

        fetchTypes() {
            axios.get(Types).then(res => {
                this.categories = res.data;
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
                    <li class="category-list">
                        <div class="category-img">
                            <!-- <img src="" alt=""> -->
                        </div>
                        <span>Filtro</span>
                    </li>
                </ul>
            </div>
            <div class="more-filters">
                <h6>Categorie</h6>
                <ul>
                    <li v-for="category in categories" :key="category.id">
                        <RouterLink :to="{ name: 'category', params: { type: category.id } }" class="category-list">
                            <div class="category-img">
                                <img :src="category.image" alt="">
                            </div>
                            <span>{{ category.label }}</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </section>
        <section class="list">
            <h2>Ristoranti a domicilio</h2>
            <div class="row flex-container">
                <div class="col flex-item" v-for="restaurant in restaurants" :key="restaurant.id">
                    <div class="card-restaurant">
                        <div class="img-restaurant">
                            <img :src="restaurant.image" :alt="restaurant.activity_name">
                        </div>
                        <div class="text-restaurant">
                            <h5 class="mb-0">{{ restaurant.activity_name }}</h5>
                            <!-- <div class="category">Categoria</div> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
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

        .card-restaurant {
            width: 100%;
            height: 200px;

            .img-restaurant {
                width: 100%;
                height: 80%;
                border-radius: 10px;

                background-color: #fff3da; //bg in caso di assenza img

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
            }

            .text-restaurant {
                padding: 5px 5px 0 5px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                h5 {
                    font-weight: 800;
                    font-size: 1.1rem;
                }

                .category {
                    color: #7b7d7b;
                    font-size: 0.7rem;
                    font-weight: 800;

                    background-color: #f5f5f5;
                    padding: 0 5px;
                    border-radius: 5px;
                }
            }
        }

    }
}
</style>