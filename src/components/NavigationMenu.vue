<template>
  <q-footer>
    <q-tabs>
      <q-route-tab class="tab" icon="kitchen" to="/">Stock</q-route-tab>
      <q-route-tab class="tab" icon="local_grocery_store" to="/ShoppingList">Shopping</q-route-tab>
      <q-route-tab class="tab" icon="menu_book" to="/RecipeList">Recipes</q-route-tab>
      <q-route-tab class="tab" icon="fas fa-carrot" to="/IngredientList">Ingredients</q-route-tab>
    </q-tabs>
  </q-footer>
</template>

<script>
export default {
  name: 'NavigationMenu',
  props: {
  }
}
</script>

<style>
.tab {
  font-size: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
