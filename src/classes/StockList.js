
export class StockList {
  constructor () {
    this.ingredientList = []
    this.recipeList = []
  }
  addIngredient (ingredient, quantity) {
    for (let index = 0; index < quantity; index++) {
      // let object = new Ingredient(ingredient.name, ingredient.dayBeforeStale, Date.now() + ingredient.dayBeforeStale, ingredient.unity, ingredient.categories)
      /*
      JE CROIS QUE CA MARCHE PAS ICI !!!
      */
      if (typeof this.ingredientList[ingredient.name] === 'undefined') {
        this.ingredientList[ingredient.name] = []
      }
      this.ingredientList[ingredient.name].push({ ...ingredient, expiryDate: Date.now() + ingredient.dayBeforeStale })
    }
  }
  removeIngredient (ingredient, quantity) {
    for (let index = 0; index < quantity; index++) {
      this.ingredientList[ingredient.name].shift()
    }
  }
  addRecipe (recipe, quantity) {
    if (typeof this.ingredientList[recipe.name] === 'undefined') {
      this.recipeList[recipe.name] = []
    }
    for (let index = 0; index < quantity; index++) {
      this.recipeList[recipe.name].push({ ...recipe, expiryDate: Date.now() + recipe.dayBeforeStale })
    }
  }
  removeRecipe (recipe, quantity) {
    for (let index = 0; index < quantity; index++) {
      this.recipeList[recipe.name].shift()
    }
  }
}
