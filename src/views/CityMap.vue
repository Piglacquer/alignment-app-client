<template>
  <div>
    <GoogleMap :markers='markers'/>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue'

export default {
  components: {
    GoogleMap
  }
}
</script>
