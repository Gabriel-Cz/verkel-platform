<template>
    <div>
        <v-row class="mt-16 pt-16">
            <v-img 
              src="ContenedorRecursosHumanos.jpg"
              height="200"
            > 
                <div>
                    <p> {{ recursosHumanos.title }} </p>
                </div>
            </v-img>
        </v-row>
        <v-row class="agileTeamsContainer mt-16 pt-16">
            <v-img
              height="200"
              fluid
              class="rhContainer"
              src="EngranesParaEA.jpg"
            >      
              <div>
                <p> {{ equiposAgiles.title }} </p>
              </div>          
            </v-img>
            
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

  .agileTeamsContainer{
      background-color: black;
  }

</style>