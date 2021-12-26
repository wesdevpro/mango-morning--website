<template>
  <div class="section has-text-centered audio-container">
    <h2 class="title">Our Recordings</h2>
    <br />
    <audio id="audio" controls autoplay style="margin-bottom: 20px">
      <source id="audioSource" src="" type="" />
      Your browser does not support the audio format.
    </audio>
    <b-table
      ref="table"
      :data="tdata"
      :columns="columns"
      @click="rowClicked"
    ></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tdata: [],
      columns: [
        {
          field: 'id',
          label: 'Episode',
          numeric: true,
          centered: true,
        },
        {
          field: 'title',
          label: 'Title',
        },
        {
          field: 'date',
          label: 'Published On',
          centered: true,
        },
      ],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const vm = await this
      fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fanchor.fm%2Fs%2F18c4d00c%2Fpodcast%2Frss'
      )
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i < data.items.length; i++) {
            vm.tdata.push({
              id: data.items.length - i,
              title: data.items[i].title,
              date: data.items[i].pubDate,
              link: data.items[i].enclosure.link,
              type: data.items[i].enclosure.type,
            })
          }
        })
    },
    rowClicked(e) {
      document.getElementById('audioSource').src = e.link
      document.getElementById('audioSource').type = e.type
      document.getElementById('audio').load()
      document.getElementById('audio').play()
    },
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
}

@media only screen and (max-width: 1250px) {
  body {
    background-image: none;
  }

  .audio-container {
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
