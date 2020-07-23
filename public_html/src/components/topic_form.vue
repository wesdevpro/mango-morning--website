<template>
  <section class="section">
    <h2 class="title">Submit your feedback or suggestions here</h2>
    <b-field label="Name">
      <b-input v-model="formName"></b-input>
    </b-field>

    <b-field label="Email">
      <b-input type="email"
        placeholder="youremail@example.com"
        minlength="5"
        maxlength="30"
        v-model="formEmail">
      </b-input>
    </b-field>

    <b-field label="Subject">
      <b-input
        maxlength="30" v-model="formSubject">
      </b-input>
    </b-field>

    <b-field label="Body">
      <b-input minlength="20" maxlength="200" type="textarea" v-model="formBody"></b-input>
    </b-field>

    <b-button v-on:click="submitForm" type="is-primary" size="is-medium">Submit</b-button>
  </section>
</template>

<script>
export default {
  data(){
    return{
      formName:'',
      formEmail:'',
      formSubject:'', 
      formBody:''
    }
  },
  methods: {
    submitForm(){
      //console.log(collectedJson);
      fetch("https://mango-email.wesleyfunctions.workers.dev", {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body : JSON.stringify({ 'name': this.formName, 'subject': this.formSubject, 'email': this.formEmail, 'body': this.formBody }),
      }).catch(error => console.log(error))
    } 
  },
}
</script>