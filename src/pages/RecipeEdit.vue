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
      autogrow
    />
    </div>
  </q-page>
</template>

<script>
import RecipeIngredientItem from 'components/RecipeIngredientItem'

export default {
  name: 'RecipeEdit',
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
      ]
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
