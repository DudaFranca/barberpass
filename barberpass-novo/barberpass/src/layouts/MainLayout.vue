<template>
  <q-layout view="lHh Lpr lFf" class="fundo">
    <q-page-container>
      <div class="logo logo-grande">
        <img src="../../public/img/logo.svg" alt="">
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'

// const linksList = [
//   {
//     title: 'Home',
//     caption: '',
//     icon: 'home',
//     route: { name: 'home' }
//   }
// ]

export default defineComponent({
  name: 'MainLayout',

  // components: {
  //   EssentialLink
  // },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
