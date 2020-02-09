<template>
  <q-page>
    <Search :label="labelSearch" :textSearch.sync="textSearch"  @updateDisplay="updateList"/>
    <q-list>
      <ShoppingItem v-for="(quantity,k) in ingredientListDisplay" :key="k"
        :numberItem.sync="ingredientList[k]"
        :nameItem="k"
       />
    </q-list>
  </q-page>
</template>

<script>
import { listManagerMixin } from '../mixins/listManagerMixin'
import Search from 'components/Search'
import ShoppingItem from 'components/ShoppingItem'
// import { Ingredient } from '../classes/Ingredient'

export default {
  name: 'IngredientList',
  components: {
    Search,
    ShoppingItem
  },
  data () {
    return {
      labelSearch: 'Search in shopping list',
      textSearch: '',
      ingredientListDisplay: {}
    }
  },
  computed: {
    ingredientList () {
      return this.$store.getters.getShoppingList
    }
  },
  methods: {
    removeIngredientFromShoppingList (ingredient, quantity) {
      this.$store.commit('removeIngredientFromShoppingList', { ingredient, quantity })
      this.saveShoppingList()
    },
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
    // var carrote = new Ingredient('carrote', 10, '', 'qty', ['legume', 'autre'])
    // var poireau = new Ingredient('poireau', 10, '', 'qty', ['legume', 'autre'])

    // var quantity = 12
    // this.$store.commit('addIngredientToShoppingList', { 'ingredient': carrote, 'quantity': quantity })
    // this.$store.commit('addIngredientToShoppingList', { 'ingredient': poireau, 'quantity': quantity })
    console.log(this.ingredientList)

    this.updateList()
  }

}
</script>
