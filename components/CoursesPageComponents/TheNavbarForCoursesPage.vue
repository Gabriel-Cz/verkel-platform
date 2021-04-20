<template>
    <div>
        <v-toolbar
          class="mt-8"
          flat
          color="transparent"
        >
            <v-row>
                <v-col cols="0" sm="0" md="5" lg="8">
                </v-col>
                <v-col cols="12" sm="6" md="3" lg="2">
                    <v-text-field
                      class="coursesPageSearchBar mr-5"
                      append-icon="mdi-magnify"
                      placeholder="Buscar Curso"
                      outlined
                      dense
                      hide-details
                    >
                      <v-btn></v-btn>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3" lg="2">
                    <v-toolbar-items>
                       <v-btn
                        class="coursesPageNavButtons"
                        v-for="btn in coursesPageNavButtons"
                        :key="btn.name"
                        text
                       >
                          {{ btn.name }} |
                       </v-btn>
                    </v-toolbar-items>
                </v-col>
            </v-row>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    name: "TheNavbarForCoursesPage",
    data() {
        return {
            coursesPageNavButtons: [
                {
                    name: "Categorias",
                    link: ""
                },
                {
                    name: "Especializaciones",
                    link: "",
                }
            ]
        }
    }
}
</script>

<style scoped>

  .coursesPageNavButtons{
      text-transform: capitalize;
  }

  

</style>