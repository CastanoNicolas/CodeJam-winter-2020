import { fileHelperMixin } from './fileHelperMixin'

// A CHANGER POUR LE NOUVEAU FORMAT DES STOCKS
export const listManagerMixin = {
  mixins: [fileHelperMixin],
  methods: {
    addIngredientToShoppingList (ingredient, quantity) {
      this.$store.commit('addIngredientToShoppingList', {
        ingredient,
        quantity
      })
      this.saveShoppingList()
    },
    addIngredientToStockList (ingredient, quantity) {
      this.$store.commit('addIngredientToStockList', {
        ingredient,
        quantity
      })
      this.$store.commit('removeIngredientFromShoppingList', { ingredient, quantity })
      this.saveStockList()
      this.saveShoppingList()
    },
    removeIngredientFromStockList (ingredient, quantity) {
      this.$store.commit('removeIngredientFromStockList', { ingredient, quantity })
      this.saveStockList()
    },
    saveIngredientList () {
      this.writeFile('ingredientList.json', this.$store.state.mainModule.ingredientList)
    },
    saveRecipeList () {
      this.writeFile('recipeList.json', this.$store.state.mainModule.recipeList)
    },
    saveShoppingList () {
      this.writeFile('shoppingList.json', this.$store.state.mainModule.shoppingList)
    },
    saveStockList () {
      this.writeFile('stockList.json', this.$store.state.mainModule.stockList)
    }
  }
}
