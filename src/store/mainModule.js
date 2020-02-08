import { RecipeList } from '../classes/RecipeList'
import { StockList } from '../classes/StockList'
import { ShoppingList } from '../classes/ShoppingList'
import { IngredientList } from '../classes/IngredientList'

export default {
  state: {
    ingredientList: new IngredientList(),
    recipeList: new RecipeList(),
    stockList: new StockList(),
    shoppingList: new ShoppingList()
  },
  mutations: {
    addIngredientToIngredientList (state, ingredient) {
      state.ingredientList.addIngredient(ingredient)
    },
    removeIngredientFromIngredientList (state, ingredient) {
      state.ingredientList.removeIngredient(ingredient)
    },
    addIngredientToStockList (state, ingredient) {
      state.stockList.addIngredient(ingredient)
    },
    removeIngredientFromStockList (state, ingredient) {
      state.stockList.removeIngredient(ingredient)
    },
    addIngredientToShoppingList (state, ingredient) {
      state.shoppingList.addIngredient(ingredient)
    },
    removeIngredientFromShoppingList (state, ingredient) {
      state.shoppingList.removeIngredient(ingredient)
    },
    addRecipeToRecipeList (state, recipe) {
      state.recipeList.addRecipe(recipe)
    },
    removeRecipeFromRecipeList (state, recipe) {
      state.recipeList.removeRecipe(recipe)
    }

  },
  actions: {

  },
  getters: {
    getIngredientList (state) {
      return state.ingredientList
    },
    getShoppingList (state) {
      return state.shoppingList
    },
    getStockList (state) {
      return state.stockList
    },
    getRecipeList (state) {
      return state.recipeList
    }
  }
}
