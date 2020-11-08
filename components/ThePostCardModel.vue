<template>
    <div>
        <v-card color="transparent" style="font-family: Raleway;">
            <v-card-title style="border: 1px solid #59324C; border-bottom: none;"  class="d-flex justify-center">{{ nombreDelArticulo }}</v-card-title>
            <v-img :src="imagenDelArticulo" height="150" ></v-img>
            <v-card-actions >
                <v-avatar
                style="margin-top: -64px;"
                  size="56px"
                >
                    <v-img :src="avatarDelAutor" ></v-img>
                </v-avatar>
                <p class="ma-5 mb-0 mt-0 subtitle italic" style="font-style: italic;">Escrito por {{ autorDelArticulo }}</p>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "ThePostCardModel",
    props: [
        'imagenDelArticulo',
        'nombreDelArticulo',
        'autorDelArticulo',
        'avatarDelAutor',
    ],
}
</script>