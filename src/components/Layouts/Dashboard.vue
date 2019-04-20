<template>
  <div class="col-md-9 ml-sm-auto col-lg-10 px-4 dashview">
      <h4 class="display-4">Welcome {{getUser.f_name}}</h4>
      <p class="text text-muted">Enroll as a driver and start making money.</p>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    }
  }
};
</script>

<style>
.dashview {
  background-color: #e5f4fc;
  height: 95vh;
  margin-top: 60px;
  position: relative;
  z-index: 1;
}
</style>
