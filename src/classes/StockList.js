
export class StockList {
  constructor () {
    this.ingredientList = []
  }
  addIngredient (ingredient, quantity) {
    for (let index = 0; index < quantity; index++) {
      // let object = new Ingredient(ingredient.name, ingredient.dayBeforeStale, Date.now() + ingredient.dayBeforeStale, ingredient.unity, ingredient.categories)
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
}
