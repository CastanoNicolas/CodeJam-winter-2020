
export class StockList {
  constructor () {
    this.ingredientList = {}
    this.recipeList = {}
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

    this.ingredientList[ingredient.name].push({ ingredient: { ...ingredient, expiryDate: Date.now() + ingredient.dayBeforeStale }, quantity: quantity })
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
    if (exist !== undefined) {
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
