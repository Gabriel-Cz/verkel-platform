<template>
    <div>
        <v-row 
          class="mt-16 pt-16 svgRow" 
          >
            <v-col 
              class="d-flex justify-end"
              cols="12">
                <svg width="1345" height="143" viewBox="0 0 1345 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="-1" x2="1340.98" y2="-1" transform="matrix(0.995362 -0.0961984 0.0702176 0.997532 10.2412 131)" stroke="#C4C4C4" stroke-width="2"/>
                  <circle cx="14.75" cy="128.75" r="8.75" fill="#C4C4C4"/>
                </svg>
            </v-col>
        </v-row>
        <v-row
          class="d-flex justify-center"
        >
            <v-col
              cols="10" sm="12" md="7" lg="7"
              class=""
            >
                <p class="profesionalesTexto">Profesionales de Verkel</p>
                <div>
                    <p class="profesionalesDescripcion pa-10 pl-4">
                        Los capacitadores de Verkel, son profesionistas certificados en diversas áreas de especialización, que otorgan cursos de alta fidelidad y con simplicidad en cada materia que se imparte, 
                        todo esto mediante recursos pedagogicos y andragógicos  que lleven al usuario por un camino práctico y de inmediata aplicación.
                    </p>
                </div>
                 <v-btn
                  rounded
                  outlined
                  class="ir-profesionales ml-4"
                  color="#5e949f"
                >
                    Aprende mas sobre los Profesionales de Verkel
                </v-btn>
            </v-col>
            <v-col
              class="d-flex justify-start ml-16 pl-3"
              cols="12" sm="10" md="5" lg="5"
            >
               <v-img src="ImagenProfesionales.png"></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex justify-start">
                <svg width="1345" height="143" viewBox="0 0 1345 143" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-1" x2="1340.98" y2="-1" transform="matrix(-0.995362 0.0961984 -0.0702176 -0.997532 1334.76 12)" stroke="#C4C4C4" stroke-width="2"/>
<circle cx="1330.25" cy="14.25" r="8.75" transform="rotate(180 1330.25 14.25)" fill="#C4C4C4"/>
</svg>

            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "TheTeachersSection",
    data () {
        //
    },
    components: {
        //
    }
}
</script>

<style scoped>

.profesionalesTexto{
      font-size: 60px;
      color: #808080;
      border-bottom: 2px solid #808080;
  }

.profesionalesDescripcion{
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
}

.svgRow{
    height: 280px;
}



</style>

