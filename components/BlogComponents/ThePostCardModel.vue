<<template>
    <div>
            <v-card
              color="transparent"
              style="cursor: pointer;"
              elevation="0"
              rounded
            >
            <v-card-title
              style="background-color: #6A6A6A;"
              class="text-center cardTitle justify-center mb-2 white--text" 
              v-text="tituloDelArticulo"
            >
            </v-card-title>
        
            <v-img  
              gradient="rgba(230, 230, 230, 0.7), rgba(230, 230, 230, 0.7)"
              style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);"
              :src="imagenDelArticulo" 
              height="170"
            >
                <v-row>
                    <v-col cols="8">
                        <v-text
                          class="cardDescription pa-5"
                          v-text="descripcionDelArticulo"
                        >
                        </v-text>
                    </v-col>

                    <v-col>
                        <v-row>
                            <v-col cols="12">
                                <v-avatar :src="avatarDelAutor"></v-avatar>
                            </v-col>
                            <v-col
                              cols="12"
                              v-text="autorDelArticulo"
                            >
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

            </v-img>

        </v-card>
    </div>
</template>

<script>

import firestore from 'firebase/firestore';

    export default {
        name: "ThePostCardModel.vue",
        data () {
            return {
                tituloDelArticulo: "",
                descripcionDelArticulo: "",
                imagenDelArticulo: "",
                autorDelArticulo: "",
                avatarDelAutor: "",
            }
        },
        props: [
            "idDelArticulo",
        ],
        created() {
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
        }
    }
</script>

<style scoped>

.cardTitle{
    font-family: 'Lora', sans-serif ;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.cardDescription{
    font-family: 'Lora', sans-serif ;
}

</style>