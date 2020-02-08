<template>
  <div class="fixed-center text-center">

  </div>
</template>

<script>
export default {
  name: 'IngredientList',
  computed: {
    ingredientList () {
      return this.$store.getters.mainModule.getIngredientList
    }
  },
  methods: {
    removeIngredientFromIngredientList (ingredient) {
      this.$store.commit('removeIngredientFromIngredientList', ingredient)
    },
    addIngredientToShoppingList (ingredient) {
      this.$store.commit('addIngredientToShoppingList', ingredient)
    },
    addIngredientToStockList (ingredient) {
      this.$store.commit('addIngredientToStockList', ingredient)
    }
  }

}
</script>
