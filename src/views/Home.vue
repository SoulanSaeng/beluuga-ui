<template>
  <div>
    <ProfileHeader/>
    <div class="container driver-dashboard">
      <div class="row">
        <SideBar/>
        <Dashboard/>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/Layouts/SideBar";
import ProfileHeader from "@/components/Layouts/ProfileHeader";
import Dashboard from "@/components/Layouts/Dashboard";
export default {
  name: "Home",
  components: {
    SideBar,
    Dashboard,
    ProfileHeader
  },
  computed: {

  }
};
</script>
<style scoped>
  .driver-dashboard{
    max-width: 100vw;
  }
</style>

