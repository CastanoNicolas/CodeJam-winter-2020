<template>
  <div class="fixed-center text-center">
    ShoppingList {{test}}
    <q-btn color="white" text-color="black" label="Standard" @click="testmet()" />
  </div>
</template>

<script>
import { listManagerMixin } from '../mixins/listManagerMixin'

export default {
  name: 'StockList',
  computed: {

    ingredientList () {
      return this.$store.getters.mainModule.getShoppingList
    }
  },
  methods: {
    removeIngredientFromStockList (ingredient, quantity) {
      this.$store.commit('removeIngredientFromStockList', { ingredient, quantity })
    }
  },
  mixins: [listManagerMixin]
}
</script>
