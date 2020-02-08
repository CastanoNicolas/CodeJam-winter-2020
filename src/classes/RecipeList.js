export class RecipeList {
  constructor () {
    this.recipeList = {}
  }
  addRecipe (recipe) {
    console.log(recipe)
    this.recipeList[recipe.name] = recipe
    console.log(this.recipeList)
  }
  removeRecipe (recipe) {
    delete this.recipeList[recipe.name]
  }
}
