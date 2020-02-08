<template>
  <q-page>
    <Search :label="label" :text="text"/>

    <q-list class="q-pt-md">
      <RecipeItem v-for="recipe in recipeList" :key="recipe.name" :recipeItem="recipe">
      </RecipeItem>
    </q-list>

    <q-page-sticky position="bottom-right" :offset="[20, 20]">
      <q-btn round color="primary" icon="add"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
import Search from 'components/Search'
import RecipeItem from 'components/RecipeItem'
import { listManagerMixin } from '../mixins/listManagerMixin'
import { Recipe } from '../classes/Recipe'
import { Ingredient } from '../classes/Ingredient'

export default {
  name: 'RecipeList',
  components: {
    Search,
    RecipeItem
  },
  data () {
    return {
      label: 'Search among recipes',
      text: '',
      name: 'Lala aux fraises'
    }
  },
  created () {
    console.log('Page : RecipeList')

    const newRecip = new Recipe('recipe test', 2, null, [new Ingredient('carotte', 4, null, 'litre', 'legumes'), new Ingredient('dolipranne', 15, null, 'Kg', 'medocs')], [3, 1], 'des carottes et un dolipranne', 'repas bizarre')

    const newRecip2 = new Recipe('recipe encore', 2, null, [new Ingredient('blub', 1, null, 'monument', 'legumes'), new Ingredient('dolipranne', 15, null, 'Kg', 'medocs')], [3, 1], 'des trucs et des blip bloup', 'repas equilibrer mais vegan')

    this.addRecipeToRecipeList(newRecip)
    this.addRecipeToRecipeList(newRecip2)
  },
  computed: {
    // variables actualiser si changement (observables/observeur en un)
    recipeList () {
      return this.$store.getters.getRecipeList
    }
  },
  methods: {
    removeRecipeFromRecipeList (recipe) {
      this.$store.commit('removeRecipeFromRecipeList', recipe)
    },
    addRecipeToRecipeList (recipe) {
      this.$store.commit('addRecipeToRecipeList', recipe)
    },
    addIngredientFromRecipeToShoppingList (recipe) {
      recipe.ingredientList.forEach(function (ingredient, index, array) {
        this.addIngredientToShoppingList(ingredient, recipe.quantityList[index])
      })
    },
    removeIngredientFromRecipeFromStockList (recipe) {
      recipe.ingredientList.every( // Pour pouvoir break out with return false à la place d'un foreach
        (ingredient, index) => {
          if (this.enoughIngredient(ingredient)) {
            this.removeIngredientFromStockList(ingredient, recipe.quantityList[index])
            return true
          } else {
            // PROMPT MESSAGE NOT ENOUGH INGREDIENT, DO ?
            return false
          }
        }
      )
    },
    addRecipeToStockList (recipe, quantity) {
      let newRecipe = new Recipe({ ...recipe, expiryDate: Date.now() + recipe.dayBeforeStale })
      this.$store.commit('addRecipeToStockList', {
        newRecipe,
        quantity
      })
    },
    enoughIngredient (ingredient, quantity) {
      return this.$store.getters.getStockList().find((elem) => {
        return elem.name === ingredient.name
      }).quantity >= quantity
    }
  },
  mixins: [listManagerMixin]
}
</script>
