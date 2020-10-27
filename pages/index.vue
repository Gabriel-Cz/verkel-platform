<template>
  <div>
    <FirstContent></FirstContent>
    <TheCoursesSection></TheCoursesSection>
    <TheTeachersSection></TheTeachersSection>
    <TheToolViewSection></TheToolViewSection>
    <TheEnterpriseSection></TheEnterpriseSection>
    <TheEsloganSection></TheEsloganSection>
  </div>
</template>

<script>
import FirstContent from '@/components/FirstContent';
import TheCoursesSection from '@/components/TheCoursesSection';
import TheTeachersSection from '@/components/TheTeachersSection';
import TheToolViewSection from '@/components/TheToolViewSection';
import TheEnterpriseSection from '@/components/TheEnterpriseSection'
import TheEsloganSection from '@/components/TheEsloganSection';

export default {
  head () {
    return {
      title: "Plataforma Verkel | Principal",
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
    FirstContent,
    TheCoursesSection,
    TheTeachersSection,
    TheToolViewSection,
    TheEnterpriseSection,
    TheEsloganSection,
  }
}
</script>

