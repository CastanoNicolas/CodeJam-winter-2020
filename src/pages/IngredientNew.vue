<template>
  <q-page class="q-ma-md">
    <div class="text-h6">New ingredient</div>
    <q-input
      v-model="ingredientModified.name"
      label="Name"
    />
    <q-input
      v-model.number="ingredientModified.dayBeforeStale"
      type="number"
      label="Days before getting spoil"
    />
    <q-input
      v-model="ingredientModified.unity"
      label="Unit"
    />
    <div class = "q-pt-md">
        <q-badge color="secondary" class="q-mb-md">
          Categories
        </q-badge>
        <q-select
          filled
          new-value-mode="add-unique"
          dense
          v-model="ingredientModified.categories"
          multiple
          use-input
          use-chips
          stack-label
          input-debounce="0"
          hide-dropdown-icon
        />
      </div>
  </q-page>
</template>

<script>
import { listManagerMixin } from '../mixins/listManagerMixin'
import { Ingredient } from '../classes/Ingredient'

export default {
  name: 'IngredientEdit',
  components: {
  },
  data () {
    return {
      ingredientInView: '',
      ingredientModified: ''
    }
  },
  computed: {
    ingredientList () {
      console.log(this.$store.state.mainModule.ingredientList)
      return this.$store.state.mainModule.ingredientList.ingredientList
    },
    ingredientDetails () {
      return this.ingredientList[this.ingredientInView.name]
    }
  },
  methods: {
    createIngredient () { // nouvel ingrédient, ecrase un ingrédient si il a le même nom !
      this.$store.commit('addIngredientToIngredientList', new Ingredient(this.ingredientModified.name, this.ingredientModified.dayBeforeStale,
        this.ingredientModified.expiryDate, this.ingredientModified.unity,
        this.ingredientModified.categories))
    },
    applyModification () { // uniquement en cas de modification du nom, car supprime celle avec l'ancien nom !
      let oldIngredient = this.ingredientModified
      this.$store.commit('addIngredientToIngredientList', new Ingredient(this.ingredientModified.name, this.ingredientModified.dayBeforeStale,
        this.ingredientModified.expiryDate, this.ingredientModified.unity,
        this.ingredientModified.categories))
      this.$store.commit('removeIngredientFromIngredientList', oldIngredient)
    },
    saveItem () {
      this.createIngredient()
    }
  },
  mixins: [listManagerMixin],
  created () {
    this.ingredientModified = new Ingredient('', '', null, '', [])
  }
}
</script>

<style>

</style>
