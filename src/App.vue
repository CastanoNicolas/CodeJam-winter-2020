<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { fileHelperMixin } from './mixins/fileHelperMixin'
// import { IngredientList } from './classes/IngredientList'
// import { ShoppingList } from './classes/ShoppingList'
// import { StockList } from './classes/StockList'
import { RecipeList } from './classes/RecipeList'

export default {
  name: 'Apps',
  mixins: [fileHelperMixin],
  methods: {
    initIngredientList () {
      var defaultIngredientList = '{"Carrot":{"name":"Carrot","dayBeforeStale":6,"expiryDate":null,"unity":"","categories":["Vegetable","Favorites"]},"Apple":{"name":"Apple","dayBeforeStale":6,"expiryDate":null,"unity":"","categories":["Fruit"]},"Flour":{"name":"Flour","dayBeforeStale":1000,"expiryDate":null,"unity":"kg","categories":["Cereal"]},"Milk":{"name":"Milk","dayBeforeStale":4,"expiryDate":null,"unity":"L","categories":["Protein"]}}'
      // var jsObject = new IngredientList()
      // jsObject.ingredientList = JSON.parse(defaultIngredientList)
      this.$store.commit('setIngredientList', JSON.parse(defaultIngredientList))
    },
    checkIngredientList () {
      try {
        this.readFile('ingredientList.json')
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
    },
    initShoppingList () {
      var defaultShoppingList = '{"Carrot":24,"Apple":34}'
      // var jsObject = new ShoppingList()
      // jsObject.ingredientList = JSON.parse(defaultShoppingList)
      this.$store.commit('setShoppingList', JSON.parse(defaultShoppingList))
    },
    checkShoppingList () {
      try {
        this.readFile('shoppingList.json')
          .then(data => {
            if (data === '') {
              console.log('shoppingList data NOT found')
              this.initShoppingList()
            } else {
              console.log('shoppingList data found')
              this.$store.commit('setShoppingList', JSON.parse(data))
            }
          })
          .catch(err => {
            console.log(err)
          })
      } catch (err) {
        this.initShoppingList()
      }
    },
    initStockList () {
      var defaultShoppingList = '{"ingredientList":{"carrote":[{"ingredient":{"name":"carrote","dayBeforeStale":10,"expiryDate":1581239194840,"unity":"qty","categories":["legume","autre"]},"quantity":12}],"poireau":[{"ingredient":{"name":"poireau","dayBeforeStale":10,"expiryDate":1581239194842,"unity":"qty","categories":["legume","autre"]},"quantity":12},{"ingredient":{"name":"poireau","dayBeforeStale":10,"expiryDate":1581239194842,"unity":"qty","categories":["legume","autre"]},"quantity":6}]},"recipeList":{}}'
      // var jsObject = new StockList()
      // jsObject.ingredientList = JSON.parse(defaultShoppingList)
      this.$store.commit('setStockList', JSON.parse(defaultShoppingList))
      // console.log(JSON.stringify(JSON.parse(defaultShoppingList), null, 4))
      console.log(JSON.parse(defaultShoppingList))
    },
    checkStockList () {
      try {
        this.readFile('stockList.json')
          .then(data => {
            if (data === '') {
              console.log('stockList data NOT found')
              this.initStockList()
            } else {
              console.log('stockList data found')
              this.$store.commit('setStockList', JSON.parse(data))
            }
          })
          .catch(err => {
            console.log(err)
          })
      } catch (err) {
        this.initStockList()
      }
    },
    initRecipeList () {
      var defaultRecipeList = '{"recipe test":{"name":"recipe test","dayBeforeStale":2,"expiryDate":null,"ingredientList":[{"name":"carotte","dayBeforeStale":4,"expiryDate":null,"unity":"litre","categories":"legumes"},{"name":"dolipranne","dayBeforeStale":15,"expiryDate":null,"unity":"Kg","categories":"medocs"}],"quantityList":[3,1],"description":"des carottes et un dolipranne","categories":["repas bizarre","bleu"]},"recipe encore":{"name":"recipe encore","dayBeforeStale":2,"expiryDate":null,"ingredientList":[{"name":"blub","dayBeforeStale":1,"expiryDate":null,"unity":"monument","categories":"legumes"},{"name":"dolipranne","dayBeforeStale":15,"expiryDate":null,"unity":"Kg","categories":"medocs"}],"quantityList":[3,1],"description":"des trucs et des blip bloup","categories":["repas equilibrer mais vegan"]}}'
      var jsObject = new RecipeList()
      jsObject.ingredientList = JSON.parse(defaultRecipeList)
      this.$store.commit('setRecipeList', jsObject)
    },
    checkRecipeList () {
      try {
        this.readFile('recipeList.json')
          .then(data => {
            if (data === '') {
              console.log('recipeList data NOT found')
              this.initRecipeList()
            } else {
              console.log('recipeList data found')
              this.$store.commit('setRecipeList', JSON.parse(data))
            }
          })
          .catch(err => {
            console.log(err)
          })
      } catch (err) {
        this.initRecipeList()
      }
    }
  },
  created () {
    // Initialisation de la liste d'ingredients
    this.checkIngredientList()

    // Initialisation de la liste de recettes
    this.checkShoppingList()

    // Initialisation de la liste de stocks
    this.checkStockList()

    // Initialisation de la liste de courses
    this.checkRecipeList()
  }
}
</script>
