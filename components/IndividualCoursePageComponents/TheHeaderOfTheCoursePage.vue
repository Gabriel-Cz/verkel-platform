<template>
    <div>
        <v-row class="theRowTitle">
            <v-col 
              cols="12"
              class="d-flex align-center justify-center pa-5"
            >  <div class="content">
                <h1 class="ribbon">Norma - 035</h1>
               </div>
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
                        Norma Descripcion Norma Descripcion Norma Descripcion Norma Descripcion Norma Descripcion Norma Descripcion
                        Norma Descripcion Norma Descripcion Norma Descripcion Norma Descripcion Norma Descripcion Norma Descripcion
                        Norma Descripcion Norma Descripcion.
                    </p>
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

.ribbon{
  position:relative;
  padding: 0 0.5em;
  font-size:2.000em;
  margin: 0 0 0 -0.625em;
  line-height: 1.875em;
  color: #e6e2c8;
  border-radius: 0 0.156em 0.156em 0;
  background: rgb(123, 159, 199);
  box-shadow: -1px 2px 3px rgba(0,0,0,0.5);
}

.ribbon:before, .ribbon:after{
  position:absolute;
  content: '';
  display: block;
}

.ribbon:before{
  width: 0.469em;
  height: 100%;
  padding: 0 0 0.438em;
  top:0;
  left: -0.469em;
  background:inherit;
  border-radius: 0.313em 0 0 0.313em;
}

.ribbon:after{
  width: 0.313em;
  height: 0.313em;
  background: rgba(0,0,0,0.35);
  bottom: -0.313em;
  left: -0.313em;
  border-radius: 0.313em 0 0 0.313em;
  box-shadow: inset -1px 2px 2px rgba(0,0,0,0.3);
}

@media (max-width: 600px) {
  
  body{
    font-size:0.875em;
  }
  
  .ribbon{
    line-height: 1.143em;
    padding: 0.5em;
  }
  
  .ribbon:before, .ribbon:after{
    font-size: 0.714em;
  }
  
}

.content{
  background:#e6e2c8;
  width: 80%;
  max-width: 960px;
  min-height: 3.750em; 
  margin: 2em auto;
  padding: 1.250em;
  border-radius: 0.313em;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.5);
  line-height: 1.5em;
  color: #292929;
}

</style>