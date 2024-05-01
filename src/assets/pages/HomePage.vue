<script>
import { RouterLink } from 'vue-router';
import { store } from '../../data/store.js'
import axios from 'axios';

const endpoint = 'http://localhost:8000/api/restaurants';
const Types = 'http://localhost:8000/api/types';

export default {
    name: 'HomePage',
    data: () => ({
        store,
        restaurants: [],
        categories: []
    }),

    methods: {
        fetchRestaurants() {
            store.isLoading = true;
            axios.get(endpoint).then(res => {
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
            axios.get(Types).then(res => {
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
        <!--Jumbotron-->
        <div class="jumbotron">
            <div class="jumbo-content container-desktop">
                <div class="box-img">
                    <img src="/img/jumbo-food.png" alt="Food">
                </div>
                <div class="text-center">
                    <h1 class="jumbo-title">Consegna di cibo a domicilio e molto altro</h1>
                    <p class="jumbo-subtitle">Ordina dai tuoi ristoranti preferiti, in pochi minuti a casa tua.</p>

                    <RouterLink class="custom-primary-btn router-link" :to="{ name: 'list' }">
                        Ordina subito!
                    </RouterLink>
                </div>
            </div>
        </div>
        <img src="/img/jumbotron-wave-desktop.svg" alt="jumbo-wave">
        <!---------------------------->

        <!--Section Restaurant-->
        <section class="restaurant container-desktop">
            <h1 class="text-center my-5">
                I ristoranti della tua città
                <i class="fa-solid fa-utensils"></i>
            </h1>

            <div class="text-center">
                <div class="flex-container">
                    <div v-for="restaurant in restaurants">

                        <RouterLink :to="{ name: 'menu', params: { id: restaurant.id } }" class="col flex-item">
                            <img :src="restaurant.image" :alt="restaurant.activity_name" class="mask-img">
                            <div class="label-rest">{{ restaurant.activity_name }}</div>
                        </RouterLink>

                    </div>
                </div>

            </div>

        </section>
        <!-------------------------->

        <!--Section category-->
        <section class="category">
            <div class="container-desktop">

                <h1 class="title-category text-center">Le nostre categorie</h1>
                <div class="category-pills d-flex flex-wrap justify-content-center gap-4 mt-5">

                    <div v-for="category in categories">
                        <RouterLink :to="{ name: 'category', params: { type: category.id } }" class="pills">
                            {{ category.label }}
                        </RouterLink>
                    </div>

                </div>
            </div>
        </section>
        <img src="/img/jumbotron-wave-desktop.svg" alt="jumbo-wave">
        <!--------------------->


        <!--Sezione Delivery-->
        <section class="delivery text-center container-desktop">
            <h1 class="delivery-title">Consegniamo tutto ciò che vuoi</h1>
            <div class="delivery-group mb-4">
                <div class="delivery-item">
                    <img src="/img/restaurants.svg" alt="">
                    <div>
                        <h5>I migliori ristoranti della tua città</h5>
                        <p>Approfitta di un'ampia varietà di ristoranti per ordinare i tuoi piatti preferiti oppure
                            <mark>
                                <span class="marked">trovarne di nuovi nei dintorni!</span>
                            </mark>
                        </p>
                    </div>
                </div>
                <div class="delivery-item">
                    <img src="/img/delivery.svg" alt="">
                    <div>
                        <h5>Consegna rapida</h5>
                        <p>Siamo velocissimi! Ordina o invia qualsiasi cosa nella tua città:
                            <mark>
                                <span class="marked">lo
                                    riceverai nel giro di qualche minuto</span>
                            </mark>
                        </p>
                    </div>
                </div>
                <div class="delivery-item">
                    <img src="/img/groceries.svg" alt="">
                    <div>
                        <h5>Consegna della spesa e altro</h5>
                        <p>Trovo tutto ciò che ti serve da
                            <mark>
                                <span class="marked">supermercati, negozi, farmacie,
                                    fioristi</span>
                            </mark>
                            ... se è nella tua città, puoi ordinarlo e fartelo consegnare.
                        </p>
                    </div>
                </div>
            </div>

            <!--Button RouterLink-->
            <RouterLink class="custom-primary-btn router-link" :to="{ name: 'list' }">
                Esplora i locali
            </RouterLink>

        </section>
        <!----------->

    </main>
</template>

<style lang="scss" scoped>
main {
    height: fit-content;

    .container-desktop {
        width: 1100px;
        margin: 0 auto;
    }

    /*Wave img */
    img {
        width: 100%;
    }

    .jumbotron {
        background-color: #FFC244;
        padding-top: 200px;
        padding-bottom: 20px;

        .jumbo-content {
            width: 70%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;


            .box-img {
                width: 450px;
            }

            .jumbo-title {
                width: 70%;
                margin: 0 auto;
                font-size: 3.5rem;
                font-weight: 700;
            }
        }

    }

    section {
        padding-top: 50px;
    }


    /* Section Restaurant */
    .restaurant {
        h1 {
            font-weight: 700;
        }

        .flex-container {
            display: flex;
            margin: 0 -1rem;
            flex-wrap: wrap;
            justify-content: center;

            .col.flex-item {
                margin: 1rem;
                flex-basis: calc(100% / 4 - 2rem);

                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                text-decoration: none;
                color: black;

                &:hover {
                    transform: scale(1.3);
                    color: #fff3da;
                }
            }
        }

        .mask-img {
            width: 200px;
            height: 111px;
            mask-image: url('/img/partners-mask.svg');
            mask-repeat: no-repeat;
            mask-position: 35px 0;
            object-fit: fill;
        }



        .label-rest {
            background-color: #FFC244;
            width: fit-content;
            padding: 5px 15px;
            border-radius: 10px;
            font-weight: 700;

            position: relative;
            bottom: 20px;
        }
    }
}

/* Section Category */
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

/* Section Delivery */
.delivery {
    padding-bottom: 60px;

    .delivery-title {
        font-weight: 700;
        margin-bottom: 50px;
    }

    .delivery-group {
        display: flex;
        justify-content: center;
        gap: 150px;

        .delivery-item {
            width: 350px;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 200px;
            }

            h5 {
                margin-top: 20px;
                font-weight: 700;
            }

            mark {
                height: 10px;
                background-color: #FFC244;
                border-radius: 100px;
                -webkit-box-decoration-break: clone;
                padding: 0 5px;
                font-size: 8px;
            }

            .marked {
                font-size: 16px;
            }
        }
    }
}
</style>