<script>
import { store } from '../../data/store.js'
export default {
    name: 'ListRestaurantsPage',
    data: () => ({
        store
    })
}
</script>

<template>
    <main class="container-main">
        <section class="sidebar">
            <div class="popular-filters">
                <h6>Filtri popolari</h6>
                <ul>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>

                </ul>
            </div>
            <div class="more-filters">
                <h6>Altri filtri</h6>
                <ul>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>
                    <li>
                        <div class="category-img"><img src="" alt=""></div>
                        <span>Filtro</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="list"></section>
    </main>
</template>

<style lang="scss" scoped>
.container-main {
    width: 1100px;
    margin: 0 auto;

    display: flex;

    padding-top: 200px;
    padding-bottom: 200px;
    /* da togliere*/

    h6 {
        font-weight: 700;
        font-size: 12px;
    }

    ul {
        list-style-type: none;
        padding-left: 0;
    }

    .sidebar {
        width: 20%;

        ul {
            margin-bottom: 20px;

            li {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 10px;
                border-bottom: 1px solid #e4e4e4;
                padding: 10px 0;

                .category-img {
                    width: 35px;
                    height: 35px;
                    background-color: #fff3da;
                    border-radius: 50%;
                }
            }
        }

    }

    .list {
        /*di costruzione spazi */
        width: 80%;
        height: 700px;
        background-color: rgb(139, 95, 160);

    }
}
</style>