<template>
  <v-app>
    <div>
      <v-app-bar
        color="rgba(0,0,0,0.0)"
        class="appBar"
        dense
        height="90"
      >
        <TheNavbarContent></TheNavbarContent>  
      </v-app-bar>
    
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
    
    </div>
  </v-app>
</template>

<script>
import TheNavbarContent from '@/components/TheNavbarContent';
import TheFooterContent from '@/components/TheFooterContent'
import TheBottomNavigationContent from '@/components/TheBottomNavigationContent';

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
  }
}
</script>

<style>
.appBar{
  border: black solid;
}

#TheFooter {
  box-shadow: 0px -2px 0px #989696;
}

.v-footer.footerClass{
    box-shadow:  0px -2px 0px #989696;
}

.theme--light.v-application{
  background-image: linear-gradient(to left, var(--v-firstbackground-base), var(--v-secondbackground-base)) !important;;
}

.v-bottom-navigation #TheBottomNav{
  opacity: 0.1;
}
</style>
