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
// import { RecipeList } from './classes/RecipeList'

export default {
  name: 'Apps',
  mixins: [fileHelperMixin],
  methods: {
    initIngredientList () {
      var defaultIngredientList = '{"Carrot":{"name":"Carrot","dayBeforeStale":6,"expiryDate":null,"unity":"","categories":["Vegetable","Favorites"]},"Apple":{"name":"Apple","dayBeforeStale":6,"expiryDate":null,"unity":"","categories":["Fruit"]},"Flour":{"name":"Flour","dayBeforeStale":1000,"expiryDate":null,"unity":"kg","categories":["Cereal"]},"Milk":{"name":"Milk","dayBeforeStale":4,"expiryDate":null,"unity":"L","categories":["Protein"]}}'
      // var jsObject = new Ingr edientList()
      // jsObject.ingre dientLi st = JSON.parse(defaultIngredientList)
      this.$store.commit('setIngredientList', JSON.parse(defaultIngredientList))
      // this.wr iteFil e('ingredientList.json', JSON.parse(defaultIngredientList))
    },
    checkIngredientList () {
      try {
        this.readFile('ingredientList.json')
          .then(data => {
            console.log('DATA INgredient')
            console.log('in promise resolution')
            if (data === '') {
              console.log('ingredientList data NOT found')
              this.initIngredientList()
            } else {
              console.log('ingredientList data found')
              this.$store.commit('setIngredientList', JSON.parse(data).ingredientList)
            }
          })
          .catch(err => {
            console.log(err)
            this.initIngredientList()
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
              console.log('DATA Shopping')
              console.log('shoppingList data NOT found')
              this.initShoppingList()
            } else {
              console.log('shoppingList data found')
              this.$store.commit('setShoppingList', JSON.parse(data).ingredientList)
            }
          })
          .catch(err => {
            console.log(err)
            this.initShoppingList()
          })
      } catch (err) {
        this.initShoppingList()
      }
    },
    initStockList () {
      var defaultShoppingList = '{"ingredientList":{"Carrot":[{"ingredient":{"name":"Carrot","dayBeforeStale":6,"expiryDate":1581239194840,"unity":"qty","categories":["Vegetable","Favorites"]},"quantity":12}],"Apple":[{"ingredient":{"name":"Apple","dayBeforeStale":6,"expiryDate":1581239194842,"unity":"qty","categories":["legume","autre"]},"quantity":10}]},"recipeList":{}}'
      // var jsObject = new StockList()
      // jsObject.ingr edientList = JSON.parse(defaultShoppingList)
      this.$store.commit('setStockList', JSON.parse(defaultShoppingList))
      // console.log(JSON.s tringify(JSON.parse(defaultShoppingList), null, 4))
      console.log(JSON.parse(defaultShoppingList))
    },
    checkStockList () {
      try {
        this.readFile('stockList.json')
          .then(data => {
            console.log('DATA Stock')
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
            this.initStockList()
          })
      } catch (err) {
        this.initStockList()
      }
    },
    initRecipeList () {
      // var defaultRecipeList = '{"Apple Pie":{"name":"Apple Pie","dayBeforeStale":2,"expiryDate":null,"ingredientList":[{"name":"Apple","dayBeforeStale":6,"expiryDate":null,"unity":"qty","categories":["Fruit"]},{"name":"Flour","dayBeforeStale":1000,"expiryDate":null,"unity":"Kg","categories":["Cereal"]}],"quantityList":[7,1],"description":"Cut some Apples, then bake them in some flour !","categories":["Prepared","Baked","Not Healthy"]},"Poutine":{"name":"Poutine","dayBeforeStale":3,"expiryDate":null,"ingredientList":[{"name":"Carrot","dayBeforeStale":6,"expiryDate":null,"unity":"qty","categories":["Vegetable","Favorites"]},{"name":"Milk","dayBeforeStale":4,"expiryDate":null,"unity":"Litre","categories":["Protein"]}],"quantityList":[12,100],"description":"Lots of milk and some Carrots to spice it all up !","categories":["Vegan","Healthy"]}}'
      var defaultRecipeList = '{"Apple Pie":{"name":"Apple Pie","dayBeforeStale":2,"expiryDate":null,"ingredientList":[{"name":"Apple","dayBeforeStale":6,"expiryDate":null,"unity":"qty","categories":["Fruit"]},{"name":"Flour","dayBeforeStale":1000,"expiryDate":null,"unity":"Kg","categories":["Cereal"]}],"quantityList":[7,1],"description":"Cut some Apples, then bake them in some flour !","categories":["Prepared","Baked","Not Healthy"]},"Poutine":{"name":"Poutine","dayBeforeStale":3,"expiryDate":null,"ingredientList":[{"name":"Carrot","dayBeforeStale":6,"expiryDate":null,"unity":"qty","categories":["Vegetable","Favorites"]},{"name":"Milk","dayBeforeStale":4,"expiryDate":null,"unity":"Litre","categories":["Protein"]}],"quantityList":[12,100],"description":"Lots of milk and some Carrots to spice it all up !","categories":["Vegan","Healthy"]}}'
      // var jsObject = new RecipeList()
      // jsObject.ingredientList = JSON.parse(defaultRecipeList)
      this.$store.commit('setRecipeList', JSON.parse(defaultRecipeList))
    },
    checkRecipeList () {
      try {
        this.readFile('recipeList.json')
          .then(data => { //
            if (data === '') {
              console.log('DATA recipe')
              console.log('recipeList data NOT found')
              this.initRecipeList()
            } else {
              console.log('recipeList data found')
              this.$store.commit('setRecipeList', JSON.parse(data).recipeList)
            }
          })
          .catch(err => {
            console.log(err)
            this.initRecipeList()
          })
      } catch (err) {
        this.initRecipeList()
      }
    }
  },
  created () {
    console.log('allalalalalal')
    // this.initStockList()
    // this.writeFile('stockList.json',  this.$store.state.mainModule.stockList)

    // Ini tialisation de la liste d'ingredients
    this.checkIngredientList()
    console.log(this.$store.state.mainModule.ingredientList)
    // Initialisation de la liste de recettes
    this.checkShoppingList()
    console.log(this.$store.state.mainModule.ShoppingList)

    // Initialisation de la liste de stocks
    this.checkStockList()
    console.log(this.$store.state.mainModule.stockList)

    // Initialisation de la liste de courses
    this.checkRecipeList()
    console.log(this.$store.state.mainModule.recipeList)
  }
}
</script>
