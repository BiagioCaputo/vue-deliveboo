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
            showModal: false, // Flag Modale
            totalPrice: 0
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
                this.calculateTotalPrice(); //all'aggiunta di un piatto nel carrello ricarico il prezzo totale
            }
            else {
                this.showModal = true; // TODO MODALE NEL CASO L'UTENTE INSERISCA IL PIATTO DI UN ALTRO RISTORANTE
            }
        },

        // Funzione per calcolare il prezzo totale
        calculateTotalPrice() {
            let totalPrice = 0;
            for (let item of this.cart) {
                totalPrice += parseFloat(item.price);
            }
            this.totalPrice = totalPrice.toFixed(2);
        },

        emptyCartAndCloseModal() {
            this.cart = [];
            localStorage.cart = JSON.stringify(this.cart);
            this.showModal = false;
        },

        // Metodo per recuperare i piatti dal localStorage
        getCartItemsFromLocalStorage() {
            const cartItems = localStorage.cart ? JSON.parse(localStorage.cart) : [];
            this.cart = cartItems;
            //console.log(cart)
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


    <div class="container">

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
                    <p><strong>Prezzo Totale: </strong>{{ totalPrice }} €</p>
                    <div v-for="item in cart" :key="item.id">
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img :src="item.image" :alt="item.name" class="img-fluid rounded-start">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ item.name }}</h5>
                                        <p class="card-text">{{ item.ingredients }}</p>
                                        <p class="card-text">{{ item.price }} €</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <p>Il carrello è vuoto.</p>
                </div>
            </div>
        </div>
    </div>


    <!--Modale se l'utente prova ad ordinare da più ristoranti -->
    <div class="modal" :class="{ 'is-active': showModal }">
        <div class="modal-background"></div>
        <div class="modal-card my-modal-bg glass ">
            <header class="modal-card-head">
                <p class="modal-card-title fw-bold fs-3">Attenzione</p>
            </header>
            <section class="modal-card-body fs-4">
                <p>Non puoi ordinare da più ristoranti contemporaneamente. Vuoi svuotare il carrello?</p>
            </section>
            <footer class="modal-card-foot bg-transparent">
                <button class="btn btn-danger is-success me-3" @click="emptyCartAndCloseModal">Sì</button>
                <button class="btn btn-secondary" @click="showModal = false">No</button>
            </footer>
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

//Stile Modale
.modal {
    background-color: rgba(0, 0, 0, 0.7);
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.modal.is-active {
    display: flex;
}

.my-modal-bg {
    background-color: rgba(243, 131, 4, 0.973);
    padding: 20px;
    border-radius: 15px;
    color: white;
}
</style>