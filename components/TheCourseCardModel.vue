<template>
    <div>
      <v-hover v-slot="{ hover }">
        <v-card 
          nuxt-link :to="'cursos/'+`${idDelCurso}`"
          color="transparent"
          link 
          style="font-family: Latee;">
            <v-card-title  
             class="d-flex justify-center">{{ nombreDelCurso }}</v-card-title>
            <v-img :src="imagenDelCurso" height="150" >
                <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out  v-card--reveal gray--text text-center d-flex justify-center"
                      style="height: 100%; background-color: rgba(255, 255, 255, 0.7); color: black; backdrop-filter: blur(2.5px);"
                    >
                        <p class="pa-2 pt-4 text-caption font-italic">{{ descripcionDelCurso }}</p>
                    </div>
                </v-expand-transition>
            </v-img>
            <v-card-actions >
                <v-avatar
                  style="margin-top: -64px; border: solid white 1px; "
                  size="60px"
                >
                    <v-img :src="avatarDelCapacitador" >
                    </v-img>
                </v-avatar>
                <p class="ma-5 mb-0 mt-0 subtitle italic" style="font-style: italic;">Impartido por {{ capacitadorDelCurso }}</p>
            </v-card-actions>
        </v-card>
      </v-hover>
    </div>
</template>

<script>

export default {
    name: "TheCourseCardModel",
    props: {
      idDelCurso: String,
      imagenDelCurso: String,
      nombreDelCurso: String,
      descripcionDelCurso: String,
      capacitadorDelCurso: String,
      avatarDelCapacitador: String,
    },
}

</script>