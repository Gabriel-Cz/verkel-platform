<template>
    <div>
        <TheHeaderOfTheCoursePage></TheHeaderOfTheCoursePage>
        <TheBuyCourseComponent></TheBuyCourseComponent>
        <TheCoursesPreview></TheCoursesPreview>
    </div>
</template>

<script>

import TheHeaderOfTheCoursePage from '@/components/IndividualCoursePageComponents/TheHeaderOfTheCoursePage';
import TheBuyCourseComponent from '@/components/IndividualCoursePageComponents/TheBuyCourseComponent';
import TheCoursePreview from '@/components/IndividualCoursePageComponents/TheCoursePreview';

export default {
    data () {
        return {
            //
        }
    },
    components: {
        TheHeaderOfTheCoursePage,
        TheBuyCourseComponent,
        TheCoursePreview
    }
}
</script>

<style scoped>



</style>