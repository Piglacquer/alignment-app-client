<template>
  <div class='map-container'>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click='addMarker'>Add</button>
      </label>
    </div>
    <gmap-map
      :center='{lat: currentCity.city_lat, lng: currentCity.city_lng}'
      :zoom='12'
      style='width:100%;  height: 400px;'
    >
      <gmap-marker
        :key='index'
        v-for='(m, index) in markers'
        :position='{lat: m.lat, lng: m.lng}'
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
    places: state => state.map.places,
    currentPlace: state => state.map.currentPlace
  }),
  methods: mapActions('map', [
    'geolocate',
    'setPlace',
    'addMarker'
  ]),
  props: ['markers', 'currentCity']
}
</script>

<style>
.map-container {
  width: 80vw;
}
.autocomplete-input {
  width: 1000px;
}
</style>
