export class StockList {
  constructor () {
    this.ingredientList = {}
    this.recipeList = {}
  }
  addIngredient (ingredient, quantity) {
    if (!this.ingredientList[ingredient.name]) {
      this.ingredientList[ingredient.name] = []
    }

    this.ingredientList[ingredient.name].push({ ingredient: { ...ingredient, expiryDate: Date.now() + ingredient.dayBeforeStale }, quantity: quantity })
  }
  removeIngredient (ingredient, quantity) {
    let exist = this.ingredientExist(ingredient)
    if (exist !== undefined && exist !== -1) {
      this.ingredientList[ingredient.name][exist].quantity -= quantity
      if (this.ingredientList[ingredient.name][exist].quantity <= 0) {
        let rest = -this.ingredientList[ingredient.name][exist].quantity
        this.ingredientList[ingredient.name].splice(exist, 1)
        let exist2 = this.ingredientExist(ingredient)
        if (exist2 !== undefined && exist2 !== -1 && rest !== 0) {
          this.removeIngredient(ingredient, rest)
        }
      }
    }
  }
  addRecipe (recipe, quantity) {
    console.log('%c ADDED ! ===>', 'font-size: 25px; color : orange')
    if (!this.recipeList[recipe.name]) {
      this.recipeList[recipe.name] = { recipe: { ...recipe, expiryDate: Date.now() + recipe.dayBeforeStale }, quantity: quantity }
    } else {
      this.recipeList[recipe.name].quantity += quantity
    }
  }
  removeRecipe (recipe, quantity) {
    console.log('%c REMOVED ! ===>', 'font-size: 25px; color : orange')
    // for (let index = 0; index < quantity; index++) {
    //   this.recipeList[recipe.name].shift()
    // }
    let exist = this.recipeExist(recipe)
    if (exist) {
      this.recipeList[recipe.name].quantity -= quantity
      if (this.recipeList[recipe.name].quantity <= 0) {
        delete this.recipeList[recipe.name]
      }
    }
  }
  ingredientExist (ingredient) {
    console.log('exists ?')
    if (!ingredient) {
      return -1
    }
    if (this.ingredientList[ingredient.name]) {
      return this.ingredientList[ingredient.name].findIndex(elem => {
      // remplacer par for ... in
        if (!elem) {
          return false
        }
        elem = elem.ingredient
        if (elem.name === ingredient.name) {
          return true
        }
      })
    }
    return -1
  }
  recipeExist (recipe) {
    for (const key in this.recipeList) {
      if (this.recipeList.hasOwnProperty(key)) {
        const elem = this.recipeList[key].recipe
        if (elem.name === recipe.name) {
          return true
        }
      }
    }
    return false
  }
}
