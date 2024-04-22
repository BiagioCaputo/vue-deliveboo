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
        <img src="/img/jumbotron-wave-desktop.svg" alt="jumbo-wave">
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

        <!--Section category-->
        <section class="category">
            <div class="category-container">

                <h1 class="title-category">Le categorie più richieste</h1>
                <div class="category-pills d-flex gap-4 mt-5">
                    <div class="pills" v-for="category in store.categories">
                        {{ category }}
                    </div>

                </div>
            </div>
        </section>
        <img src="/img/jumbotron-wave-desktop.svg" alt="jumbo-wave">
        <!--------------------->


        <!--Sezione-->
        <section></section>
        <!----------->

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
        width: 60%;
        margin: 0 auto;

        span {
            background-color: #00A082;
            border-color: #00A082;
            color: white;
            font-weight: 600;
        }
    }

    section {
        margin-top: 50px;
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

/* Sezione Categorie */
.category {
    background-image: url('/img/main-waves-desktop.svg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 400px;

    .category-container {
        width: 1000px;
        margin: 0 auto;
        text-align: center;

        h1 {
            font-weight: 700;
            padding-top: 200px;
            text-align: center;
        }

        .pills {
            background-color: #fff3da;
            padding: 10px 15px;
            border-radius: 50px;
            font-weight: 700;
        }

        .pills:hover {
            background-color: #00A082;
            color: #fff3da;
        }
    }


}
</style>