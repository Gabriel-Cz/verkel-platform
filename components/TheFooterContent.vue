<template>
        <v-container fluid class="footerContainer">
            <v-row>
                <v-col cols="12" md="3" sm="3" lg="4">
                    <div class="borders iconsBorders d-flex justify-center align center">
                        <v-icon 
                          v-for="icon in footerIcons"
                          :key="icon"
                          class="ma-6"
                          large
                        >
                                {{ icon.name }}
                        </v-icon>
                    </div>
                </v-col>
                <v-col cols="12" md="4" sm="4" lg="4"> 
                    <div class="borders informationBorders">
                        <p class="pt-8 pl-4">Contactanos: {{ information.email }}</p>
                        <p class="pt-12 pl-4">Telefono: + {{ information.telNumber }}</p>
                    </div>
                </v-col>
                <v-col cols="12" md="5" sm="5" lg="4">
                    <div class="borders descriptionBorders">
                        <p class="pl-4 pt-4">Sobre Verkel</p>
                        <p class="ma-10 ml-16"> {{ information.verkelDescription }} </p>
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
               verkelDescription: "Supuestamente aqui debe ir nuestra filosofia tarde que temprano la tendremos lista"
           }
        }
    }
}
</script>

<style scoped>


.borders{ 
    width: 520px;
    height: 150px;
}

.informationBorders{
    border-right: ridge 0.25px black;
}





</style>