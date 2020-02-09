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
    <q-btn flat round icon="edit" :to="ingredientPath"/>
    <q-btn flat round icon="delete" />

    <q-dialog v-model="destination">
      <q-card style="width: 300px" class="q-px-sm q-pb-md">
        <q-card-section>
          <div class="text-h6">Add {{ ingredientItem.name }} to:</div>
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
      quantity: 1,
      ingredientPath: '/IngredientEdit/' + this.ingredientItem.name
    }
  }
}
</script>

<style>
.input_style{
  text-align-last: center;
  max-width: 180px;
}
</style>
