<template>
  <Layout>
    <podCarousel></podCarousel>
    <section class='section'>
      <h2 class="title has-text-primary">About our podcasts</h2>
      <p>Join my famly, my friends and I as we discuss various topics!</p><br>
      <p>I post podcast almost every week</p>
    </section>
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
