<template>
  <q-page>
    <Search :label="labelSearch" :text="textSearch"/>
    <q-list>
      <StockItem v-for="(ingredient,k) in ingredientList.ingredientList" :key="k"
        :stockItem="ingredient"/>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[20, 20]">
      <q-btn round color="primary" icon="add"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
import Search from 'components/Search'
import StockItem from 'components/StockItem'
import { listManagerMixin } from '../mixins/listManagerMixin'
import { Ingredient } from '../classes/Ingredient'

export default {
  name: 'StockList',
  components: {
    Search,
    StockItem
  },
  data () {
    return {
      labelSearch: 'Search in stock',
      textSearch: ''
    }
  },
  computed: {
    ingredientList () {
      console.log(this.$store.getters.getStockList)
      return this.$store.getters.getStockList
    }
  },
  methods: {

  },
  mixins: [listManagerMixin],
  created () {
    var carrote = new Ingredient('carrote', 10, '', 'qty', ['legume', 'autre'])
    console.log('carrote:')
    console.log(carrote)

    let poireau = new Ingredient('poireau', 10, '', 'qty', ['legume', 'autre'])
    console.log('poireau:')
    console.log(poireau)

    var quantity = 12
    this.$store.commit('addIngredientToStockList', { 'ingredient': carrote, 'quantity': quantity })
    console.log(this.ingredientList)

    console.log('%c Recipe ! ===>', 'font-size: 25px; color : orange')
    let recipies = this.$store.getters.getRecipeList
    for (const key in recipies) {
      console.log(recipies[key])
      this.$store.commit('addRecipeToStockList', { recipe: recipies[key], quantity: 1 })
    }
    console.log(this.$store.getters.getStockList)
    this.$store.commit('removeRecipeFromStockList', this.$store.getters.getRecipeList[0])

    console.log(this.$store.getters.getStockList)
  }
}
</script>

<style>
</style>
