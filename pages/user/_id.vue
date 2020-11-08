<template>
    <div>
        <v-row class="">
            <v-col cols="2">
                <TheUserProfileNavDrawerContent></TheUserProfileNavDrawerContent>
            </v-col>
            <v-col cols="10">
                <TheUserProfileHeader></TheUserProfileHeader>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
                <TheUserCoursesCarousel></TheUserCoursesCarousel>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import TheUserCoursesCarousel from '@/components/UserProfileLayout/TheUserCoursesCarousel';

export default {
    layout: 'TheUserProfileLayout',
    components: {
        TheUserCoursesCarousel
    },
    data () {
        return {
            CapacitadorDePrueba: "Estefania Cazares"
        }
    }
}
</script>

<style scoped>



</style>