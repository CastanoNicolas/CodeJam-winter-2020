<template>
   <q-page>
    <Search :label="label" :text="text"/>
  </q-page>
</template>

<script>
import Search from 'components/Search'
import { listManagerMixin } from '../mixins/listManagerMixin'

export default {
  name: 'IngredientList',
  components: {
    Search
  },
  data () {
    return {
      label: 'Search in ingredients',
      text: ''
    }
  },
  computed: {
    ingredientList () {
      return this.$store.getters.mainModule.getIngredientList
    }
  },
  methods: {
    removeIngredientFromIngredientList (ingredient) {
      this.$store.commit('removeIngredientFromIngredientList', ingredient)
    }
  },
  mixins: [listManagerMixin]

}
</script>
