<template>
  <q-page>
    <Search :label="label" :text="text"/>

    <q-list>
      <ShoppingItem
        :name="name"/>
      <ShoppingItem
        :name="name"/>
    </q-list>
  </q-page>
</template>

<script>
import { listManagerMixin } from '../mixins/listManagerMixin'
import Search from 'components/Search'
import ShoppingItem from 'components/ShoppingItem'

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
      name: 'lili'
    }
  },
  computed: {
    ingredientList () {
      return this.$store.getters.mainModule.getShoppingList
    }
  },
  methods: {
    removeIngredientFromShoppingList (ingredient, quantity) {
      this.$store.commit('removeIngredientFromShoppingList', { ingredient, quantity })
    },
    testmet () {

    }
  },
  mixins: [listManagerMixin]

}
</script>
