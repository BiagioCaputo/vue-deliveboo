<script>
import { store } from '../../data/store.js'
export default {
    name: "CartPage",
    components: {
    },
    data() {
        return {
            store,
        }
    },
    methods: {

        //funzione per svuotare il carrello
        emptyCart() {
            this.store.cart = [];
        }


    },
    mounted() {
        this.store.cart = localStorage.cart ? JSON.parse(localStorage.cart) : []; //se ho dati nel localStorage li salvo nel cart dello store per poter interagire con esso con le altre funzioni del carrello,
        //altrimenti salvo un array vuoto nel cart dello store

    },
}
</script>

<template>
    <div class="cart-container container">
        <h1 class="text-center my-5">Carrello</h1>

        <!-- se il carrello non è vuoto visualizzo gli elementi -->
        <div v-if="store.cart && store.cart.length > 0">
            <h2>Il carrello contiene {{ store.cart.length }} elementi:</h2>

            <div v-for="dish in store.cart">{{ dish.name }}</div>

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