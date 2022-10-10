import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTypesFilter = defineStore("TypesFilter", () => {
  const types = ref([
    {
      nome: "Inseto",
      textColor: "text-gray-90",
      bgColor: "bg-bug",
    },
    {
      nome: "Dragão",
      textColor: "text-gray-90",
      bgColor: "bg-dragon",
    },
    {
      nome: "Fada",
      textColor: "text-gray-900",
      bgColor: "bg-fairy",
    },
    {
      nome: "Fogo",
      textColor: "text-gray-90",
      bgColor: "bg-fire",
    },
    {
      nome: "Fantasma",
      textColor: "text-gray-90",
      bgColor: "bg-ghost",
    },
    {
      nome: "Terrestre",
      textColor: "text-gray-900",
      bgColor: "bg-ground",
    },
    {
      nome: "Normal",
      textColor: "text-gray-900",
      bgColor: "bg-normal",
    },
    {
      nome: "Psíquico",
      textColor: "text-gray-90",
      bgColor: "bg-psyquic",
    },
    {
      nome: "Metal",
      textColor: "text-gray-900",
      bgColor: "bg-steel",
    },
    {
      nome: "Noturno",
      textColor: "text-gray-90",
      bgColor: "bg-dark",
    },
    {
      nome: "Eletrico",
      textColor: "text-gray-900",
      bgColor: "bg-electric",
    },
    {
      nome: "Lutador",
      textColor: "text-gray-90",
      bgColor: "bg-fight",
    },
    {
      nome: "Voador",
      textColor: "text-gray-900",
      bgColor: "bg-flying",
    },
    {
      nome: "Planta",
      textColor: "text-gray-900",
      bgColor: "bg-leaf",
    },
    {
      nome: "Gelo",
      textColor: "text-gray-900",
      bgColor: "bg-ice",
    },
    {
      nome: "Venenoso",
      textColor: "text-gray-90",
      bgColor: "bg-poison",
    },
    {
      nome: "Pedra",
      textColor: "text-gray-90",
      bgColor: "bg-rock",
    },
    {
      nome: "Água",
      textColor: "text-gray-90",
      bgColor: "bg-water",
    },
  ]);

  return { types };
});
