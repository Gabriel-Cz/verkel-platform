<<template>
    <div>
        <v-card
          id="card"
          color="transparent"
          style="cursor: pointer;"
          rounded
        >
            <v-img  
              :src="imagenDelArticulo" 
              height="170"
            >
            <div class="pa-4 text-h6 font-weight-regular divTitle">
                {{ tituloDelArticulo }}
            </div>
            </v-img>
        </v-card>
    </div>
</template>

<script>

    export default {
        name: "ThePostCardModel",
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
}

.divTitle {
    width: 100%;
    font-family: 'Latee', sans-serif;
    backdrop-filter: blur(2.5px);
    background-color: rgba($color: white, $alpha: 0.75);
    position: absolute;
    bottom: 0;
}

</style>