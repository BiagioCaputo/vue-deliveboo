<script>
export default {
    name: 'RestaurantMenuPage'
}
</script>

<template>
    <img src="" alt="restaurant-background-image">
    <div class="container-md">
        <div class="row">
            <div class="col-lg-9 red m-4">
                <h1>restaurant-menu section</h1>
                <h3>restaurant logo</h3>
                <div class="row">
                    <div class="col-3 yellow sections-menu">
                        <h1>Sections menu</h1>
                    </div>
                    <div class="col green dishes-section">
                        <h1>Dishes section</h1>
                    </div>

                </div>
            </div>
            <div class="col blue order-card m-4">
                <h1>Order card</h1>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-md {
    background-color: bisque;
    margin-top: 120px;
    height: 1000px;

    .row {
        height: 1000px;

        .red {
            background-color: red;
        }

        .blue {
            background-color: #8a8afb;
        }

        .yellow {
            background-color: yellow;
        }

        .green {
            background-color: green;
        }

        .order-card {
            border-radius: 10px;
            height: 100px;
        }
    }



}


@media screen and (max-width: 576px) {
    .order-card {
        display: none;
    }

    .sections-menu {
        display: none;
    }

}
</style>