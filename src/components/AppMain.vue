<script>
import { store } from '../data/store.js'
export default {
    name: 'AppMain',
    data: () => ({
        store
    })
}
</script>

<template>
    <main>
        <!--Componente Jumbotron-->
        <div class="jumbotron">
            <div class="jumbo-content container">
                <div class="box-img">
                    <img src="/img/jumbo-food.png" alt="Food">
                </div>
                <div class="text-center">
                    <h1 class="jumbo-title">Consegna di cibo a domicilio e molto altro</h1>
                    <p class="jumbo-subtitle">Ordina dai tuoi ristoranti preferiti, in pochi minuti a casa tua.</p>
                    <div class="input-group mb-3">
                        <span class="input-group-text" type="text">@</span>
                        <input type="text" class="form-control" placeholder="Inserisci la tua mail">
                    </div>
                </div>
            </div>
        </div>
        <img src="/img/jumbotron-wave-desktop.svg" alt="footer-wave">
        <!---------------------------->

        <!--Section Top Restaurant-->
        <section class="top-restaurant">
            <h1 class="text-center my-5">
                I migliori ristoranti della tua città
                <i class="fa-solid fa-utensils"></i>
            </h1>

            <!--img e label dinamici nello store-->
            <div class="text-center container-rest">
                <div class="row flex-container">
                    <div class="col flex-item" v-for="top in store.topRestaurant">
                        <img :src="top.src" alt="Mask" class="round-img">
                        <div class="label-rest">{{ top.label }}</div>
                    </div>
                </div>

            </div>

        </section>
        <!-------------------------->

        <!--Section undefine-->
        <section class="undefine">
            <img src="/img/main-waves-desktop.svg" alt="Middle main wave">
            <h1 class="title-undefine">Sezione da definire</h1>
        </section>

    </main>
</template>

<style lang="scss" scoped>
main {
    height: fit-content;

    /*Wave img */
    img {
        width: 100%;
    }

    .jumbotron {
        height: 600px;
        /*Costruzione*/
        background-color: #FFC244;
        padding-top: 200px;


        .jumbo-content {
            width: 70%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;


            .box-img {
                width: 450px;
            }

            .jumbo-title {
                width: 70%;
                margin: 0 auto;
                font-size: 3.5rem;
                font-weight: 700;
            }
        }

    }

    /* Input mail */
    .input-group {
        width: 80%;
        margin: 0 auto;

        span {
            background-color: #00A082;
            border-color: #00A082;
            color: white;
            font-weight: 600;
        }
    }

    section {
        margin-bottom: 50px;
    }


    /* Section Top Restaurant */
    .top-restaurant {
        h1 {
            font-weight: 700;
        }

        .container-rest {
            width: 70%;
            margin: 0 auto;
        }

        .row.flex-container {
            display: flex;
            margin: 0 -1rem;
            flex-wrap: wrap;

            .col.flex-item {
                margin: 1rem;
                flex-basis: calc(100% / 4 - 2rem);

                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
        }

        .round-img {
            width: 200px;
            height: auto;
            mask-image: url('/img/partners-mask.svg');
            mask-repeat: no-repeat;
            mask-position: 35px 0;
        }



        .label-rest {
            background-color: #FFC244;
            width: fit-content;
            padding: 5px 15px;
            border-radius: 10px;
            font-weight: 700;

            position: relative;
            bottom: 20px;

        }
    }
}


.undefine {
    position: relative;

    img {
        width: 100%;
    }

    .title-undefine {
        text-align: center;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% -50%);
    }
}
</style>