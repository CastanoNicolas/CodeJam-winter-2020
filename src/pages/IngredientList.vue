<template>
   <q-page>
    <Search :label="label" :textSearch.sync="textSearch"  @updateDisplay="updateList"/>

    <q-list class="q-pt-md">
      <IngredientItem v-for="ingredient in ingredientListDisplay" :key="ingredient.name" :ingredientItem="ingredient">
      </IngredientItem>
    </q-list>

    <q-page-sticky position="bottom-right" :offset="[20, 20]">
      <q-btn round color="primary" icon="add" to="/IngredientNew"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
import Search from 'components/Search'
import IngredientItem from 'components/IngredientItem'
import { listManagerMixin } from '../mixins/listManagerMixin'
// import { Ingredient } from '../classes/Ingredient'

export default {
  name: 'IngredientList',
  components: {
    Search,
    IngredientItem
  },
  data () {
    return {
      label: 'Search in ingredients',
      textSearch: '',
      ingredientListDisplay: {}
    }
  },
  computed: {
    ingredientList () {
      return this.$store.state.mainModule.ingredientList.ingredientList
    }
  },
  methods: {
    removeIngredientFromIngredientList (ingredient) {
      this.$store.commit('removeIngredientFromIngredientList', ingredient)
      this.saveIngredientList()
    },
    addIngredientToIngredientList (ingredient) {
      this.$store.commit('addIngredientToIngredientList', ingredient)
      this.saveIngredientList()
    },
    updateList () {
      this.ingredientListDisplay = {}
      var key
      for (key in this.ingredientList) {
        if (this.ingredientList.hasOwnProperty(key) && (key.toLowerCase()).includes(this.textSearch.toLowerCase())) {
          this.ingredientListDisplay[key] = this.ingredientList[key]
        }
      }
      console.log(this.ingredientList)
    }
  },
  mixins: [listManagerMixin],
  created () {
    // this.addIngredientToIngredientList(new Ingredient('Carrot', 6, null, '', ['Vegetable', 'Favorites']))
    // this.addIngredientToIngredientList(new Ingredient('Apple', 6, null, '', ['Fruit']))
    // this.addIngredientToIngredientList(new Ingredient('Flour', 1000, null, 'kg', ['Cereal']))
    // this.addIngredientToIngredientList(new Ingredient('Milk', 4, null, 'L', ['Protein']))
    this.updateList()
    console.log(this.ingredientList)
  }

}
</script>
