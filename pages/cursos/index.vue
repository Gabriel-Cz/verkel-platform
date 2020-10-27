<template>
    <div>
        <TheCoursesPageHeader></TheCoursesPageHeader>
        <TheNavbarForCoursesPage></TheNavbarForCoursesPage>
        <TheCoursesPageMainContainer></TheCoursesPageMainContainer>
    </div>
</template>

<script>

import TheCoursesPageHeader from '@/components/TheCoursesPageHeader';
import TheNavbarForCoursesPage from '@/components/TheNavbarForCoursesPage';
import TheCoursesPageMainContainer from '@/components/TheCoursesPageMainContainer';

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
    layout: 'default',
    components: {
        TheCoursesPageHeader,
        TheNavbarForCoursesPage,
        TheCoursesPageMainContainer
    }
}
</script>