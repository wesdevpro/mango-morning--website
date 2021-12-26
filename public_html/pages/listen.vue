<template>
  <div>
    <player></player>
  </div>
</template>

<script>
import player from '@/components/podcastPlayer.vue'

export default {
  components: {
    player,
  },

  head: {
    title: 'Mango Morning - Listen',
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
