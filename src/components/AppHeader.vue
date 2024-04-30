<script>
import { RouterLink } from 'vue-router';
import AppCart from './AppCart.vue';


export default {
    name: 'AppHeader',
    components: { AppCart },

    data: () => ({
        // Props carrello
        items: [],
        isVisible: false,
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
                <AppCart :items="items" :isVisible="isVisible" />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
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
</style>