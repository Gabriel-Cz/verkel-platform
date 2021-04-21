<template>
  <v-app>
      <v-app-bar
        style="border-bottom: 1px ridge black;"
        id="TheAppBar"
        color="white"
        :flat="$route.path === '/' ? true : false"
        v-show="navbar"
        height="75"
      >
        <TheNavbarContent></TheNavbarContent>  
      </v-app-bar>
      <TheMobileNavbar v-show="mobileNavbar" />
      <v-main
        id="contentContainer"
        class="overflow-y-auto" 
      >

        <v-container fluid>
          <nuxt />
        </v-container>

      </v-main>
    
      
      <v-footer 
        id="TheFooter"
        class="mt-16"
        color="rgba(119, 119, 119, 0.1)"
      >
        <TheFooterContent></TheFooterContent>
      </v-footer>
    </v-app>
</template>

<script>
import TheNavbarContent from '@/components/MainLayoutComponents/TheNavbarContent';
import TheFooterContent from '@/components/MainLayoutComponents/TheFooterContent'
import TheMobileNavbar from '@/components/MainLayoutComponents/TheMobileNavbar'
import TheBottomNavigationContent from '@/components/MainLayoutComponents/TheBottomNavigationContent';

export default {
  data () {
    return {
      //
    }
  },
  components: {
    TheNavbarContent,
    TheFooterContent,
    TheBottomNavigationContent,
    TheMobileNavbar
  },
  computed: {
    mobileNavbar() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm': return true
      }
    },
    navbar() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return false
        case 'sm': return false
        case 'md': return true
        case 'lg': return true
        case 'xl': return true
      }
    }
  }
}
</script>

<style>
#TheAppBar{
  z-index: 1;
}

.theme--light.v-application{
  background-image: linear-gradient(to left, var(--v-firstbackground-base), var(--v-secondbackground-base)) !important;;
}

.v-bottom-navigation #TheBottomNav{
  opacity: 0.1;
}
</style>
