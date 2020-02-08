<template>
  <q-item>
        <q-item-section>
          <q-item-label class="text-weight-medium">Carrot</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-input class="input_style" dense rounded standout v-model="number"
            :rules="[
            val => val !== null && val !== '' || 'Please number only',
            val => val > 0 && val < 100 || 'Please number only'
          ]">
            <template v-slot:prepend>
              <q-icon name="remove" />
            </template>
            <template v-slot:append>
              <q-icon name="add" @click="text = ''" class="cursor-pointer" />
            </template>
          </q-input>
        </q-item-section>
      </q-item>
</template>

<script>
export default {
  name: 'StockItem',
  props: {
    number: Number
  }
}
</script>

<style>
.input_style{
  text-align: center;
  max-width: 150px;
}
</style>
