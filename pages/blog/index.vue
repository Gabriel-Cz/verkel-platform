<<template>
    <div>
      <v-row class="justify-center mt-16">
          <v-col cols="8">
              <v-card color="transparent">
            <v-img src="/CoursesPageImages/Norma035Miniatura.jpg" height="300"></v-img>
            <v-card-title>{{ tituloDelArticulo }}</v-card-title>
            <v-card-subtitle>{{ autorDelArticulo }}</v-card-subtitle>
            <v-card-text>{{ contenidoDelArticulo }}</v-card-text>
            <v-card-actions>
                <v-btn small color="success" @click="obtenerArticulo()">Leer Articulo</v-btn>
            </v-card-actions>
        </v-card>
          </v-col>
      </v-row>
    </div>
</template>

<script>

import firestore from 'firebase/firestore';

export default {
    data () {
        return {
            tituloDelArticulo: "",
            contenidoDelArticulo: "",
            autoDelArticulo: "",
        }
    },
    methods: {
        async obtenerArticulo() {
            const blogRef = this.$fire.firestore.collection('blog').doc('articulo');
            try {
                const snapshot = await blogRef.get()
                const doc = snapshot.data()
                if (!doc) {
                    alert('Document doesnt exists.')
                    return
                }
                this.tituloDelArticulo = doc.titulo;
                this.contenidoDelArticulo = doc.contenido
                this.autoDelArticulo = doc.autor
            } catch(e) {
                alert('error' + e)
            }
        }
    }
}

</script>

<style scoped>

</style>