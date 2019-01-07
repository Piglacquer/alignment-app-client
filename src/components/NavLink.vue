<template>
  <router-link :to="{path: 'cities', query: {city: nav.city}}" class='nav-link'>{{nav.city}}</router-link>
</template>

<script>
export default {
  props: ['nav']
}
</script>

<style scoped>
.nav-link {
  font-size: 2rem;
  color: black;
  height: 20vh;
  width: 20vw;
}
</style>
