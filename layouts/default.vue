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
        class="mt-16"
        color="rgba(119, 119, 119, 0.1)"
      >
        <TheFooterContent></TheFooterContent>
      </v-footer>
    
    </div>
  </v-app>
</template>

<script>
import TheNavbarContent from '@/components/TheNavbarContent';
import TheFooterContent from '@/components/TheFooterContent'

export default {
  data () {
    return {
      //
    }
  },
  components: {
    TheNavbarContent,
    TheFooterContent,
  }
}
</script>

<style>
.appBar{
  border: black solid;
}

.theme--light.v-application{
  background-image: linear-gradient(to left, var(--v-firstbackground-base), var(--v-secondbackground-base)) !important;;
}
</style>
