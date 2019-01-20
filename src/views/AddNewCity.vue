<template>
  <div id='new-city-page'>
    <h1>Add New City</h1>
    <gmap-autocomplete id='new-city-input'></gmap-autocomplete>
  </div>
</template>

<script>
export default {
  name: 'AddNewCity'
}
</script>

<style>
#new-city-page {
  display: flex;
  flex-flow: column nowrap;
  width: 80vw;
  justify-content: center;
  align-items: center;
}

#new-city-input {
  width: 60vw;
  height: 10vh;
  font-size: 2rem;
}
</style>
