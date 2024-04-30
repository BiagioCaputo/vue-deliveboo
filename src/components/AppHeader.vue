<script>
import { RouterLink } from 'vue-router';
import { store } from '../data/store.js'


export default {
    name: 'AppHeader',
    components: {},

    data: () => ({
        // Props carrello
        items: [],
        isVisible: false,
        store,
    })
}
</script>

<template>
    <header>
        <div class="container h-100">
            <div class="logo">
                <RouterLink class="router-link" :to="{ name: 'home' }">
                    <h1 class="logo-text">DeliveBoo
                        <img src="/img/glovo_logo.png" alt="Logo" class="logo-img">
                    </h1>
                </RouterLink>
                <Router-link to="/cart">
                    <div class="cart-shopping">
                        <i class="fa-solid fa-cart-shopping position-relative">
                            <span class="cart-number-items fw-bold">{{ store.cart.length }}</span>
                        </i>
                    </div>
                </Router-link>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

header {
    height: 120px;
    background-color: #FFC244;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;

    .logo {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;


        .logo-text {
            font-family: "Quicksand", sans-serif;
            color: #00A082;
            font-weight: 700;
            font-size: 2.3rem;

            .logo-img {
                height: 30px;
                width: auto;
                position: relative;
                bottom: 15px;
                right: 25px;
            }
        }
    }
}

//stile carrello
.cart-shopping {
    font-size: 2.1rem;
    color: $secondary-color;
    border-radius: 10px;

    &:hover {
        color: gray;
    }

    .cart-number-items {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 3px;
        left: 15px;
        font-size: 0.5rem;
        color: white;
        border: 1px solid white;
        background-color: $primary-color;
        width: 8px;
        height: 8px;
        padding: 6px;
        border-radius: 50%;
    }
}
</style>