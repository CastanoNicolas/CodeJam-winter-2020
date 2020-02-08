<template>
  <div class="fixed-center text-center">
    StockList
    <q-btn color="white" text-color="black" label="Standard"/>
  </div>
</template>

<script>
import { listManagerMixin } from '../mixins/listManagerMixin'
import { StockList } from '../classes/StockList'
import { Ingredient } from '../classes/Ingredient'

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
  mixins: [listManagerMixin],
  created () {
    let stocklist = new StockList()

    let carrote = new Ingredient('carrote', 10, '', 'qty', ['legume', 'autre'])
    console.log('carrote:')
    console.log(carrote)

    let poireau = new Ingredient('poireau', 10, '', 'qty', ['legume', 'autre'])
    console.log('poireau:')
    console.log(poireau)

    stocklist.addIngredient(carrote, 12)
    console.log('shopping lsit apres ajout de 12 carrotes')
    console.log(stocklist)
    stocklist.addIngredient(carrote, 5)
    console.log('shopping lsit apres ajout de 5 carrotes')
    console.log(stocklist)
    stocklist.addIngredient(poireau, 6)
    console.log('shopping lsit apres ajout de 6 poireau')
    console.log(stocklist)

    stocklist.removeIngredient(carrote, 10)
    console.log('shopping lsit apres enlevage de 10 carrotes')
    console.log(stocklist)
    stocklist.removeIngredient(carrote, 7)
    console.log('shopping list apres enlevage de 7 carrotes')
    console.log(stocklist)
  }
}
</script>
