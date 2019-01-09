<template>
  <div id='nav'>
    <NavLink v-for='(city, i) in cities' :city='city' :key='city.id + i'/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import NavLink from '@/components/NavLink.vue'

export default {
  computed: mapState({
    cities: state => state.cities.availableCities
  }),
  methods: mapActions('cities', [
    'fetchAvailableCities'
  ]),
  components: {
    NavLink
  },
  mounted () {
    this.fetchAvailableCities()
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
