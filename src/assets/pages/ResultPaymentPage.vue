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
    methods: {


    },
    mounted() {
    },

    created() {
        // Mi riprendo il risultato del pagamento
        const paymentResult = localStorage.getItem('paymentResult');
        if (paymentResult) {
            // Ritrasforma la stringa in array e salvala in payment result
            this.paymentResult = JSON.parse(paymentResult);
        }
        console.log(this.paymentResult)
    }
}
</script>

<template>
    <h1 v-if="paymentResult.success">Pagamento effettuato</h1>
    <h1 v-else>Pagamento non andato a buon fine</h1>
</template>

<style lang="scss" scoped>
h1 {
    margin-top: 300px;
}
</style>