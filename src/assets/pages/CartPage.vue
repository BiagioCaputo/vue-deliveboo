<script>
import { store } from '../../data/store.js'
export default {
    name: "CartPage",
    components: {
    },
    data() {
        return {
            store,
            totalPrice: 0,
        }
    },
    methods: {

        //funzione per svuotare il carrello
        emptyCart() {
            this.store.cart = [];
            localStorage.cart = this.store.cart;
            window.location.reload(); // Refresha la pagina
        },

        // Funzione per calcolare il prezzo totale
        calculateTotalPrice() {
            let totalPrice = 0;
            for (let dish of this.store.cart) {
                totalPrice += parseFloat(dish.price);
            }
            this.totalPrice = totalPrice.toFixed(2);
        }


    },
    mounted() {
        //se ho dati nel localStorage li salvo nel cart dello store per poter interagire con esso con le altre funzioni del carrello, altrimenti salvo un array vuoto nel cart dello store
        this.store.cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
        // Calcola il prezzo totale
        this.calculateTotalPrice();

    },
}
</script>

<template>
    <div class="cart-container container">
        <h1 class="text-center my-5">Carrello</h1>

        <!-- se il carrello non è vuoto visualizzo gli elementi -->
        <div v-if="store.cart && store.cart.length > 0">
            <h2>Il carrello contiene {{ store.cart.length }} elementi:</h2>

            <div v-for="dish in store.cart">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="dish.image" :alt="dish.name" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ dish.name }}</h5>
                                <p class="card-text">{{ dish.ingredients }}</p>
                                <p class="card-text">{{ dish.price }} €</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mostra il prezzo totale -->
            <div><strong>Prezzo Totale:</strong> {{ totalPrice }} €</div>

            <!-- Bottone per svuotare il carrello -->
            <button class="btn btn-danger my-5" @click="emptyCart()">Svuota carrello</button>
        </div>

        <div v-else>
            <h2>Nessun prodotto inserito nel carrello</h2>
        </div>
    </div>


</template>

<style lang="scss">
.cart-container {
    padding-top: 200px;
    padding-bottom: 50px;
}
</style>