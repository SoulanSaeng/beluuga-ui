<template>
  <div>
    <Header/>
    <div class="container-fluid">
      <div class="row pt-5 justify-content-md-center">
        <div class="col-lg-4 col-sm-12 col-md-8">
          <form class="p-5 m-2 border shadow">
            <div class="form-group">
              <div class="form-row justify-content-md-center">
                <h5>Confirm your account.</h5>
              </div>
              <div class="form-row justify-content-md-center">
                <p class="text text-muted">We sent you an confirmation email.
                     Please follow the link within the email to confirm your account.</p>
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

export default {
  name: "RegistrationSuccessful",
  components : {
    Header,
  }
};
</script>

<style>
</style>


    