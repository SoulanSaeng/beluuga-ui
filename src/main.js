import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Vue from 'vue'
import App from './App.vue'
import {
  cfg
} from './common/config'

import {
  store
} from './store/store'

import {
  API
} from './common/api.service'

import {
  CHECK_AUTH
} from './store/actions.type'

import VueRouter from 'vue-router'
import Routes from '@/routes.js'
import Icon from 'vue-awesome/components/Icon'
import VueAuthenticate from 'vue-authenticate'


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.component('v-icon', Icon)
API.init();


Vue.use(VueAuthenticate, {
  baseUrl: cfg.API_URL,
  providers: {
    google: {
      url: '/auth/google/authorized',
      scope: 'email profile',
      clientId: cfg.GOOGLE_CLIENT_ID,
      redirectUri: "http://localhost:8080/"
    }
  }
});

const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
);

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
