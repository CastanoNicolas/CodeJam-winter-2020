<template>
  <q-page class="q-ma-md">
    <div class="text-h6">Ingredient modification</div>
    <q-input
      v-model="ingredientModified.name"
      label="Name"
    />
    <q-input
      v-model="ingredientModified.dayBeforeStale"
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
import { fileHelperMixin } from '../mixins/fileHelperMixin'

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
      this.$store.commit('addIngredientToIngredientList', this.ingredientModified)
    },
    saveItem () { // uniquement en cas de modification du nom, car supprime celle avec l'ancien nom !
      // let oldIngredient = this.ingredientModified
      this.$store.commit('addIngredientToIngredientList', this.ingredientModified)
      // this.$store.commit('removeIngredientFromIngredientList', oldIngredient) => m'a pas l'air utile, si c'tes une connerie aller voir nico
      this.saveIngredientList()
    },
    saveItem2 () {
      if (this.ingredientInView.name === this.ingredientModified.name) {
        this.createIngredient()
      } else {
        this.applyModification()
      }
    }
  },
  mixins: [listManagerMixin, fileHelperMixin],
  created () {
    console.log(this.ingredientList)
    for (var key in this.ingredientList) {
      console.log('pasIf')
      if (key === this.$route.params.ingredientName) {
        console.log('if')
        this.ingredientInView = this.ingredientList[key]
        break
      }
    }
    this.ingredientModified = new Ingredient(this.ingredientInView.name, this.ingredientInView.dayBeforeStale, this.ingredientInView.expiryDate, this.ingredientInView.unity, this.ingredientInView.categories)
  }
}
</script>

<style>

</style>
