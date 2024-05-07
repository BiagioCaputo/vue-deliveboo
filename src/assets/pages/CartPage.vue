<script>
import { store } from '../../data/store.js'
import AppPaymentModal from '../../components/AppPaymentModal.vue';

export default {
    name: "CartPage",
    components: { AppPaymentModal },
    data() {
        return {
            store,
            totalPrice: null,
            showPaymentModal: false,
            message: ''
        }
    },
    computed: {
        printMessage() {
            if (this.message) {
                this.showPaymentModal = false;
            }
            return this.message;
        }
    },
    methods: {

        //Funzione per svuotare il carrello
        emptyCart() {
            this.store.cart = [];
            localStorage.cart = this.store.cart;
            window.location.reload(); // Refresha la pagina
        },

        // Funzione per calcolare il prezzo totale tenendo conto delle quantità
        calculateTotalPrice() {
            let totalPrice = 0;
            for (let dish of this.store.cart) {
                totalPrice += parseFloat(dish.price) * dish.quantity;;
            }
            this.totalPrice = totalPrice.toFixed(2);
        },

        // Funzione per calcolare il numero totale di piatti nel carrello
        getTotalQuantity() {
            let totalQuantity = 0;
            for (let dish of this.store.cart) {
                totalQuantity += dish.quantity;
            }
            return totalQuantity;
        },
        // Funzione per aumentare la quantità di un piatto nel carrello 
        increaseQuantity(dish) {
            dish.quantity++;
            this.calculateTotalPrice();
            localStorage.cart = JSON.stringify(this.store.cart); //TODO considerare se mettere un limite...
        },

        // Funzione per diminuire la quantità di un piatto nel carrello
        decreaseQuantity(dish) {
            if (dish.quantity > 1) {
                dish.quantity--;
                this.calculateTotalPrice();
                localStorage.cart = JSON.stringify(this.store.cart);
            }
        },

        // Funzione per rimuovere un piatto dal carrello
        removeDish(dishIndex) {
            this.store.cart.splice(dishIndex, 1); // 1 elemento:indice da cui iniziare l'eliminazione, 2 quanti da eliminare, 3 elemento+:rimpiazzo(in questo caso il o i rimpiazzi non ci servono)
            // this.cart = this.store.cart.filter((item, index) => index !== dishIndex); //in alternativa si poteva utilizzare il filter...sono 10 euro per il ripasso
            localStorage.cart = JSON.stringify(this.store.cart); // Aggiorna il localStorage
            this.calculateTotalPrice(); // Ricalcola il prezzo totale
        },

        // Funzione per aprire/chiudere modale pagamento
        togglePaymentModal() {
            !this.showPaymentModal ? this.showPaymentModal = true : this.showPaymentModal = false
        },

    },
    mounted() {
        //se ho dati nel localStorage li salvo nel cart dello store per poter interagire con esso con le altre funzioni del carrello, altrimenti salvo un array vuoto nel cart dello store
        this.store.cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
        this.calculateTotalPrice();

    },
}
</script>

<template>
    <div class="cart-container container p-0 mt-5 pt-5">
        <h1 class="text-center my-5 title">Carrello</h1>

        <!-- se il carrello non è vuoto visualizzo gli elementi -->
        <div v-if="store.cart && store.cart.length > 0">
            <h3>Il carrello contiene {{ getTotalQuantity() }} elementi</h3>
            <div class="card p-3 my-5">
                <div v-for="dish in store.cart" class="cart-list">
                    <div class="mb-3 d-flex justify-content-between align-items-center">

                        <div class="d-flex">
                            <div class="dish-image">
                                <img :src="dish.image" :alt="dish.name" class="img-fluid rounded-start">
                            </div>

                            <div class="card-body pe-0">
                                <h5 class="card-title">{{ dish.name }}</h5>
                                <p class="card-text"> <span v-if="dish.quantity > 1" class="me-2">{{
            dish.quantity }}x</span> {{ dish.price }} €</p>

                            </div>
                        </div>

                        <div class="d-flex  align-items-center gap-3">

                            <div class="card-text text-center">
                                <button class="btn me-2 btn-add" @click="decreaseQuantity(dish)">
                                    <i class="fa-solid fa-minus"></i>
                                </button>

                                <button class="btn ms-2 btn-add" @click="increaseQuantity(dish)">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>

                            <button class="btn btn-danger custom-btn" @click="removeDish(index)">Rimuovi</button>
                        </div>

                    </div>
                </div>


                <!-- Mostra il prezzo totale -->
                <div>
                    <div><strong>Prezzo Totale:</strong> {{ totalPrice }} €</div>

                    <div class="btn-cart text-center">
                        <!--TODO Qui il btn per procedere all'acquisto con la classe custom-primary-btn-->

                        <!-- Bottone per svuotare il carrello -->
                        <button class="btn custom-secondary-btn me-2" @click="emptyCart()">Svuota carrello</button>

                        <button class="btn custom-primary-btn" @click="togglePaymentModal()">Acquista</button>
                    </div>
                </div>
            </div>

        </div>

        <!-- Se il carrello è vuoto e se non ho messaggi -->
        <div v-else="!store.cart && !store.cart.length > 0" class="text-center card py-5 my-5">
            <h2 class="mb-4">Il carrello è vuoto ... davvero non hai fame?</h2>
            <div class="d-flex justify-content-center gap-2">

                <div class="btn back-btn" @click="$router.back()">
                    <i class="fa-solid fa-arrow-left"></i>
                    Torna indietro
                </div>
                <RouterLink :to="{ name: 'list' }">
                    <div class="btn custom-primary-btn">Cerca altri ristoranti</div>
                </RouterLink>
            </div>
        </div>

        <!-- Modale per il pagamento -->
        <AppPaymentModal :isActive="showPaymentModal" @close-modal="togglePaymentModal()" :totalPrice="totalPrice"
            :message="message" />
    </div>
</template>

<style lang="scss" scoped>
.cart-container {
    padding-top: 100px;
    padding-bottom: 50px;

    .title {
        font-weight: 700;
    }

    .cart-list {

        width: 100%;

        .dish-image {
            img {

                width: 100px;
                height: 100px;
                border-radius: 20px;
            }
        }

        .btn-add {
            background-color: #e9f8f5;
            border-radius: 50%;
            color: #00A082;

            &:hover {
                transform: scale(1.3);
            }
        }

        .custom-btn {
            padding: 15px 20px;
            border-radius: 50px;
            font-weight: 700;
        }



    }

    .back-btn {
        background-color: #e9f8f5;
        padding: 15px 50px;
        border-radius: 50px;
        font-weight: 700;
        color: #00A082;

        &:hover {
            background-color: #b0eee2;
        }
    }
}
</style>