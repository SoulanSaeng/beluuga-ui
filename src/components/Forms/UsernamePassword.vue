<template>
  <div class="container pt-5">
    <div class="row no-gutters">
      <div class="col-lg-4 col-sm-12 col-md-8">
        <div class="card login-card shadow">
          <div class="card-body">
            <div class="card-title">
              <h1 class="logo">Beluuga</h1>
            </div>
            <div class="card-text">
              <p class="lead text-muted">Please log in</p>
            </div>
            <form class="pt-3">
              <div class="form-row">
                <div class="col" v-show="this.currentState==0">
                  <input
                    type="text"
                    id="username"
                    v-model="username"
                    placeholder="Phone or username"
                    class="form-control"
                    required
                  >
                </div>
                <div class="col" v-show="this.currentState>=1">
                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                    :placeholder="'Password for ' + username"
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="col pt-2">
                  <button class="btn btn-info btn btn-block" v-on:click="next">Next</button>
                </div>
              </div>
              <div class="form-row pt-5">
                <div class="col">
                  <button class="btn btn-light btn btn-block shadow-sm">Google</button>
                </div>
                <div class="col">
                  <button class="btn btn-light btn-block shadow-sm">Facebook</button>
                </div>
              </div>
              <div class="form-row justify-content-center pt-5">
                <div class="col-4">
                  <a class="helper font-weight-bold" href="#">Register</a>
                </div>
                <div class="col-4">
                  <a class="helper font-weight-light" href="#">Can't login?</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

 export default {
     name: "LoginBox"
 }

</script>
<style>
</style>