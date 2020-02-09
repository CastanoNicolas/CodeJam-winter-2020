
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
        delete this.ingredientList[ingredient.name][exist]
        let exist2 = this.ingredientExist(ingredient)
        if (exist2 !== undefined && exist2 !== -1 && rest !== 0) {
          this.removeIngredient(ingredient, rest)
        }
      }
    }
  }
  addRecipe (recipe, quantity) {
    if (!this.recipeList[recipe.name]) {
      this.recipeList[recipe.name] = { recipe: { ...recipe, expiryDate: Date.now() + recipe.dayBeforeStale }, quantity: quantity }
    } else {
      this.recipeList[recipe.name].quantity += quantity
    }
  }
  removeRecipe (recipe, quantity) {
    // for (let index = 0; index < quantity; index++) {
    //   this.recipeList[recipe.name].shift()
    // }
    let exist = this.recipeExist(recipe)
    if (exist !== undefined && exist !== -1) {
      this.recipeList[recipe.name][exist].quantity -= quantity
      if (this.recipeList[recipe.name][exist].quantity <= 0) {
        delete this.recipeList[recipe.name]
      }
    }
  }
  ingredientExist (ingredient) {
    return this.ingredientList[ingredient.name].findIndex((elem) => {
      // remplacer par for ... in
      if (!elem) {
        return false
      }
      elem = elem.ingredient
      if (elem.name === ingredient.name &&
         elem.dayBeforeStale === ingredient.dayBeforeStale &&
         elem.unity === ingredient.unity &&
         elem.categories === ingredient.categories) {
        console.log('ingredient EXIST')
        return true
      } else {
        console.log('ingredient NOT exist')
        return false
      }
    })
  }
  recipeExist (recipe) {
    return this.recipeList.findIndex((elem) => {
      // remplacer par for ... in
      if (elem.name === recipe.name &&
         elem.dayBeforeStale === recipe.dayBeforeStale &&
         elem.ingredientList === recipe.ingredientList &&
         elem.quantityList === recipe.quantityList &&
         elem.description === recipe.description &&
         elem.categories === recipe.categories) {
        return true
      } else {
        return false
      }
    })
  }
}
