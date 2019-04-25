import {
    AuthService
} from "@/common/api.service.js";
import JwtService from "@/common/jwt.service.js";
import {
    LOGIN,
    LOGOUT,
    REGISTER,
    CHECK_AUTH,
    CONFIRM_PWD,
    RESET_PWD,
    UPDATE_AUTH,
    CONFIRM_USER
} from './actions.type'

import {
    SET_AUTH,
    PURGE_AUTH,
    SET_ERROR,
    SET_USER
} from './mutations.type'


const state = {
    errors: null,
    user: {},
    isAuthenticated: !!JwtService.getAuth()
};

const getters = {
    getUser: state => {
        return state.user;
    },
    isAuthenticated: state => {
        return state.isAuthenticated;
    }
};

const actions = {
    async [CONFIRM_USER](context, payload){
        try {
            let response = await AuthService.confirmUser(payload);
            return response;
        } catch (err) {
            throw err.response;
        }
    },
    async [UPDATE_AUTH](context, token){
        try {
            context.commit(SET_AUTH, token);
            let user = await AuthService.getUser();
            context.commit(SET_USER, user.data);
            return user;
        } catch (err) {
            throw err;
        }
    },
    async [LOGIN](context, creds) {
        try {
                let token = await AuthService.login(creds);
                context.commit(SET_AUTH, token.data);
                await AuthService.setAuthAsync();
                let user = await AuthService.getUser();
                context.commit(SET_USER, user.data);
        } catch (err) {
            context.commit(SET_ERROR, err);
            throw err.response;
        }
    },
    [LOGOUT](context) {
        context.commit(PURGE_AUTH);
    },
    [RESET_PWD](context, payload) {
        return AuthService.resetPwd(payload)
            .then(res => {
                return res;
            })
            .catch(err => {
                throw err.response;
            })
    },
    [CONFIRM_PWD](context, payload) {
        return AuthService.confirmPwd(payload)
            .then(res => {
                return res;
            })
            .catch(err => {
                throw err.response;
            })
    },
    async [REGISTER](context, user) {
        try {
            let res = await AuthService.register(user);
            return res;
        } catch(err) {
            context.commit(SET_ERROR, err.reponse);
            throw err.response;
        }
    },
    async [CHECK_AUTH](context) {
        if (JwtService.getAuth() !== null) {
            AuthService.setAuth();
            try {
               let user = await AuthService.getUser()
               context.commit(SET_USER, user.data);
            } catch (err) {
                context.commit(SET_ERROR, err)
                context.commit(PURGE_AUTH);
            }
        } else {
            context.commit(PURGE_AUTH);
        }
    },
};

const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error;

    },
    [SET_USER](state, user) {
        try {
            state.user = user;
            JwtService.setUser(user);
        } catch (err) {
            throw err;
        }
    },
    [SET_AUTH](state, auth) {
        try {
            state.isAuthenticated = true;
            state.errors = {};
            JwtService.setAuth(auth);
        } catch (err) {
            throw err;
        }
    },
    [PURGE_AUTH](state) {
        state.isAuthenticated = false;
        state.user = {};
        state.errors = {};
        JwtService.removeAuth();
        JwtService.removeUser();
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};