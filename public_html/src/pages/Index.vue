<template>
  <Layout>
    <podCarousel></podCarousel>
    <topicForm></topicForm>
  </Layout>
</template>

<script>
import podCarousel from '~/components/podcast_carousel.vue'
import topicForm from '~/components/topic_form.vue'
export default {
  metaInfo: {
    title: 'Home'
  },
  components:{
    podCarousel,
    topicForm
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
