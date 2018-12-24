<template>
  <div class="home">
    <GoogleMap :markers='markers' />
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue'

export default {
  name: 'home',
  data () {
    return {
      markers: [[12.41, -12.22], [15.15, 15.23]]
    }
  },
  components: {
    GoogleMap
  },
  mounted () {
    console.log(this.markers, 'home')
  }
}
</script>

<style>
</style>
