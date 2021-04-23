<template>
  <v-app dark>
    <v-container class="mx-auto">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <div class="flex flex-column justify-center align-center pa-10">
        <NuxtLink to="/">
          Principal
          <v-img src="/Logos/verkel-logo.svg" width="60"></v-img>
        </NuxtLink>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Encontrado',
      otherError: 'Un error ha ocurrido'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
