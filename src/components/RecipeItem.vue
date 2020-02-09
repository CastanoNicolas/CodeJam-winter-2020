<template>
  <q-item class="column">
    <q-item-section class="q-pl-md col">
      <q-item-label class="text-weight-medium">{{recipeItem.name}}</q-item-label>
    </q-item-section>
    <div class="q-pa-md q-gutter-md col">
      <q-badge
        v-for="(cat, k) in recipeItem.categories"
        :key="k"
        outline
        color="primary">
          {{cat}}
        </q-badge>
    </div>
  </q-item>

</template>

<script>

export default {
  name: 'RecipeItem',
  props: ['recipeItem']
}
</script>

<style>
</style>
