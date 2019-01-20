<template>
  <router-link :to="'/cities/'+ city.id" replace class='nav-link'>{{city.name}}</router-link>
</template>

<script>
export default {
  props: {
    city: Object
  }
}
</script>

<style scoped>
.nav-link {
  font-size: 1em;
  color: black;
  max-width: 200px;
  height: 50px;
}
</style>
