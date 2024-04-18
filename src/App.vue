<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'Deliveboo',
  components: {AppHeader, AppFooter}
}
</script>

<template>
  <AppHeader />
  <h1 class="text-center my-5">DeliveBoo <i class="fa-solid fa-utensils"></i></h1>
  <AppFooter />
</template>

<style lang="scss" scoped>
</style>
