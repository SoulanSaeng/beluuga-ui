import {
    RideService
} from '@/common/api.service';

import {
    GET_RIDES,
    SET_RIDES,
} from './actions.type.js';

const initialState = {
    rides: [{}]  
  };

export const state = {... initialState};

export const actions = {
    async[GET_RIDES](context){
        const { data } = await RideService.get();
        context.commit(SET_RIDES, data)
        return data;
    }
}

export const mutations = {
    [SET_RIDES](state, rides){
        state.rides = rides;
    }
}

export const getters = {
    rides(state) {
        return state.rides;
    }
}

export default {
    state,
    actions, 
    getters,
    mutations
}