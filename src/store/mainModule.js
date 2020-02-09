import { StockList } from '../classes/StockList'
import { ShoppingList } from '../classes/ShoppingList'
import { IngredientList } from '../classes/IngredientList'
import { RecipeList } from 'src/classes/RecipeList'

export default {
  state: {
    ingredientList: new IngredientList(),
    recipeList: new RecipeList(),
    stockList: new StockList(),
    shoppingList: new ShoppingList(),
    isEditing: false
  },
  mutations: {
    setIngredientList (state, ingredientList) {
      state.ingredientList = ingredientList
      console.log(state.ingredientList)
    },
    setRecipeList (state, recipeList) {
      state.recipeList.recipeList = recipeList
    },
    setStockList (state, stockList) {
      state.stockList.ingredientList = stockList
    },
    setShoppingList (state, shoppingList) {
      state.shoppingList.ingredientList = shoppingList
      console.log(state.shoppingList)
    },
    addIngredientToIngredientList (state, ingredient) {
      state.ingredientList.addIngredient(ingredient)
    },
    removeIngredientFromIngredientList (state, ingredient) {
      state.ingredientList.removeIngredient(ingredient)
    },
    addIngredientToStockList (state, pl) {
      state.stockList.addIngredient(pl.ingredient, pl.quantity)
    },
    removeIngredientFromStockList (state, { ingredient, quantity }) {
      state.stockList.removeIngredient(ingredient, quantity)
    },
    addIngredientToShoppingList (state, { ingredient, quantity }) {
      state.shoppingList.addIngredient(ingredient, quantity)
      console.log('addIngredient to Shopping list')
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
    removeRecipeFromStockList (state, { recipe, quantity }) {
      state.stockList.removeRecipe(recipe, quantity)
    },
    setEditing (state, isEditing) {
      state.isEditing = isEditing
    }
  },
  actions: {

  },
  getters: {
    getIngredientList (state) {
      return state.ingredientList.ingredientList
    },
    getShoppingList (state) {
      return state.shoppingList.ingredientList
    },
    getStockList (state) {
      return state.stockList
    },
    getRecipeList (state) {
      return state.recipeList.recipeList
    }
  }
}
