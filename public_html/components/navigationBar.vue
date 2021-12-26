<template>
  <b-navbar>
    <template #brand>
      <h1 class="title is-1">Mango Morning</h1>
    </template>
    <template #start>
      <b-navbar-item
        v-for="locations in paths"
        :key="locations.link"
        :href="locations.link"
      >
        {{ locations.name }}
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      paths: [
        {
          name: 'Home',
          link: '/',
        },
        {
          name: 'Listen',
          link: '/listen',
        },
      ],
    }
  },
}
</script>
