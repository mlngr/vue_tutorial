import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedConcerts: [
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Concert in New York',
        date: new Date(),
        location: 'New York',
        description: 'New York, New York!'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Concert in Paris',
        date: new Date(),
        location: 'Paris',
        description: 'It\'s Paris!'
      }
    ],
    user: {
      id: 'ajaldslfalsk12',
      registeredConcerts: ['aadsfhbkhlk1241']
    }
  },
  mutations: {
    createConcert (state, payload) {
      state.loadedConcerts.push(payload)
    }
  },
  actions: {
    createConcert ({commit}, payload) {
      const concert = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'kfdlsfjslakl12'
      }
      // Reach out to firebase and store it
      commit('createConcert', concert)
    }
  },
  getters: {
    loadedConcerts (state) {
      return state.loadedConcerts.sort((concertA, concertB) => {
        return concertA.date > concertB.date
      })
    },
    featuredConcerts (state, getters) {
      return getters.loadedConcerts.slice(0, 5)
    },
    loadedConcert (state) {
      return (concertId) => {
        return state.loadedConcerts.find((concert) => {
          return concert.id === concertId
        })
      }
    }
  }
})
