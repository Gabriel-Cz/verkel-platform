<template>
    <div>
        <TheCoursesPageHeader></TheCoursesPageHeader>
        <TheNavbarForCoursesPage></TheNavbarForCoursesPage>
        <TheCoursesPageMainContainer></TheCoursesPageMainContainer>
    </div>
</template>

<script>

import TheCoursesPageHeader from '@/components/CoursesPageComponents/TheCoursesPageHeader';
import TheNavbarForCoursesPage from '@/components/CoursesPageComponents/TheNavbarForCoursesPage';
import TheCoursesPageMainContainer from '@/components/CoursesPageComponents/TheCoursesPageMainContainer';

export default {
    head () {
    return {
      title: "Plataforma Verkel | Cursos",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Plataforma de Capacitacion numero uno de Mexico",

        }
      ],
      htmlAtrrs: {
        lang: "es"
      }
    }
  },
    components: {
        TheCoursesPageHeader,
        TheNavbarForCoursesPage,
        TheCoursesPageMainContainer
    }
}
</script>