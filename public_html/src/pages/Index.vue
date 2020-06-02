<template>
  <Layout>
    <podCarousel></podCarousel>
  </Layout>
</template>

<script>
import podCarousel from '~/components/podcast_carousel.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components:{
    podCarousel
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
