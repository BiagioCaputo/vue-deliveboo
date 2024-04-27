<script>
import { store } from '../../data/store.js'
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/restaurants';
export default {
    name: 'ListRestaurantsPage',
    data: () => ({
        store,
        restaurants: []
    }),

    methods: {
        fetchRestaurants() {
            axios.get(endpoint).then(res => {
                this.restaurants = res.data;
            })
        }
    },

    created() {
        this.fetchRestaurants();
    }
}
</script>

<template>
    <main class="container-main">
        <section class="sidebar">
            <div class="popular-filters">
                <h6>Filtri popolari</h6>
                <ul>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>

                </ul>
            </div>
            <div class="more-filters">
                <h6>Altri filtri</h6>
                <ul>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="list">
            <h2>Ristoranti a domicilio a ?</h2>
            <div class="row flex-container">
                <div class="col flex-item" v-for="restaurant in restaurants">
                    <div class="card-restaurant">
                        <div class="img-restaurant">
                            <img :src="restaurant.image" :alt="restaurant.activity_name">
                        </div>
                        <div class="text-restaurant">
                            <h5 class="mb-0">{{ restaurant.activity_name }}</h5>
                            <div class="category">Categoria</div>
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

            li {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 5px;
                border-bottom: 1px solid #e4e4e4;
                padding: 5px 0;
                font-size: 15px;

                .category-img {
                    width: 35px;
                    height: 35px;
                    background-color: #fff3da;
                    border-radius: 50%;
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
                    font-size: 0.8rem;
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