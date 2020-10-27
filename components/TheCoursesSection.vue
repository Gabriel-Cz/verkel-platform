<template>
    <v-container fluid class="mt-16 mainContainerCoursesSection">
        <v-row class="mt-16 d-flex justify-center">
            <v-col
              class="pr-16 pl-6" 
              cols="12" sm="10" md="6" lg="5"
            >
                <v-row>
                  <v-col 
                    class="d-flex justify-center"            
                    cols="12" sm="12" md="12" lg="12"
                  >
                      <p class="cursosDestacadosTitulo mb-13 pl-10">Cursos Destacados</p>
                  </v-col>
                  <v-col
                    cols="6" sm="6" md="6" lg="6"
                    v-for="cursoDestacado in cursosDestacados"
                    :key="cursoDestacado.name"
                    class=""
                    :class="cursoDestacado.padding"
                  >
                      <v-card
                        link
                        id="cardWrapper-cursos"
                      >
                        <v-img
                          class="cursosDestacadosImagen d-flex"
                          height="100"
                          :lazy-src="cursoDestacado.image"
                          :src="cursoDestacado.image"
                        >
                         <div class="divWrapper max-width max-height d-flex align-center justify-center"> 
                          
                             {{ cursoDestacado.titulo }}
                        
                         </div>
                        </v-img>
                      </v-card>
                  </v-col>
                </v-row>
            </v-col>
            <v-col 
              class="pl-16 pr-6" 
              cols="12" sm="10" md="6" lg="5"
            >
                <v-row>
                  <v-col 
                    class="d-flex justify-center"            
                    cols="12" sm="12" md="12" lg="12"
                  >
                      <p class="cursosDestacadosTitulo mb-13 pl-10">Articulos Destacados</p>
                  </v-col>
                  <v-col
                    cols="6" sm="6" md="6" lg="6"
                    v-for="articuloDestacado in articulosDestacado"
                    :key="articuloDestacado.name"
                    :class="articuloDestacado.padding"
                  >
                      <v-card
                        link
                        id="cardWrapper-articulos"
                      >
                        <v-img
                          height="100"
                          :lazy-src="articuloDestacado.image"
                          :src="articuloDestacado.image"
                          class="articulosDestacadosImagen"
                        >
                          <div class="divWrapper d-flex justify-center align-center">
                            {{ articuloDestacado.titulo }}
                          </div>
                        </v-img>
                      </v-card>
                  </v-col>
                </v-row>
            </v-col>
            <v-col 
              cols="12" sm="6" md="6" lg="5"
              class="pr-8 pl-8"
            >
              <v-row>
                <v-col 
                  cols="12"
                  class="d-flex justify-center"
                >
                    <p class="categoriasDestacadasTitulo mb-13 mt-16 pt-5">Categorias Destacadas</p>
                </v-col>
                <v-col
                  cols="6" sm="6" md="6" lg="6"
                  v-for="categoria in categoriasDestacadas"
                  :key="categoria.titulo"
                  :class="categoria.padding"
                >
                    <v-card
                      link
                      id="cardWrapper-categorias"
                    >
                      <v-img
                        height="100"
                        :lazy-src="categoria.image"
                        :src="categoria.image"
                        class="categoriasDestacadasImagen"
                      >
                        <div class="divWrapper d-flex align-center justify-center">
                          
                            {{ categoria.titulo }}
                          
                        </div>
                      </v-img>
                    </v-card>
                </v-col>
              </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "SecondContent",
    data () {
        return {
            cursosDestacados: [
                      {
                        titulo: "Nomina Integral",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm" ,
                        image: "MiniaturaGestionDeNomina.jpg",
                        padding: "pa-8 pt-0 pb-0",
                      },
                      {
                        titulo: "Gestion de Proyectos",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm" ,
                        image: "MiniaturaGestionDeProyectos.jpg",
                        padding: "pa-8 pt-0 pb-0 mt-16",
                      },
                      {
                        titulo: "Liderazgo Agil",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm",
                        image: "MiniaturaLiderazgoAgil.jpg",
                        padding: "pa-8 pt-0 pb-0",
                      },
                      {
                        titulo: "Norma 035",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm",
                        image: "MiniaturaNorma035.jpg",
                        padding: "pa-8 pt-0 pb-0 mt-16",
                        link: "../cursos/norma035",
                      },
            ],
            articulosDestacado: [
                      {
                        titulo: "Tiempos Dificiles",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm" ,
                        image: "post1.jpg",
                        padding: "pa-8 pt-0 pb-0",
                      },
                      {
                        titulo: "Adquiere Mas",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm" ,
                        image: "post2.jpg",
                        padding: "pa-8 pt-0 pb-0 mt-16",
                      },
                      {
                        titulo: "Sobre Leer",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm",
                        image: "post3.jpg",
                        padding: "pa-8 pt-0 pb-0",
                      },
                      {
                        titulo: "Ambiente Laboral, causa y efecto",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm",
                        image: "ImagenMini2.jpg",
                        padding: "pa-8 pt-0 pb-0 mt-16",
                      },
            ],
            categoriasDestacadas: [
                      {
                        titulo: "Recursos Humanos",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm" ,
                        image: "ImagenMini.jpg",
                        padding: "pa-8 pt-0 pb-0 mt-16",
                      },
                      {
                        titulo: "Equipos Agiles",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm" ,
                        image: "MiniaturaEquiposAgiles.jpg",
                        padding: "pa-8 pt-0 pb-0",
                      },
                      {
                        titulo: "Lorem Ipsum",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm",
                        image: "Random1.jpg",
                        padding: "pa-8 pt-0 pb-0 mt-16",
                      },
                      {
                        titulo: "Ipsum Lorem",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm",
                        image: "ImagenMini2.jpg",
                        padding: "pa-8 pt-0 pb-0",
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
    border-radius: 20px;
    box-shadow: 6px 6px 4px #6868687c;
    border: whitesmoke 1px solid;
    border-top: none;
    border-left: none;
  }

  .v-card, #cardWrapper-articulos{
    border-radius: 20px;
box-shadow: 6px 6px 4px #6868687c;
  }

  .v-card, #cardWrapper-categorias{
    border-radius: 20px;
box-shadow: 6px 6px 4px #6868687c;
  }

  .cursosDestacadosImagen, .articulosDestacadosImagen, .categoriasDestacadasImagen{
    border-radius: 20px;
    border-image: 20px;
    -webkit-border-image: 20px;
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

  .divWrapper{
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(50%);
    border-radius: 25px;
    font-size: 18px;
    font-weight: 300;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
  }
</style>