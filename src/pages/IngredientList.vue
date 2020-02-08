<template>
  <div class="fixed-center text-center">
    ingredientList
  </div>
</template>

<script>
import { listManagerMixin } from '../mixins/listManagerMixin'
import { IngredientList } from '../classes/IngredientList'
import { Ingredient } from '../classes/Ingredient'

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
  mixins: [listManagerMixin],
  created () {
    let ingredientList = new IngredientList()

    console.log('shoopinglist avant ajour du rpemeir ingredient')
    console.log(ingredientList)

    let carrote = new Ingredient('carrote', '', 10, 'qty', ['legume', 'autre'])
    console.log('carrote:')
    console.log(carrote)

    let poireau = new Ingredient('poireau', '', 15, 'qty', ['legume', 'autre'])
    console.log('poireau:')
    console.log(poireau)

    ingredientList.addIngredient(carrote)
    console.log('shopping lsit apres ajout de 12 carrotes')
    console.log(ingredientList)
    ingredientList.addIngredient(carrote)
    console.log('shopping lsit apres ajout de 5 carrotes')
    console.log(ingredientList)
    ingredientList.addIngredient(poireau)
    console.log('shopping lsit apres ajout de 6 poireau')
    console.log(ingredientList)

    ingredientList.removeIngredient(carrote)
    console.log('shopping lsit apres enlevage de 10 carrotes')
    console.log(ingredientList)
    ingredientList.removeIngredient(carrote)
    console.log('shopping lsit apres enlevage de 7 carrotes')
    console.log(ingredientList)
  }

}
</script>
