<template>
  <q-page>
    <q-input class="q-pa-md" outlined v-model="text" label="Label">
      <template v-slot:append>
        <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
        <q-icon name="search" />
      </template>

      <template v-slot:hint>
        Field hint
      </template>
    </q-input>
  </q-page>
</template>

<script>
export default {
  name: 'StockList'
}
</script>

<style>
</style>
