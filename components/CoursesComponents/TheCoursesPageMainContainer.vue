<template>
    <div style="background-image: url(/TheCoursePageMainContainerBG.svg);">
        <div style="height: 150px;"></div> 
            <v-row
              id="rowProfesiones"
              class="d-flex justify-center"
            >
                <div class="profesionsOverflowDiv"></div>
                <v-col
                align-self="end"
                  cols="12"
                  md="8"
                  lg="6"
                >
                    <CourseInfoModel 
                      :divInfoTitle="divProfesiones.titulo" 
                      :divInfoDescripcion="divProfesiones.descripcion">
                    </CourseInfoModel>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                  class="mt-8"
                  v-for="profesion in profesiones"
                  :key="profesion.name"

                >
                    <ProfesionCardModel
                      :imagenDeLaProfesion="profesion.imagen"
                      :nombreDeLaProfesion="profesion.titulo"
                      :categoriaDeLaProfesion="profesion.categoria"
                      :avatarDeLaCategoria="profesion.avatar"
                    >
                    </ProfesionCardModel>
                </v-col>
            </v-row>
            <div style="height: 100px;"></div>
            <v-row
              id="rowCursos"
              class="d-flex justify-center mt-16 pb-5 pb-md-10"
            >
                <div class="cursosOverflowDiv"></div>
                <v-col
                  cols="12"
                  md="8"
                  lg="6"
                >
                    <CourseInfoModel
                      :divInfoTitle="divCursos.titulo"
                      :divInfoDescripcion="divCursos.descripcion"
                    ></CourseInfoModel>
                </v-col>
                <v-col 
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                  class="mt-8"
                  v-for="curso in cursos"
                  :key="curso.titulo"
                >
                    <CourseCardModel
                      :idDelCurso="curso._id"
                      :imagenDelCurso="curso.imagen"
                      :nombreDelCurso="curso.titulo"
                      :capacitadorDelCurso="curso.capacitador"
                      :avatarDelCapacitador="curso.avatar"
                      :descripcionDelCurso="curso.descripcion"
                    ></CourseCardModel>
                </v-col>
            </v-row>
            <div style="height: 100px;"></div>
            <v-row
              id="rowEspecializaciones"
              class="d-flex justify-center mt-16 pb-5 pb-md-10"
            >
                <div class="especializacionesOverflowDiv"></div>
                <v-col
                  cols="12"
                  md="8"
                  lg="6"
                  align-self="start"
                >
                    <CourseInfoModel
                      :divInfoTitle="divEspecializaciones.titulo"
                      :divInfoDescripcion="divEspecializaciones.descripcion"
                    >
                    </CourseInfoModel>
                </v-col>
                <v-col
                  class="mt-8"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                  v-for="especializacion in especializaciones"
                  :key="especializacion.titulo"
                >
                    <EspecializationCardModel
                      :imagenDeLaEspecializacion="especializacion.imagen"
                      :nombreDeLaEspecializacion="especializacion.titulo"
                      :institucionQueImpartira="especializacion.institucion"
                    >
                    </EspecializationCardModel>
                </v-col>
            </v-row>
    </div>
</template>

<script>

import CourseInfoModel from '@/components/CoursesComponents/CourseInfoModel';
import CourseCardModel from '@/components/CoursesComponents/CourseCardModel';
import ProfesionCardModel from '@/components/ProfesionsComponents/ProfesionCardModel';
import EspecializationCardModel from '@/components/EspecializationsComponents/EspecializationCardModel';
import { mapState, mapActions } from 'vuex';

export default {
    name: "TheCoursesPageMainContainer",
    components: {
      CourseInfoModel,
      CourseCardModel,
      ProfesionCardModel,
      EspecializationCardModel,
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
        }
    },
    computed: {
      ...mapState('masters', {
        especializaciones: state =>  state.masters
      }),
      ...mapState('profesions', {
        profesiones: state =>  state.profesions
      }),
      ...mapState('courses', {
        cursos: state =>  state.courses
      })
    },
    methods: {
      ...mapActions('profesions', ['getProfesions']),
      ...mapActions('masters', ['getMasters']),
      ...mapActions('courses', ['getCourses']),
    },
    created() {
      this.getProfesions(),
      this.getMasters(),
      this.getCourses()
    }
}
</script>

<style lang="scss" scoped>

$profesionesBg: linear-gradient(264.59deg, rgba(81, 153, 193, 0.5) 0%, rgba(50, 91, 139, 0.5) 100%);
$especializacionesBg: linear-gradient(264.59deg, rgba(151, 193, 81, 0.5) 0%, rgba(44, 104, 64, 0.5) 100%);
$cursosBg: linear-gradient(264.59deg, rgba(206, 208, 201, 0.5) 0%, rgba(106, 112, 108, 0.5) 100%);

  #rowProfesiones {
    position: relative;
    overflow: hidden;
    .profesionsOverflowDiv {
      position: absolute;
      width: 100%;
      height: 100%;
      background: $profesionesBg;
      transform: skew(36deg);
    }
  }

  #rowCursos {
    position: relative;
    overflow: hidden;
    .cursosOverflowDiv {
      background: $cursosBg;
      position: absolute;
      width: 100%;
      height: 100%;
      transform: skew(36deg);
    }
  }

  #rowEspecializaciones {
    position: relative;
    overflow: hidden;
    .especializacionesOverflowDiv {
      position: absolute;
      width: 100%;
      height: 100%;
      background: $especializacionesBg;
      transform: skew(36deg);
    }
  }

  .especializacionesTitulo{
    border: 3px double #a88436;
    box-shadow: -6px 6px 0px #C4C4C4;
  }

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
 

</style>