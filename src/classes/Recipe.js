export class Recipe {
  constructor (name, dayBeforeStale, expiryDate, ingredientList, quantityList, description, categories) {
    this.name = name
    this.dayBeforeStale = dayBeforeStale
    this.expiryDate = expiryDate
    this.ingredientList = ingredientList
    this.quantityList = quantityList
    this.description = description
    this.categories = categories
  }
}
