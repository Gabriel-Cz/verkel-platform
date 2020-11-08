<template>
  <v-app> 
  
    
      <v-app-bar
        id="TheAppBar"
        color="transparent"
        tile
        elevation="0"
      >
        <TheNavbarContent></TheNavbarContent>  
      </v-app-bar> 
      
      <div style="height: 100px;"></div>
      
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

      <v-bottom-navigation id="TheBottomNav">
        <TheBottomNavigationContent></TheBottomNavigationContent>
      </v-bottom-navigation>
  </v-app>

</template>

<script>
import TheNavbarContent from '@/components/MainLayoutComponents/TheNavbarContent';
import TheFooterContent from '@/components/MainLayoutComponents/TheFooterContent'
import TheBottomNavigationContent from '@/components/MainLayoutComponents/TheBottomNavigationContent';
import TheUserProfileNavDrawerContent from '@/components/UserProfileLayout/TheUserProfileNavDrawerContent';
import TheUserProfileHeader from '@/components/UserProfileLayout/TheUserProfileHeader';

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
    TheUserProfileNavDrawerContent,
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
