<template>
    <div>
        <v-card
          @click="window.alert('Profesiones en proceso de desarollo espera un poco mas.')"
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
    name: "ProfesionCardModel",
    props: {
        idDeLaProfesion: String,
        imagenDeLaProfesion: String,
        nombreDeLaProfesion: String,
    },
}
</script>