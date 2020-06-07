<template>
  <section class="section">
    <h2 class="title">Sumbit your topic ideas here!</h2>
    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>

    <b-field label="Email"
      message="Please insert a valid email so we can email you back">
      <b-input type="email"
        value="YourEmail@"
        maxlength="30">
      </b-input>
    </b-field>

    <b-field label="Your Topic Idea" message="">
      <b-input maxlength="200" type="textarea"></b-input>
    </b-field>

    <b-button type="is-primary" size="is-medium">Submit!</b-button>
  </section>
</template>

<script>
export default {

}
</script>