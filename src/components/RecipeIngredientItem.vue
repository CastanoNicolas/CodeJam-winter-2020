<template>
  <q-item dense outline class="flex flex-center">
      <q-item-section class="col-2">
            <q-icon name="fas fa-carrot" />
      </q-item-section>

      <q-item-section class="col-4">
        <q-item-label class="text-weight-medium">{{name}}</q-item-label>
      </q-item-section>

      <q-item-section v-if="editing" class="col-4">
        <q-input v-model.number="itemNumber" class="input_style" type="number"/>
      </q-item-section>

      <q-item-section v-else class="col-4">
        <q-field readonly>
          <template v-slot:control>
            <div class="input_style full-width">{{itemNumber}}</div>
          </template>
        </q-field>
      </q-item-section>

      <q-item-section class="col-1">
            <div class="input_style full-width"> {{ itemUnit}}</div>
      </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'StockItem',
  props: {
    itemNumber: Number,
    itemUnit: String,
    name: String
  },
  computed: {
    editing () {
      return this.$store.state.mainModule.isEditing
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
