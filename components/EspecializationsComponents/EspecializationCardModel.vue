<<template>
    <div>
        <v-card 
          @click="alert = !alert"
          :style="cardCustomStyle"
          color="transparent" 
          style="font-family: Latee;">
            <v-card-title 
              :style="cardTitleCustomStyle"
              class="d-flex justify-center">
                {{ nombreDeLaEspecializacion }}
            </v-card-title>
            <v-img :src="imagenDeLaEspecializacion" height="150" >
                <v-alert
                dismissible
                  :value="alert"
                  color="#FFB74D"
                  dark
                  transition="scale-transition"
                  style="font-family: Roboto;"
                  class="text-center text-subtitle-2 text-lg-caption"
                >
                    Especializaciones no disponibles por el momento
                </v-alert>
            </v-img>
            <v-card-actions >
                <p class="ma-5 mb-0 mt-0 subtitle font-italic">{{ institucionQueImpartira }}</p>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
    name: "EspecializationCardModel",
    props: {
        imagenDeLaEspecializacion: String,
        nombreDeLaEspecializacion: String,
        institucionQueImpartira: String,
        cardCustomStyle: String,
        cardTitleCustomStyle: String
    },
    data() {
        return {
            alert: false
        }
    }
}
</script>

<style scoped>

</style>