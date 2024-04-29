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
body {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
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
  }
}
</style>
