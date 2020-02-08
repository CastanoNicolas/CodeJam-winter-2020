<template>
  <div class="fixed-center text-center">
    RecipeList
  </div>
</template>

<script>
import { listManagerMixin } from '../mixins/listManagerMixin'
import { Recipe } from '../classes/Recipe'

export default {
  name: 'RecipeListList',
  data () {
    return {
      // variables constantes
    }
  },
  created () {
    console.log('Page : RecipeList')
  },
  computed: {
    // variables actualiser si changement (observables/observeur en un)
    ingredientList () {
      return this.$store.getters.mainModule.getRecipeList
    }
  },
  methods: {
    removeRecipeFromRecipeList (recipe) {
      this.$store.commit('removeRecipeFromRecipeList', recipe)
    },
    addRecipeToRecipeList (ingredientList, quantityList, description, categories) {
      let newRecipe = new Recipe(ingredientList, quantityList, description, categories)
      this.$store.commit('addRecipeToRecipeList', newRecipe)
    }
  },
  mixins: [listManagerMixin]
}
</script>
