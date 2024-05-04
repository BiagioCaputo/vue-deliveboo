<script>
export default {
    // Javascript Logic
    name: 'SectionRestaurants',
    props: {
        title: String,
        restaurants: Array,
    }
};
</script>

<template>
    <section class="restaurant container-desktop">
        <h1 class="text-center my-5">
            I ristoranti più cercati della tua città
            <i class="fa-solid fa-utensils"></i>
        </h1>

        <div class="text-center">
            <div class="flex-container">
                <div v-for="restaurant in restaurants">

                    <RouterLink :to="{ name: 'menu', params: { id: restaurant.id } }" class="col flex-item">
                        <img :src="restaurant.image" :alt="restaurant.activity_name" class="mask-img">
                        <div class="label-rest">{{ restaurant.activity_name }}</div>
                    </RouterLink>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
/* Section Restaurant */
.restaurant {
    h1 {
        font-weight: 700;
    }

    .flex-container {
        display: flex;
        margin: 0 -1rem;
        flex-wrap: wrap;
        justify-content: center;

        .col.flex-item {
            margin: 1rem;
            flex-basis: calc(100% / 4 - 2rem);

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            text-decoration: none;
            color: black;

            &:hover {
                transform: scale(1.3);
                color: #fff3da;
            }
        }
    }

    .mask-img {
        width: 200px;
        height: 111px;
        mask-image: url('/img/partners-mask.svg');
        mask-repeat: no-repeat;
        mask-position: 35px 0;
        object-fit: fill;
    }



    .label-rest {
        background-color: #FFC244;
        width: fit-content;
        padding: 5px 15px;
        border-radius: 10px;
        font-weight: 700;

        position: relative;
        bottom: 20px;
    }
}
</style>