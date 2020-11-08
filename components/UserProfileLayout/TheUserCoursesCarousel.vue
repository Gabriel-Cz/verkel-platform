<<template>
    <div>
        <v-card dark>
            <v-card-title>Mis Cursos</v-card-title>
                <v-card-text class="d-flex align-center">
                    <v-carousel class="d-flex align-center">
                        <v-carousel-item justify="center">
                            <v-row class="fill-height">
                                <v-col
                                  cols="3"
                                  v-for="curso in cursos"
                                  :key="curso.titulo"
                                >
                                    <TheCourseCardModel
                                      :imagenDelCurso="curso.imagen"
                                      :nombreDelCurso="curso.titulo"
                                      :capacitadorDelCurso="curso.capacitador"
                                      :avatarDelCapacitador="curso.fotoDelCapacitador"
                                    >
                                    </TheCourseCardModel>
                                </v-col>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
                </v-card-text>
        </v-card>
    </div>
</template>

<script>

import TheCourseCardModel from "@/components/TheCourseCardModel";

    export default {
        name: "TheUserCoursesCarousel",
        components: {
            TheCourseCardModel
        },
        data () {
            return {
                cursos: [
                    {
                        titulo: "Nomina Integral",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm Ipsum la dasd difuse and lazer ipstrusm" ,
                        imagen: "/MiniaturaGestionDeNomina.jpg",
                        padding: "pt-2",
                        capacitador: "Estefania Cazares",
                        fotoDelCapacitador: "/CapacitadorDePrueba.jpg"
                      },
                      {
                        titulo: "Gestion de Proyectos",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm" ,
                        imagen: "/MiniaturaGestionDeProyectos.jpg",
                        padding: "pt-2",
                        capacitador: "Estefania Cazares",
                        fotoDelCapacitador: "/CapacitadorDePrueba.jpg"
                      },
                      {
                        titulo: "Liderazgo Agil",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm",
                        imagen: "/MiniaturaLiderazgoAgil.jpg",
                        padding: "pt-2",
                        capacitador: "Estefania Cazares",
                        fotoDelCapacitador: "/CapacitadorDePrueba.jpg"
                      },
                      {
                        titulo: "Norma 035",
                        description: "Lorem Ipsum la dasd difuse and lazer ipstrusm",
                        imagen: "/MiniaturaNorma035.jpg",
                        padding: "pt-2",
                        capacitador: "Estefania Cazares",
                        fotoDelCapacitador: "/CapacitadorDePrueba.jpg",
                        link: "../cursos/norma035",
                      },
                ]
            }
        }
    }
</script>

<style scoped>

</style>