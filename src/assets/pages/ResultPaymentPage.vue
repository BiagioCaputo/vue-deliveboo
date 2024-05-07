<script>
import { store } from '../../data/store.js'
import axios from 'axios';
export default {
    name: 'ResultPayment',
    data() {
        return {
            store,
            paymentResult: '',
            totalPrice: ''
        }
    },
    computed: {
        redirectToErrorPage() {
            return this.$router.push({ name: 'not-found' });
        }
    },
    created() {
        // Recupero i dati dell'ordine dal localStorage
        this.store.orderDetails = JSON.parse(localStorage.getItem('orderDetails'));

        this.totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
        this.totalPrice = (parseInt(this.totalPrice)).toFixed(2);
        console.log(this.totalPrice);

        // Mi riprendo il risultato del pagamento
        const paymentResult = localStorage.getItem('paymentResult');
        if (paymentResult) {
            // Ritrasforma la stringa in array e salvala in payment result
            this.paymentResult = JSON.parse(paymentResult);
            if (this.paymentResult.success) {

                //invio l'email di conferma all'acquirente
                axios.post(
                    'http://localhost:8000/api/contact-mail',
                    { email: this.store.orderDetails.customer_email }
                )
                    .then(response => {
                        console.log('Email inviata con successo:', response.data);
                    })
                    .catch(error => {
                        console.error('Errore invio email:', error);
                    });

                //svuoto il local storage
                localStorage.clear('chart');
                localStorage.clear('paymentResult');
            };

        };

    }

}
</script>

<template>
    <div class="wrapper text-center">
        <!-- Messaggio buon fine -->
        <div v-if="paymentResult.success">
            <div class="second-wrapper container">
                <header class="header">
                    <h1>Grazie <span class="fw-bold category-link">{{ this.store.orderDetails.customer_name }}</span>,
                        abbiamo ricevuto il tuo ordine! <i class="fa-regular fa-face-laugh-beam"></i></h1>
                    <p class="mb-0">Riepilogo ordine</p>
                </header>

                <!-- Sezione di pagamento -->
                <section class="payment-section">
                    <div class="payment-details">
                        <h2 class="fw-bold text-dark">Dettagli Ordine</h2>
                        <p><span class="fw-bold text-dark">Nome Cliente:</span>
                            {{ this.store.orderDetails.customer_name }}</p>
                        <p><span class="fw-bold text-dark">Indirizzo di Spedizione:</span>
                            {{ this.store.orderDetails.customer_address }}</p>
                        <p><span class="fw-bold text-dark">Email:</span> {{ this.store.orderDetails.customer_email }}
                        </p>
                        <p><span class="fw-bold text-dark">Numero di
                                Telefono: </span>{{ this.store.orderDetails.customer_phone_number }}</p>
                    </div>

                    <div class="payment-amount">
                        <h2 class="fw-bold m-0">Importo Totale: <span class="fw-light">€{{ this.totalPrice }}</span>
                        </h2>
                    </div>
                </section>
            </div>
            <h5 class="my-4 text-success">Presto riceverai un email con il riepilogo</h5>
            <RouterLink to="/" class="custom-primary-btn btn">
                Torna alla Home
            </RouterLink>
        </div>

        <!-- Messaggio di errore -->
        <div v-else-if="paymentResult.success == false">
            <div class="second-wrapper">
                <h1>Si è verificato un errore durante il pagamento. Riprova! <i class="fa-regular fa-face-sad-tear"></i>
                </h1>

                <RouterLink to="/cart" class="custom-primary-btn btn">
                    Torna al carrello
                </RouterLink>
            </div>
        </div>

        <!-- Redirect error -->
        <div v-else>
            {{ redirectToErrorPage }}
        </div>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    background-image: url(/img/astronaut-grey-scale.svg);
    background-repeat: space;
    padding: 200px 0 100px 0;
}

.second-wrapper {
    max-width: 1100px;
    margin: 0 auto;
}

.category-link {

    border-radius: 100px;
    padding: 8px 16px;
    background-color: #FFC244;

}

.header {
    padding: 20px;
    text-align: center;

    h1 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    p {
        font-size: 24px;
        color: #666;
        margin-top: 16px;
    }
}

.payment-section {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 24px;
    border-radius: 20px 70px 20px 20px;
    box-shadow: 0px 2px 24px 1px rgba(0, 0, 0, 0.1019607843);
    max-width: 550px;
    margin: 24px auto;

    .payment-amount {
        border-top: 1px solid #666;
        padding-top: 16px;
        margin-top: 16px;
    }

    .payment-details,
    .payment-amount {
        text-align: left;

        h2 {
            font-size: 18px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            color: #666;
            margin-bottom: 8px;
        }
    }
}
</style>