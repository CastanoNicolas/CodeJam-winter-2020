export class StockList {
  constructor () {
    this.ingredientList = []
  }
  addIngredient (ingredient) {
    this.ingredient[ingredient.name] = ingredient
  }
  removeIngredient (ingredient) {
    delete this.ingredient[ingredient.name]
  }
}
