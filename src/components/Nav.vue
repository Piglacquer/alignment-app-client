<template>
  <div id='nav'>
    <Logo />
    <NavLink v-for='(city, i) in cities' :city='city' :key='city.id + i'/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import NavLink from '@/components/NavLink.vue'
import Logo from '@/components/Logo.vue'

export default {
  name: 'Nav',
  computed: mapState({
    cities: state => state.cities.availableCities
  }),
  methods: mapActions('cities', [
    'fetchAvailableCities'
  ]),
  components: {
    NavLink,
    Logo
  },
  mounted () {
    this.fetchAvailableCities()
  }
}
</script>

<style scoped>
#nav {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 15vw;
  height: 100vh;
  background-color: grey;
}
</style>
