<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppLoader from './components/AppLoader.vue';
import { store } from './data/store';

export default {
  name: 'Deliveboo',
  data: () => ({
    store
  }),
  components: { AppHeader, AppFooter, AppLoader }
}
</script>

<template>
  <AppHeader />
  <AppLoader v-if="store.isLoading" />
  <RouterView />
  <AppFooter />
</template>

<style lang="scss">
// Generics
body {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.wave-img {
  width: 100%;
}

.router-link {
  text-decoration: none;
}

.custom-primary-btn {
  background-color: #00A082;
  color: white;
  padding: 15px 50px;
  border-radius: 50px;
  font-weight: 700;

  &:hover {
    background-color: #00846b;
    color: white;
  }
}

.custom-secondary-btn {
  background-color: #e9f8f5;
  color: #00846b;
  padding: 15px 50px;
  border-radius: 50px;
  font-weight: 700;

  &:hover {
    background-color: #b2f0e3;
    color: #00846b;
  }
}

.custom-dark-btn {
  background-color: black;
  color: white;
  padding: 15px 50px;
  border-radius: 50px;
  font-weight: 700;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    color: black;
  }
}

main {
  height: fit-content;

  .container-desktop {
    width: 1100px;
    margin: 0 auto;
  }

  section {
    padding-top: 50px;
  }
}

@media screen and (max-width: 992px) {
  main {
    .container-desktop {
      // width: 650px;
      width: 800px;
    }
  }
}

@media screen and (max-width: 768px) {
  main {
    .container-desktop {
      width: 650px;
    }
  }
}

@media screen and (max-width: 576px) {
  main {
    .container-desktop {
      width: 400px;
    }
  }
}
</style>
