<script>
export default {
    // Javascript Logic
    name: 'Modal',
    props: {
        isActive: Boolean,
        title: String,
        message: String
    },
    emits: ['erase-cart-close-modal', 'close-modal']
};
</script>

<template>
    <div class="modal" :class="{ 'is-active': isActive }">
        <div class="modal-background"></div>
        <div class="modal-card my-modal-bg glass ">
            <header class="modal-card-head d-flex  justify-content-center">
                <p class="modal-card-title fw-bolder fs-3">{{ title }}</p>
            </header>
            <section class="modal-card-body fs-5">
                <p>{{ message }}</p>
            </section>
            <footer class="modal-card-foot bg-transparent d-flex justify-content-center">
                <button class="custom-secondary-btn btn me-3" @click="$emit('close-modal', !isActive)">Ho
                    capito!</button>
                <button class="custom-btn btn btn-danger" @click="$emit('erase-cart-close-modal', !isActive)">Svuota
                    carrello</button>
            </footer>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    background-color: rgba(0, 0, 0, 0.526);
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.modal.is-active {
    display: flex;
}

.my-modal-bg {
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    color: black;
}

.custom-btn {
    padding: 15px 50px;
    border-radius: 50px;
    font-weight: 700;

}
</style>