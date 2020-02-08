<template>
  <q-page>
    <Search :label="label" :text="text"/>
  </q-page>
</template>

<script>
import Search from 'components/Search'

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
  }
}
</script>

<style>
</style>
