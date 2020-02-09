<template>
  <q-expansion-item switch-toggle-side expand-separator :content-inset-level="2">
    <template v-slot:header>
      <q-item-section>
        <q-item-label class="text-weight-medium">{{stockItemChild[0].ingredient.name}}</q-item-label>
      </q-item-section>

      <q-item-section side v-on:click.stop>
        <q-input class="input_style" dense rounded standout v-model="totalNumber">
          <template v-slot:prepend>
            <q-icon name="remove" />
          </template>
          <template v-slot:append>
            <q-icon name="add" @click="text = ''" class="cursor-pointer" />
          </template>
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
          <q-input class="input_style" dense rounded standout v-model="ensemble.quantity" @keyup="$emit('update:stockItem', stockItem);">
            <template v-slot:prepend>
              <q-icon name="remove" />
            </template>
            <template v-slot:append>
              <q-icon name="add" @click="text = ''" class="cursor-pointer" />
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
    for (let i = 0; i < this.stockItem.length; i++) {
      this.totalNumber += parseInt(this.stockItem[i].quantity)
    }
  }
}
</script>

<style>
.input_style{
  text-align-last: center;
  max-width: 150px;
}
</style>
