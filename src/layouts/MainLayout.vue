<template>
  <q-layout view="lHh Lpr lFf">

    <NavigationMenu/>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavigationMenu from 'components/NavigationMenu'

export default {
  name: 'MainLayout',

  components: {
    NavigationMenu
  },

  data () {
    return {
    }
  }
}
</script>
