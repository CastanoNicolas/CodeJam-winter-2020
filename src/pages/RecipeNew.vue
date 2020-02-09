<template>
  <q-page class="q-ma-md">
    <div class="text-h6">New recipe</div>
      <q-input
        v-model="recipeModified.name"
        label="Name"
      />
      <!-- <q-list v-for="(ingredient, k) in recipEdited.ingredientList"
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
      </q-select> -->
      <div class = "q-pt-md">
        <q-badge color="secondary" class="q-mb-md">
          Categories
        </q-badge>
        <q-select
          filled
          new-value-mode="add-unique"
          dense
          v-model="recipeModified.categories"
          multiple
          use-input
          use-chips
          stack-label
          input-debounce="0"
          hide-dropdown-icon
        />
      </div>
      <!-- <div class="q-mt-lg text-h6">Description</div>
      <div class="q-pa-md">
      <q-input
        v-model="recipEdited.description"
        type="textarea"
        autogrow
      />
      </div> -->
  </q-page>
</template>

<script>
import { listManagerMixin } from '../mixins/listManagerMixin'
import { Recipe } from '../classes/Recipe'

export default {
  name: 'recipeNew',
  components: {
  },
  data () {
    return {
      recipeInView: '',
      recipeModified: '',
      availableIngredientsNames: [],
      availableIngredients: {},
      chosenIngredient: null,
      quantityMatches: {}
    }
  },
  computed: {
    ingredientList () {
      return this.$store.state.mainModule.ingredientList.ingredientList
    },
    ingredientDetails () {
      return this.ingredientList[this.ingredientInView.name]
    },
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
    // createIngredient () { // nouvel ingrédient, ecrase un ingrédient si il a le même nom !
    //   this.$store.commit('addIngredientToIngredientList', new Ingredient(this.ingredientModified.name, this.ingredientModified.dayBeforeStale,
    //     this.ingredientModified.expiryDate, this.ingredientModified.unity,
    //     this.ingredientModified.categories))
    // },
    applyModification () { // uniquement en cas de modification du nom, car supprime celle avec l'ancien nom !
      let oldRecipe = this.RecipeModified
      this.$store.commit('addRecipeToRecipeList', this.recipeModified)
      this.$store.commit('removeRecipeFromRecipeList', oldRecipe)
    },
    saveItem () {
      this.createRecipe()
    },
    createRecipe () { // nouvelle recipe, ecrase une recipe si elle a le même nom !
      this.$store.commit('addRecipeToRecipeList', this.recipeModified)
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
    console.log(this.ingredientList)

    this.recipeModified = new Recipe('', '', null, [], [], '', [])
    console.log(this.recipeModified)

    var recipeList = this.$store.getters.getRecipeList
    for (var key in recipeList) {
      if (key === this.$route.params.recipeName) {
        this.recipeInView = recipeList[key]
        break
      }
    }

    var recip = Object.assign({}, this.recipeInView)
    recip.ingredientList = Object.assign([], this.recipeInView.ingredientList)
    recip.quantityList = Object.assign([], this.recipeInView.quantityList)
    recip.categories = Object.assign([], this.recipeInView.categories)
    this.$store.commit('setRecipEdited', recip)

    console.log('RECIPE EDITED : ')
    console.log(this.recipEdited)

    var k

    for (k in this.ingredientList) {
      if (this.ingredientList.hasOwnProperty(k)) {
        var shouldKeep = true
        for (var ing in recip.ingredientList) {
          if (recip.ingredientList[ing].name === this.ingredientList[k].name) {
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
