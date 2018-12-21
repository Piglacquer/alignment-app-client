<template>
  <div id='map'>

  </div>
</template>

<script>
import L from 'leaflet'

export default {
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      zoom: 3,
      center: [47.413220, -1.219482],
      bounds: 3
    }
  },
  components: {
  },
  methods: {
    initMap () {
      var map = L.map('map').setView([36, 116], 4)
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style>
  #map {
    display: flex;
    flex-flow: column nowrap;
    height: 500px;
    width: 700px;
  }

</style>
