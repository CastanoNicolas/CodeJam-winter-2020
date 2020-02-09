<template>
  <q-item class="column" :to="recipePath">
    <q-item-section class="q-pl-md col">
      <q-item-label class="text-weight-medium">{{ recipeItem.name }}</q-item-label>
    </q-item-section>
    <div class="q-pa-md q-gutter-md col">
      <q-badge
        v-for="(cat, k) in recipeItem.categories"
        :key="k"
        outline
        color="secondary">
          {{cat}}
        </q-badge>
    </div>
  </q-item>

</template>

<script>

export default {
  name: 'RecipeItem',
  props: ['recipeItem'],
  data () {
    return {
      recipePath: '/RecipeView/' + this.recipeItem.name
    }
  }
}
</script>

<style>
</style>
