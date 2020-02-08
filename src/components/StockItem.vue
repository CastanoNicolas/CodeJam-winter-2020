<template>
  <q-expansion-item switch-toggle-side expand-separator :content-inset-level="2">
    <template v-slot:header>
      <q-item-section>
        <q-item-label class="text-weight-medium">{{name}}</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-input class="input_style" dense rounded standout v-model="itemNumber">
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
      <q-item>
        <q-item-section>
          <q-item-label caption lines="2">Date peremption</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-input class="input_style" dense rounded standout v-model="number">
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
  props: {
    itemNumber: Number,
    name: String
  }
}
</script>

<style>
.input_style{
  text-align-last: center;
  max-width: 150px;
}
</style>
