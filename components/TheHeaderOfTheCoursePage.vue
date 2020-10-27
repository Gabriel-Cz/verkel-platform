<template>
    <div>
        <v-row class="theRowTitle">
            <v-col 
              cols="12"
              class="d-flex align-center justify-center pa-5"
            >
                <h1>Norma - 035</h1>
            </v-col>
        </v-row>
        <v-row class="thePresentationRow">
            <v-col 
              cols="12"
              sm="10"
              md="6"
              lg="6"
            >
              <div class="mt-16 pt-16">
               <div class="divOverlayFromImage mt-16">
                    <p class="descripcionDelCurso pa-8 pt-5 pb-2">
                        La norma consiste en ayudar a los trabajdores a mantener una salud mental buena y que no se chinguen hasta caer.
                        La norma consiste en ayudar a los trabajdores a mantener una salud mental buena y que no se chinguen hasta caer.</p>
              </div>
              <v-img
                  class="imagenDelCurso pa-16 ma-16"
                  src="../MiniaturaNorma035.jpg"
                  height="400"
                  width="400"
                  gradient="to top left, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8)"
                >
              </v-img>
              <div
                class="d-flex justify-center ml-16 pl-16"
              >
                  <v-chip
                    color="success"
                    label
                    outlined
                  >
                      5 horas
                  </v-chip>
                 <v-chip
                    color="primary"
                    class="ml-4"
                    label
                    outlined
              >
                      Recursos Humanos
                 </v-chip>
              </div>
              </div>
            </v-col>
            <v-col 
              cols="12"
              sm="10"
              md="6"
              lg="6" 
              class="">
                <div class="divSpacer"></div>
                <v-row class="pa-10 mt-16">
                    <v-col cols="12" class="d-flex justify-center mt-16">
                        <h2>¿Quien te capacitará?</h2>
                    </v-col>
                    <v-col cols="8" class="text-left">
                        <h3 class="mt-10">Estefania Cazares</h3>
                        <p class="mt-10 pr-10">Lorem Ipsum dolor sit amet, consentouer adipscing, sed eliousmond tempor incidunt ut labore et dolore magna aliqua.
                            Lorem Ipsum dolor sit amet, consentouer adipscing, sed eliousmond tempor incidunt ut labore et dolore magna aliqua.
                        </p>
                    </v-col>
                    <v-col cols="4">
                        <v-img 
                          class="imagenDelCapacitador"
                          src="../CapacitadorDePrueba.jpg"
                          height="350"
                        ></v-img>
                    </v-col>
                    <v-col cols="12">
                        <v-btn
                          rounded
                          outlined
                          color="#5e949f"
                        >
                            Ver Perfil del Capacitador
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "TheHeaderOfTheCoursePage",
}
</script>

<style scoped>

.theRowTitle{
    background: linear-gradient(180deg, #D8D8D8 0%, rgba(255, 255, 255, 0) 100%), #C4C4C4;
    text-shadow: -3px -3px 0px floralwhite;
    color:  rgba(128, 128, 128, 1);
    border: 3px solid floralwhite;
}

.thePresentationRow{
    background-image: url("/ImagenBGCursoPresentacion.svg");
}

.imagenDelCapacitador{
    border-radius: 25px;
}

.imagenDelCurso{
    border-radius: 500px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);;
}

.descripcionDelCurso{
    font-family: 'Roboto', sans-serif;
}

.divSpacer{
    height: 200px;
}

.divOverlayFromImage{
    position: relative;
    overflow: hidden;
    z-index: 1;
    width: 600px;
    margin-left: 180px;
    margin-bottom: -300px;
    border-left: floralwhite 8px solid;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 5px;
    border-top: 50px;
    background-color: rgba(255, 250, 240, 0.7);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);;
}

.randomBorders{
    border: 1px black solid;
}
</style>