<template>
  <div>
    {{ recipe.id }} <br>
    {{ recipe.title }} <br>
    {{ recipe.url }} <br>
    {{ recipe.imageUrl }} <br>
    {{ recipe.materials }} <br>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"
import { Recipe } from "@/types/recipe"

export default defineComponent({
  props: {
    recipe: {
      type: Object
    }
  },
  setup(props: { recipe: Recipe }) {
    const recipe = ref(props.recipe);
    console.log(props.recipe);
    return {
      recipe
    }
  }
})
</script>
