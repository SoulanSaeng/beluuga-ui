<template>
  <div>
    <Header />
    <div id="login-box">
      <div class="container pt-5">
        <div class="row justify-content-md-center no-gutters">
          <div class="col-lg-4 col-sm-12 col-md-8">
            <div class="card login-card shadow">
              <div class="card-body">
                <div class="card-text">
                  <p class="lead text font-weight-light">Sign in</p>
                </div>
                <form class="pt-3">
                  <FormAlert :errors="errors" level="warning"></FormAlert>
                  <div class="form-row">
                    <div class="col" v-show="this.currentState==0">
                      <Email @email="username = $event"></Email>
                    </div>
                    <div class="col" v-show="this.currentState>=1">
                      <label for="password">
                        Password for
                        <strong>{{username}}</strong>
                      </label>
                      <input type="password" class="form-control" v-model="password">
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col pt-2">
                      <button type="button" class="btn btn-info btn-block" @click="goNext">Next</button>
                    </div>
                  </div>
                  <div class="form-row pt-5">
                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-light btn btn-block shadow-sm"
                        @click="signIn('google')"
                      >Google</button>
                    </div>
                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-light btn-block shadow-sm"
                        @click="signIn('facebook')"
                      >Facebook</button>
                    </div>
                  </div>
                  <div class="form-row justify-content-center pt-5">
                    <div class="col-4">
                      <router-link class="helper font-weight-bold" to="/register">Register</router-link>
                    </div>
                    <div class="col-4">
                      <router-link class="helper font-weight-light" to="/recovery">Can't login?</router-link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormAlert from "@/components/Forms/FormAlert";
import Header from "@/components/Layouts/Header";
import Email from "@/components/Forms/Email";
import { LOGIN, UPDATE_AUTH } from "@/store/actions.type";
let BAD_LOGIN = "Invalid login, check username and password.";
let EMPTY_USER = "Please provide a username";

export default {
  name: "Login",
  components: {
    FormAlert,
    Email,
    Header
  },
  data() {
    return {
      username: null,
      password: null,
      currentState: 0,
      errors: []
    };
  },
  methods: {
    isValid() {
      return this.username && this.password;
    },
    dispatchHome() {
      var creds = {
        email: this.username,
        password: this.password
      };
      this.$store
        .dispatch(LOGIN, creds)
        .then(() => this.$router.push({ name: "home" }))
        .catch(err => {
          err.status == 401
            ? this.errors.push(BAD_LOGIN)
            : this.errors.push(err);
        });
    },
    goNext() {
      if (!this.username) this.errors.push(EMPTY_USER);
      else if (this.currentState == 0 && this.username) this.currentState++;
      else if (this.currentState == 1 && this.isValid()) this.dispatchHome();
    },
    signIn(provider) {
      this.$auth
        .authenticate(provider)
        .then(response => this.$store.dispatch(UPDATE_AUTH, response.data))
        .then(() => this.$router.push({ name: "home" }))
        .catch(err => {
          err.status == 401
            ? this.errors.push(BAD_LOGIN)
            : this.errors.push(err);
        });
    }
  }
};
</script>
<style>
#login-box {
  background-color: #607d8b;
  height: 100vh;
  width: 100vw;
}
.logo {
  font-size: 2rem;
  color: #607d8b;
}
.helper {
  font-size: 1rem;
  color: #607d8b;
}
.title {
  margin-left: 2vw;
}
</style>

