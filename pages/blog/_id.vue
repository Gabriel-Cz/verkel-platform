<template>
    <div>
        <v-container>
            <v-card elevation="10" :width="cardWidth" color="transparent">
                <ThePostHeader :tituloDelArticulo="this.articulo.titulo" :imagenDelArticulo="this.articulo.imagen"></ThePostHeader>
                <ThePostContent :contenidoDelArticulo="this.articulo.contenido"></ThePostContent>
            </v-card>
        </v-container>
    </div>
</template>

<script>

import ThePostHeader from '@/components/BlogComponents/TheBlogHeader'
import ThePostContent from '@/components/BlogComponents/ThePostContent'

import { mapActions, mapState } from 'vuex'
    export default {
        name: "",
        components: {
            ThePostHeader,
            ThePostContent,
        },
        computed: {
            ...mapState('posts', {
                articulo: state => state.currentPost
            }),
            Id() {
                return this.$route.params.id;
            }
        },
        methods: {
            ...mapActions('posts', ['getPost'])
        },
        created() {
            this.getPost(this.Id)
        },
        computed: {
            cardWidth() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return '100%';
                    case 'sm': return '90%';
                    case 'md': return '75%';
                    default: return '50%';
                }
            }
        }
    }
</script>

<style scoped>

</style>