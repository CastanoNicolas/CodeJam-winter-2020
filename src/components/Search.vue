<template>
  <q-input class="q-pa-md" outlined v-model="text" :label="label">
      <template v-slot:append>
        <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
        <q-icon name="search" />
      </template>

      <template v-slot:hint>
        Field hint
      </template>
    </q-input>
</template>

<script>
export default {
  name: 'Search',
  props: {
    label: String,
    text: String
  }
}
</script>

<style>
</style>
