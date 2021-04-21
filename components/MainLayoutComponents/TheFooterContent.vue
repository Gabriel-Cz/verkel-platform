<template>
        <v-container fluid class="footerContainer" style="font-family: 'Raleway';">
            <v-row>
                <v-col cols="12" md="3" sm="3" lg="4">
                    <div class="d-flex justify-center align-center">
                        <p>Redes:</p>
                        <v-icon 
                          v-for="icon in footerIcons"
                          :key="icon"
                          class="ma-6 mt-2"
                        >
                                {{ icon.name }}
                        </v-icon>
                    </div>
                </v-col>
                <v-col cols="12" md="4" sm="4" lg="4"> 
                    <div class="borders informationBorders">
                        <p class="pt-2 pl-4">Contactanos: {{ information.email }}</p>
                        <p class="mt-1 pl-4">Telefono: + {{ information.telNumber }}</p>
                    </div>
                </v-col>
                <v-col cols="12" md="5" sm="5" lg="4">
                    <div class="borders descriptionBorders">
                        <p class="pl-4 pt-2">Sobre Verkel: </p>
                         <p class="pl-4">{{ information.verkelDescription }}</p>
                    </div>
                </v-col>
           </v-row>
        </v-container>
    
</template>

<script>
export default {
    name: "TheFooterContent",
    data () {
        return {

            footerIcons: [
               {
                  name: "mdi-twitter"
               },
               {
                  name: "mdi-instagram"
               },
               {
                  name: "mdi-email",
               }
            ],
           information: {
               email: "plataformaverkel@verkel.com",
               telNumber: "442 2445 555",
               verkelDescription: "Prototipo desarollado para la cual seria una plataforma de capacitacion Latinoamericana."
           }
        }
    }
}
</script>

<style scoped>








</style>