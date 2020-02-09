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
    isEditing: false,
    recipEdited: '',
    quantitiesEdited: {}
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
      state.stockList.ingredientList = stockList.ingredientList
      state.stockList.recipeList = stockList.recipeList
      console.log(state.stockList)
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
    addIngredientToStockList (state, ing) {
      state.stockList.addIngredient(ing.ingredient, ing.quantity)
    },
    removeIngredientFromStockList (state, { ingredient, quantity }) {
      state.stockList.removeIngredient(ingredient, quantity)
    },
    addIngredientToShoppingList (state, ing) {
      state.shoppingList.addIngredient(ing.ingredient, ing.quantity)
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
    },
    setRecipEdited (state, recip) {
      state.recipEdited = recip
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
      return state.stockList.ingredientList
    },
    getRecipeList (state) {
      return state.recipeList.recipeList
    }
  }
}
