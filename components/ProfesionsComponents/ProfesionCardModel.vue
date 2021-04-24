<template>
    <div>
        <v-card
          @click="alert = !alert"
          color="transparent" 
          style="font-family: Latee;">
            <v-card-title 
              class="d-flex justify-center">
                {{ nombreDeLaProfesion }}
            </v-card-title>
            <v-img :src="imagenDeLaProfesion" class="image" height="150" >
                <v-alert
                dismissible
                  :value="alert"
                  color="#FFB74D"
                  dark
                  transition="scale-transition"
                  style="font-family: Roboto;"
                  class="text-center text-subtitle-2 text-lg-caption"
                >
                    Profesiones no disponibles por el momento
                </v-alert>
            </v-img>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "ProfesionCardModel",
    data () {
        return {
            alert: false
        }
    }, 
    props: {
        idDeLaProfesion: String,
        imagenDeLaProfesion: String,
        nombreDeLaProfesion: String,
    },
}
</script>

<style lang="scss">

.image {
    position: relative;
    .textImage{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: floralwhite, $alpha: 0.75);
}
}

</style>