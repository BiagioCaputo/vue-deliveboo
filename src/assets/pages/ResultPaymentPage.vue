<script>
import { store } from '../../data/store.js'
export default {
    name: 'ResultPayment',
    data() {
        return {
            store,
            paymentResult: '',
        }
    },
    created() {
        // Mi riprendo il risultato del pagamento
        const paymentResult = localStorage.getItem('paymentResult');
        if (paymentResult) {
            // Ritrasforma la stringa in array e salvala in payment result
            this.paymentResult = JSON.parse(paymentResult);
            if (this.paymentResult.success) localStorage.clear('chart');

        }

    }
}
</script>

<template>
    <div class="wrapper text-center">
        <div v-if="paymentResult.success">
            <h1>Pagamento effettuato con successo! 😁</h1>
            <RouterLink to="/" class="custom-primary-btn btn">
                Torna alla Home
            </RouterLink>
        </div>
        <div v-else>
            <h1>Pagamento non andato a buon fine! 😭</h1>
            <RouterLink to="/cart" class="custom-primary-btn btn">
                Vai al carrello
            </RouterLink>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    margin: 300px 0;
}
</style>