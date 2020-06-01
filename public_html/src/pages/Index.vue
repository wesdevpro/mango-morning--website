<template>
  <Layout>
    <podList></podList>
  </Layout>
</template>

<script>
import podList from '~/components/podcast_list.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components:{
    podList
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
