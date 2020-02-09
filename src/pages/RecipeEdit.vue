<template>
  <q-page class="q-ma-md">
    <div class="text-h6">Ingredients</div>
    <q-list v-for="(ingredient, k) in recipEdited.ingredientList"
    :key="k">
      <RecipeIngredientItem
        :itemIndex=k
        :itemNumber=recipEdited.quantityList
        :itemUnit=ingredient.unity
        :name=ingredient.name />
    </q-list>
    <div class="q-mt-lg text-h6">Directions</div>
    <div class="q-pa-md">
    <q-input
      v-model="recipEdited.description"
      type="textarea"
      autogrow
    />
    </div>
  </q-page>
</template>

<script>
import RecipeIngredientItem from 'components/RecipeIngredientItem'
import { listManagerMixin } from '../mixins/listManagerMixin'

export default {
  name: 'RecipeEdit',
  components: {
    RecipeIngredientItem
  },
  data () {
    return {
      quantityMatches: {},
      recipeInView: ''
    }
  },
  computed: {
    recipeList () {
      return this.$store.getters.getRecipeList
    },
    recipeDetails () {
      return this.recipeList[this.recipeInView.name]
    },
    recipEdited () {
      return this.$store.state.mainModule.recipEdited
    }
  },
  methods: {
    createRecipe () { // nouvelle recipe, ecrase une recipe si elle a le même nom !
      this.$store.commit('addRecipeToRecipeList', this.recipModified)
    }
  },
  mixins: [listManagerMixin],
  created () {
    var recipeList = this.$store.getters.getRecipeList
    for (var key in recipeList) {
      if (key === this.$route.params.recipeName) {
        this.recipeInView = recipeList[key]
        break
      }
    }

    if (this.recipeInView === '') {
      return
    }

    var recip = Object.assign({}, this.recipeInView)
    recip.ingredientList = Object.assign([], this.recipeInView.ingredientList)
    recip.quantityList = Object.assign([], this.recipeInView.quantityList)
    recip.categories = Object.assign([], this.recipeInView.categories)
    this.$store.commit('setRecipEdited', recip)
  }
}
</script>

<style>

</style>
