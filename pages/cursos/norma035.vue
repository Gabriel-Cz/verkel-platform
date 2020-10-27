<template>
    <div>
        <TheHeaderOfTheCoursePage></TheHeaderOfTheCoursePage>
        <TheBuyCourseComponent></TheBuyCourseComponent>
        <TheCoursesPreview></TheCoursesPreview>
    </div>
</template>

<script>

import TheHeaderOfTheCoursePage from '@/components/TheHeaderOfTheCoursePage';
import TheBuyCourseComponent from '@/components/TheBuyCourseComponent';
import TheCoursesPreview from '@/components/TheCoursesPreview';

export default {
    data () {
        return {
            //
        }
    },
    components: {
        TheHeaderOfTheCoursePage,
        TheBuyCourseComponent,
        TheCoursesPreview
    }
}
</script>

<style scoped>



</style>