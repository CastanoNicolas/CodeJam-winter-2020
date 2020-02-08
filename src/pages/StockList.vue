<template>
  <q-page>
    <Search :label="label" :text="text"/>
  </q-page>
</template>

<script>
import Search from 'components/Search'
import { listManagerMixin } from '../mixins/listManagerMixin'

export default {
  name: 'StockList',
  components: {
    Search
  },
  data () {
    return {
      label: 'Search in stock',
      text: ''
    }
  },
  computed: {

    ingredientList () {
      return this.$store.getters.mainModule.getShoppingList
    }
  },
  methods: {

  },
  mixins: [listManagerMixin]
}
</script>

<style>
</style>
