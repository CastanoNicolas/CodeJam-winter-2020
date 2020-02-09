<template>
  <q-expansion-item switch-toggle-side expand-separator :content-inset-level="2">
    <template v-slot:header>
      <q-item-section>
        <q-item-label class="text-weight-medium">{{stockItemChild[0].ingredient.name}}</q-item-label>
      </q-item-section>

      <q-item-section side v-on:click.stop>
        <q-input class="input_readonly_style" dense :readonly="true" type="number" rounded standout v-model="totalNumber">
        </q-input>
      </q-item-section>
    </template>

    <q-list>
      <q-item
        v-for="(ensemble,k) in stockItemChild"
        :key="k">
        <q-item-section>
          <q-item-label caption lines="2">{{ensemble.ingredient.expiryDate}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-input class="input_style" dense rounded standout type="number" v-model="ensemble.quantity" @keyup="$emit('update:stockItem', stockItem);">
            <template v-slot:prepend>
              <q-icon name="remove" @click="removeOne(ensemble); calculTotal()" v-if="ensemble.quantity > 0"/>
                <q-icon name="remove" disable v-if="ensemble.quantity <= 0"/>
            </template>
            <template v-slot:append>
              <q-icon name="add" @click="ensemble.quantity += 1; calculTotal()"/>
            </template>
          </q-input>
        </q-item-section>
      </q-item>
    </q-list>
  </q-expansion-item>

</template>

<script>
export default {
  name: 'StockItem',
  props: ['stockItem'],
  data () {
    return {
      totalNumber: 0,
      stockItemChild: this.stockItem
    }
  },
  created () {
    this.calculTotal()
  },
  watch: {
    stockItemChild () {
      this.calculTotal()
    }
  },
  methods: {
    calculTotal () {
      this.totalNumber = 0
      for (let i = 0; i < this.stockItem.length; i++) {
        this.totalNumber += parseInt(this.stockItem[i].quantity)
      }
    },
    removeOne (ensemble) {
      this.$store.commit('removeIngredientFromStockList', {
        'ingredient': ensemble.ingrendient,
        'quantity': 1
      })
    }
  }
}
</script>

<style>
.input_style{
  text-align-last: center;
  max-width: 150px;
}
.input_readonly_style{
  text-align-last: center;
  max-width: 100px;
}
</style>
