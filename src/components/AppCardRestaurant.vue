<script>
export default {
    // Javascript Logic
    name: 'RestaurantCard',
    props: {
        restaurant: Object
    }
};
</script>

<template>
    <div class="card-restaurant">
        <div class="img-restaurant">
            <img :src="restaurant.image" :alt="restaurant.activity_name">
        </div>
        <div class="text-restaurant">
            <h5 class="mb-0">{{ restaurant.activity_name }}</h5>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-restaurant {
    width: 100%;
    height: 200px;

    .img-restaurant {
        width: 100%;
        height: 80%;
        border-radius: 10px;

        background-color: #fff3da; //bg in caso di assenza img

        img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }

    .text-restaurant {
        padding: 5px 5px 0 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h5 {
            font-weight: 800;
            font-size: 1.1rem;
            color: black;
        }

        .category {
            color: #7b7d7b;
            font-size: 0.7rem;
            font-weight: 800;

            background-color: #f5f5f5;
            padding: 0 5px;
            border-radius: 5px;
        }
    }
}
</style>