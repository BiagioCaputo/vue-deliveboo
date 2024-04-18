<script>
import {store} from '../data/store.js'

export default {
    name: 'Appfooter',
    data: () => ({
        store
    })
}
</script>

<template>
    <footer>
        <img src="/img/footer-wave-desktop.svg" alt="footer-wave">
        <div class="bg-footer">
            <div class="container">

                <div class="logo">
                    <h1 class="logo-text">DeliveBoo
                        <img src="/img/glovo_logo.png" alt="Logo" class="logo-img">
                    </h1>
                </div>

                <div v-for="(links, i) in store.footerLinks" :key="i" class="text-white d-flex">
                    <h3 class="d-flex">{{ links.title }}</h3>
                    <ul>
                        <li v-for="(link, i) in links" key="i">
                            {{ link.text }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>

img {
    width: 100%;
}

.bg-footer{
    height: fit-content;
    background-color: #1D1D1D;

    .logo-text{
            font-family: "Quicksand", sans-serif;
            color: white;
            font-weight: 700;
            font-size: 3rem;

            .logo-img{
                height: 40px;
                width: auto;
                position: relative;
                bottom: 25px;
                right: 35px;
            }
        }
}

</style>