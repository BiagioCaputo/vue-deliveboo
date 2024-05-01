<script>
import { store } from '../../data/store.js'
export default {
    name: 'NotfoundPage',
    data: () => ({
        store
    })
}
</script>

<template>
    <main>

        <div class="container-fluid d-flex justify-content-center align-items-center">
            <div class="animated-image">
                <img class="pane-sopra" src="/img/jumbo-food-pane-sopra.png" alt="immagine che fluttua">
                <img class="carne-sopra" src="/img/jumbo-food-carne-sopra.png" alt="immagine che fluttua">
                <img class="carne-sotto" src="/img/jumbo-food-carne-sotto.png" alt="immagine che fluttua">
                <img class="pane-sotto" src="/img/jumbo-food-pane-sotto.png" alt="immagine che fluttua">
                <img class="cetriolo" src="/img/jumbo-food-cetriolo.png" alt="immagine che fluttua">
                <img class="pomodoro" src="/img/jumbo-food-pomodoro.png" alt="immagine che fluttua">
            </div>
            <div class="text-section ">
                <h1>Mmm..., cos'è un 404?</h1>
                <p>Tranquillo, non si è rotto internet.</p>
                <p>Semplicentemente ció che cerchi non esiste.</p>
                <p>O forse si?</p>
                <RouterLink class="custom-primary-btn router-link" :to="{ name: 'home' }">
                    Torna alla Home
                </RouterLink>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-image: linear-gradient(#FFC244 40%, white);

}

.container-fluid {
    height: 800px;
}

.animated-image {
    position: relative;
    width: 500px;
    height: 400px;
    ;


    img {
        position: absolute;
    }
}
</style>