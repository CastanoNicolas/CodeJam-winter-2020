<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { fileHelperMixin } from './mixins/fileHelperMixin'
import { IngredientList } from './classes/IngredientList'
export default {
  name: 'App',
  mixins: [fileHelperMixin],
  methods: {
    initIngredientList () {
      var defaultIngredientList = '{"Carrot":{"name":"Carrot","dayBeforeStale":6,"expiryDate":null,"unity":"","categories":["Vegetable","Favorites"]},"Apple":{"name":"Apple","dayBeforeStale":6,"expiryDate":null,"unity":"","categories":["Fruit"]},"Flour":{"name":"Flour","dayBeforeStale":1000,"expiryDate":null,"unity":"kg","categories":["Cereal"]},"Milk":{"name":"Milk","dayBeforeStale":4,"expiryDate":null,"unity":"L","categories":["Protein"]}}'
      var jsObject = new IngredientList()
      jsObject.ingredientList = JSON.parse(defaultIngredientList)
      this.$store.commit('setIngredientList', jsObject)
    }
  },
  created () {
    // Initialisation de la liste d'ingredients
    try {
      this.readFile('ingredientList2.json')
        .then(data => {
          if (data === '') {
            console.log('ingredientList data NOT found')
            this.initIngredientList()
          } else {
            console.log('ingredientList data found')
            this.$store.commit('setIngredientList', JSON.parse(data))
          }
        })
        .catch(err => {
          console.log(err)
        })
    } catch (err) {
      this.initIngredientList()
    }
    // this.writeFile('ingredientList2.json', this.$store.state.mainModule.ingredientList)

    // Initialisation de la liste de recettes
    // Initialisation de la liste de stocks
    // Initialisation de la liste de courses
  }
}
</script>
