<script>
export default {
    // Javascript Logic
    name: 'Jumbo',
    props: {
        title: String,
        subtitle: String
    }
};
</script>

<template>
    <!--Jumbotron-->
    <div class="jumbotron">
        <div class="jumbo-content container-desktop pb-4">
            <div class="animated-image">
                <img class="pane-sopra" src="/img/jumbo-food-pane-sopra.png" alt="immagine che fluttua">
                <img class="carne-sopra" src="/img/jumbo-food-carne-sopra.png" alt="immagine che fluttua">
                <img class="carne-sotto" src="/img/jumbo-food-carne-sotto.png" alt="immagine che fluttua">
                <img class="pane-sotto" src="/img/jumbo-food-pane-sotto.png" alt="immagine che fluttua">
                <img class="cetriolo" src="/img/jumbo-food-cetriolo.png" alt="immagine che fluttua">
                <img class="pomodoro" src="/img/jumbo-food-pomodoro.png" alt="immagine che fluttua">
            </div>
            <div class="text-center">
                <h1 class="jumbo-title">{{ title }}</h1>
                <p class="jumbo-subtitle py-3">{{ subtitle }}</p>

                <RouterLink class="custom-primary-btn router-link" :to="{ name: 'list' }">
                    Ordina subito!
                </RouterLink>
            </div>
        </div>
    </div>
    <img class="wave-img" src="/img/jumbotron-wave-desktop.svg" alt="jumbo-wave">
</template>

<style lang="scss" scoped>
.jumbotron {
    background-color: #FFC244;
    padding-top: 200px;
    padding-bottom: 20px;


    .jumbo-content {
        width: 70%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;


        .animated-image {
            position: relative;
            // width: 500px;
            width: 100%;
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

        .jumbo-title {
            width: 70%;
            margin: 0 auto;
            font-size: 3.5rem;
            font-weight: 700;
            line-height: 53px;
        }
    }

    @media screen and (max-width: 1140px) {
        .jumbo-content {
            flex-direction: column;
            align-items: center;

        }
    }

}
</style>