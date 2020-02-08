<template>
  <q-page>
    <Search :label="label" :text="text"/>
    <q-list>
      <StockItem
        :name="name"/>
      <StockItem
        :name="name"/>
    </q-list>
  </q-page>
</template>

<script>
import Search from 'components/Search'
import StockItem from 'components/StockItem'
import { listManagerMixin } from '../mixins/listManagerMixin'

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
      return this.$store.getters.mainModule.getStockList
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

<style>
</style>
