<template>
  <q-page>
    <Search :label="labelSearch" :textSearch.sync="textSearch"  @updateDisplay="updateList"/>
    <q-list>
      <StockItem v-for="(ingredient,k) in ingredientListDisplay" :key="k"
        :stockItem.sync="ingredient"/>
    </q-list>
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
      textSearch: '',
      ingredientListDisplay: {}
    }
  },
  computed: {
    ingredientList () {
      console.log(this.$store.getters.getStockList)
      return this.$store.getters.getStockList
    }
  },
  methods: {
    updateList () {
      this.ingredientListDisplay = {}
      var key
      for (key in this.ingredientList) {
        if (this.ingredientList.hasOwnProperty(key) && (key.toLowerCase()).includes(this.textSearch.toLowerCase())) {
          this.ingredientListDisplay[key] = this.ingredientList[key]
        }
      }
    }
  },
  mixins: [listManagerMixin],
  created () {
    var carrote = new Ingredient('Carrot', 10, '', 'qty', ['legume', 'autre'])
    console.log('carrote:')
    console.log(carrote)

    let poireau = new Ingredient('poireau', 10, '', 'qty', ['legume', 'autre'])
    let poireau2 = new Ingredient('poireau', 10, '', 'qty', ['legume', 'autre'])
    console.log('poireau:')
    console.log(poireau)

    var quantity = 12
    this.$store.commit('addIngredientToStockList', { 'ingredient': carrote, 'quantity': quantity })
    this.$store.commit('addIngredientToStockList', { 'ingredient': poireau, 'quantity': quantity })
    quantity = 6
    this.$store.commit('addIngredientToStockList', { 'ingredient': poireau2, 'quantity': quantity })
    console.log(this.ingredientList)

    console.log('%c Recipe ! ===>', 'font-size: 25px; color : orange')
    let recipies = this.$store.getters.getRecipeList
    for (const key in recipies) {
      console.log(recipies[key])
      this.$store.commit('addRecipeToStockList', { recipe: recipies[key], quantity: 2 })
    }
    console.log(this.$store.getters.getStockList)
    this.$store.commit('removeRecipeFromStockList', { recipe: this.$store.getters.getRecipeList['recipe test'], quantity: 1 })

    console.log(this.$store.getters.getStockList)

    this.updateList()
  }
}
</script>

<style>
</style>
