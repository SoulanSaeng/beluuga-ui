<template>
  <div>
    <Header/>
    <div class="container-fluid">
      <div class="row pt-5 justify-content-md-center" v-if="email !== null && conf !== null && serverMessage !== null">
        <div class="col-lg-4 col-sm-12 col-md-8">
          <form class="p-5 m-2 border shadow">
            <div class="form-group">
              <div class="form-row justify-content-md-center">
                <h5>Account Confirmation</h5>
              </div>
              <div class="form-row justify-content-md-center">
                <p class="text text-muted">{{serverMessage}}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Layouts/Header";
import {CONFIRM_USER} from '@/store/actions.type'

export default {
  name: "RegistrationSuccessful",
  components : {
    Header,
  },
  data(){
    return {
      email: this.$route.query.email || null,
      conf: this.$route.query.conf || null,
      serverMessage: null
    }
  },
  beforeMount(){
        this.$store
          .dispatch(CONFIRM_USER, { email: this.email, confirmation_token: this.conf})
          .then(res => {this.serverMessage = res.data.message})
          .catch(err => {this.serverMessage = err.data.message});
  }
};
</script>

<style>
</style>


    