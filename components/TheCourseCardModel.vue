<template>
    <div>
      <v-hover v-slot="{ hover }">
        <v-card 
          nuxt-link to="/cursos/norma035"
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
    data () {
      return {
        imagenDelCurso: "",
        nombreDelCurso: "",
        descripcionDelCurso: "",
        capacitadorDelCurso: "",
        avatarDelCapacitador: "",
      }
    },
    props: [
        'idDelCurso'
    ],
    created() {
      this.obtenerInformacionDelCurso();
    },
    methods: {
      async obtenerInformacionDelCurso() {
        let refCurso = this.$fire.firestore.collection('cursos').doc(this.$props.idDelCurso);
        try {
          const snapshot = await refCurso.get();
          const doc = snapshot.data();
          if (!doc) {
            alert('This Document doesn´t exists');
            return
          } 
          this.nombreDelCurso = doc.titulo;
          this.capacitadorDelCurso = doc.capacitador
          this.descripcionDelCurso = doc.descripcion;
          this.avatarDelCapacitador = doc.imagenDelCapacitador;
          this.imagenDelCurso = doc.imagenDelCurso;
        } catch(e) {
          alert('error' + e)
        }
      }
    }
}
</script>