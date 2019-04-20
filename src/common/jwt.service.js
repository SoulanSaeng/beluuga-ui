const AUTH = "auth";
const USER = "user"

export const setAuth = (auth) => {
    return window.localStorage.setItem(AUTH, JSON.stringify(auth));
}

export const removeAuth = () => {
    return window.localStorage.removeItem(AUTH);
}

export const getAuth = () => {
    var localUser = window.localStorage.getItem(AUTH)
    return JSON.parse(localUser);
}

export const setUser = (user) => {
    return window.localStorage.setItem(USER, JSON.stringify(user));
}

export const removeUser = () => {
    return window.localStorage.removeItem(USER);
}

export const getUser = () => {
    var user = window.localStorage.getItem(USER)
    return JSON.parse(user);
}

export default {
    setAuth,
    removeAuth,
    getAuth,
    setUser,
    getUser,
    removeUser
};