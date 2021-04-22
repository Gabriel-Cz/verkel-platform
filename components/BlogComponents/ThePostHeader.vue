<template>
    <div>
        <v-card color="transparent" width="100%" :height="cardHeight">
            <v-img :src="imagenDelPost">
            </v-img>
            <v-card-title>
                    {{ tituloDelPost }}
            </v-card-title>
            <v-spacer></v-spacer>
            <h1>Autor: {{ autorDelArticulo }}</h1>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "ThePostHeader",
        props: {
            tituloDelPost: String,
            imagenDelPost: String,
            autorDelArticulo: String
        },
        computed: {
            cardHeight() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return 200;
                    default: return 350;
                }
            }
        }
    }
</script>

<style scoped>

</style>