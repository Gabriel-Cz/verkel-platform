<template>
    <div>
        <div style="height: 150px;"></div>
        <v-container 
          fluid
          class="mt-16 mb-16 TheCoursesPageMainContainer"
        >
            <v-row
              class="d-flex justify-center"
            >
                <v-col
                  cols="10"
                >
                    <p>
                      <span class="categoriasTitulo pa-4 pb-3 pt-3"> 
                        Categorias 
                      </span></p>
                </v-col>
                <v-col
                  cols="10"
                  class="ml-16"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    <br/>
                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </v-col>
                <v-col 
                  cols="2"
                  v-for="categoria in categorias"
                  :key="categoria.name"
                  :class="categoria.padding"

                >
                    <v-card
                      id="cardWrapper-categorias"
                      link
                    >
                        <v-img
                          class="categoriasImagenes"
                          :src="categoria.imagen"
                          height="120"
                        >
                           <div
                             class="divWrapper d-flex justify-center align-center"
                           >
                               {{ categoria.titulo }}
                           </div>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col cols="12" class="d-flex align-center justify-center mt-10">
                    <v-btn 
                      rounded
                      outlined
                      color="#FFA726"
                    >
                        Ver Todos
                    </v-btn>
                </v-col>
            </v-row>
            <v-row
              class="d-flex justify-center mt-8"
            >
                <v-col
                  cols="10"
                >
                    <p><span class="cursosTitulo pa-4 pb-3 pt-3"> Cursos </span></p>
                </v-col>
                <v-col
                  cols="10"
                  class="ml-16"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    <br/>
                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </v-col>
                <v-col 
                  cols="2"
                  v-for="curso in cursos"
                  :key="curso.titulo"
                  :class="curso.padding"

                >
                    <v-card
                      id="cardWrapper-cursos"
                      link
                      nuxt-link :to="curso.link"
                    >
                        <v-img
                          class="cursosImagenes"
                          :src="curso.imagen"
                          height="120"
                        >
                           <div
                             class="divWrapper d-flex justify-center align-center"
                           >
                               {{ curso.titulo }}
                           </div>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col cols="12" class="d-flex align-center justify-center mt-10">
                    <v-btn 
                      rounded
                      outlined
                      color="#FFA726"
                    >
                        Ver Todos
                    </v-btn>
                </v-col>
            </v-row>
            <v-row
              class="d-flex justify-center"
            >
                <v-col
                  cols="10"
                >
                    <p> 
                      <span class="especializacionesTitulo pa-4 pb-3 pt-3"> 
                        Especializaciones 
                      </span>
                    </p>
                </v-col>
                <v-col
                  cols="10"
                  class="ml-16"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    <br/>
                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </v-col>
                <v-col 
                  cols="2"
                  v-for="especializacion in especializaciones"
                  :key="especializacion.name"
                  :class="especializacion.padding"

                >
                    <v-card
                      id="cardWrapper-especializaciones"
                      link
                    >
                        <v-img
                          class="especializacionesImagenes"
                          :src="especializacion.imagen"
                          height="120"
                        >
                           <div
                             class="divWrapper d-flex justify-center align-center"
                           >
                               {{ especializacion.titulo }}
                           </div>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col cols="12" class="d-flex align-center justify-center mt-10">
                    <v-btn 
                      rounded
                      outlined
                      color="#FFA726"
                    >
                        Ver Todos
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "TheCoursesPageMainContainer",
    data () {
        return {
            mainContainerRows: [
                {
                    name: "Categorias"
                },
                {
                    name: "Cursos",
                },
                {
                    name: "Especializaciones",
                }
            ],
            categorias: [
                {
                    titulo: "Recursos Humanos",
                    imagen: "/CoursesPageImages/RecursosHumanosCategoria.jpg",
                    padding: "pa-8 pt-0 pb-0 mt-8",
                },
                {
                    titulo: "Equipos Agiles",
                    imagen: "MiniaturaEquiposAgiles.jpg",
                    padding: "pa-8 pt-0 pb-0 mt-11",
                }
            ],
            cursos: [
                {
                    titulo: "Liderazgo Agil",
                    imagen: "/CoursesPageImages/LiderazgoAgilMiniatura.jpg",
                    padding: "pa-8 pt-0 pb-0 mt-5",
                },
                {
                    titulo: "Norma-035",
                    imagen: "/CoursesPageImages/Norma035Miniatura.jpg",
                    padding: "pa-8 pt-0 pb-0 mt-8",
                    link: "../cursos/norma035",
                },
                {
                    titulo: "Scrum",
                    imagen: "/CoursesPageImages/ScrumMiniatura.jpg",
                    padding: "pa-8 pt-0 pb-0 mt-11",
                },
                {
                    titulo: "Nomina Integral",
                    imagen: "/CoursesPageImages/NominaIntegralMiniatura.jpg",
                    padding: "pa-8 pt-0 pb-0 mt-14",
                }
            ],
            especializaciones: [
                {
                    titulo: "Nomina Integral",
                    imagen: "/CoursesPageImagenes/NominaIntegralMiniatura.jpg",
                    padding: "pa-8 pt-0 pb-0 mt-8"
                },
                {
                    titulo: "Metodologia Agil",
                    imagen: "/CoursesPageImagenes/MetodologiaAgil.jpg",
                    padding: "pa-8 pt-0 pb-0 mt-11",
                }
            ]
        }
    }
}
</script>

<style scoped>

  .TheCoursesPageMainContainer{
    background-image: url('/TheCoursePageMainContainerBG.svg');
  }

  .divWrapper{
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(50%);
    border-radius: 20px;
    font-size: 18px;
    font-weight: 300;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
  }

  .v-card, #cardWrapper-categorias, #cardWrapper-cursos, #cardWrapper-especializaciones{
    border-radius: 20px;
    box-shadow: 6px 6px 4px #6868687c;
    border: whitesmoke 1px solid;
    border-top: none;
    border-left: none;
  }

  .categoriasImagenes, .cursosImagenes, .especializacionesImagenes{
    border-radius: 20px;
    border-image: 20px;
    -webkit-border-image: 20px;
  }

  .categoriasTitulo, .cursosTitulo, .especializacionesTitulo{
    font-weight: 300;
    font-size: 20px;
    border-radius: 5px;
    border: 3px double #781010;
    box-shadow: -6px 6px 0px #C4C4C4;
  }

  .cursosTitulo{
    border: 3px double #365AA8;
    box-shadow: -6px 6px 0px #C4C4C4;
  }

  .especializacionesTitulo{
    border: 3px double #a88436;
    box-shadow: -6px 6px 0px #C4C4C4;
  }
</style>