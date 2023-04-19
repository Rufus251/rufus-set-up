<template>
  <div class="wrapper">
    <HeaderComponent />
    <section class="page">
      <router-view />
    </section>
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<style scoped>

</style>
