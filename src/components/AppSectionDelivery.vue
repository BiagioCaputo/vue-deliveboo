<script>
export default {
    // Javascript Logic
    name: 'SectionDelivery'
};
</script>

<template>
    <section class="delivery text-center container-desktop">
        <h1 class="delivery-title">Consegniamo tutto ciò che vuoi</h1>
        <div class="delivery-group mb-4">
            <div class="delivery-item">
                <img src="/img/restaurants.svg" alt="">
                <div>
                    <h5>I migliori ristoranti della tua città</h5>
                    <p>Approfitta di un'ampia varietà di ristoranti per ordinare i tuoi piatti preferiti oppure
                        <mark>
                            <span class="marked">trovarne di nuovi nei dintorni!</span>
                        </mark>
                    </p>
                </div>
            </div>
            <div class="delivery-item">
                <img src="/img/delivery.svg" alt="">
                <div>
                    <h5>Consegna rapida</h5>
                    <p>Siamo velocissimi! Ordina o invia qualsiasi cosa nella tua città:
                        <mark>
                            <span class="marked">lo
                                riceverai nel giro di qualche minuto</span>
                        </mark>
                    </p>
                </div>
            </div>
            <div class="delivery-item">
                <img src="/img/groceries.svg" alt="">
                <div>
                    <h5>Consegna della spesa e altro</h5>
                    <p>Trovo tutto ciò che ti serve da
                        <mark>
                            <span class="marked">supermercati, negozi, farmacie,
                                fioristi</span>
                        </mark>
                        ... se è nella tua città, puoi ordinarlo e fartelo consegnare.
                    </p>
                </div>
            </div>
        </div>
        <RouterLink class="custom-primary-btn router-link" :to="{ name: 'list' }">
            Esplora i locali
        </RouterLink>

    </section>
</template>

<style lang="scss" scoped>
.delivery {
    padding-bottom: 60px;

    .delivery-title {
        font-weight: 700;
        margin-bottom: 50px;
    }

    .delivery-group {
        display: flex;
        justify-content: center;
        gap: 150px;

        .delivery-item {
            width: 350px;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 200px;
            }

            h5 {
                margin-top: 20px;
                font-weight: 700;
            }

            mark {
                height: 10px;
                background-color: #FFC244;
                border-radius: 100px;
                // -webkit-box-decoration-break: clone;
                padding: 0 5px;
                font-size: 8px;
            }

            .marked {
                font-size: 16px;
            }
        }
    }
}
</style>