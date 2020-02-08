<template>
  <div class="fixed-center text-center">
    ShoppingList {{test}}
    <q-btn color="white" text-color="black" label="Standard" @click="testmet()" />
  </div>
</template>

<script>
import { listManagerMixin } from '../mixins/listManagerMixin'

export default {
  name: 'IngredientList',
  data () {
    return {
      a: { blub: 'A', blib: '' },
      b: { blub: 'B', blib: 'Z' },
      c: []
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
