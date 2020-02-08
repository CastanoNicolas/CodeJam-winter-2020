
export const listManagerMixin = {
  methods: {
    addIngredientToShoppingList (ingredient, quantity) {
      this.$store.commit('addIngredientToShoppingList', {
        ingredient,
        quantity
      })
    },
    addIngredientToStockList (ingredient, quantity) {
      this.$store.commit('addIngredientToStockList', {
        ingredient,
        quantity
      })
      this.$store.commit('removeIngredientFromShoppingList', { ingredient, quantity })
    }
  }
}
