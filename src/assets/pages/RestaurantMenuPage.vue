<script>
export default {
    name: 'RestaurantMenuPage'
}
</script>

<template>
    <!-- jumbotron -->
    <img class="restaurant-bg" src="/public/img/burgerking.jpeg" alt="restaurant-background-image">

    <!-- sezione ristorante -->
    <div class="container-md">
        <div class="row p-0">
            <div class="col-xl-9">
                <!-- titolo ristorante -->
                <div class="restaurant-title rounded-start-3 rounded-bottom-3 p-2">
                    <div class="logo rounded-2 d-flex justify-content-center align-itmes-center">
                        <img src="" alt="">
                        logo
                    </div>
                    <div class="restaurant-name">McDonald's</div>
                    <div class="icons">Icons</div>
                </div>

                <div class="row m-0 p-0">
                    <!-- lista categorie -->
                    <div class="col-3 yellow sections-menu m-2 ms-0 rounded-3">
                        <h1>Sections</h1>
                        <ul>
                            <li>Sezione 1</li>
                            <li>Sezione 1</li>
                            <li>Sezione 1</li>
                            <li>Sezione 1</li>
                            <li>Sezione 1</li>
                            <li>Sezione 1</li>


                        </ul>
                    </div>


                    <!-- lista piatti -->
                    <div class="col green dishes-section m-2 me-0 rounded-3">
                        <input type="text">
                        <h1>Dishes section</h1>
                        <ul>
                            <li>Piatto 1</li>
                            <li>Piatto 1</li>
                            <li>Piatto 1</li>
                            <li>Piatto 1</li>
                            <li>Piatto 1</li>

                        </ul>
                    </div>

                </div>
            </div>

            <!-- carrello -->
            <div class="col blue order-card rounded-3 d-flex flex-column justify-content-evenly align-items-center p-4">
                <h2>Your order</h2>
                <img src="/public/img/astronaut-grey-scale.svg" alt="image">
                <p>You've not added any products yet. When you do, you'll see them here!</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.restaurant-bg {
    width: 100%;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    object-fit: cover;
    max-height: 400px;
    position: relative;
    z-index: -1;


}

.container-md {
    margin-top: -120px;
    position: relative;
    height: 2000px;
    z-index: 0;

    .row {
        height: 500px;

        .restaurant-title {
            width: 100%;
            height: 200px;
            background-color: rgb(255, 255, 255);
            border-top-right-radius: 100px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, .1);

            .logo {
                width: 50px;
                height: 50px;
                background-color: aqua;
                margin-left: 100px;
                margin-top: -35px;
            }
        }

        .dishes-section {
            box-shadow: 0 3px 10px rgba(0, 0, 0, .1);
            background-color: white;

        }

        .sections-menu {
            box-shadow: 0 3px 10px rgba(0, 0, 0, .1);
            background-color: white;

        }

        .order-card {
            border-radius: 10px;
            height: 400px;
            background-color: white;
            box-shadow: 0 3px 10px rgba(0, 0, 0, .1);

            h2 {
                font-weight: bold;
            }

            p {
                text-align: center;
                padding-right: 30px;
                padding-left: 30px;
            }

        }
    }



}


@media screen and (max-width: 576px) {


    .row {
        padding: 0;

        .order-card {
            display: none;
        }

        .sections-menu {
            display: none;
        }

        .col-lg-9 {
            margin: 0;
            padding: 0;
        }
    }

    .container-md {
        margin: 0;
        padding: 0;
    }

}
</style>