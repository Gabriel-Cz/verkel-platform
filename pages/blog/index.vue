<<template>
    <div>
      <TheBlogHeader></TheBlogHeader>
      <TheBlogContentBody></TheBlogContentBody>
    </div>
</template>

<script>

import TheBlogHeader from '@/components/BlogComponents/TheBlogHeader';
import TheBlogContentBody from '@/components/BlogComponents/TheBlogContentBody';

export default {
    head () {
    return {
      title: "Plataforma Verkel | Blog",
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
      TheBlogHeader,
      TheBlogContentBody,
  }
}

</script>

<style scoped>

</style>