<template>
  <router-link :to="'/cities/'+ city.name" replace class='nav-link'>{{city.name}}</router-link>
</template>

<script>
export default {
  props: ['city']
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
