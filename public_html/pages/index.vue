<template>
  <div>
    <welcomeComponent></welcomeComponent>
    <div class="spacer svg-transition trasition-container">
      <aboutUs></aboutUs>
    </div>
  </div>
</template>

<script>
import welcomeComponent from '@/components/welcome.vue'
import aboutUs from '@/components/about.vue'

export default {
  components: {
    welcomeComponent,
    aboutUs,
  },
  head: {
    title: 'Mango Morning - Home',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A food for thought morning podcast talking about every day life with a little bit of mango',
      },
    ],
  },
}
</script>

<style>
body {
  background-image: url('~@/assets/transition.svg');
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  z-index: -1;
}

.trasition-container {
  background-image: none;
}

@media only screen and (max-width: 1250px) {
  body {
    background-image: none;
  }

  .trasition-container {
    background-image: url('~@/assets/transition.svg');
    aspect-ratio: 960/300;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
  }
}
</style>
