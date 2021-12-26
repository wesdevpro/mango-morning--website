<template>
  <div class="content-container">
    <NavBar></NavBar>
    <nuxt class="custom-container" />
  </div>
</template>

<script>
import NavBar from '@/components/navigationBar.vue'
import '@/assets/css/main.css'

export default {
  components: {
    NavBar,
  },
}
</script>

<style>
.spacer {
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.svg-transition {
  background-image: url('~@/assets/transition.svg');
}

.layer2 {
  background-image: url('~@/assets/crystal-background.svg');
}

.flip {
  transform: rotate(180deg);
}

.custom-container {
  max-width: 125em;
  margin-left: auto;
  margin-right: auto;
}
</style>
