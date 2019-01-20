<template>
  <div class='tire-container'>
    <div class='tire two'/>
    <div class='tire one'/>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    title: String
  }
}
</script>

<style scoped>
.tire-container {
  position: relative;
  width: 20vw;
  height: 240px;
}

.tire {
  position: absolute;
  background-color: black;
  height: 100px;
  width: 60px;
  border-radius: 20px 20px 20px 20px;
  transform: rotate(20deg);
  box-shadow: 0 0 1pt 2pt white;
  z-index: 1;
  left: 60px;
  top: 40px;
}

.one {
  height: 75px;
  width: 50px;
  border-radius: 15px;
  z-index: 0;
  left: 70px;
}

.two {
  left: 100px;
}
</style>
