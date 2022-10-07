<script setup lang="ts">
import { RouterView } from "vue-router";
import MenuSuperior from "./components/menuSuperior.vue";
</script>

<template>
  <div id="main">
    <MenuSuperior />
    <RouterView />
  </div>
</template>

<style scoped>
#main {
  @apply bg-[#323232] min-h-screen min-w-full;
}
</style>
