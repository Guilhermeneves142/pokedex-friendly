<template>
  <div id="pokedex">
    <div>
      <h1>Pokédex</h1>
      <div class="search-area">
        <div class="flex items-center bg-[#323232]">
          <div class="w-1/2">
            <h2>Nome ou número</h2>
            <div id="search">
              <input type="text" />
              <button class="mdi mdi-magnify" />
            </div>
            <p>
              Use a pesquisa avançada para explorar Pokémon por tipo, fraqueza,
              habilidade e mais!
            </p>
          </div>
          <div class="ml-11 w-1/2">
            <p id="info">
              Realize a busca por Pokémon pelo nome ou usando o número do
              Pokédex Nacional.
            </p>
          </div>
        </div>
        <div id="filter">
          <div class="grid grid-cols-12 gap-4" v-if="openFilter">
            <div class="self-baseline col-span-3">
              <h2>Tipo e Fraqueza</h2>
            </div>
            <div class="self-baseline col-span-4">
              <p>T = Tipo F = fraqueza</p>
            </div>

            <div class="col-span-5 row-span-2">
              <h2 class="self-baseline">Habilidade</h2>
              <div class="mt-2 group">
                <div
                  class="w-3/4 bg-[#313131] h-10 rounded-md flex items-center"
                >
                  <img
                    src="/pokeball.ico"
                    class="mx-4 bg-white rounded-full w-7 h-7"
                  />
                  <span class="grow"> Todas </span>
                  <div
                    class="h-full w-10 flex items-center justify-center group-hover:bg-[#282828] rounded-r-md"
                  >
                    <span class="mdi mdi-chevron-down text-2xl" />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-3 row-span-6">
              <div class="flex my-2" v-for="item in typesOne" :key="item.nome">
                <div :class="['type-info', item.bgColor, item.textColor]">
                  {{ item.nome }}
                </div>
                <div class="type-info mx-4">T</div>
                <div class="type-info">F</div>
              </div>
            </div>
            <div class="col-span-4 row-span-6">
              <div class="flex my-2" v-for="item in typesTwo" :key="item.nome">
                <div :class="['type-info', item.bgColor, item.textColor]">
                  {{ item.nome }}
                </div>
                <div class="type-info mx-4">T</div>
                <div class="type-info">F</div>
              </div>
            </div>
            <div class="col-span-5 row-span-2">
              <h2 class="self-baseline">Altura</h2>
              <div class="flex mt-3">
                <div
                  class="bg-gray-50 w-[5.75em] h-[4.75em] rounded-xl flex justify-center items-center"
                >
                  <img
                    src="/bullbasaur.png"
                    class="w-10 h-10"
                    title="Pequeno"
                  />
                </div>

                <div
                  class="bg-gray-50 w-[5.75em] h-[4.75em] rounded-xl mx-6 flex justify-center items-center"
                >
                  <img src="/squirtle.png" class="w-12 h-12" title="Médio" />
                </div>

                <div
                  class="bg-gray-50 w-[5.75em] h-[4.75em] rounded-xl flex justify-center items-center"
                >
                  <img src="/charmander.png" class="w-16 h-16" title="Grande" />
                </div>
              </div>
            </div>
            <div class="col-span-5 row-span-3">
              <h2 class="self-baseline">Peso</h2>
              <div class="flex mt-3">
                <div
                  class="bg-gray-50 w-[5.75em] h-[4.75em] group rounded-xl flex justify-center items-center"
                >
                  <img src="/bellsprout.png" class="w-16 h-16" title="leve" />
                </div>

                <div
                  class="bg-gray-50 w-[5.75em] h-[4.75em] rounded-xl mx-6 flex justify-center items-center"
                >
                  <img src="/eevee.png" class="w-16 h-16" title="médio" />
                </div>

                <div
                  class="bg-gray-50 w-[5.75em] h-[4.75em] rounded-xl flex justify-center items-center"
                >
                  <img src="/snorlax.png" class="w-16 h-16" title="pesado" />
                </div>
              </div>
            </div>
            <div class="col-span-7" id="range">
              <h2 class="baseline mr-4">Intervalos de números</h2>
              <input class="input-range" />
              <span class="mx-4"> - </span>
              <input class="input-range" />
            </div>
            <div class="col-span-5">
              <button class="bg-main btn-option">Redefinir</button>
              <button class="bg-games btn-option ml-2">
                <span class="mdi mdi-magnify"></span>
                Pesquisar
              </button>
            </div>
          </div>
          <div
            :class="['search-open', { 'mt-6': openFilter }]"
            @click="openFilter = !openFilter"
          >
            <span>{{
              openFilter ? "Esconder busca avançada" : "Mostrar busca avançada"
            }}</span>
            <span
              :class="[
                'mdi ml-2',
                openFilter
                  ? 'mdi-chevron-up-circle'
                  : 'mdi-chevron-down-circle',
              ]"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTypesFilter } from "@/stores/TypesFilter";
import { computed, ref } from "vue";

const types = useTypesFilter();

const openFilter = ref(false);

const typesOne = computed(() => {
  return types.types.filter((e, index) => index < 9);
});
const typesTwo = computed(() => {
  return types.types.filter((e, index) => index >= 9);
});
</script>

<style>
#pokedex {
  @apply bg-gray-200 h-max relative;
}
#pokedex > div {
  @apply bg-gray-100 2xl:w-[75%] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-full m-auto h-screen;
}
#search {
  @apply my-2 flex items-stretch;
}
#search input {
  @apply border-2 rounded border-gray-500 p-2 w-full text-gray-700 grow;
}
#search button {
  @apply bg-games rounded w-12 ml-4 !important;
}
#info {
  @apply bg-pokemon text-gray-50 text-xl text-center p-4 font-normal rounded;
}
#filter {
  @apply w-full bg-[#616161];
}
#range {
  @apply flex items-center first:mr-2 ml-0;
}
h1 {
  @apply text-main text-4xl font-normal py-4 px-3 left-0;
}
h2 {
  @apply text-3xl font-normal font-sans;
}
.btn-option {
  @apply font-medium text-xl text-white px-6 py-3 rounded;
}
.search-area {
  @apply w-full  absolute left-0  text-gray-50;
}
.search-area > div {
  @apply px-[13%] py-4;
}
.type-info:first-child {
  @apply w-24 p-1 border-2 border-main rounded text-center cursor-pointer;
}
.type-info:nth-child(2),
.type-info:nth-child(3) {
  @apply rounded-full bg-gray-50 text-gray-900 items-center flex justify-center w-8 h-8 cursor-pointer font-semibold;
}
.type-info:nth-child(2)[selected="true"],
.type-info:nth-child(3)[selected="true"] {
  @apply bg-[#30a7d7];
}
.input-range {
  @apply rounded-md w-20 p-2 text-gray-900;
}
.search-open {
  @apply bg-[#616161] w-fit px-20 mx-auto p-0 flex text-lg  cursor-pointer !important;
}
</style>
