<template>
  <section class="section has-text-centered">
    <h2 class='title'>My Recordings</h2><br>
    <audio id='audio' controls autoplay>
      <source id='audioSource' :src='tdata[0].link' :type="tdata[0].type">
      Your browser does not support the audio format.
    </audio>
    <b-table :data="tdata" ref="table" :columns="columns" @click="rowClicked">
    </b-table>
  </section>
</template>

<script>
export default {
  data(){
    return {
      tdata:[],
      columns: [
        {
          field: 'id',
          label: 'Episode',
          numeric: true,
          centered: true
        },
        {
          field:'title',
          label:'Title'
        },
        {
          field: 'date',
          label: 'Published On',
          centered: true
        },
      ]
    }
  },
  created(){
    this.fetchData();
  },
  methods:{
  async fetchData(){
     let vm = this;

      fetch('https://api.rss2json.com/v1/api.json?rss_url=https://anchor.fm/s/18c4d00c/podcast/rss')
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.items.length; i++){
          vm.tdata.push({
            'id':  data.items.length - i,
            'title': data.items[i].title,
            'date': data.items[i].pubDate,
            'link': data.items[i].enclosure.link,
            'type': data.items[i].enclosure.type
          });
        }
      });
    },
    rowClicked: function(e){
      document.getElementById('audioSource').src = e.link;
      document.getElementById('audioSource').type = e.type;
      document.getElementById('audio').load().play();
    }
  }
}
</script>