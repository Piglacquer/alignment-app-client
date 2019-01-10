const state = {
  availableCities: [],
  currentCity: null
}

const getters = {
}

const actions = {
  fetchAvailableCities (context) {
    fetch('http://localhost:3001/locations')
      .then(resp => resp.json())
      .then(cities => context.commit('mutateAvailableCities', cities))
  },
  setCurrentCity (context, city) {
    context.commit('setCurrentCity', city)
  }
}

const mutations = {
  mutateAvailableCities (state, cities) {
    state.availableCities = cities
  },
  setCurrentCity (city) {
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
