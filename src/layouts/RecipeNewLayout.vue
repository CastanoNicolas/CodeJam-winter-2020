<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn flat round dense icon="arrow_back_ios" to="/RecipeList"/>
          <q-space ></q-space>
        <q-btn flat round dense icon="done" @click="save"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view ref="RecipeNew"/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'IngredientLayout',

  components: {},

  methods: {
    save () {
      this.$refs.RecipeNew.saveItem()
    }
  }
}
</script>
