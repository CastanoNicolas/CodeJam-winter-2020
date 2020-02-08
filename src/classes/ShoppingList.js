export class ShoppingList {
  constructor () {
    this.ingredientList = []
  }
  addIngredient (ingredient, quantity) {
    this.ingredient[ingredient.name] = { ingredient, quantity }
  }
  removeIngredient (ingredient, quantity) {
    this.ingredient[ingredient.name].quantity -= quantity
    if (this.ingredient[ingredient.name].quantity <= 0) {
      delete this.ingredient[ingredient.name]
    }
  }
}
