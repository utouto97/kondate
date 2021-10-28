<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="recipe in recipes" :key="recipe.id" class="w-60 mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-2">
      <img :src="recipe.imageUrl" class="w-60 h-52" />
      <div class="px-6 py-4">
        <div class="text-lg font-bold mb-2"> {{ recipe.title }} </div>
        <div class="font-bold mb-2"> 材料 </div>
        <ul class="text-sm text-gray-600 mb-4">
          <li v-for="material in recipe.materials" :key="material">{{ material }}</li>
        </ul>
        <a v-bind:href="recipe.url" class="py-2 px-4 bg-gray-200 font-bold rounded hover:opacity-75">詳細</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"
import { Recipe } from "@/types/recipe"

export default defineComponent({
  props: {
    recipes: {
      type: Array
    }
  },
  setup(props: { recipes: Recipe[] }) {
    const recipes = ref(props.recipes);
    return {
      recipes
    }
  },
})
</script>
