<template>
  <b-carousel :indicator-inside="false" pause-hover="true">
    <b-carousel-item v-for="(data, i) in carouselData" :key="i">
      <section :class="`hero is-medium is-green is-bold`">
        <div class="hero-body has-text-centered" style="max-height: 300px;">
          <h1 class="title">{{data.title}}</h1>
          <p>{{data.description}}</p>
          <b-button type="is-primary" style="margin-top:10px;">Listen Now</b-button>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data(){
    return{
      carouselData:[]
    }
  },
  created(){
    this.fetchData()
  },
  methods: {
    async fetchData(){
      let vm = this;

      fetch('https://api.rss2json.com/v1/api.json?rss_url=https://anchor.fm/s/18c4d00c/podcast/rss')
      .then(response => response.json())
      .then(data => {
        for(let i = 0; i < 4; i++){
          vm.carouselData.push({
            'title': data.items[i].title,
            'description': data.items[i].description,
            'link': data.items[i].link
          });
        }
        console.log(vm.carouselData)
      });
    }
  }
}
</script>