<script>
export default {
    name: 'AppLoader'
}
</script>

<template>
    <main>
        <!-- <div class="loader"></div> -->
        <div class="animated-image">
            <img class="pane-sopra" src="/img/jumbo-food-pane-sopra.png" alt="immagine che fluttua">
            <img class="carne-sopra" src="/img/jumbo-food-carne-sopra.png" alt="immagine che fluttua">
            <img class="carne-sotto" src="/img/jumbo-food-carne-sotto.png" alt="immagine che fluttua">
            <img class="pane-sotto" src="/img/jumbo-food-pane-sotto.png" alt="immagine che fluttua">
            <img class="cetriolo" src="/img/jumbo-food-cetriolo.png" alt="immagine che fluttua">
            <img class="pomodoro" src="/img/jumbo-food-pomodoro.png" alt="immagine che fluttua">
        </div>

    </main>
</template>

<style lang='scss' scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(#FFC244 40%, white);

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
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
        }

        .carne-sopra {
            position: absolute;
            animation-name: loop-carnesopra;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            z-index: 2;
        }

        .carne-sotto {
            position: absolute;
            animation-name: loop-carnesotto;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            z-index: 1;

        }


        .pane-sotto {
            position: absolute;
            animation-name: loop-panesotto;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
        }

        .cetriolo {
            position: absolute;
            animation-name: cetriolo;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
        }

        .pomodoro {
            position: absolute;
            animation-name: pomodoro;
            animation-duration: 1s;
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





    // vecchio loader



    // .loader {
    //     border-top: 8px solid hotpink;
    //     border-bottom: 8px solid #f55951;
    //     border-left: 8px solid #3a9efd;
    //     border-right: 8px solid #1fff7c;
    //     border-radius: 100%;
    //     height: 100px;
    //     width: 100px;
    //     animation: looper 5s infinite ease-in-out;
    // }

    // @keyframes looper {
    //     0% {
    //         border-radius: 100% 100% 100% 100%;
    //         border-color: hotpink #3a9efd #1fff7c #f55951;
    //     }

    //     10% {
    //         border-radius: 0% 100% 0% 0%;
    //         border-color: #f55951;
    //         transform: rotate(150deg);
    //     }

    //     20% {
    //         border-radius: 0% 0% 0% 0%;
    //         border-color: #3a9efd;
    //     }

    //     30% {
    //         border-radius: 0% 0% 0% 0%;
    //         border-color: #1fff7c;
    //     }

    //     40% {
    //         border-radius: 0% 0% 0% 0%;
    //         border-color: #3a9efd;
    //     }

    //     50% {
    //         border-radius: 100%;
    //         border-color: #f55951;
    //     }

    //     90% {
    //         border-radius: 100%;
    //         transform: rotate(360deg);
    //         border-style: dashed;
    //     }

    //     100% {
    //         transform: rotate(0deg);
    //         border-radius: 100% 100% 100% 100%;
    //         border-color: hotpink #3a9efd #1fff7c #f55951;
    //     }
}
</style>