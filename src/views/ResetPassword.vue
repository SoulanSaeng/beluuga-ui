<template>
  <div>
    <Header/>
    <div class="container-fluid">
      <div class="row pt-5 justify-content-md-center" v-if="email !== null && otp !== null">
        <div class="col-lg-4 col-sm-12 col-md-8">
          <form class="p-5 m-2 border shadow">
            <div class="form-group">
              <div class="form-row justify-content-md-center">
                <h5>Confirm Password</h5>
              </div>
              <div class="form-row justify-content-md-center">
                <p class="text text-muted">Please choose a new password</p>
              </div>
              <FormAlert :errors="errors" level="danger"></FormAlert>
              <FormAlert :errors="success" level="success"></FormAlert>
              <Password @password="password = $event" label="password"></Password>
              <Password @password="password_confirm = $event" label="confirm password"></Password>
            </div>
            <button class="btn btn-info btn-block shadow-sm" v-on:click="confirm">Reset</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Layouts/Header";
import Password from "@/components/Forms/Password";
import FormAlert from "@/components/Forms/FormAlert";
import { CONFIRM_PWD } from "@/store/actions.type";

let SUCCESS_MSG = "Password succesfully changed!"
let NO_MATCH_MSG = "Passwords do not match."

export default {
  name: "ResetPassword",
  data() {
    return {
      email: this.$route.query.email || null,
      otp: this.$route.query.otp || null,
      password: "",
      password_confirm: "",
      errors: [],
      success: []
    };
  },
  components: {
    Header,
    FormAlert,
    Password,
  },
  methods: {
    confirm() {
      if (this.password === this.password_confirm && this.password.length > 0) {
        this.$store
          .dispatch(CONFIRM_PWD, {
              email: this.email,
              one_time_password: this.otp,
              new_password: this.password
          })
          .then(() => {
              this.success.push(SUCCESS_MSG);
              this.$router.push({ path: "/login" });
          })
          .catch(err => {
            this.errors.push(err.data.message);
          });
      }
      else {
          this.errors.push(NO_MATCH_MSG);
      }
    }
  }
};
</script>

<style>
</style>

