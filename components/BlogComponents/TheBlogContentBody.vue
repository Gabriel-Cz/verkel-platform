<template>
  <div style="background-image: url('/SvgBlogBackground.svg')">
      <v-row justify="center" class="mt-16">
          <v-col 
            v-for="post in posts"
            :key="post._id"
            cols="12"
          >
              <ThePostCardModel
              >
              </ThePostCardModel> 
        </v-col>

      </v-row>
  </div>
</template>

<script>

import ThePostCardModel from '@/components/BlogComponents/ThePostCardModel';

export default {
    name: "TheBlogContentBody",
    props: {
        posts: Array
    },
    components: {
        ThePostCardModel,
    },
}
</script>

<style>

</style>