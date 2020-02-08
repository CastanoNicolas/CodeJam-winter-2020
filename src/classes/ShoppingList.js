export class ShoppingList {
  constructor () {
    this.ingredientList = []
  }
  addIngredient (ingredient, quantity) {
    if (typeof this.ingredientList[ingredient.name] === 'undefined') {
      this.ingredientList[ingredient.name] = 0
    }
    let currentQuantity = this.ingredientList[ingredient.name]
    this.ingredientList[ingredient.name] = currentQuantity + quantity
  }
  removeIngredient (ingredient, quantity) {
    this.ingredientList[ingredient.name] -= quantity
    if (this.ingredientList[ingredient.name] <= 0) {
      delete this.ingredientList[ingredient.name]
    }
  }
}
