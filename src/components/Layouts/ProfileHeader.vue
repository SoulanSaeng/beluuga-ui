<template>
  <nav class="navbar fixed-top app-header shadow-sm">
    <a class="navbar-brand">
      <span class="app-header-logo">Beluuga</span>
    </a>
    <div class="dropdown ml-auto mr-3">
      <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <v-icon class="m-1" name="envelope" scale="1.3" color="#607d8b"></v-icon>
        <span class="badge badge-primary">2</span>
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#"></a>
      </div>
    </div>
    <div class="dropdown mr-2">
      <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <v-icon class="m-1" name="bell" scale="1.3" color="#607d8b"></v-icon>
        <span class="badge badge-danger">5</span>
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#"></a>
      </div>
    </div>
    <div class="dropdown ml-3 pr-3">
      <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <v-icon name="user-circle" scale="2.5" color="#607d8b"></v-icon>
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">
          <v-icon class="m-2" name="user" scale="1"></v-icon>Account
        </a>
        <a class="dropdown-item" href="#">
          <v-icon class="m-2" name="cog" scale="1"></v-icon>Settings
        </a>
        <a class="dropdown-item" href="#" @click="logout">
          <v-icon class="m-2" name="power-off" scale="1"></v-icon>Logout
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { LOGOUT } from "@/store/actions.type";
export default {
  name: "ProfileHeader",
  methods: {
    logout() {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: "login" }));
    }
  }
};
</script>

<style scoped>
.app-header {
  z-index: 1000;
  background: rgba(255, 255, 255, 255);
}
.app-header-logo {
  font-size: 1.5rem;
  margin-left: 2vw;
  color: #607d8b;
}
</style>
