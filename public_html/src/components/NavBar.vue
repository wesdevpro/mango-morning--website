<template>
  <nav role='navigation' class='navbar is-white' aria-label="main navigation">
      <div class='navbar-brand' style="margin-left: 20px;">
          <a class='navbar-item'>
            <h2 class="title" style="font-family: Karla, Monospace; color: rgb(186,85,211);">Mango Morning</h2>
          </a>
          <a v-on:click="isActiveNavbar" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end" style="margin-right: 20px;">
          <a class="navbar-item" style="color: rgb(186,85,211);" href="/">
            Home
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-arrowless" style="color: rgb(186,85,211);">
              My Podcasts
            </a>
            <div class="navbar-dropdown is-right">
              <a class="navbar-item" href="/listen">
                 Listen Here
              </a>
              <a class="navbar-item" href="https://anchor.fm/mangomorning">
                 Listen on Anchor
              </a>
            </div>
          </div>
          <a class="navbar-item" style="color: rgb(186,85,211);" href="/me">
             About Me
          </a>
        </div>
      </div>
  </nav>      
</template>

<script>
export default {
  
  methods: {
    isActiveNavbar: function(){
      var burger = document.querySelector('.burger')
      var navbar = document.querySelector('.navbar-menu')
      navbar.classList.toggle('is-active')
      burger.classList.toggle('is-active')
    }

  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap');
</style>