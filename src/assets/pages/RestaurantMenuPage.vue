<script>
import AppModal from '../../components/AppModal.vue';
import axios from 'axios';
import { store } from '../../data/store.js'
const endpoint = 'http://localhost:8000/api/restaurants/'

// Destructuring dello store
let { cart } = store;

export default {
    name: 'RestaurantMenuPage',
    components: { AppModal },
    data() {
        return {
            restaurant: '',
            dishes: [],
            cart,
            showModal: false, // Flag Modale
            totalPrice: 0
        }
    },
    methods: {

        //Chiamata per ricevere dati del ristorante e dei piatti
        getRestaurantDishes() {
            store.isLoading = true;
            axios.get(endpoint + this.$route.params.id)
                .then((res) => {
                    const { restaurant, dishes } = res.data; // Destructuring per estrarre restaurant e dishes
                    this.restaurant = restaurant;
                    this.dishes = dishes;
                })
                .catch(err => {
                    console.log(err)
                })
                .then(() => {
                    store.isLoading = false;
                })
        },

        // Funzione per aggiungere un piatto al carrello dello store e a quello del LocalSorage
        addDishToCart(dish) {

            // Flag per piatti uguali
            let found = false;

            // Se il carrello è vuoto o se l'elemento appartiene allo stesso ristorante
            if (this.cart.length === 0 || this.cart[0].restaurant_id === dish.restaurant_id) {

                // Itero per vedere se ho piatti uguali, se ne ho aumento il suo attributo quantità e imposto found a true
                for (let item of this.cart) {
                    if (item.id === dish.id) {
                        item.quantity++;
                        found = true;
                        break; //se abbiamo trovato l'elemento e abbiamo aumentato il conteggio, interompiamo
                    }
                }
                // Altrimenti non ho trovato altri elementi uguali e quindi inizializzo la quantità ad 1
                if (!found) {
                    dish.quantity = 1;
                    this.cart.push(dish);
                }
                localStorage.cart = JSON.stringify(this.cart); //salvo nel LS
                this.calculateTotalPrice(); //ricalcolo il prezzo ad ogni piatto salvato
            } else {
                this.showModal = true; // Mostra la modale per avvertire l'utente
            }
        },

        // Funzione per calcolare il prezzo totale
        calculateTotalPrice() {
            this.totalPrice = 0;
            for (let item of this.cart) {
                this.totalPrice += parseFloat(item.price) * item.quantity;
            }

            this.totalPrice = this.totalPrice.toFixed(2);
        },


        //Funzione per svuotare il carrello e chiudere la modale
        emptyCartAndCloseModal() {
            this.cart = [];
            localStorage.cart = JSON.stringify(this.cart);
            this.showModal = false;
            // Refresha la pagina
            window.location.reload();
        },

        // Funzione per aumentare la quantità di un piatto nel carrello 
        increaseQuantity(item) {
            item.quantity++;
            this.calculateTotalPrice();
            localStorage.cart = JSON.stringify(this.cart);
        },

        // Funzione per diminuire la quantità di un piatto nel carrello
        decreaseQuantity(item) {
            if (item.quantity > 1) {
                item.quantity--;
                this.calculateTotalPrice();
                localStorage.cart = JSON.stringify(this.cart);
            }
        },

        // Funzione per rimuovere un piatto dal carrello
        removeDish(itemIndex) {
            this.cart.splice(itemIndex, 1); // 1 elemento:indice da cui iniziare l'eliminazione, 2 quanti da eliminare, 3 elemento+:rimpiazzo(in questo caso il o i rimpiazzi non ci servono)
            // this.cart = this.store.cart.filter((item, index) => index !== dishIndex); //in alternativa si poteva utilizzare il filter...sono 10 euro per il ripasso
            localStorage.cart = JSON.stringify(this.cart);
            this.calculateTotalPrice(); // Ricalcola il prezzo totale
        },

        // Metodo per recuperare i piatti dal localStorage (usato items per non confondersi con gli altri dishes in pagina)
        getCartItemsFromLocalStorage() {
            const cartItems = localStorage.cart ? JSON.parse(localStorage.cart) : [];
            this.cart = cartItems;
            //risalvo gli elementi anche nel carrello nello store per tenere aggiornata la pagina del riepilogo
            store.cart = this.cart;
        },
    },
    created() {
        this.getRestaurantDishes();
        this.getCartItemsFromLocalStorage();
        this.calculateTotalPrice();
    },
}
</script>

<template>
    <section>

        <!-- Sfondo ristorante -->
        <div class="background-container" :style="{ 'background-image': 'url(' + restaurant.image + ')' }"></div>


        <div class="container">

            <!-- Sezione ristorante -->
            <div class="clearfix">
                <div class="card card-deliveboo">

                    <div id="logo-box">
                        <img :src="restaurant.logo" :alt="restaurant.name">
                    </div>

                    <div class="card-bottom mb-3">
                        <h1>{{ restaurant.activity_name }}</h1>
                        <div>
                            <div><i class="fa-solid fa-phone mb-3 me-2"></i>{{ restaurant.phone }}</div>
                            <div><i class="fa-solid fa-location-dot me-2"></i>{{ restaurant.address }}</div>

                            <!-- TODO da implementare i types del restaurant -->

                            <!--Perché vuoi implentare i types?-->
                        </div>
                    </div>

                </div>
            </div>

            <!-- Sezione Piatti + Sezione Ordine -->
            <div class="row">
                <!-- Sezione Piatti -->
                <div class="col-9 row">
                    <div v-for="dish in dishes" :key="dish.id" class="col-6">
                        <div class="card p-3 dish mb-4">
                            <div class="d-flex gap-2">
                                <img class="dish-image rounded" :src="dish.image" :alt="dish.name">

                                <ul class="list-unstyled">
                                    <li>
                                        <h5>{{ dish.name }}</h5>
                                    </li>
                                    <li class="dish-info">{{ dish.ingredients }}</li>
                                    <!-- <li><strong>Portata:</strong>{{ dish.course.label }}</li> -->
                                </ul>
                            </div>
                            <div class="footer-card">

                                <div class="dish-price">{{ dish.price }} €</div>
                                <button class="btn btn-add" @click="addDishToCart(dish)">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sezione Carrello -->
                <div class="col-3">
                    <div class="card p-3 text-center cart">
                        <h2 class="cart-title">Il tuo ordine</h2>
                        <div v-if="cart.length <= 0">
                            <img src="/img/astronaut-grey-scale.svg" alt="">
                        </div>
                        <div v-else>
                            <div v-for="item in cart" :key="item.id">
                                <div class="mb-3" style="max-width: 540px;">
                                    <div class="d-flex justify-content-between text-start">
                                        <p><strong v-if="item.quantity > 1">{{
                                            item.quantity }}x</strong>
                                            {{ item.name }}
                                        </p>
                                        <p class="card-text">{{ item.price }} €</p>
                                    </div>

                                    <div class="d-flex  align-items-center justify-content-between">

                                        <!--Bottone di rimozione-->
                                        <button class="btn btn-danger btn-custom" @click="removeDish(index)">
                                            <i class="fa-solid fa-x"></i>
                                        </button>

                                        <div class="card-text text-center">
                                            <!--Bottone di drecremento-->
                                            <button class="btn me-2 btn-add" @click="decreaseQuantity(item)">
                                                <i class="fa-solid fa-minus"></i>
                                            </button>

                                            <!--Bottone di incremento-->
                                            <button class="btn ms-2 btn-add" @click="increaseQuantity(item)">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <p><strong>Totale: </strong>{{ totalPrice }} €</p>


                            <Router-link to="/cart" class="cart-shopping">
                                <div class="custom-primary-btn">Vai al carrello</div>
                            </Router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--  v-if="cart.length > 0"  -->


    <!--Modale se l'utente prova ad ordinare da più ristoranti -->
    <AppModal :isActive="showModal" :title="'Fame nervosa...?'"
        :message="'Non puoi ordinare da più ristoranti contemporaneamente.'"
        @erase-cart-close-modal="emptyCartAndCloseModal()" @close-modal="showModal = false" />
</template>

<style lang="scss" scoped>
section {
    margin-bottom: 70px;
}

.background-container {
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.bg-transparent {
    background-color: transparent;
}

.bg-deliveboo {
    background-color: #00A082;
    color: #FFC244;
    border-color: #FFC244;
}

#logo-box {
    width: 100px;
    height: 100px;
    background-color: dodgerblue;
    border: 1px solid #fff;
    border-radius: 20px;

    position: absolute;
    top: -30px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
}

.card-deliveboo {
    padding: 40px;
    border: 0px;
    border-radius: 20px 70px 20px 20px;
    box-shadow: 0px 2px 24px 1px #0000001A;

    position: relative;
    bottom: 125px;



    h1 {
        margin-top: 30px;
        font-weight: 700;
    }

}

.dish {

    .dish-image {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }

    .dish-info {
        font-size: 14px;
        color: #6e6e6e;
    }

    .footer-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        .dish-price {
            font-weight: 500;
            font-size: 18px;
        }

    }
}

.btn-add {
    background-color: #e9f8f5;
    border-radius: 50%;
    color: #00A082;

    &:hover {
        transform: scale(1.3);
    }

    &:active {
        border: 1px solid #00A082;
        background-color: #e9f8f5;
        color: #00A082;
    }
}

.cart {
    box-shadow: 0px 2px 24px 1px rgba(0, 0, 0, 0.1019607843);
    border: transparent;

    .btn-add {
        font-size: 10px;
    }

    .btn-custom {
        font-size: 10px;
        border-radius: 50%;
    }
}

.cart-title {
    font-weight: 700;
}

.cart-shopping {
    text-decoration: none;
}
</style>