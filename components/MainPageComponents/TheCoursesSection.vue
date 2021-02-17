<template>
    <v-container fluid class="mt-16 mainContainerCoursesSection">
        <v-row class="mt-16 d-flex justify-center">
            <v-col 
              cols="12" sm="8" md="12" lg="12"
            >
              <v-card color="transparent">
                <v-card-title><span class="ribbon3">Cursos Destacados</span></v-card-title>
                <v-card-text class="mt-16">
                <v-row>
                  <v-col
                    class="justify-center"
                    cols="12" sm="8" md="3" lg="3"
                    v-for="cursoDestacado in cursosDestacados"
                    :key="cursoDestacado.name"
                  >  
                    <TheCourseCardModel 
                      :idDelCurso = "cursoDestacado.idDelCurso" 
                    >
                    </TheCourseCardModel>
                  </v-col>
                </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col 
              class="" 
              cols="12" sm="8" md="12" lg="12"
            >
              <v-card color="transparent">
                <v-card-title><span class="ribbonArticulosTitle">Articulos Destacados</span></v-card-title>
                <v-card-text class="mt-16">
                <v-row>
                  <v-col
                    cols="12" sm="12" md="4" lg="4"
                    class="justify-center"
                    v-for="articuloDestacado in articulosDestacados"
                    :key="articuloDestacado.name"
                  >
                      <ThePostCardModel
                        :idDelArticulo = "articuloDestacado.idDelArticulo"
                      >
                      </ThePostCardModel>
                  </v-col>
                </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col 
              cols="12" sm="8" md="12" lg="12"
            >
              <v-card color="transparent">
                <v-card-title><span class="ribbonCard-Profesiones">Profesiones Destacadas</span></v-card-title>
                <v-card-text class="mt-16">
              <v-row>
                <v-col
                  cols="12" sm="2" md="3" lg="3"
                  class="justify-center"
                  v-for="ProfesionDestacada in profesionesDestacadas"
                  :key="ProfesionDestacada.titulo"
                >
                    <TheProfesionCardModel
                      :class="ProfesionDestacada.padding"
                      :imagenDeLaProfesion="ProfesionDestacada.image" 
                      :nombreDeLaProfesion="ProfesionDestacada.titulo" 
                      :categoriaDeLaProfesion="ProfesionDestacada.categoria"
                      :avatarDeLaProfesion="ProfesionDestacada.image"
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

export default {
    name: "SecondContent",
    components: {
      TheCourseCardModel,
      ThePostCardModel,
      TheProfesionCardModel,
    },
    data () {
        return {
            cursosDestacados: [
                      {
                        titulo: "Nomina Integral",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm" ,
                        image: "MiniaturaGestionDeNomina.jpg",
                        padding: "pt-2",
                        capacitador: "Estefania Cazares",
                        fotoDelCapacitador: "/CapacitadorDePrueba.jpg",
                        idDelCurso: "norma035",
                        link: "/cursos/NominaIntegral"
                      },
                      {
                        titulo: "Gestion de Proyectos",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm" ,
                        image: "MiniaturaGestionDeProyectos.jpg",
                        padding: "pt-2",
                        capacitador: "Estefania Cazares",
                        idDelCurso: "equiposAgiles",
                        fotoDelCapacitador: "/CapacitadorDePrueba.jpg",
                        link: "/cursos/GestionDeProyectos"
                      },
                      {
                        titulo: "Liderazgo Agil",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm",
                        image: "MiniaturaLiderazgoAgil.jpg",
                        padding: "pt-2",
                        capacitador: "Estefania Cazares",
                        idDelCurso: "norma035",
                        fotoDelCapacitador: "/CapacitadorDePrueba.jpg",
                        link: "/cursos/LiderazgoAgil"
                      },
                      {
                        titulo: "Norma 035",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm",
                        image: "MiniaturaNorma035.jpg",
                        padding: "pt-2",
                        capacitador: "Estefania Cazares",
                        idDelCurso: "equiposAgiles",
                        fotoDelCapacitador: "/CapacitadorDePrueba.jpg",
                        link: "../cursos/norma035",
                      },
            ],
            articulosDestacados: [
                      {
                        titulo: "Tiempos Dificiles",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm" ,
                        image: "post1.jpg",
                        padding: "pt-2",
                        autor: "Estefania Cazares",
                        fotoDelAutor: "CapacitadorDePrueba.jpg",
                        idDelArticulo: "norma035",
                      },
                      {
                        titulo: "Adquiere Mas",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm" ,
                        image: "post2.jpg",
                        padding: "pt-2",
                        autor: "Estefania Cazares",
                        fotoDelAutor: "CapacitadorDePrueba.jpg",
                        idDelArticulo: "norma035",
                      },
                      {
                        titulo: "Sobre Leer",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm",
                        image: "post3.jpg",
                        padding: "pt-2",
                        autor: "Estefania Cazares",
                        fotoDelAutor: "CapacitadorDePrueba.jpg",
                        idDelArticulo: "norma035",
                      },
                      
            ],
            profesionesDestacadas: [
                      {
                        titulo: "Recursos Humanos",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm" ,
                        image: "ImagenMini.jpg",
                        padding: "pt-2",
                        categoria: "Recursos Humanos",
                        avatarDeLaProfesion: "EquiposAgiles3.jpg"
                      },
                      {
                        titulo: "Equipos Agiles",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm" ,
                        image: "MiniaturaEquiposAgiles.jpg",
                        padding: "pt-2",
                        categoria: "Recursos Humanos",
                        avatarDeLaProfesion: "EquiposAgiles3.jpg"
                      },
                      {
                        titulo: "Lorem Ipsum",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm",
                        image: "Random1.jpg",
                        padding: "pt-2",
                        categoria: "Recursos Humanos",
                        avatarDeLaProfesion: "EquiposAgiles3.jpg"
                      },
                      {
                        titulo: "Ipsum Lorem",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm",
                        image: "ImagenMini2.jpg",
                        padding: "pt-2",
                        categoria: "Recursos Humanos",
                        avatarDeLaProfesion: "EquiposAgiles3.jpg"
                      },
            ],
        }
    },
    components: {
        //
    }
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