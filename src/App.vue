<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'Deliveboo',
  components: { AppHeader, AppFooter }
}
</script>

<template>
  <AppHeader />
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
