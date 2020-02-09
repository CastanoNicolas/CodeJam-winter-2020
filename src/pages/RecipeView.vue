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

    <q-dialog v-model="destination">
      <q-card style="width: 300px" class="q-px-sm q-pb-md">
        <q-card-section>
          <div v-if="stock" class="text-h6">Add {{ recipeInView.name }} to stock</div>
          <div v-else-if="shop" class="text-h6">Cook {{ recipeInView.name }}</div>
        </q-card-section>

        <q-item-label header>Amount</q-item-label>
        <q-item dense>
          <q-item-section align="center">
            <q-input class="input_style" dense rounded standout v-model.number="quantity" type="number">
              <template v-slot:before>
                <q-icon name="fas fa-carrot" />
              </template>
              <template v-slot:prepend>
                <q-icon name="remove" @click="quantity -= 1;" v-if="quantity > 0"/>
                  <q-icon name="remove" disable v-if="quantity <= 0"/>
              </template>
              <template v-slot:append>
                <q-icon name="add" @click="quantity += 1;"/>
              </template>
            </q-input>

          </q-item-section>
        </q-item>

        <q-btn-group left class="q-pt-md justify-end">
          <q-btn v-if="stock" label="Stock" icon="kitchen" @click="addStock"/>
          <q-btn v-else-if="shop" label="Cook !" icon="las la-blender"  @click="tryRemoveShopping"/>
        </q-btn-group>
      </q-card>
    </q-dialog>

    <q-dialog v-model="destination2">
      <q-card style="width: 300px" class="q-px-sm q-pb-md">
        <q-card-section>
          <div class="text-h6">Not enough ingredients</div>
        </q-card-section>

        <q-item-label header>Create this recipe anyway ?</q-item-label>

      <q-btn-group class="q-pt-md">
        <q-btn label="Yes" icon="check" @click="removeShopping"/>
        <q-btn label="No" icon="close"  @click="()=>{destination2 = false}"/>
      </q-btn-group>
      </q-card>
    </q-dialog>

    </div>
    <q-page-sticky position="bottom" :offset="[0, 5]" class="q-pa-md">
      <q-btn-group>
        <q-btn push label="Use Ingredients" icon="las la-blender" @click="destination= true; stock = false; shop = true;" />
        <q-btn push label="Add to Stock" icon="kitchen" @click="destination= true; shop = false; stock = true;"/>
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
      quantities: {},
      destination: false,
      destination2: false,
      stock: false,
      shop: false,
      quantity: 1,
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
    for (var i = 0; i < this.recipeInView.ingredientList.length; i++) {
      this.quantities[this.recipeInView.ingredientList[i].name] = this.recipeInView.quantityList[i]
    }
  },
  computed: {
    stockList () {
      return this.$store.state.mainModule.stockList
    }
  },
  methods: {
    addStock () {
      var ing = { 'ingredient': this.recipeInView, 'quantity': this.quantity }
      this.$store.commit('addIngredientToStockList', ing)
      this.destination = false
      this.quantity = 1
    },
    tryRemoveShopping () {
      let remove = false
      for (const elem in this.recipeInView.ingredientList) {
        console.log(this.recipeInView.ingredientList[elem])
        console.log(this.recipeInView.quantityList[elem])
        var ing = { 'ingredient': this.recipeInView.ingredientList[elem], 'quantity': this.quantity * this.recipeInView.quantityList[elem] }
        if (this.enoughIngredient(ing.ingredient, ing.quantity)) {
          console.log('%c Good !', 'color:green')
          remove = true
        } else {
          console.log('%c Not Enough Ingredient !', 'color:red')
          this.destination = false
          this.destination2 = true
          remove = false
          return
        }
      }
      if (remove) {
        this.removeShopping()
      }
      this.destination = false
    },
    removeShopping () {
      for (const elem in this.recipeInView.ingredientList) {
        console.log(this.recipeInView.ingredientList[elem])
        console.log(this.recipeInView.quantityList[elem])
        var ing = { 'ingredient': this.recipeInView.ingredientList[elem], 'quantity': this.quantity * this.recipeInView.quantityList[elem] }
        this.$store.commit('removeIngredientFromStockList', ing)
      }
      this.destination = false
      this.quantity = 1
      this.destination2 = false
      this.addStock()
    },
    enoughIngredient (ingredient, quantity) {
      console.log('%c enough ?', 'color: yellow')
      let exist = this.stockList.ingredientExist(ingredient)
      if (exist !== -1 && exist !== undefined) {
        let disponible = 0
        for (const key in this.stockList.ingredientList[ingredient.name]) {
          if (this.stockList.ingredientList[ingredient.name].hasOwnProperty(key)) {
            const elem = this.stockList.ingredientList[ingredient.name][key]
            disponible += elem.quantity
          }
        }
        if (disponible >= quantity) {
          console.log()
          return true
        }
      } else {
        console.log()
        return false
      }
    }
  }
}
</script>

<style>
</style>
