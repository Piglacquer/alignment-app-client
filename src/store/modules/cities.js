const state = {
  availableCities: []
}

const getters = {
}

const actions = {
  fetchAvailableCities (context) {
    fetch('https://alignment-db.herokuapp.com/locations')
      .then(resp => resp.json())
      .then(cities => context.commit('setAvailableCities', cities))
  },
  setCurrentCity (context, city) {
    context.commit('setCurrentCity', city)
  },
  setNewCity (context, city) {
    fetch('https://alignment-db.herokuapp.com/locations', {
      method: 'POST',
      headers: new Headers({ type: 'application/json' }),
      body: JSON.stringify(city)
    })
      .then(newCity => context.commit('addNewCity', newCity))
  }
}

const mutations = {
  setAvailableCities (state, cities) {
    state.availableCities = cities
  },
  setCurrentCity (city) {
    state.currentCity = city
  },
  addNewCity (newCity) {
    state.availableCities = [...state.availableCities, newCity]
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
