<template>
  <div>
    <div id='map' />
  </div>
</template>

<script>
import L from 'leaflet'

export default {
  props: ['markers'],
  methods: {
    initMap () {
      return L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map)
    },
    addMarkers (markers) {
      return markers.map(marker => {
        return L.marker(marker).addTo(this.map)
      })
    }
  },
  mounted () {
    console.log(this.props)
    this.map = L.map('map').setView([36, 116], 4)
    this.initMap()
    // this.addMarkers(this.props.markers)
  },
  updated () {
    console.log(this.props)
  }
}
</script>

<style>
  #map {
    height: 500px;
    width: 700px;
  }

</style>
