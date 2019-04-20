import {
  SHOW_MAPS
} from './actions.type'

export const state = {
  showMaps : false
}

export const mutations = {
  [SHOW_MAPS](state, showMaps){
    state.showMaps = showMaps
  }
}

export const getters = {
  showMaps : state => state.showMaps
}

export default {
  state,
  getters,
  mutations
}