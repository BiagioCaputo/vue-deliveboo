<script>
export default {
    name: 'RestaurantMenuPage'
}
</script>

<template>
    <div class="container-md">
        <div class="row">
            <div class="col-lg-9 red">
                <h1>restaurant-menu section</h1>
                <h3>restaurant logo</h3>
                <div class="row">
                    <div class="col-3 yellow sections-menu">
                        <h1>Sections menu</h1>
                    </div>
                    <div class="col green">
                        <h1>Dishes section</h1>
                    </div>

                </div>
            </div>
            <div class="col blue">
                <h1>Order window</h1>
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
    }

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

}


@media screen and (max-width: 576px) {
    .sections-menu {
        display: none;
    }
}
</style>