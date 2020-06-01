<template>
  <section class="section box">
    <b-table class="is-mobile" :data="tdata" ref="table" :columns="columns" @click="rowClicked">
      <template slot="detail">
        this is a teast
      </template>
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
            'link': data.items[i].enclosure.link
          });
        }
      });
    },
    rowClicked: function(e){
      window.location.href = '';
    }
  }
}
</script>