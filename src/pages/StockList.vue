<template>
  <q-page>
    <Search :label="labelSearch" :textSearch.sync="textSearch"  @updateDisplay="updateList"/>
    <q-list>
      <StockItem v-for="(ingredient,k) in ingredientListDisplay" :key="k"
        :stockItem.sync="ingredient"/>
    </q-list>

    <q-page-sticky position="bottom-right" :offset="[20, 20]">
      <q-btn round color="primary" icon="add" to="/IngredientList"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
import Search from 'components/Search'
import StockItem from 'components/StockItem'
import { listManagerMixin } from '../mixins/listManagerMixin'
// import { Ingredient } from '../classes/Ingredient'

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
      console.log(this.$store.state.mainModule.stockList)
      return this.$store.state.mainModule.stockList.ingredientList
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
    console.log(this.ingredientList)

    this.updateList()
    console.log(this.ingredientListDisplay)
  }
}
</script>

<style>
</style>
