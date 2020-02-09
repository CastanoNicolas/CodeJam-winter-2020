<template>
  <q-page>
  </q-page>
</template>

<script>
import { listManagerMixin } from '../mixins/listManagerMixin'
import { Ingredient } from '../classes/Ingredient'

export default {
  name: 'RecipeEdit',
  components: {
  },
  data () {
    return {
      ingredientInView: '',
      ingredientModified: new Ingredient()
    }
  },
  computed: {
    ingredientList () {
      return this.$store.getters.getShoppingList
    },
    ingredientDetails () {
      return this.ingredientList[this.ingredientInView.name]
    }
  },
  methods: {
    createIngredient () { // nouvel ingrédient, ecrase un ingrédient si il a le même nom !
      this.$store.commit('addIngredientToIngredientList', this.ingredientModified)
    },
    applyModification () { // uniquement en cas de modification du nom, car supprime celle avec l'ancien nom !
      let oldIngredient = this.ingredientModified
      this.$store.commit('addIngredientToIngredientList', this.ingredientModified)
      this.$store.commit('removeIngredientFromIngredientList', oldIngredient)
    }
  },
  mixins: [listManagerMixin],
  created () {
  }
}
</script>

<style>

</style>
