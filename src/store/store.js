import Vue from 'vue'
import Vuex from 'vuex'
import ride from './ride.module.js'
import uiconfig from './ui.config.js'
import auth from './auth.module.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
      ride,
      uiconfig,
      auth
    }
  }
)
