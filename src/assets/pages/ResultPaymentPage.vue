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
        }
        console.log(this.paymentResult)
        if (this.paymentResult.success) localStorage.clear('chart');

    }
}
</script>

<template>
    <div class="text-center">
        <h1 v-if="paymentResult.success">Pagamento effettuato con successo! 😁</h1>
        <h1 v-else>Pagamento non andato a buon fine! 😭</h1>

    </div>
</template>

<style lang="scss" scoped>
h1 {
    margin: 300px 0;
}
</style>