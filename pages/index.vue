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

