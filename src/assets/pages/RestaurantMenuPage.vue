<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { store } from '../../data/store.js'
const endpoint = 'http://localhost:8000/api/restaurants/'

export default {
    name: 'RestaurantMenuPage',

    data() {
        return {
            store,
            restaurant: null
        }
    },
    methods: {
        getRestaurantDishes() {
            store.isLoading = true;
            axios.get(endpoint + this.$route.params.id)
                .then((res) => {
                    const { restaurant, dishes } = res.data; // Destructuring per estrarre restaurant e dishes
                    console.log(restaurant, dishes)
                    this.restaurant = restaurant; // Assegna restaurant al tuo dato
                    this.dishes = dishes; // Assegna dishes al tuo dato
                })
                .catch(err => {
                    console.log(err)
                })
                .then(() => {
                    store.isLoading = false;
                })
        }
    },
    created() {
        this.getRestaurantDishes();
    }
}
</script>

<template>
    <!-- jumbotron -->
    <img class="restaurant-bg" :src="restaurant.image" :alt="restaurant.name">

    <!-- sezione ristorante -->
    <div class="container-md">
        <div class="row p-0">
            <div class="col-xl-9">
                <!-- titolo ristorante -->
                <div class="restaurant-title rounded-start-3 rounded-bottom-3 p-2">
                    <div class="logo rounded-2 d-flex justify-content-center align-itmes-center">
                        <img :src="restaurant.logo" :alt="restaurant.name">
                    </div>
                    <div class="restaurant-name">{{ restaurant.activity_name }}</div>
                    <div class="icons">Icone varie</div>
                </div>

                <div class="row m-0 p-0">
                    <!-- lista Portate -->
                    <div class="col-3 yellow sections-menu m-2 ms-0 rounded-3">
                        <h1>Portate</h1>
                        <ul>
                            <li>Antipasti</li>
                            <li>Primi</li>
                            <li>Secondi</li>
                            <li>Contorni</li>
                            <li>Dolci</li>
                            <li>Bevande</li>
                        </ul>
                    </div>


                    <!-- lista piatti -->
                    <div class="col green dishes-section m-2 me-0 rounded-3 overflow-y-scroll">
                        <h1>Piatti</h1>
                        <div class="row">
                            <div v-for="dish in dishes" :key="dish.id" class="col">
                                <div class="card">
                                    <img class="card-img-top" :src="dish.image" :alt="dish.name">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ dish.name }}</h5>
                                        <p class="card-text">{{ dish.description }}</p>
                                        <p class="card-text">{{ dish.course.label }}</p>
                                        <p class="card-text">{{ dish.price }}</p>
                                        <a href="#" class="btn btn-primary">Aggiungi al carrello</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Carrello da implementare in futuro! -->
            <!-- <div class="col blue order-card rounded-3 d-flex flex-column justify-content-evenly align-items-center p-4">
                <h2>Your order</h2>
                <img src="/public/img/astronaut-grey-scale.svg" alt="image">
                <p>You've not added any products yet. When you do, you'll see them here!</p>
            </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.restaurant-bg {
    width: 100%;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    object-fit: cover;
    max-height: 400px;
    position: relative;
    z-index: -1;


}

.container-md {
    margin-top: -120px;
    position: relative;
    height: 2000px;
    z-index: 0;

    .row {
        height: 500px;

        .restaurant-title {
            width: 100%;
            height: 200px;
            background-color: rgb(255, 255, 255);
            border-top-right-radius: 100px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, .1);

            .logo {
                width: 120px;
                height: 120px;
                background-color: aqua;
                border: 1px solid black;
                margin-left: 50px;
                margin-top: -105px;
            }
        }

        .dishes-section {
            box-shadow: 0 3px 10px rgba(0, 0, 0, .1);
            background-color: white;

        }

        .sections-menu {
            box-shadow: 0 3px 10px rgba(0, 0, 0, .1);
            background-color: white;

        }

        .order-card {
            border-radius: 10px;
            height: 400px;
            background-color: white;
            box-shadow: 0 3px 10px rgba(0, 0, 0, .1);

            h2 {
                font-weight: bold;
            }

            p {
                text-align: center;
                padding-right: 30px;
                padding-left: 30px;
            }

        }
    }



}


@media screen and (max-width: 576px) {


    .row {
        padding: 0;

        .order-card {
            display: none;
        }

        .sections-menu {
            display: none;
        }

        .col-lg-9 {
            margin: 0;
            padding: 0;
        }
    }

    .container-md {
        margin: 0;
        padding: 0;
    }

}
</style>