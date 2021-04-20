<<template>
    <div>
        <v-card
          color="transparent"
          style="cursor: pointer;"
          rounded
        >
            <v-card-title
              style="background-color: #E0E0E0;"
              class="text-center cardTitle justify-center mb-2 " 
            >
                {{ tituloDelArticulo }}
            </v-card-title>
            <v-img  
              gradient="rgba(230, 230, 230, 0.8), rgba(230, 230, 230, 0.8)"
              :src="imagenDelArticulo" 
              height="170"
            >
                <v-row class="justify-center">
                    <v-col cols="10">
                        <p
                          class="cardDescription pt-4 pa-2 pl-1 pr-1 text-center text-body-2"
                        >
                            {{ descripcionDelArticulo }}
                        </p>
                    </v-col>
                </v-row>
            </v-img>
        </v-card>
    </div>
</template>

<script>

import firestore from 'firebase/firestore';

    export default {
        name: "ThePostCardModel",
        props: {
            idDelArticulo: String,
            tituloDelArticulo: String,
            descripcionDelArticulo: String,
            autorDelArticulo: String,
            imagenDelArticulo: String,
            avatarDelAutor: String,
        },
        /* created() {
            this.obtenerArticulo();
        },
        methods: {
            async obtenerArticulo() {
                let blogRef = this.$fire.firestore.collection('blog').doc(this.$props.idDelArticulo);
                try {
                    const snapshot = await blogRef.get()
                    const doc = snapshot.data();
                    if (!doc) {
                        alert('Este Articulo ya no existe...');
                        return
                    }
                    this.tituloDelArticulo = doc.titulo;
                    this.descripcionDelArticulo = doc.descripcion;
                    this.imagenDelArticulo = doc.imagen;
                    this.autorDelArticulo = doc.autor;
                    this.avatarDelAutor = doc.avatar;
                } catch(e) {
                    alert('error' + e);
                }
            }
        } */
    }
</script>

<style scoped>

.cardTitle{
    font-family: 'Lora', sans-serif ;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.cardDescription{
    font-family: 'Roboto', sans-serif ;
    font-style: italic;
}

</style>