<template>
    <div>
        <v-container class="d-flex justify-center align-center mt-5 mt-lg-16">
            <v-card elevation="0" id="postCard" :width="cardWidth" color="transparent">
                <PostHeader :tituloDelArticulo="articulo.titulo" :imagenDelArticulo="articulo.imagen" :autorDelArticulo="articulo.autor" :avatarDelAutor="articulo.avatar" />
                <PostContent :contenidoDelArticulo="articulo.contenido" />
            </v-card>
        </v-container>
    </div>
</template>

<script>

import PostHeader from '@/components/BlogComponents/PostHeader'
import PostContent from '@/components/BlogComponents/PostContent'

import { mapActions, mapState } from 'vuex'
    export default {
        name: "",
        components: {
            PostHeader,
            PostContent,
        },
        computed: {
            ...mapState('posts', {
                articulo: state => state.currentPost
            }),
            postId() {
                return this.$route.params.id;
            },
            cardWidth() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return '100%';
                    case 'sm': return '90%';
                    case 'md': return '75%';
                    default: return '50%';
                }
            }
        },
        methods: {
            ...mapActions('posts', ['getPost'])
        },
        beforeMount() {
            this.getPost(this.postId)
        },
    }
</script>
