<template>
  <q-item class="q-mb-md">
    <q-item-section class="q-pl-md column">
      <q-item-label class="col text-weight-medium">{{ingredientItem.name}}</q-item-label>
      <div class="q-pt-xs q-gutter-md col">
        <q-badge
          v-for="(cat, k) in ingredientItem.categories"
          :key="k"
          outline
          color="primary"
        >{{cat}}</q-badge>
      </div>
    </q-item-section>
    <q-btn flat round icon="add" @click="destination = true" />
    <q-btn flat round icon="edit" />
    <q-btn flat round icon="delete" />

    <q-dialog v-model="destination">
      <q-card style="width: 300px" class="q-px-sm q-pb-md">
        <q-card-section>
          <div class="text-h6">Add {{ ingredientItem.name }} to:</div>
        </q-card-section>

        <q-item-label header>Amount</q-item-label>
        <q-item dense>
          <q-item-section>
            <q-input outlined bottom-slots v-model.number="quantity" type="number" >
              <template v-slot:before>
                <q-icon name="fas fa-carrot" />
              </template>
            </q-input>
          </q-item-section>
        </q-item>

      <q-btn-group class="q-pt-md">
        <q-btn label="Stock" icon="kitchen"/>
        <q-btn label="Shopping list" icon-right="add_shopping_cart" />
      </q-btn-group>
      </q-card>
    </q-dialog>
  </q-item>
</template>

<script>
export default {
  name: 'IngredientItem',
  props: ['ingredientItem'],
  data () {
    return {
      destination: false,
      slide: 11,
      quantity: 1
    }
  }
}
</script>

<style>
</style>
