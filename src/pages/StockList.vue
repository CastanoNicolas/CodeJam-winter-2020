<template>
  <q-page>
    <Search :label="label" :text="text"/>
    <q-list>
      <StockItem
        :name="name"/>
      <StockItem
        :name="name"/>
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
import { StockList } from '../classes/StockList'
import { Ingredient } from '../classes/Ingredient'

export default {
  name: 'StockList',
  components: {
    Search,
    StockItem
  },
  data () {
    return {
      label: 'Search in stock',
      text: '',
      name: 'lala'
    }
  },
  computed: {
    ingredientList () {
      return this.$store.getters.getStockList
    }
  },
  methods: {

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

    stocklist.addIngredient(carrote, 6)
    console.log('shopping lsit apres ajout de 5 carrotes')
    stocklist.addIngredient(carrote, 6)
    console.log('shopping lsit apres ajout de 5 carrotes')

    stocklist.removeIngredient(carrote, 10)
    console.log('shopping lsit apres enlevage de 10 carrotes')
    stocklist.removeIngredient(carrote, 10)
    console.log('shopping lsit apres enlevage de 10 carrotes')
  }
}
</script>

<style>
</style>
