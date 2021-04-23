<template>
    <div>
        <v-row 
          class="mt-md-16 pt-16 svgRow" 
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
          class="justify-center"
        >
            <v-col
              cols="12" sm="8" md="7" lg="5"
              class="d-flex flex-column justify-center"
            >
                <p class="profesionalesTexto text-center px-md-10 text-md-left text-h5">Profesionales de Verkel</p>
                <div>
                    <p class="profesionalesDescripcion px-5 px-md-10 mt-5 text-center text-md-left text-caption text-lg-subtitle-1">
                        Los capacitadores de Verkel, son profesionistas certificados en diversas áreas de especialización, que otorgan cursos de alta fidelidad y con simplicidad en cada materia que se imparte, 
                        todo esto mediante recursos pedagogicos y andragógicos  que lleven al usuario por un camino práctico y de inmediata aplicación.
                    </p>
                </div>
                 <div class="d-flex justify-center">
                   <v-btn
                  rounded
                  outlined
                  small
                  class="py-2 mt-2"
                  color="#5e949f"
                >
                    Profesionales de Verkel
                </v-btn>
                 </div>
            </v-col>
            <v-col
              class="d-flex justify-start ml-md-16 pl-md-3 mt-5 mt-md-0"
              cols="12" sm="10" md="5" lg="5"
            >
               <v-img src="ImagenProfesionales.png"></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="d-flex">
                <svg width="1345" :height="this.$vuetify.breakpoint.name === 'xs' ? 75 : 143 " viewBox="0 0 1345 143" fill="none" xmlns="http://www.w3.org/2000/svg">
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
}
</script>

<style style="scss" scoped>

.profesionalesTexto{
  font-size: 32px;
  color: #686868;
}

.profesionalesDescripcion{
  font-family: 'Roboto', sans-serif;
  color: #808080;
}

.svgRow{
    height: 280px;
}



</style>

