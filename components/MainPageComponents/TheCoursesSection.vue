<template>
    <v-container fluid class="mt-16 mainContainerCoursesSection">
        <v-row class="mt-16 d-flex justify-center">
            <v-col 
              cols="12"
            >
              <v-card color="transparent">
                <v-card-title><span class="ribbon3">Cursos Destacados</span></v-card-title>
                <v-card-text class="mt-16">
                <v-row class="justify-center">
                  <v-col
                    class=""
                    cols="12" sm="6" md="4" lg="3"
                    v-for="curso in cursosDestacados"
                    :key="curso.name"
                  >  
                    <TheCourseCardModel 
                      :idDelCurso="curso.id"
                      :imagenDelCurso="curso.imagen"
                      :nombreDelCurso="curso.titulo"
                      :descripcionDelCurso="curso.descripcion"
                      :capacitadorDelCurso="curso.capacitador"
                      :avatarDelCapacitador="curso.avatar"
                    >
                    </TheCourseCardModel>
                  </v-col>
                </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col 
              cols="12"
            >
              <v-card color="transparent">
                <v-card-title><span class="ribbonArticulosTitle">Articulos Destacados</span></v-card-title>
                <v-card-text class="mt-16">
                <v-row class="d-flex justify-center">
                  <v-col
                    cols="12" sm="6" md="4" lg="3"
                    class="justify-center"
                    v-for="articulo in articulosDestacados"
                    :key="articulo._id"
                  >
                      <ThePostCardModel
                        :idDelArticulo="articulo._id"
                        :tituloDelArticulo="articulo.titulo"
                        :autorDelArticulo="articulo.autor"
                        :avatarDelAutor="articulo.avatar"
                        :imagenDelArticulo="articulo.imagen"
                        :descripcionDelArticulo="articulo.descripcion"
                      >
                      </ThePostCardModel>
                  </v-col>
                </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col 
              cols="12"
            >
              <v-card color="transparent">
                <v-card-title><span class="ribbonCard-Profesiones">Profesiones Destacadas</span></v-card-title>
                <v-card-text class="mt-16">
              <v-row class="d-flex justify-center">
                <v-col
                  cols="12" sm="6" md="4" lg="3"
                  class="justify-center"
                  v-for="profesion in profesionesDestacadas"
                  :key="profesion.titulo"
                >
                    <TheProfesionCardModel
                      class="pt-2"
                      :imagenDeLaProfesion="profesion.imagen" 
                      :nombreDeLaProfesion="profesion.titulo" 
                      :categoriaDeLaProfesion="profesion.categoria"
                      :avatarDeLaProfesion="profesion.avatar"
                    >
                    </TheProfesionCardModel>
                </v-col>
              </v-row>
              </v-card-text>
              </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import TheCourseCardModel from '@/components/TheCourseCardModel';
import ThePostCardModel from '@/components/BlogComponents/ThePostCardModel';
import TheProfesionCardModel from '@/components/TheProfesionCardModel';
import { mapState, mapActions } from 'vuex';

export default {
    name: "TheCoursesSection",
    components: {
      TheCourseCardModel,
      ThePostCardModel,
      TheProfesionCardModel,
    },
    created() {
      this.getTopPosts(),
      this.getTopProfesions(),
      this.getTopCourses()
    },
    computed: {
      ...mapState('profesions', {
        profesionesDestacadas: state => state.topProfesions
      }),
      ...mapState('posts', {
        articulosDestacados: state => state.topPosts
      }),
      ...mapState('courses', {
        cursosDestacados: state => state.topCourses
      })
    },
    methods: {
      ...mapActions('profesions', ['getTopProfesions']),
      ...mapActions('posts', ['getTopPosts']),
      ...mapActions('courses', ['getTopCourses'])
    },
}
</script>

<style scoped>

  .mainContainerCoursesSection{
    background-image: url('/Component12.svg');
  }
  
  .v-card, #cardWrapper-cursos{
    border-radius: 10px;
    border-top: none;
  }

  .v-card, #cardWrapper-articulos{
    border-radius: 10px;
    box-shadow: 8px 8px 6px #6868687c;
  }

  .v-card, #cardWrapper-categorias{
    border-radius: 10px;
    box-shadow: 8px 8px 4px #6868687c;
  }

  .cursosDestacadosImagen, .articulosDestacadosImagen, .categoriasDestacadasImagen{
    border-radius: 10px;
    border-image: 10px;
    -webkit-border-image: 10px;
    filter: brightness(80%);
  }

  
  .cursosDestacadosTitulo, .categoriasDestacadasTitulo{
    font: 300;
    font-size: 20px;
  }

  .tituloCursoDestacado, .tituloCategoriaDestacada{
    font-size: 22px;
    font-weight: 300;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
  }

.ribbon3 {
  width: 200px;
  height: 50px;
  line-height: 50px;
  padding-left: 15px;
  position: absolute;
  left: -8px;
  top: 20px;
  color: floralwhite;
  background: #59324C;
  z-index: 1;
}
.ribbon3:before, .ribbon3:after {
  content: "";
  position: absolute;
  z-index: 1;
}
.ribbon3:before {
  height: 0;
  width: 0;
  top: -8.5px;
  left: 0.1px;
  border-bottom: 9px solid black;
  border-left: 9px solid transparent;
  z-index: 1;
}
.ribbon3:after {
  height: 0;
  width: 0;
  right: -14.5px;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 15px solid #59324C;
  z-index: 1;
}

.ribbon4{
  position: relative;
  z-index: 1;
  margin-left: -24px;
  margin-bottom: -40px;
}

.textInsideTheRibbon{
  color: floralwhite;
  margin-bottom: -15px;
  font-size: 18px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.85);
  font-weight: 200;
  border-top: 4px solid #59324C;
  box-shadow: 3px 3px 1px rgba(245, 245, 245, 0.24);
}
 
.ribbonArticulosTitle {
  width: 220px;
  height: 50px;
  line-height: 50px;
  padding-left: 15px;
  position: absolute;
  left: -8px;
  top: 20px;
  color: floralwhite;
  background: #324d59;
  z-index: 1;
}
.ribbonArticulosTitle:before, .ribbonArticulosTitle:after {
  content: "";
  position: absolute;
  z-index: 1;
}
.ribbonArticulosTitle:before {
  height: 0;
  width: 0;
  top: -8.5px;
  left: 0.1px;
  border-bottom: 9px solid black;
  border-left: 9px solid transparent;
  z-index: 1;
}
.ribbonArticulosTitle:after {
  height: 0;
  width: 0;
  right: -14.5px;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 15px solid #324d59;
  z-index: 1;
}

.ribbonTituloArticulo{
  position: relative;
  z-index: 1;
  margin-bottom: -20px;
}

.textTituloArticulo{
  color: floralwhite;
  margin-bottom: -15px;
  font-size: 18px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.85);
  font-weight: 200;
  border-top: 4px solid #324d59;
  box-shadow: 2px 2px 0px rgba(245, 245, 245, 0.4);
}

.ribbonCard-Profesiones{
  width: 240px;
  height: 50px;
  line-height: 50px;
  padding-left: 15px;
  position: absolute;
  left: -8px;
  top: 20px;
  color: floralwhite;
  background: #a8aa17;
  z-index: 1;
}

.ribbonCard-Profesiones:before, .ribbonCard-Profesiones:after{
  content: "";
  position: absolute;
  z-index: 1;
}

.ribbonCard-Profesiones:before {
  height: 0;
  width: 0;
  top: -8.5px;
  left: 0.1px;
  border-bottom: 9px solid black;
  border-left: 9px solid transparent;
  z-index: 1;
}

.ribbonCard-Profesiones:after {
  height: 0;
  width: 0;
  right: -14.5px;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 15px solid #a8aa17;
  z-index: 1;
}

</style>