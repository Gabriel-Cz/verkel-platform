<<template>
    <div>
        <v-card
          id="card"
          color="transparent"
          style="cursor: pointer;"
          rounded
          hover
          nuxt-link :to="'blog/' + `${idDelArticulo}`"
        >
            <v-img  
              :src="imagenDelArticulo" 
              height="170"
            >
            <div class="pa-4 text-h6 text-sm-h5 text-center font-weight-light divTitle" style="font-family: 'Latee';">
                {{ tituloDelArticulo }}
                <div class="authorBody subtitle-2 text-sm-subtitle-1 mt-2">
                    <small>Escrito Por:</small> <b class="ml-2">{{ autorDelArticulo }}</b>
                    <v-avatar class="ml-2">
                       <v-img :src="avatarDelAutor"></v-img>
                    </v-avatar>
                </div>
            </div>
            </v-img>
        </v-card>
    </div>
</template>

<script>

    export default {
        name: "PostCardModel",
        props: {
            idDelArticulo: String,
            tituloDelArticulo: String,
            autorDelArticulo: String,
            imagenDelArticulo: String,
            avatarDelAutor: String,
        },
    }
</script>

<style lang="scss" scoped>

#card {
    position: relative;
    .divTitle {
      width: 100%;
      height: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'Latee', sans-serif;
      backdrop-filter: blur(2.5px);
      background-color: rgba($color: white, $alpha: 0.5);
      position: absolute;
      bottom: 0;
    }
}


</style>