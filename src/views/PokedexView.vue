<template>
  <div id="pokedex">
    <div>
      <h1>Pokédex</h1>
      <div class="search-area">
        <div class="flex items-center">
          <div class="w-1/2">
            <h2 class="text-2xl font-normal font-sans mt-6">Nome ou número</h2>
            <div id="search">
              <input type="text" />
              <button class="mdi mdi-magnify" />
            </div>
            <p>
              Use a pesquisa avançada para explorar Pokémon por tipo, fraqueza,
              habilidade e mais!
            </p>
          </div>
          <div class="ml-4 w-1/2">
            <p id="info">
              Realize a busca por Pokémon pelo nome ou usando o número do
              Pokédex Nacional.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
#pokedex {
  @apply bg-gray-200 h-max relative;
}
#pokedex > div {
  @apply bg-gray-100 w-[70%] m-auto h-screen;
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
  @apply bg-pokemon text-gray-50 text-xl text-center p-2 font-normal rounded;
}
h1 {
  @apply text-main text-3xl font-normal py-4 px-3;
}
.search-area {
  @apply w-full px-[15%] absolute left-0 bg-dark text-gray-50;
}
.search-area > div {
  @apply mx-3 my-4;
}
</style>
