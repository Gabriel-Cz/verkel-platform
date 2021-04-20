<template>
  <div style="background-image: url('/SvgBlogBackground.svg')">
      <v-row justify="center" class="mt-16">
          <v-col 
            v-for="articulo in articulosDestacados"
            :key="articulo._id"
            cols="8"
          >
              <ThePostCardModel
                :idDelArticulo="articulo._id"
                :tituloDelArticulo="articulo.titulo"
                :descripcionDelArticulo="articulo.descripcion"
                :autorDelArticulo="articulo.autor"
                :imagenDelArticulo="articulo.imagen"
                :avatarDelAutor="articulo.avatar"
              >
              </ThePostCardModel> 
        </v-col>

      </v-row>
  </div>
</template>

<script>

import ThePostCardModel from '@/components/BlogComponents/ThePostCardModel';
import { mapActions, mapState } from 'vuex';

export default {
    name: "TheBlogContentBody",
    components: {
        ThePostCardModel,
    },
    computed: {
      ...mapState('posts', {
        articulosDestacados: state => state.topPosts
      })
    },
    methods: {
      ...mapActions('posts', ['getTopPosts'])
    },
    created() {
      this.getTopPosts()
    }
}
</script>

<style>

</style>