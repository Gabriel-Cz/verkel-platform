<template>
    <div>
        <TheHeaderOfTheCoursePage :titulo="curso.titulo" :capacitador="curso.capacitador" :categoria="curso.categoria" :imagen="curso.imagen" :avatar="curso.avatar" :descripcionDelCurso="curso.descripcion" :descripcionDelCapacitador="descripcionDelCapacitador"></TheHeaderOfTheCoursePage>
        <TheBuyCourseComponent :imagenDelCurso="curso.imagen" :titulo="curso.titulo"></TheBuyCourseComponent>
    </div>
</template>

<script>

import TheHeaderOfTheCoursePage from '@/components/IndividualCoursePageComponents/TheHeaderOfTheCoursePage';
import TheBuyCourseComponent from '@/components/IndividualCoursePageComponents/TheBuyCourseComponent';
import TheCoursePreview from '@/components/IndividualCoursePageComponents/TheCoursePreview';
import { mapActions, mapState } from 'vuex';

export default {
    data () {
        return {
            descripcionDelCapacitador: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur."
        }
    },
    components: {
        TheHeaderOfTheCoursePage,
        TheBuyCourseComponent,
        TheCoursePreview
    },
    computed: {
        ...mapState('courses', {
            curso: state => state.course
        }),
        routeId() {
            return this.$route.params.id
        }
    },
    methods: {
        ...mapActions('courses', ['getCourse'])
    },
    created() {
        this.getCourse(this.routeId)
    }
}
</script>

<style scoped>



</style>