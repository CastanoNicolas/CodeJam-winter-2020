<template>
  <div class="fixed-center text-center">
    ingredientList
  </div>
</template>

<script>
import { listManagerMixin } from '../mixins/listManagerMixin'

export default {
  name: 'IngredientList',
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
