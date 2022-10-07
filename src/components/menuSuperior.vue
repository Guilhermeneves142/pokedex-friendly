<template>
  <div id="menuSuperior">
    <div
      class="item"
      v-for="item in items"
      :selected="itemSelecionado == item.id"
      :key="item.id"
      @click="itemSelecionado = item.id"
    >
      <img src="/pokeball.ico" />
      <span>{{ item.texto }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const itemSelecionado = ref(0);

const items = computed(() => {
  return [
    {
      id: 0,
      texto: "Página Inicial",
    },
    {
      id: 1,
      texto: "Pokédex",
    },
    {
      id: 2,
      texto: "Games",
    },
    {
      id: 3,
      texto: "Berries",
    },
    {
      id: 4,
      texto: "Pokemon",
    },
  ];
});
</script>

<style scoped>
#menuSuperior {
  @apply bg-gray-50 min-w-full h-[6em] flex justify-center items-center text-[#898989];
}
#menuSuperior div {
  @apply w-[8em];
}
img {
  @apply w-8;
}
.item {
  @apply flex flex-col items-center justify-center h-full hover:text-gray-50 
  transition duration-300 ease-in-out border-b-[5px] md:first:rounded-bl md:last:rounded-br;
}
.item:nth-child(1) {
  @apply hover:bg-main  border-main;
}
.item:nth-child(1)[selected="true"] {
  @apply bg-main;
}
.item:nth-child(2) {
  @apply hover:bg-pokedex  border-pokedex;
}
.item:nth-child(2)[selected="true"] {
  @apply bg-pokedex;
}
.item:nth-child(3) {
  @apply hover:bg-games  border-games;
}
.item:nth-child(3)[selected="true"] {
  @apply bg-games;
}
.item:nth-child(4) {
  @apply hover:bg-berries  border-berries;
}
.item:nth-child(4)[selected="true"] {
  @apply bg-berries;
}
.item:nth-child(5) {
  @apply hover:bg-pokemon  border-pokemon;
}
.item:nth-child(5)[selected="true"] {
  @apply bg-pokemon;
}

.item[selected="true"] {
  @apply text-gray-50;
}
</style>
