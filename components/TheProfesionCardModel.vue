<template>
    <div>
        <v-card
          hover
          nuxt-link :to="`/profesiones/${idDeLaProfesion}`"
          color="transparent" 
          style="font-family: Latee;">
            <v-card-title 
              class="d-flex justify-center">
                {{ nombreDeLaProfesion }}
            </v-card-title>
            <v-img :src="imagenDeLaProfesion" height="150" ></v-img>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "TheProfesionCardModel",
    props: {
        idDeLaProfesion: String,
        imagenDeLaProfesion: String,
        nombreDeLaProfesion: String,
    },
}
</script>