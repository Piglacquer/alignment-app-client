const state = {
  center: { lat: 45.508, lng: -73.587 },
  markers: [],
  places: [],
  currentPlace: null,
  currentCity: null
}

const getters = {
}

const actions = {
  geolocate (context) {
    navigator.geolocation.getCurrentPosition(position => {
      context.commit('geolocate', position)
    })
  },
  setPlace (context, place) {
    context.commit('setPlace', place)
  },
  addMarker (context) {
    if (state.currentPlace) {
      const marker = {
        lat: state.currentPlace.geometry.location.lat(),
        lng: state.currentPlace.geometry.location.lng()
      }
      const newPlace = {
        lat: state.currentPlace.geometry.location.lat(),
        lng: state.currentPlace.geometry.location.lng(),
        address: state.currentPlace.formatted_address,
        name: state.currentPlace.name,
        city_id: state.currentCity.id
      }
      fetch('http://localhost:3001/markers/', {
        method: 'POST',
        headers: new Headers({
          'content-type': 'application/json'
        }),
        body: JSON.stringify(newPlace)
      })
        .then(() => context.commit('addMarker', marker))
    }
  },
  setMarkersAndCity (context, id) {
    fetch('http://localhost:3001/markers/' + id)
      .then(response => response.json())
      .then(data => {
        console.log(data.city)
        context.commit('setMarkers', data.markers)
        context.commit('setCurrentCity', data.city)
      })
  }
}

const mutations = {
  geolocate (state, position) {
    state.center = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
  },
  setPlace (state, place) {
    state.currentPlace = place
  },
  addMarker (state, marker) {
    state.markers = [ ...state.markers, marker ]
    state.places = [ ...state.places, state.currentPlace ]
    state.center = marker
    state.currentPlace = null
  },
  setMarkers (state, markers) {
    state.markers = markers
  },
  setCurrentCity (state, city) {
    state.currentCity = city
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
