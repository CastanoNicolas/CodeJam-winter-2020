<template>
  <q-item class="column">
    <q-item-section class="q-pl-md col">
      <q-item-label class="text-weight-medium">{{recipeItem}}</q-item-label>
    </q-item-section>
    <div class="q-pa-md q-gutter-md col">
      <q-badge outline color="primary" label="Outline" />
    </div>xx
  </q-item>

</template>

<script>

export default {
  name: 'RecipeItem',
  props: ['recipeItem'],
  created () {
    console.log('recettes gf :')
    console.log(this.recipeItem)
  }
}
</script>

<style>
</style>
