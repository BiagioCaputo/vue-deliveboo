<script>
export default {
    // Javascript Logic
    name: 'SectionType',
    props: {
        title: String,
        categories: Array,
    }
};
</script>

<template>
    <section class="category">
        <div class="container-desktop">

            <h1 class="title-category text-center">{{ title }}</h1>
            <div class="category-pills d-flex flex-wrap justify-content-center gap-4 mt-5">

                <div v-for="category in categories" :key="category.id">
                    <RouterLink :to="{ name: 'type', query: { type: category.id } }" class="pills">
                        {{ category.label }}
                    </RouterLink>
                </div>

            </div>
        </div>
    </section>
    <img class="wave-img" src="/img/jumbotron-wave-desktop.svg" alt="jumbo-wave">
</template>

<style lang="scss" scoped>
.category {
    background-image: url('/img/main-waves-desktop.svg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 500px;

    h1 {
        font-weight: 700;
        padding-top: 190px;
    }

    .pills {
        background-color: #fff3da;
        padding: 10px 15px;
        border-radius: 50px;
        font-weight: 700;

        text-decoration: none;
        color: black;
    }

    .pills:hover {
        background-color: #00A082;
        color: #fff3da;
        cursor: pointer;
    }

}
</style>