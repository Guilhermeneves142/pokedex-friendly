<script setup lang="ts">
import { RouterView } from "vue-router";
import MenuSuperior from "./components/menuSuperior.vue";
</script>

<template>
  <div id="main">
    <MenuSuperior />
    <RouterView class="w-[70%] m-auto min-h-screen" />
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css");
* {
  font-family: "Roboto", Arial, sans-serif;
}
#main {
  @apply bg-[#323232] h-full min-w-full;
}
</style>
