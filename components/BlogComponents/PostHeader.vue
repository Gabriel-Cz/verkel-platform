<template>
    <div>
        <div id="postHeader" color="transparent">
            <v-img :src="imagenDelArticulo" class="my-5" :height="imageHeight" alt="imagen no encontrada"></v-img>
            <div class="postHeaderBody d-flex flex-column justify-center align-center">
               <v-card-title class="text-h4 font-weight-light">
                    {{ tituloDelArticulo }}
               </v-card-title>
               <v-spacer></v-spacer>
               <div class="subtitle-1 d-flex align-center"> <small>Autor:</small> <bold class="ml-2 font-weight-bold">{{ autorDelArticulo }}</bold> <v-avatar class="ml-5" size="60px"><v-img :src="avatarDelAutor"></v-img></v-avatar> </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostHeader",
        props: {
            tituloDelArticulo: String,
            autorDelArticulo: String,
            imagenDelArticulo: String,
            avatarDelAutor: String,
        },
        computed: {
            imageHeight() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return 100;
                    case 'sm': return 150;
                    case 'md': return 150;
                    case 'lg': return 200;
                    case 'xl': return 250;
                    default: return 250;
                }
            },
            avatarHeight() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return 40;
                    case 'sm': return 40;
                    case 'md': return 60;
                    case 'lg': return 60;
                    case 'xl': return 60;
                    default: return 50;
                }
            }
        }
    }
</script>

<style lang="scss">

#postHeader {
    font-family: 'Latee', serif;
}

</style>