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

        <div class="container-fluid d-flex justify-content-center align-items-center flex-wrap">
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

h1 {
    font-weight: bolder;
}

p {
    font-weight: bold;
}

.container-fluid {
    height: 1000px;
}

.animated-image {
    position: relative;
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;


    .pane-sopra {
        position: absolute;
        animation-name: loop-panesopra;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    .carne-sopra {
        position: absolute;
        animation-name: loop-carnesopra;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        z-index: 2;
    }

    .carne-sotto {
        position: absolute;
        animation-name: loop-carnesotto;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        z-index: 1;

    }


    .pane-sotto {
        position: absolute;
        animation-name: loop-panesotto;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    .cetriolo {
        position: absolute;
        animation-name: cetriolo;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    .pomodoro {
        position: absolute;
        animation-name: pomodoro;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes loop-panesopra {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translate(-3px, 25px);

        }

        100% {
            transform: translateY(0px);

        }
    }

    @keyframes loop-carnesopra {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translate(-1px, 19px);

        }

        100% {
            transform: translateY(0px);

        }
    }

    @keyframes loop-carnesotto {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(10px);

        }

        100% {
            transform: translateY(0px);

        }
    }

    @keyframes loop-panesotto {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(7px);

        }

        100% {
            transform: translateY(0px);

        }
    }

    @keyframes cetriolo {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translate(-12px, 15px);

        }

        100% {
            transform: translateY(0px);

        }
    }

    @keyframes pomodoro {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translate(15px, -7px);

        }

        100% {
            transform: translateY(0px);

        }
    }

}
</style>