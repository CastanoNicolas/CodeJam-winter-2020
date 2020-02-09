<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn v-if="editing" flat round dense icon="arrow_back_ios" to="/RecipeView" @click="setNonEditing"/>
        <q-btn v-else flat round dense icon="arrow_back_ios" to="/RecipeList" />
          <q-space ></q-space>
        <q-btn v-if="!editing" flat round dense icon="edit" class="q-mx-sm" to="/RecipeView/Edit" @click="setEditing" />
        <q-btn v-if="!editing" flat round dense icon="delete"/>
        <q-btn v-else flat round dense icon="done" @click="setNonEditing"/>
      </q-toolbar>
        <q-toolbar class="q-ma-sm">
          <div class="text-h4">{{ recipeName }}</div>
        </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  components: {},

  data () {
    return {
      recipeName: 'Grand\'ma pancakes'
    }
  },
  computed: {
    editing () {
      return this.$store.state.mainModule.isEditing
    }
  },
  methods: {
    setEditing () {
      this.$store.commit('setEditing', true)
    },
    setNonEditing () {
      this.$store.commit('setEditing', false)
    }
  }
}
</script>
