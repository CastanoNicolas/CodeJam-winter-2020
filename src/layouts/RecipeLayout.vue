<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn v-if="editing" flat round dense icon="arrow_back_ios" :to="retPath" @click="setNonEditing"/>
        <q-btn v-else flat round dense icon="arrow_back_ios" to="/RecipeList" />
        <q-space ></q-space>
        <q-btn v-if="!editing" flat round dense icon="edit" class="q-mx-sm" :to="editPath" @click="setEditing" />
        <q-btn v-if="!editing" flat round dense icon="delete"/>
        <q-btn v-else flat round dense icon="done" :to="retPath" @click="commitEditing"/>
      </q-toolbar>
        <q-toolbar class="q-ma-sm">
          <div class="text-h4">{{ recipeInView.name }}</div>
        </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'RecipeLayout',

  components: {},

  data () {
    return {
      recipeInView: ''
    }
  },
  computed: {
    editing () {
      return this.$store.state.mainModule.isEditing
    },
    retPath () {
      return '/RecipeView/' + this.recipeInView.name
    },
    editPath () {
      return '/RecipeView/Edit/' + this.recipeInView.name
    },
    recipeList () {
      return this.$store.getters.getRecipeList
    },
    recipeDetails () {
      return this.recipeList[this.recipeInView.name]
    }
  },
  methods: {
    setEditing () {
      this.$store.commit('setEditing', true)
    },
    setNonEditing () {
      this.$store.commit('setEditing', false)
    },
    commitEditing () {
      let oldRecipe = this.recipeDetails
      let newRecipe = this.$store.state.mainModule.recipEdited

      for (var i = 0; i < newRecipe.ingredientList.length; i++) {
        oldRecipe.quantityList[i] = this.$store.state.mainModule.quantitiesEdited[newRecipe.ingredientList[i].name]
      }

      // uniquement en cas de modification du nom, car supprime celle avec l'ancien nom !
      if (oldRecipe.name !== newRecipe) {
        this.$store.commit('removeRecipeFromRecipeList', oldRecipe)
      }
      this.$store.commit('addRecipeToRecipeList', newRecipe)
      this.setNonEditing()
    },
    removeRecipe () {
      this.$store.commit('removeRecipeFromRecipeList', this.recipeDetails)
    }
  },
  created () {
    var recipeList = this.$store.getters.getRecipeList
    for (var key in recipeList) {
      if (key === this.$route.params.recipeName) {
        this.recipeInView = recipeList[key]
        break
      }
    }
  }
}
</script>
