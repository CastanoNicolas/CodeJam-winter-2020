export class IngredientList {
  constructor () {
    this.ingredientList = []
  }
  addIngredient (ingredient) {
    this.ingredientList[ingredient.name] = ingredient
  }
  removeIngredient (ingredient) {
    delete this.ingredientList[ingredient.name]
  }
}
