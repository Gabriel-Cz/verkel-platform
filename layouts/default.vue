<template>
  <v-app>
      <v-app-bar
        style="border-bottom: 1px ridge black;"
        flat
        id="TheAppBar"
        color="white"
        v-show="navbar"
      >
        <TheNavbarContent></TheNavbarContent>  
      </v-app-bar>
      <TheMobileNavbar v-show="mobileNavbar" />
      <v-main>

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

      <v-bottom-navigation style="background-color: rgba(0,0,0,0.2)" id="TheBottomNav">
        <TheBottomNavigationContent></TheBottomNavigationContent>
      </v-bottom-navigation>
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

#TheFooter {
  box-shadow: 0px -1px 0px #989696;
}



.theme--light.v-application{
  background-image: linear-gradient(to left, var(--v-firstbackground-base), var(--v-secondbackground-base)) !important;;
}

.v-bottom-navigation #TheBottomNav{
  opacity: 0.1;
}
</style>
