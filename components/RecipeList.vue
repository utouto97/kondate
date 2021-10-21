<template>
  <div>
    <div v-for="recipe in recipes" :key="recipe.id" class="bg-gray-200 mt-2">
      {{ recipe.id }} <br>
      {{ recipe.title }} <br>
      {{ recipe.url }} <br>
      <img :src="recipe.imageUrl" width="320" /> <br>
      {{ recipe.materials }} <br>
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
