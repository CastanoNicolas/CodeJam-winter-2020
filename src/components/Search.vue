<template>
  <q-input class="q-pa-md" outlined v-model="textData" :label="label">
      <template v-slot:append>
        <q-icon v-if="textData !== ''" name="close" @click="textData = ''" class="cursor-pointer" />
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
    textSearch: String
  },
  data () {
    return {
      textData: this.text
    }
  },
  watch: {
    textData () {
      console.log('here')
      this.$emit('update:textSearch', this.textData)
      this.$emit('updateDisplay')
    }
  }
}
</script>

<style>
</style>
