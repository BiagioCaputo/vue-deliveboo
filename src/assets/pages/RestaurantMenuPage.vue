<script>
import axios from 'axios';
import { store } from '../../data/store.js'
const endpoint = 'http://localhost:8000/api/restaurants/'

// Destructuring dello store
let { isLoading, cart } = store;

export default {
    name: 'RestaurantMenuPage',
    components: {},

    data() {
        return {
            isLoading,
            restaurant: '',
            dishes: [],
            cart,
        }
    },
    methods: {

        //Chiamata per ricevere dati del ristorante e dei piatti
        getRestaurantDishes() {
            isLoading = true;
            axios.get(endpoint + this.$route.params.id)
                .then((res) => {
                    const { restaurant, dishes } = res.data; // Destructuring per estrarre restaurant e dishes
                    this.restaurant = restaurant;
                    this.dishes = dishes;
                })
                .catch(err => {
                    console.log(err)
                })
                .then(() => {
                    isLoading = false;
                })
        },

        // Funzione per aggiungere un piatto al carrello dello store e a quello del LocalSorage
        addDishToCart(dish) {
            if (this.cart.length === 0 || this.cart[0].restaurant_id === dish.restaurant_id) //se il cart è vuoto oppure l'elemento che provo a salvare ha lo stesso restaurant id del primo salvato
            {
                this.cart.push(dish); //inserico il piatto nel carrello dello store
                localStorage.cart = JSON.stringify(this.cart);
            }
            else {
                console.log("No se puede") // TODO MODALE NEL CASO L'UTENTE INSERISCA IL PIATTO DI UN ALTRO RISTORANTE
            }
        },

        // Metodo per recuperare i piatti dal localStorage
        getCartItemsFromLocalStorage() {
            const cartItems = localStorage.cart ? JSON.parse(localStorage.cart) : [];
            this.cart = cartItems;
            console.log(cart)
        },
    },
    created() {
        this.getRestaurantDishes();
        this.getCartItemsFromLocalStorage();
    },
}
</script>

<template>

    <!-- Sfondo ristorante -->
    <div class="background-container" :style="{ 'background-image': 'url(' + restaurant.image + ')' }"></div>


    <div class="container-fluid">

        <!-- Sezione ristorante -->
        <div class="clearfix">
            <div class="card card-deliveboo my-5">

                <div id="logo-box">
                    <img :src="restaurant.logo" :alt="restaurant.name">
                </div>

                <div class="card-bottom mb-3">
                    <h1>{{ restaurant.activity_name }}</h1>
                    <div>
                        <div><i class="fa-solid fa-phone mb-3 me-2"></i>{{ restaurant.phone }}</div>
                        <div><i class="fa-solid fa-location-dot me-2"></i>{{ restaurant.address }}</div>

                        <!-- TODO da implementare i types del restaurant -->
                    </div>
                </div>

            </div>
        </div>

        <!-- Sezione Piatti + Sezione Ordine -->
        <div class="row">
            <!-- Sezione Piatti -->
            <div class="col-8 row">
                <div v-for="dish in dishes" :key="dish.id" class="col-12">
                    <div class="card">
                        <div class="row">
                            <div class="col-2">
                                <div class="dish-image">
                                    <img class="img-fluid" :src="dish.image" :alt="dish.name">
                                </div>
                            </div>
                            <div class="col">
                                <ul>
                                    <li><strong>Nome prodotto:</strong> {{ dish.name }}</li>
                                    <li><strong>Ingredienti:</strong>{{ dish.ingredients }}</li>
                                    <li><strong>Portata:</strong>{{ dish.course.label }} €</li>
                                    <li><strong>Prezzo:</strong>{{ dish.price }} €</li>
                                </ul>
                                <button class="btn btn-primary" @click="addDishToCart(dish)">Aggiungi al
                                    carrello</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sezione Menu -->
            <div class="col-4">
                <div v-if="cart.length > 0">
                    <h2>Carrello</h2>
                    <div v-for="item in cart" :key="item.id">
                        <p>{{ item.name }}</p>
                    </div>
                </div>
                <div v-else>
                    <p>Il carrello è vuoto.</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.background-container {
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.bg-transparent {
    background-color: transparent;
}

.bg-deliveboo {
    background-color: #00A082;
    color: #FFC244;
    border-color: #FFC244;
}

#logo-box {
    width: 100px;
    height: 100px;
    background-color: dodgerblue;
    border: 1px solid #fff;
    border-radius: 20px;

    position: absolute;
    top: -30px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
}

.card-deliveboo {
    padding: 40px;
    border: 0px;
    border-radius: 20px 70px 20px 20px;
    box-shadow: 0px 2px 24px 1px #0000001A;

    position: relative;
    bottom: 125px;



    h1 {
        margin-top: 30px;
        font-weight: 700;
    }

}
</style>