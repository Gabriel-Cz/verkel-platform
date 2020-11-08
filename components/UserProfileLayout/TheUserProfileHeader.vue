<template>
    <div>
        <v-row>
            <v-col cols="6" sm="4" md="3" lg="4" class="d-flex justify-end">
                <v-card class="roundedProfileImage rounded-circle" height="300" width="300">
                    <v-img src="../CapacitadorDePrueba.jpg" height="300" width="300"></v-img>
                </v-card>
            </v-col>
            <v-col cols="6" sm="4" md="5" lg="5" class="d-flex align-center">
                <h1 class="ml-10">Hola de Nuevo {{ CapacitadorDePrueba }}! </h1>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "TheUserProfileHeader"
}
</script>