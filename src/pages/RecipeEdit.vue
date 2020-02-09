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
    <q-select borderless v-model="chosenIngredient" :options="availableIngredientsNames" label="Add ingredient" @input="addIngredient">
      <template v-slot:before>
        <q-icon name="add" />
      </template>
    </q-select>
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
      availableIngredientsNames: [],
      availableIngredients: {},
      chosenIngredient: null,
      quantityMatches: {},
      recipeInView: '',
      recip: {}
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
    },
    ingredientList () {
      return this.$store.getters.getIngredientList
    }
  },
  methods: {
    createRecipe () { // nouvelle recipe, ecrase une recipe si elle a le même nom !
      this.$store.commit('addRecipeToRecipeList', this.recipModified)
    },
    addIngredient (ingredientName) {
      let ingredient = this.availableIngredients[ingredientName]
      delete this.availableIngredients[ingredientName]
      this.recipEdited.ingredientList.push(ingredient)
      this.recipEdited.quantityList.push(1)
      for (var e in this.availableIngredientsNames) {
        if (this.availableIngredientsNames[e] === ingredientName) {
          this.availableIngredientsNames.splice(e, 1)
          break
        }
      }
      this.chosenIngredient = null
    }
  },
  mixins: [listManagerMixin],
  created () {
    var recipeList = this.$store.getters.getRecipeList
    for (var key in recipeList) {
      if (key === this.$route.params.recipeName) {
        this.recipeInView = JSON.parse(JSON.stringify(recipeList[key]))
        break
      }
    }

    if (this.recipeInView === '') {
      return
    }
    this.recip = Object.assign({}, this.recipeInView)
    this.recip.ingredientList = Object.assign([], this.recipeInView.ingredientList)
    this.recip.quantityList = Object.assign([], this.recipeInView.quantityList)
    this.recip.categories = Object.assign([], this.recipeInView.categories)
    this.$store.commit('setRecipEdited', this.recip)

    var k
    for (k in this.ingredientList) {
      if (this.ingredientList.hasOwnProperty(k)) {
        var shouldKeep = true
        for (var ing in this.recip.ingredientList) {
          if (this.recip.ingredientList[ing].name === this.ingredientList[k].name) {
            shouldKeep = false
            break
          }
        }
        if (shouldKeep) {
          this.availableIngredients[k] = this.ingredientList[k]
          this.availableIngredientsNames.push(this.ingredientList[k].name)
        }
      }
    }
  }
}
</script>

<style>

</style>
