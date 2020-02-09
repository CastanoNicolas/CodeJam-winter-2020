<template>
  <q-page class="q-ma-md">
    <div class="text-h6">Ingredients</div>
    <q-list v-for="(ingredient,k) in recipeInView.ingredientList"
    :key="k">
      <RecipeIngredientItem
        :itemIndex=k
        :itemNumber=recipeInView.quantityList
        :itemUnit=ingredient.unity
        :name=ingredient.name />
    </q-list>
    <div class="q-mt-lg text-h6">Directions</div>
    <div class="q-pa-md">
    <q-input
      v-model="recipeInView.description"
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
      recipeInView: '',
      quantityMatches: {}
    }
  },
  mixins: [listManagerMixin],
  created () {
    var recipList = this.$store.getters.getRecipeList
    for (var key in recipList) {
      if (key === this.$route.params.recipeName) {
        this.recipeInView = recipList[key]
        break
      }
    }
  }

}
</script>

<style>
</style>
