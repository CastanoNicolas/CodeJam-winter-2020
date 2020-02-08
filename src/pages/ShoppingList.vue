<template>
  <q-page>
    <Search :label="label" :text="text"/>
    <q-page-sticky position="bottom-right" :offset="[20, 20]">
      <q-btn round color="primary" icon="add"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { listManagerMixin } from '../mixins/listManagerMixin'
import Search from 'components/Search'

export default {
  name: 'IngredientList',
  components: {
    Search
  },
  data () {
    return {
      a: { blub: 'A', blib: '' },
      b: { blub: 'B', blib: 'Z' },
      c: [],
      label: 'Search in shopping list',
      text: ''
    }
  },
  computed: {
    test () {
      return { blub: 'A', blib: '', ...this.b }
    },
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
