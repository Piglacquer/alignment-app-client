<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click='addMarker'>Add</button>
      </label>
    </div>
    <gmap-map
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
    >
      <gmap-marker
        :key='index'
        v-for='(m, index) in markers'
        :position='m'
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'GoogleMap',
  computed: mapState({
    center: state => state.map.center,
    markers: state => state.map.markers,
    places: state => state.map.places,
    currentPlace: state => state.map.currentPlace
  }),
  methods: mapActions ('map', [
    'geolocate',
    'setPlace',
    'addMarker'
  ]),
  created () {
    this.geolocate()
  }
}
</script>

<style>
gmap-autocomplete {
  width: 20vw;
}
</style>
