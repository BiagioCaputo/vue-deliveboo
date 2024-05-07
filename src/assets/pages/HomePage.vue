<script>
import AppJumbo from '../../components/AppJumbo.vue';
import AppSectionRestaurants from '../../components/AppSectionRestaurants.vue';
import AppSectionDelivery from '../../components/AppSectionDelivery.vue';
import { store } from '../../data/store.js';
import axios from 'axios';
import { router } from '../../router/index.js'; //importo il router per poter spostarmi nella lista categorie all'interno di una funzione

const baseUri = 'http://localhost:8000/api';

export default {
    name: 'HomePage',
    components: { AppJumbo, AppSectionRestaurants, AppSectionDelivery },
    data: () => ({
        store,
        popularRestaurants: [],
        popularTypes: [],
    }),

    methods: {
        //Chiamata per i ristoranti con più ordini e le loro categorie
        fetchPopularRestaurants() {
            store.isLoading = true;
            axios.get(`${baseUri}/popular-restaurants`)
                .then(res => {
                    this.popularRestaurants = res.data.popularRestaurants;
                    this.popularTypes = res.data.popularTypes;
                })
                .catch(error => {
                    console.error('Errore nel recupero dei ristoranti:', error);
                })
                .then(() => {
                    store.isLoading = false;
                });
        },

        saveTypeInLS(typeId) {
            // Salviamo l'ID del tipo nel localStorage
            localStorage.setItem('selectedTypeId', typeId);
            // Vai alla pagina della lista dei ristoranti
            router.push({ name: 'list' });
        }

    },

    created() {
        this.fetchPopularRestaurants();
    }
}
</script>

<template>
    <main>
        <!-- Jumbo -->
        <AppJumbo :title="'Consegna di cibo a domicilio e molto altro'"
            :subtitle="'Ordina dai tuoi ristoranti preferiti, in pochi minuti a casa tua.'" />

        <!--Section Restaurant-->
        <AppSectionRestaurants :restaurants="popularRestaurants" />

        <!--Section Type-->
        <img class="desktop-wave upside-down" src="/img/jumbotron-wave-desktop.svg" alt="jumbo-wave">
        <img class="mobile-wave upside-down" src="/img/down-wave-mobile.svg" alt="jumbo-wave">
        <section class="category d-flex align-items-center justify-content-center ">
            <!-- <div class="animated-shopping-bag align-items-center d-flex">
                <img src="/img/spesa-borsa.png" alt="spesa-borsa" class="spesa-borsa">
                <img src="/img/spesa-pomodoro-grande.png" alt="spesa-pomodoro-grande" class="spesa-pomodoro-grande">
                <img src="/img/spesa-pomodoro-piccolo.png" alt="spesa-pomodoro-piccolo" class="spesa-pomodoro-piccolo">
                <img src="/img/spesa-barattolo.png" alt="spesa-barattolo" class="spesa-barattolo">
                <img src="/img/spesa-cioccolato.png" alt="spesa-cioccolato" class="spesa-cioccolato">
            </div> -->
            <div class="container-desktop d-flex flex-column gap-5">

                <h1 class="title-category text-center">Le nostre categorie</h1>
                <div class="d-flex flex-wrap justify-content-center gap-4 pb-5">

                    <div v-for="type in popularTypes" :key="type.id" @click="saveTypeInLS(type.id)" class="pills">
                        {{ type.label }}
                    </div>

                </div>
            </div>
        </section>
        <img class="desktop-wave" src="/img/jumbotron-wave-desktop.svg" alt="jumbo-wave">
        <img class="mobile-wave" src="/img/down-wave-mobile.svg" alt="jumbo-wave">

        <!--Sezione Delivery-->
        <AppSectionDelivery />


    </main>
</template>

<style lang="scss" scoped>
.category {
    background-color: #FFC244;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

    h1 {
        font-weight: 700;
    }

    .pills.active-link {
        background-color: #00A082;
        color: #fff3da;
    }

    .pills {
        background-color: #fff3da;
        padding: 20px 25px;
        border-radius: 50px;
        font-weight: 600;
        font-size: 1.2rem;
        text-decoration: none;
        color: black;

    }

    .pills:hover {
        background-color: #00A082;
        color: #fff3da;
        cursor: pointer;
    }

    .animated-shopping-bag {
        width: 100%;
        height: 100px;

        .spesa-borsa {
            position: absolute;
            max-width: 400px;
        }

        .spesa-pomodoro-grande {
            position: absolute;
            max-width: 400px;
        }

        .spesa-pomodoro-piccolo {
            position: absolute;
            max-width: 400px;
        }

        .spesa-barattolo {
            position: absolute;
            max-width: 400px;
        }

        .spesa-cioccolato {
            position: absolute;
            max-width: 400px;
        }


    }

}

.desktop-wave {
    width: 100%;
}

.mobile-wave {
    width: 100%;
    display: none;
}

.desktop-wave.upside-down {
    transform: rotate(180deg) translateY(-1%);
    display: block;
    width: 100%;
}

.mobile-wave.upside-down {
    width: 100%;
    display: none;
    transform: rotate(180deg) translateY(-1%);
}

@media screen and (max-width: 768px) {
    .desktop-wave {
        display: none;
    }

    .desktop-wave.upside-down {
        display: none;
    }

    .mobile-wave {
        display: block;
    }

    .mobile-wave.upside-down {
        display: block;
    }
}
</style>



<!-- Idea categorie: possiamo aggiungere una seconda immagine animata e le categorie a sinistra (stile homepage con il burger animato) -->