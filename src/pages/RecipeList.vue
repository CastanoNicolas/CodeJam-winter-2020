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
    },
    addIngredientFromRecipeToShoppingList (recipe) {
      recipe.ingredientList.forEach(function (ingredient, index, array) {
        this.addIngredientToShoppingList(ingredient, recipe.quantityList[index])
      })
    },
    removeIngredientFromRecipeFromStockList (recipe) {
      recipe.ingredientList.forEach(
        (ingredient, index, array) => {
          if (this.enoughIngredient(ingredient)) {

          }
        }
      )
    },
    addRecipeToStockList (recipe) {
      // with expiry date
    },
    enoughIngredient (ingredient, quantity) {
      return this.$store.getters.mainModule.getStockList().find((elem) => {
        return elem.name === ingredient.name
      }).quantity >= quantity
    }
  },
  mixins: [listManagerMixin]
}
</script>
