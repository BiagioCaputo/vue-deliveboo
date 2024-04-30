<script>
export default {
    // Javascript Logic
    name: 'AppCart',
    props: {
        items: Array,
        isVisible: Boolean,
    },
};
</script>

<template>
    <RouterLink to="#">
        <div class="cart-shopping">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="position-absolute top-0 start-100 translate-middle ">
                <span class="cart-number-items fw-bold bg-danger"
                    :class="{ 'visually-hidden': !isVisible }">{{ items.length }}</span>
            </span>
        </div>
    </RouterLink>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

.cart-shopping {
    position: relative;
    font-size: 1.5rem;
    color: $secondary-color;
    border-radius: 10px;

    &:hover {
        color: gray;
    }

    .cart-number-items {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.5rem;
        font-weight: 500;
        color: $secondary-btn-color;
        width: 15px;
        height: 15px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 50%;
    }
}
</style>