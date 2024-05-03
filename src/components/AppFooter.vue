<script>
import { store } from '../data/store.js'

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
                <div class="d-flex justify-content-between gap-5 flex-wrap p-5 text-center list-container">
                    <div v-for="(links, i) in store.footerLinks" :key="i" class="text-white">
                        <div>

                            <h4 class="link-title mb-4">{{ links.title }}</h4>
                            <ul>
                                <a href="#">
                                    <li v-for="(link, i) in links.links" key="i" class="mb-4">
                                        {{ link.text }}
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <!--Magari li famo dinamici?-->
                    <ul class="text-white text-center">
                        <a href="#">
                            <li class="mb-4 d-flex justify-content-center">
                                <div class="download">
                                    <i class="fa-brands fa-apple fa-xl"></i>
                                    <div>
                                        <p class="top-text">Download on the</p>
                                        <p class="bottom-text">App Store</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                        <a href="#">
                            <li class="mb-4 d-flex justify-content-center">
                                <div class="download">
                                    <i class="fa-brands fa-google-play fa-xl"></i>
                                    <div>
                                        <p class="top-text">GET IT ON</p>
                                        <p class="bottom-text">Google Play</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                        <a href="#">
                            <li class="mb-4">TERMINI E CONDIZIONI</li>
                        </a>
                        <a href="#">
                            <li class="mb-4">POLITICA SULLA PRIVACY</li>
                        </a>
                        <a href="#">
                            <li class="mb-4">POLITICA SUI COOKIE</li>
                        </a>
                        <a href="#">
                            <li class="mb-4">CONFORMITÀ</li>
                        </a>
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

.container {
    max-width: 1100px;
}

.bg-footer {
    height: fit-content;
    background-color: #1D1D1D;

    .logo-text {
        font-family: "Quicksand", sans-serif;
        color: white;
        font-weight: 700;
        font-size: 2rem;

        .logo-img {
            height: 30px;
            width: auto;
            position: relative;
            bottom: 15px;
            right: 22px;
        }
    }

    .list-container {
        flex-basis: calc(100% / 2);
        gap: 50px;
    }
}


.link-title {
    font-weight: 700;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
        font-size: 15px;

    }

    a {
        color: white;
        text-decoration: none;
    }
}

.download {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid white;
    border-radius: 7px;
    padding: 2px 5px;
    width: fit-content;

    .top-text {
        text-align: left;
        font-size: 8px;
        margin: 0;
        position: relative;
        top: 5px;
    }

    .bottom-text {
        font-weight: 500;
        margin: 0;
    }
}
</style>