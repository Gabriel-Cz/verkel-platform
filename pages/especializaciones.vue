<template>
    <div>
        <v-row justify="center" class="mt-5 mt-lg-16">
            <v-col cols="12">
                <v-card>
                    <v-img :src="imagenDeLaProfesion" :height="200" gradient="rgba(255, 255, 255, 0.5)" class="imagenDeLaProfesion">
                        <v-card-title class="nombreDeLaProfesion"> {{ nombreDeLaProfesion }} </v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import TheProfesionCardModel from '@/components/TheProfesionCardModel';

    export default {
        components : {
            TheProfesionCardModel
        },
        props: {
            nombreDeLaProfesion: String,
            imagenDeLaProfesion: String
        }
    }
</script>

<style lang="scss" scoped>

.imagenDeLaProfesion {
    position: relative;
}

.nombreDeLaProfesion {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, 50%);
}

</style>