<template>
    <div>
      <v-hover v-slot="{ hover }">
        <v-card 
          nuxt-link :to={{$props.link}}
          color="transparent"
          link 
          style="font-family: Latee;">
            <v-card-title  
             class="d-flex justify-center">{{ nombreDelCurso }}</v-card-title>
            <v-img :src="imagenDelCurso" height="150" >
                <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out  v-card--reveal body-2 gray--text"
                      style="height: 100%; background-color: rgba(255, 255, 255, 0.7); color: black;"
                    >
                        <p class="pa-2">{{ descripcionDelCurso }}</p>
                    </div>
                </v-expand-transition>
            </v-img>
            <v-card-actions >
                <v-avatar
                  v-if="!hover"
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

import firestore from 'firebase/firestore';
import storage from 'firebase/storage';

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