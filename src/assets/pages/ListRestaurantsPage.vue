<script>
import { store } from '../../data/store.js'
export default {
    name: 'ListRestaurantsPage',
    data: () => ({
        store
    })
}
</script>

<template>
    <main class="container-main">

        <h1>ristoranti</h1>
    </main>
</template>

<style lang="scss" scoped>
.container-main {
    width: 1100px;
    margin: 0 auto;

    padding-top: 200px;
    padding-bottom: 200px;
    /* da togliere*/
}
</style>