export class RecipeList {
  constructor () {
    this.recipeList = {}
  }
  addRecipe (recipe) {
    this.recipeList[recipe.name] = recipe
  }
  removeRecipe (recipe) {
    delete this.recipeList[recipe.name]
  }
}
