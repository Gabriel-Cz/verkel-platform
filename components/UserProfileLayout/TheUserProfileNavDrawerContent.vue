<template>
    <div>
      <v-card dark class="ma-16 ml-0 mr-0">
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
</template>

<script>

import TheUserProfileHeader from '@/components/UserProfileLayout/TheUserProfileHeader';

export default {
    name: "TheUserProfileNavDrawer",
    components: {
        TheUserProfileHeader,
    },
    data () {
        return {
            options: [
                {
                    title: "Mis Cursos",
                    icon: "mdi-paper",
                    link: "/course/user/bought"
                },
                {
                    title: "Mis Especializaciones",
                    icon: "mdi-start",
                    link: "/Especializations/user/bought"
                }
            ]
        }
    }
}
</script>