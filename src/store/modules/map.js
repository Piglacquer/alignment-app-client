const state = {
  center: { lat: 45.508, lng: -73.587 },
  markers: [],
  places: [],
  currentPlace: null
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
      context.commit('addMarker', marker)
    }
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
