const state = {
  availableCities: []
}

const getters = {
}

const actions = {
  fetchAvailableCities (context) {
    fetch('http://localhost:3001/cities')
      .then(resp => resp.json())
      .then(cities => context.commit('mutateAvailableCities', cities))
  }
}

const mutations = {
  mutateAvailableCities (state, cities) {
    state.availableCities = cities
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
