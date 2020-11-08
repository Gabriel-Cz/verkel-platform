<template>
    <div>
        <v-card
          :style="cardCustomStyle"
          color="transparent" 
          style="font-family: Latee;">
            <v-card-title 
              style="border: 1px solid #59324C; border-bottom: none;"  
              class="d-flex justify-center">
                {{ nombreDeLaProfesion }}
            </v-card-title>
            <v-img :src="imagenDeLaProfesion" height="150" ></v-img>
            <v-card-actions >
                <v-avatar
                style="margin-top: -64px; border: solid white 1px;"
                  size="60px"
                >
                    <v-img :src="avatarDeLaCategoria" ></v-img>
                </v-avatar>
                <p class="ma-5 mb-0 mt-0 subtitle italic" style="font-style: italic;">Categoria: {{ categoriaDeLaProfesion }}</p>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "TheProfesionCardModel",
    props: [
        'imagenDeLaProfesion',
        'nombreDeLaProfesion',
        'categoriaDeLaProfesion',
        'avatarDeLaCategoria',
        'cardCustomStyle',
        'cardTitleCustomStyle',
    ],
}
</script>