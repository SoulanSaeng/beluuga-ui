<template>
  <div>
    <Header/>
    <div class="container-fluid">
      <div class="row pt-5 justify-content-md-center">
        <div class="col-lg-4 col-sm-12 col-md-8">
          <form class="p-5 m-2 border shadow">
            <div class="form-group">
              <div class="form-row justify-content-md-center">
                <h5>Reset password.</h5>
              </div>
              <div class="form-row justify-content-md-center">
                <p class="text text-muted">We'll mail you a link to reset your password.</p>
              </div>
              <FormAlert :errors="errors" level="warning"></FormAlert>
              <FormAlert :errors="success" level="success"></FormAlert>
              <Email @email="email = $event"></Email>
            </div>
            <button class="btn btn-info btn-block shadow-sm" v-on:click="reset">Reset</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Email from "@/components/Forms/Email";
import Header from "@/components/Layouts/Header";
import FormAlert from "@/components/Forms/FormAlert";
import { RESET_PWD } from "@/store/actions.type";

export default {
  name: "Recovery",
  data() {
    return {
      email: "",
      errors: [],
      success: []
    };
  },
  components: {
    Header,
    FormAlert,
    Email
  },
  methods: {
    reset() {
      if (this.email != null && this.email.length > 0) {
        this.$store
          .dispatch(RESET_PWD, { email: this.email })
          .then(res => {
            this.success.push(res.data.message);
          })
          .catch(err => {
            this.errors.push(err.data.message);
          });
      }
    }
  }
};
</script>

<style>
</style>


    