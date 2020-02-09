import { RecipeList } from '../classes/RecipeList'
import { StockList } from '../classes/StockList'
import { ShoppingList } from '../classes/ShoppingList'
import { IngredientList } from '../classes/IngredientList'

export default {
  state: {
    ingredientList: new IngredientList(),
    recipeList: new RecipeList(),
    stockList: new StockList(),
    shoppingList: new ShoppingList(),
    isEditing: false
  },
  mutations: {
    addIngredientToIngredientList (state, ingredient) {
      state.ingredientList.addIngredient(ingredient)
    },
    removeIngredientFromIngredientList (state, ingredient) {
      state.ingredientList.removeIngredient(ingredient)
    },
    addIngredientToStockList (state, { ingredient, quantity }) {
      state.stockList.addIngredient(ingredient, quantity)
    },
    removeIngredientFromStockList (state, { ingredient, quantity }) {
      state.stockList.removeIngredient(ingredient, quantity)
    },
    addIngredientToShoppingList (state, { ingredient, quantity }) {
      state.shoppingList.addIngredient(ingredient, quantity)
    },
    removeIngredientFromShoppingList (state, { ingredient, quantity }) {
      state.shoppingList.removeIngredient(ingredient, quantity)
    },
    addRecipeToRecipeList (state, recipe) {
      state.recipeList.addRecipe(recipe)
    },
    removeRecipeFromRecipeList (state, recipe) {
      state.recipeList.removeRecipe(recipe)
    },
    addRecipeToStockList (state, { recipe, quantity }) {
      state.stockList.addRecipe(recipe, quantity)
    },
    removeRecipeToStockList (state, recipe) {
      state.stockList.removeRecipe(recipe)
    },
    setEditing (state, isEditing) {
      state.isEditing = isEditing
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
