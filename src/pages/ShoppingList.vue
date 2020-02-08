<template>
  <q-page>
    <Search :label="label" :text="text"/>
    <q-list>
      <ShoppingItem
        :name="name"/>
      <ShoppingItem
        :name="name"/>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[20, 20]">
      <q-btn round color="primary" icon="add"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { listManagerMixin } from '../mixins/listManagerMixin'
import Search from 'components/Search'
import ShoppingItem from 'components/ShoppingItem'
import { ShoppingList } from '../classes/ShoppingList'
import { Ingredient } from '../classes/Ingredient'

export default {
  name: 'IngredientList',
  components: {
    Search,
    ShoppingItem
  },
  data () {
    return {
      label: 'Search in shopping list',
      text: '',
      name: 'lili',
      shoppingList: 'init'
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
    },
    testmet () {

    }
  },
  mixins: [listManagerMixin],
  created () {
    let shoppingList = new ShoppingList()
    console.log('shoopinglist avant ajour du rpemeir ingredient')
    console.log(shoppingList)

    let carrote = new Ingredient('carrote', '', 10, 'qty', ['legume', 'autre'])
    console.log('carrote:')
    console.log(carrote)

    let poireau = new Ingredient('poireau', '', 15, 'qty', ['legume', 'autre'])
    console.log('poireau:')
    console.log(poireau)

    shoppingList.addIngredient(carrote, 12)
    console.log('shopping lsit apres ajout de 12 carrotes')
    console.log(shoppingList)
    shoppingList.addIngredient(carrote, 5)
    console.log('shopping lsit apres ajout de 5 carrotes')
    console.log(shoppingList)
    shoppingList.addIngredient(poireau, 6)
    console.log('shopping lsit apres ajout de 6 poireau')
    console.log(shoppingList)

    shoppingList.removeIngredient(carrote, 10)
    console.log('shopping lsit apres enlevage de 10 carrotes')
    console.log(shoppingList)
    shoppingList.removeIngredient(carrote, 7)
    console.log('shopping lsit apres enlevage de 7 carrotes')
    console.log(shoppingList)
  }

}
</script>
