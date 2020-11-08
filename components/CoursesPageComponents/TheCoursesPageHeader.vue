<template>
    <div>
        <v-row class="headerRow mt-16">
            <v-col cols="12" class="d-flex">
                <div class="headerDiv">
                    <p class="headerText d-flex ml-16 mt-2">Explora en Nuestros Cursos</p>
                    
                        <p class="d-flex ml-16 headerDescriptionText pl-3">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod 
                             <br/>
                             tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "TheCoursesContainer",
    data () {
        return {
            recursosHumanos: {
                title: "Recursos Humanos",
                image: "ContenedorRecursosHumanos.jpg"
            },
            equiposAgiles: {
                title: "Equipos Agiles",
                image: "EngranesParaEA.jpg"
            }
        }
    }
}
</script>

<style scoped>

 .headerText{
     font-size: 4.4rem;
     font-weight: 300; 
     font-family: 'Raleway';
     color: #818181;
 }

 .headerDescriptionText{
    color: #616060;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 1.5rem;
 }

 .headerRow{
     background-image: url('/TheHeaderSvg.svg');
     height: 400px;
 }

</style>