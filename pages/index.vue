<template>
  <RecipeList v-bind:recipes="recipes"/>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import { Recipe } from "@/types/recipe"

export default defineComponent({
  setup() {
    const recipe1: Recipe = {
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
    const recipe2: Recipe = {
      id: 2,
      title: "Title 2",
      url: "URL2",
      imageUrl: "ImageURL2",
      materials: [
        "material 2",
        "material 4",
      ]
    };
    const recipe3: Recipe = {
      id: 3,
      title: "Title 3",
      url: "URL3",
      imageUrl: "ImageURL3",
      materials: [
        "material 1",
        "material 3",
        "material 4",
        "material 5",
      ]
    };

    const recipes: Recipe[] = [
      recipe1,
      recipe2,
      recipe3,
    ];

    return {
      recipes
    }
  }
})
</script>
