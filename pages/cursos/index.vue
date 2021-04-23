<template>
    <div>
        <TheCoursesPageHeader></TheCoursesPageHeader>
        <TheNavbarForCoursesPage></TheNavbarForCoursesPage>
        <TheCoursesPageMainContainer></TheCoursesPageMainContainer>
    </div>
</template>

<script>

import TheCoursesPageHeader from '@/components/CoursesComponents/TheNavbarForCoursesPage';
import TheNavbarForCoursesPage from '@/components/CoursesComponents/TheCoursesPageHeader';
import TheCoursesPageMainContainer from '@/components/CoursesComponents/TheCoursesPageMainContainer';

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