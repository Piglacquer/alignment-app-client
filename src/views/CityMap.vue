<template>
  <div>
    <GoogleMap :markers='markers' :currentCity='currentCity' />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import GoogleMap from '@/components/GoogleMap.vue'

export default {
  components: {
    GoogleMap
  },
  computed: mapState({
    markers: state => state.map.markers,
    currentCity: state => state.map.currentCity
  }),
  methods: mapActions('map', [
    'setMarkersAndCity'
  ]),
  watch: {
    '$route.params.id' (newId, oldId) {
      this.setMarkersAndCity(newId)
    }
  },
  mounted () {
    this.setMarkersAndCity(this.$route.params.pathMatch)
  }
}
</script>
