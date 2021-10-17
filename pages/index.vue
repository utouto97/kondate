<template>
  <RecipeList v-bind:recipe="recipe1"/>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import { Recipe } from "@/types/recipe"

export default defineComponent({
  setup() {
    const recipe1: recipe = {
      id: 1,
      title: "Title 1",
      url: "URL1",
      imageUrl: "ImageURL1",
      materials: [
        "material 1",
        "material 2",
        "material 3",
      ]
    };

    return {
      recipe1
    }
  }
})
</script>
