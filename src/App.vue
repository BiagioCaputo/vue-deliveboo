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
</style>
