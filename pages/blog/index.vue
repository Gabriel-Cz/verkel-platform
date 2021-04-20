<<template>
    <div>
      <TheBlogHeader></TheBlogHeader>
      <TheBlogContentBody :posts="this.posts" ></TheBlogContentBody>
    </div>
</template>

<script>

import TheBlogHeader from '@/components/BlogComponents/TheBlogHeader';
import TheBlogContentBody from '@/components/BlogComponents/TheBlogContentBody';
import { mapState, mapActions } from 'vuex';

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
  },
  computed: {
    ...mapState('posts', {
      posts: state => state.posts
    })
  },
  methods: {
    ...mapActions('posts', ['getPosts'])
  },
  created() {
    this.getPosts();
  }
}

</script>

<style scoped>

</style>