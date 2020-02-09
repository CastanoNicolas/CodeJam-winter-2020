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
      <q-btn flat round icon="add" />
      <q-btn flat round icon="edit" />
      <q-btn flat round icon="delete" />
  </q-item>
</template>

<script>
export default {
  name: 'IngredientItem',
  props: ['ingredientItem']
}
</script>

<style>
</style>
