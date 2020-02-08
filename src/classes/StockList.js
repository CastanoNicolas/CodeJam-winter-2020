
export class StockList {
  constructor () {
    this.ingredientList = []
  }
  addIngredient (ingredient, quantity) {
    for (let index = 0; index < quantity; index++) {
      if (typeof this.ingredientList[ingredient.name] === 'undefined') {
        this.ingredientList[ingredient.name] = []
      }

      var today = new Date()
      var expirydateValue = new Date()
      var newDate = today.getDate() + ingredient.dayBeforeStale
      expirydateValue.setDate(newDate)

      this.ingredientList[ingredient.name].push({ ...ingredient, expiryDate: expirydateValue })
    }
  }
  removeIngredient (ingredient, quantity) {
    if (this.ingredientList[ingredient.name].length <= quantity) {
      delete this.ingredientList[ingredient.name]
    } else {
      for (let index = 0; index < quantity; index++) {
        this.ingredientList[ingredient.name].shift()
      }
    }
  }
}
