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

    },
    mounted() {

    },
}
</script>

<template>
    <div class="cart-container">
        <h1>Carrello</h1>
    </div>


</template>

<style lang="scss">
.cart-container {
    margin: 0 auto;
    max-width: 1440px;

    padding-top: 200px;
    padding-bottom: 50px;
}
</style>