<script>
export default {
    name: 'RestaurantMenuPage'
}
</script>

<template>
    <img class="restaurant-bg" src="/public/img/burgerking.jpeg" alt="restaurant-background-image">
    <div class="container-md mt-0">
        <div class="row m-0">
            <div class="col-lg-9 red m-4 p-0">
                <h3 class="restaurant-title rounded-start-3 rounded-bottom-3">restaurant logo</h3>
                <div class="row m-0 p-0">
                    <div class="col-3 yellow sections-menu m-2 ms-0 rounded-3">
                        <h1>Sections menu</h1>
                    </div>
                    <div class="col green dishes-section m-2 me-0 rounded-3">
                        <h1>Dishes section</h1>
                    </div>

                </div>
            </div>
            <div class="col blue order-card m-4 rounded-3">
                <h1>Order card</h1>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.restaurant-bg {
    width: 100%;
    filter: blur(8px);
    object-fit: cover;
    max-height: 400px;

}

.container-md {
    border: 1px solid rgb(185, 185, 185);
    margin-top: 120px;
    height: 2000px;

    .row {
        height: 500px;

        .red {
            // background-color: rgb(252, 222, 222);
        }

        .blue {
            background-color: #c1c1ff;
        }

        .yellow {
            background-color: rgb(255, 255, 204);
        }

        .green {
            background-color: rgb(225, 255, 225);
        }

        .restaurant-title {
            width: 100%;
            height: 200px;
            background-color: rgb(255, 220, 208);
            border-top-right-radius: 100px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, .1);
        }

        .order-card {
            border-radius: 10px;
            height: 400px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, .1);

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