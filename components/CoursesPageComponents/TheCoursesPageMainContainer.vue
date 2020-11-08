<template>
    <div style="background-image: url(/TheCoursePageMainContainerBG.svg);">
        <div style="height: 150px;"></div>
        
            <v-row
              style="background: linear-gradient(90deg, rgba(106,141,175,0.9) 0%, rgba(151,163,190,0.9) 50%, rgba(255,255,255,0.9) 100%);"
              class="d-flex justify-center"
            >
                <v-col
                align-self="end"
                  cols="6"
                >
                    <TheCourseInfoModel 
                      :divInfoTitle="divProfesiones.titulo" 
                      :divInfoDescripcion="divProfesiones.descripcion">
                    </TheCourseInfoModel>
                </v-col>

                <v-col
                  cols="3"
                  class="mt-8"
                  v-for="profesion in profesiones"
                  :key="profesion.name"

                >
                    <TheProfesionCardModel
                      :imagenDeLaProfesion="profesion.imagen"
                      :nombreDeLaProfesion="profesion.titulo"
                      :categoriaDeLaProfesion="profesion.categoria"
                      :avatarDeLaCategoria="profesion.avatar"
                    >
                    </TheProfesionCardModel>
                </v-col>
                <v-col cols="12" class="d-flex align-center justify-center mt-10">
                    <v-btn 
                      dark
                      rounded
                      color="primary"
                      class="mb-4"
                    >
                        Ver Profesiones
                    </v-btn>
                </v-col>
            </v-row>
            <div style="height: 100px;"></div>
            <v-row
              class="d-flex justify-center mt-16"
            >
                <v-col
                  cols="6"
                >
                    <TheCourseInfoModel
                      :divInfoTitle="divCursos.titulo"
                      :divInfoDescripcion="divCursos.descripcion"
                    ></TheCourseInfoModel>
                </v-col>
                <v-col 
                  cols="3"
                  v-for="curso in cursos"
                  :key="curso.titulo"
                >
                    <TheCourseCardModel
                      :imagenDelCurso="curso.imagen"
                      :nombreDelCurso="curso.titulo"
                      :capacitadorDelCurso="curso.capacitador"
                      :avatarDelCapacitador="curso.avatar"
                    ></TheCourseCardModel>
                </v-col>
                <v-col cols="12" class="d-flex align-center justify-center mt-10">
                    <v-btn 
                      class="mb-4"
                      rounded
                      outlined
                      color="#FFA726"
                    >
                        Ver Cursos
                    </v-btn>
                </v-col>
            </v-row>
            <div style="height: 100px;"></div>
            <v-row
              class="d-flex justify-center mt-16"
              style="background: linear-gradient(90deg, rgba(166,84,84,0.9) 0%, rgba(190,151,151,0.9) 50%, rgba(255,255,255,0.9) 100%);"
            >
                <v-col
                  cols="6"
                  align-self="start"
                >
                    <TheCourseInfoModel
                      :divInfoTitle="divEspecializaciones.titulo"
                      :divInfoDescripcion="divEspecializaciones.descripcion"
                    >
                    </TheCourseInfoModel>
                </v-col>
                <v-col
                  class="mt-8"
                  cols="3"
                  v-for="especializacion in especializaciones"
                  :key="especializacion.titulo"
                >
                    <TheEspecializationCardModel
                      :imagenDeLaEspecializacion="especializacion.imagen"
                      :nombreDeLaEspecializacion="especializacion.titulo"
                      :institucionQueImpartira="especializacion.institucion"
                    >
                    </TheEspecializationCardModel>
                </v-col>
                <v-col cols="12" class="d-flex align-start justify-center mt-10">
                    <v-btn
                      class="mb-4" 
                      rounded
                      outlined
                      
                      color="red"
                    >
                        Ver Especializaciones
                    </v-btn>
                </v-col>
            </v-row>
    </div>
</template>

<script>

import TheCourseInfoModel from '@/components/TheCourseInfoModel';
import TheProfesionCardModel from '@/components/TheProfesionCardModel';
import TheCourseCardModel from '@/components/TheCourseCardModel';
import TheEspecializationCardModel from '@/components/TheEspecializationCardModel';

export default {
    name: "TheCoursesPageMainContainer",
    components: {
      TheCourseInfoModel,
      TheProfesionCardModel,
      TheEspecializationCardModel,
    },
    data () {
        return {
            divProfesiones: {
              titulo: "Profesiones",
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            },
            divCursos: {
              titulo: "Cursos",
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            },
            divEspecializaciones: {
              titulo: "Especializaciones",
              descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            },
            mainContainerRows: [
                {
                    titulo: "Profesiones",
                    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                },
                {
                    name: "Cursos",
                },
                {
                    name: "Especializaciones",
                }
            ],
            profesiones: [
                {
                    titulo: "Recursos Humanos",
                    imagen: "/CoursesPageImages/RecursosHumanosCategoria.jpg",
                    padding: "pa-8 pt-0 pb-0 ",
                    categoria: "Recursos Humanos",
                    avatar: "CapacitadorDePrueba.jpg",
                    cardCustomStyle: "color: floralwhite;",
                    cardTitleCustomStyle: "border: 1px solid floralwhite; border-bottom: none;",
                },
                {
                    titulo: "Gestion de Equipos",
                    imagen: "MiniaturaEquiposAgiles.jpg",
                    padding: "pa-8 pt-0 pb-0",
                    categoria: "Metodologia Agil",
                    avatar: "CapacitadorDePrueba.jpg",
                    cardCustomStyle: "color: floralwhite;",
                    cardTitleCustomStyle: "border: 1px solid floralwhite; border-bottom: none;",
                },
                {
                    titulo: "Recursos Humanos",
                    imagen: "/CoursesPageImages/RecursosHumanosCategoria.jpg",
                    padding: "pa-8 pt-0 pb-0 ",
                    categoria: "Recursos Humanos",
                    avatar: "CapacitadorDePrueba.jpg",
                    cardCustomStyle: "color: floralwhite;",
                    cardTitleCustomStyle: "border: 1px solid floralwhite; border-bottom: none;",
                },
                {
                    titulo: "Equipos Agiles",
                    imagen: "MiniaturaEquiposAgiles.jpg",
                    padding: "pa-8 pt-0 pb-0",
                    categoria: "Metodologia Agil",
                    avatar: "CapacitadorDePrueba.jpg",
                    cardCustomStyle: "color: floralwhite;",
                    cardTitleCustomStyle: "border: 1px solid floralwhite; border-bottom: none;",
                }
            ],
            cursos: [
                {
                    titulo: "Liderazgo Agil",
                    imagen: "/LiderazgoAgilMiniatura.jpg",
                    padding: "pa-8 pt-0 pb-0",
                    capacitador: "Estefania Cazares",
                    avatar: "CapacitadorDePrueba.jpg",
                },
                {
                    titulo: "Norma-035",
                    imagen: "/CoursesPageImages/Norma035Miniatura.jpg",
                    padding: "pa-8 pt-0 pb-0 ",
                    capacitador: "Estefania Cazares",
                    avatar: "CapacitadorDePrueba.jpg",
                    link: "../cursos/norma035",
                },
                {
                    titulo: "Scrum",
                    imagen: "/CoursesPageImages/ScrumMiniatura.jpg",
                    padding: "pa-8 pt-0 pb-0",
                    capacitador: "Estefania Cazares",
                    avatar: "CapacitadorDePrueba.jpg",
                },
                {
                    titulo: "Nomina Integral",
                    imagen: "/CoursesPageImages/NominaIntegralMiniatura.jpg",
                    padding: "pa-8 pt-0 pb-0",
                    capacitador: "Estefania Cazares",
                    avatar: "CapacitadorDePrueba.jpg",
                }
            ],
            especializaciones: [
                {
                    titulo: "Nomina Integral",
                    imagen: "/CoursesPageImages/NominaIntegralMiniatura.jpg",
                    padding: "pa-8 pt-0 pb-0 ",
                    institucion: "Universidad Autonoma",
                    cardCustomStyle: "color: floralwhite;",
                    cardTitleCustomStyle: "border: 1px solid floralwhite; border-bottom: none;"
                },
                {
                    titulo: "Metodologia Agil",
                    imagen: "/MetodologiaAgil.jpg",
                    padding: "pa-8 pt-0 pb-0",
                    institucion: "Universidad Autonoma",
                    cardCustomStyle: "color: floralwhite;",
                    cardTitleCustomStyle: "border: 1px solid floralwhite; border-bottom: none;"
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

  .divProfesiones-titulo {
    border-left: #529ab9 solid 3px;
    border-radius: 5px;
  }

  .divProfesiones-descripcion {
    border-right: #636363 solid 2px;
    border-bottom: #636363 solid 2px;
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