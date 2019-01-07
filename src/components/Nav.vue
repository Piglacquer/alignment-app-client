<template>
  <div id='nav'>
    <NavLink v-for='(nav, i) in navs' :nav='nav' :key='nav.id + i'/>
  </div>
</template>

<script>
import NavLink from '@/components/NavLink.vue'

export default {
  data () {
    return {
      navs: [{
        id: 1,
        city: 'Denver'
      }]
    }
  },
  components: {
    NavLink
  }
}
</script>

<style>
#nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
</style>
