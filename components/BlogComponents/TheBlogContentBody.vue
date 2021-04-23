<template>
  <div>
      <v-row justify="center" class="mt-16">
          <v-col 
            v-for="articulo in articulosDestacados"
            :key="articulo._id"
            cols="12" sm="7"
            class="px-md-16"
          >
              <PostCardModel
                :idDelArticulo="articulo._id"
                :tituloDelArticulo="articulo.titulo"
                :descripcionDelArticulo="articulo.descripcion"
                :autorDelArticulo="articulo.autor"
                :imagenDelArticulo="articulo.imagen"
                :avatarDelAutor="articulo.avatar"
              >
              </PostCardModel> 
        </v-col>

      </v-row>
  </div>
</template>

<script>

import PostCardModel from '@/components/BlogComponents/PostCardModel';
import { mapActions, mapState } from 'vuex';

export default {
    name: "TheBlogContentBody",
    components: {
        PostCardModel,
    },
    computed: {
      ...mapState('posts', {
        articulosDestacados: state => state.posts
      })
    },
    methods: {
      ...mapActions('posts', ['getPosts'])
    },
    created() {
      this.getPosts()
    }
}
</script>

<style>

</style>