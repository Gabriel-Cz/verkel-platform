<template>
    <div>
        <v-row class="theRowTitle mt-5">
            <v-col 
              cols="12"
              class="d-flex align-center justify-center pa-5"
            >  <div class="titulo">
                <h1 class="text-h4 text--secondary">{{ titulo }}</h1>
               </div>
            </v-col>
        </v-row>
        <v-row class="thePresentationRow mt-sm-10 d-flex justify-center">
            <v-col 
              cols="12"
              md="8"
              lg="6"
              xl="5"
            >
                <v-row justify="center" align="center">
                    <v-col cols="12" sm="6" lg="5">
                        <div class="divCourseInfo">
                          <p class="px-10 px-md-0 text-center mx-4 text-sm-left">
                            {{ descripcionDelCurso }}
                          </p>
                        </div>
                        <div
                      class="mt-lg-5 px-10 px-md-0 text-center text-sm-left"
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
                          class="ml-sm-4"
                          label
                          outlined
                        >
                          {{ categoria }}
                        </v-chip>
                    </div>
                    </v-col>
                    <v-col cols="12" sm="4" lg="5" class="order-first order-sm-0 d-flex justify-center colBorder">
                        <div>
                          <v-img
                           class="imagenDelCurso"
                           :src="imagen"
                           :height="imageHeight"
                           :width="imageHeight"
                        >
                        </v-img>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col 
              cols="12"
              sm="10"
              md="6"
              lg="6" 
              class="">
                <div class="divSpacer"></div>
                <v-row class="pa-10 mt-5 mt-lg-16" justify-lg="center" align-content-lg="center">
                    <v-col cols="12" class="d-flex justify-center mt-lg-16 order-1 order-lg-0">
                        <h2>¿Quien te capacitará?</h2>
                    </v-col>
                    <v-col cols="12" lg="6" class="text-left order-3 order-sm-3 order-lg-0">
                        <h3 class="mt-lg-10 text-center text-md-left">{{ capacitador }}</h3>
                        <p class="mt-5 mt-lg-10 pr-lg-10 text-center text-md-left">
                            {{ descripcionDelCapacitador }}
                        </p>
                        <div class="d-flex justify-center justify-lg-start ">
                          <v-btn
                          rounded
                          outlined
                          :small="btnHeightMobile ? true : false"
                          color="#5e949f"
                          class="mt-sm-2"
                        >
                            Ver Perfil del Capacitador
                        </v-btn>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4" xl="3" class="order-2 order-sm-2 order-lg-0">
                        <v-img 
                          class="imagenDelCapacitador"
                          :src="avatar"
                          :height="coachImage"
                        ></v-img>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "TheHeaderOfTheCoursePage",
    props: {
      titulo: String,
      imagen: String,
      avatar: String,
      capacitador: String,
      categoria: String,
      descripcionDelCurso: String,
      descripcionDelCapacitador: String,
    },
    computed: {
      imageHeight() {
        switch(this.$vuetify.breakpoint.name) {
          case 'xs': return 200;
          case 'sm': return 200;
          case 'md': return 200;
          case 'lg': return 250;
          case 'xl': return 250;
        }
      },
      coachImage() {
        switch(this.$vuetify.breakpoint.name) {
          case 'xs': return 200;
          case 'sm': return 250;
          case 'md': return 250;
          case 'lg': return 350;
          case 'xl': return 350;
        }
      },
      btnHeightMobile() {
        switch(this.$vuetify.breakpoint.name) {
          case 'xs': return true;
          default: return false;
        }
      }
    }
}
</script>

<style lang="scss" scoped>

.divCourseInfo {
   border-left: 1px ridge #E0E0E0;
}

.thePresentationRow{
    background-image: url("/ImagenBGCursoPresentacion.svg");
}

.imagenDelCapacitador{
    border-radius: 25px;
}

.imagenDelCurso{
    position: relative;
    overflow: hidden;
    border-radius: 500px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .divOverlayFromImage{
      width: 100%;
      height: 100%;
      position: absolute;
      transform: translate(-25, -25);
      z-index: 1;
      top: 0;
      left: 0;
      overflow: hidden;
      border-left: floralwhite 8px solid;
      background-color: rgba(255, 250, 240, 0.5);
      backdrop-filter: blur(2.5px);
}

.descripcionDelCurso{
    font-family: 'Roboto', sans-serif;
}

.divSpacer{
    height: 200px;
}

.divOverlayWrapper {
    position: relative;
}
}
</style>