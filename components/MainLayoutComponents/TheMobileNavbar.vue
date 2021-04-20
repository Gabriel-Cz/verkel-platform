<template>
  <div>
      <v-app-bar
      color="transparent"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="link in links" :key="link.name">
            <v-btn 
                  class="ma-10 mt-0 mb-0 menuLinks"
                  elevation="0"
                  text
                  tile
                > 
                  <nuxt-link :to="link.pagina" style="text-decoration: none;">
                    {{ link.name }}
                  </nuxt-link>
            </v-btn>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
    export default {
        name: "TheMobileNavbar",
        data() {
            return {
                drawer: false,
                group: null,
                links: [
                    {
                      key: 'uno',
                      name: 'Blog',
                      pagina: '/blog'
                    },
                    {
                      key:  'dos',
                      name: 'Cursos',
                      pagina: '/cursos'
                    },
                    {
                      key: 'tres',
                      name: 'Para Empresas',
                      pagina: '/'
                    },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

.menuLinks {
    padding: 12px 24px;
    background-color: transparent;
    border-radius: 3px;
    position: relative;
    overflow: hidden;
    text-transform: capitalize;
    font-family: 'Roboto', sans-serif;
}

.menuLinks {
    color: #42509e;
    position: relative;
    transition: font-size 0.2s ease-in;
}

</style>