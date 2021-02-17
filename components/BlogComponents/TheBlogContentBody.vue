<template>
  <div style="background-image: url('/SvgBlogBackground.svg')">
      <v-row justify="center" class="mt-16">
          <v-col 
            v-for="col in cols"
            :key="col.name"
            :cols="col.colsNumber"
            :justify="col.colJustify"
        >
              <ThePostCardModel
                :idDelArticulo="col.idDelArticulo"
              ></ThePostCardModel> 
        </v-col>

      </v-row>
  </div>
</template>

<script>

import ThePostCardModel from '@/components/BlogComponents/ThePostCardModel';

export default {
    name: "TheBlogContentBody",
    components: {
        ThePostCardModel,
    },
    data () {
        return {
            cols: [
                {
                    name: "firstColumn",
                    colsNumber: 5,
                    margin: null,
                    idDelArticulo: "articulo-equiposMultiDisciplinarios",
                },
                {
                    name: "secondColumn",
                    colsNumber: 5,
                    margin: 'mt-8',
                    idDelArticulo: "articulo-equiposMultiDisciplinarios",
                },
                {
                    name: "ThirdColumn",
                    colsNumber: 5,
                    margin: null,
                    idDelArticulo: "articulo-trabajoRemoto",
                },
                {
                    name: "fourthColumns",
                    colsNumber: 5,
                    margin: "mt-4",
                    idDelArticulo: "articulo-trabajoRemoto",
                },
            ]
        }
    }

}
</script>

<style>

</style>