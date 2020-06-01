<template>
  <b-table :data="tdata" :columns="columns"></b-table>
</template>

<script>
export default {
  data(){
    return {
      tdata:[],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '50',
          numeric: true
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
            'id': i + 1,
            'title': data.items[i].title,
            'date': data.items[i].pubDate
          });
        }
      });
    }
  }
}
</script>