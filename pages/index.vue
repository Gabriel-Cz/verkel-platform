<template>
  <div>
    <TheMainPageHeader2></TheMainPageHeader2>
    <TheCoursesSection></TheCoursesSection>
    <TheTeachersSection></TheTeachersSection>
    <TheToolViewSection></TheToolViewSection>
    <TheEnterpriseSection></TheEnterpriseSection>
  </div>
</template>

<script>
import TheMainPageHeader2 from '@/components/MainPageComponents/TheMainPageHeader2';
import TheCoursesSection from '@/components/MainPageComponents/TheCoursesSection';
import TheTeachersSection from '@/components/MainPageComponents/TheTeachersSection';
import TheToolViewSection from '@/components/MainPageComponents/TheToolViewSection';
import TheEnterpriseSection from '@/components/MainPageComponents/TheEnterpriseSection'
import TheEsloganSection from '@/components/MainPageComponents/TheEsloganSection';

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
    TheMainPageHeader2,
    TheCoursesSection,
    TheTeachersSection,
    TheToolViewSection,
    TheEnterpriseSection,
    TheEsloganSection,
  }
}
</script>

