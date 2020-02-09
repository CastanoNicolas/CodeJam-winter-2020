<template>
  <q-page class="q-ma-md">
    <div class="text-h6">Ingredients</div>
    <q-list v-for="ingredient in ingredientList"
    :key="ingredient.name">
      <RecipeIngredientItem
        :itemNumber=ingredient.itemNumber
        :itemUnit=ingredient.itemUnit
        :name=ingredient.name />
    </q-list>
    <div class="q-mt-lg text-h6">Directions</div>
    <div class="q-pa-md">
    <q-input
      v-model="directions"
      type="textarea"
      readonly autogrow
    />
    </div>
    <q-page-sticky position="bottom" :offset="[0, 5]" class="q-pa-md">
      <q-btn-group>
        <q-btn push label="Use Ingredients" icon="las la-blender" />
        <q-btn push label="Add to Stock" icon="kitchen" />
      </q-btn-group>
    </q-page-sticky>
  </q-page>
</template>

<script>
import RecipeIngredientItem from 'components/RecipeIngredientItem'
import { listManagerMixin } from '../mixins/listManagerMixin'

export default {
  name: 'RecipeView',
  components: {
    RecipeIngredientItem
  },
  data () {
    return {
      directions: 'First of all, take the eggs in a bowl (broken of course).\n\nThen, turn around, and have a great time outside. Still, if you want to keep going with the recipe, take some milk with your eggs.\n\nHowever, I forgot what is next.',
      ingredientList: [
        {
          name: 'Egg',
          itemNumber: 2,
          itemUnit: ''
        },
        {
          name: 'Milk',
          itemNumber: 0.5,
          itemUnit: 'Litressdjsqoidj'
        },
        {
          name: 'Flour',
          itemNumber: 0.5,
          itemUnit: 'kg'
        }
      ],
      recipeInView: ''
    }
  },
  computed: {
    recipeList () {
      return this.$store.getters.getRecipeList
    },
    recipeDetails () {
      return this.recipeList[this.recipeInView]
    }
  },
  methods: {
    removeRecipe () {
      this.$store.commit('removeRecipeFromRecipeList', this.recipeDetails)
    }
  },
  mixins: [listManagerMixin],
  created () {
  }

}
</script>

<style>
</style>
