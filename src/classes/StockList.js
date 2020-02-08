
export class StockList {
  constructor () {
    this.ingredientList = []
    this.recipeList = []
  }
  addIngredient (ingredient, quantity) {
    // for (let index = 0; index < quantity; index++) {
    //   // let object = new Ingredient(ingredient.name, ingredient.dayBeforeStale, Date.now() + ingredient.dayBeforeStale, ingredient.unity, ingredient.categories)
    //   /*
    //   JE CROIS QUE CA MARCHE PAS ICI !!!
    //   */
    //   if (typeof this.ingredientList[ingredient.name] === 'undefined') {
    //     this.ingredientList[ingredient.name] = []
    //   }

    //   var today = new Date()
    //   var expirydateValue = new Date()
    //   var newDate = today.getDate() + ingredient.dayBeforeStale
    //   expirydateValue.setDate(newDate)

    //   this.ingredientList[ingredient.name].push({ ...ingredient, expiryDate: expirydateValue })
    // }
    if (!this.ingredientList[ingredient.name]) {
      this.ingredientList[ingredient.name] = []
    }

    let exist = this.ingredientExist(ingredient)
    if (exist) {
      exist.quantity += quantity
    } else {
      this.ingredientList[ingredient.name].push({ ingredient: { ...ingredient, expiryDate: Date.now + ingredient.dayBeforeStale }, quantity: quantity })
    }
  }
  removeIngredient (ingredient, quantity) {
    // if (this.ingredientList[ingredient.name].length <= quantity) {
    //   delete this.ingredientList[ingredient.name]
    // } else {
    //   for (let index = 0; index < quantity; index++) {
    //     this.ingredientList[ingredient.name].shift()
    //   }
    // }
    let exist = this.ingredientExist(ingredient)
    if (exist) {
      exist.quantity -= quantity
      if (exist.quantity < 0) {
        delete this.ingredientList[exist.name]
      }
    }
  }
  addRecipe (recipe, quantity) {
    // if (typeof this.ingredientList[recipe.name] === 'undefined') {
    //   this.recipeList[recipe.name] = []
    // }
    // for (let index = 0; index < quantity; index++) {
    //   this.recipeList[recipe.name].push({ ...recipe, expiryDate: Date.now() + recipe.dayBeforeStale })
    // }
    let exist = this.recipeExist(recipe)
    if (exist) {
      exist.quantity += quantity
    } else {
      this.recipeList[recipe.name] = { recipe: { ...recipe }, quantity: quantity }
    }
  }
  removeRecipe (recipe, quantity) {
    // for (let index = 0; index < quantity; index++) {
    //   this.recipeList[recipe.name].shift()
    // }
    let exist = this.recipeExist(recipe)
    if (exist) {
      exist.quantity -= quantity
      if (exist.quantity <= 0) {
        delete this.recipeList[recipe.name]
      }
    }
  }
  ingredientExist (ingredient) {
    return this.ingredientList[ingredient.name].find((elem) => {
      // remplacer par for ... in
      if (elem.name === ingredient.name &&
         elem.dayBeforeStale === ingredient.dayBeforeStale &&
         elem.expiryDate === ingredient.expiryDate &&
         elem.unity === ingredient.unity &&
         elem.categories === ingredient.categories) {
        return true
      } else {
        return false
      }
    })
  }
  recipeExist (recipe) {
    return this.recipeList.find((elem) => {
      // remplacer par for ... in
      if (elem.name === recipe.name &&
         elem.dayBeforeStale === recipe.dayBeforeStale &&
         elem.expiryDate === recipe.expiryDate &&
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
