<template>
  <RecipeList v-bind:recipes="recipes"/>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"
import { Context } from "@nuxt/types"
import { Recipe } from "@/types/recipe"

export default defineComponent({
  setup() {
  },
  async asyncData(context: Context) {
    const recipes: Recipe[] = []
    const result = (await context.$api.get('')).data.result
    for (var i = 0; i < result.length; i++) {
      const recipe: Recipe = {
        id: result[i].recipeId,
        title: result[i].recipeTitle,
        url: result[i].recipeUrl,
        imageUrl: result[i].foodImageUrl,
        materials: result[i].recipeMaterial,
      }
      recipes.push(recipe)
    }
    return {
      recipes
    }
  }
})
</script>
