<template>
  <HeaderComponent />
  <section class="page">
    <router-view />
  </section>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<style scoped>

</style>
