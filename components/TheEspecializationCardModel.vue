<<template>
    <div>
        <v-card 
          :style="cardCustomStyle"
          color="transparent" 
          style="font-family: Latee;">
            <v-card-title 
              :style="cardTitleCustomStyle"
              class="d-flex justify-center">
                {{ nombreDeLaEspecializacion }}
            </v-card-title>
            <v-img :src="imagenDeLaEspecializacion" height="150" ></v-img>
            <v-card-actions >
                <p class="ma-5 mb-0 mt-0 subtitle font-italic">{{ institucionQueImpartira }}</p>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
    name: "TheCourseCardModel",
    props: {
        imagenDeLaEspecializacion: String,
        nombreDeLaEspecializacion: String,
        institucionQueImpartira: String,
        cardCustomStyle: String,
        cardTitleCustomStyle: String
    },
}
</script>

<style scoped>

</style>