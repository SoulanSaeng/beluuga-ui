<template>
  <div>
    <Header/>
    <div class="container-fluid">
      <div class="row pt-5 justify-content-md-center">
        <div class="col-lg-4 col-sm-12 col-md-8">
          <form class="p-5 m-2 border shadow" novalidate>
            <div class="form-group">
              <div class="form-row justify-content-md-center">
                <h5>Register today.</h5>
              </div>
              <div class="form-row justify-content-md-center">
                <p class="text text-muted">Create an account with us and start exploring.</p>
              </div>
              <FormAlert :errors="errors" level="warning"></FormAlert>
              <div class="form-group">
                 <Email @email="email = $event"></Email>
              </div>
              <div class="form-group">
                <label for="f_name">First Name</label>
                <input
                  type="text"
                  id="f_name"
                  placeholder
                  required
                  class="form-control"
                  v-model="f_name"
                  v-bind:class="isValidFName"
                >
                <div class="invalid-feedback">Please enter your first name.</div>
              </div>

              <div class="form-group">
                <label for="f_name">Last Name</label>
                <input
                  type="text"
                  id="l_name"
                  required
                  class="form-control"
                  v-model="l_name"
                  v-bind:class="isValidLName"
                >
                <div class="invalid-feedback">Please enter your last name.</div>
              </div>

              <div class="form-group">
                <Password @password="password = $event" label="password"></Password>
              </div>
            </div>
            <button type="button" class="btn btn-info btn-block shadow-sm" v-on:click="register">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Layouts/Header";
import { REGISTER, LOGIN } from "@/store/actions.type";
import FormAlert from "@/components/Forms/FormAlert";
import Password from "@/components/Forms/Password";
import Email from "@/components/Forms/Email";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      f_name: "",
      l_name: "",
      password: "",
      errors: []
    };
  },
  components: {
    Header,
    FormAlert,
    Password,
    Email
  },
  methods: {
    validates() {
      return (
        this.email &&
        this.isValidFName &&
        this.isValidLName &&
        this.isValidPassword
      );
    },
    isOnlyBlank(arg) {
      return !arg || /^\s*$/.test(arg);
    },
    register() {
      if (this.validates()) {
        var registration = {
          email: this.email,
          password: this.password,
          f_name: this.f_name,
          l_name: this.l_name
        };
        this.$store
          .dispatch(REGISTER, registration)
          .then(() => {
            return this.$store.dispatch(LOGIN, {
              email: this.email,
              password: this.password
            });
          })
          .then(() => {
            this.$router.push({ name: "home" });
          })
          .catch(err => this.errors.push(err.data.message));
      }
    }
  },
  computed: {
    isValidFName() {
      return {
        "is-valid": this.f_name.length > 0 && !this.isOnlyBlank(this.f_name),
        "is-invalid": this.f_name.length > 0 && this.f_name == " "
      };
    },
    isValidLName() {
      return {
        "is-valid": this.l_name.length > 0 && !this.isOnlyBlank(this.l_name)
      };
    },
    isValidPassword() {
      return {
        "is-valid":
          this.password.length >= 8 && !this.isOnlyBlank(this.password),
        "is-invalid": this.password !== "" && this.password.length < 8
      };
    }
  }
};
</script>

<style>
</style>


    