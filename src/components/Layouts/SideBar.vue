<template>
  <div>
    <nav class="nav flex-column col-md-2 d-none d-md-block sidebar">
      <div class="sidebar-sticky">
        <SideBarElement title="Home" scale="1.2" iconName="home" color="#a7c7ce" link="#"/>
        <SideBarElement title="Rides" scale="1.2" iconName="car" color="#a7c7ce" link="#"/>
        <SideBarElement
          title="Billing"
          scale="1.2"
          iconName="credit-card"
          color="#a7c7ce"
          link="#"
        />
        <SideBarElement title="Reviews" scale="1.2" iconName="star" color="#a7c7ce" link="#"/>
        <SideBarElement title="Community" scale="1.2" iconName="users" color="#a7c7ce" link="#"/>
        <SideBarElement
          title="Help"
          scale="1.2"
          iconName="question-circle"
          color="#a7c7ce"
          link="#"
        />
      </div>
    </nav>
  </div>
</template>
<script>
import SideBarElement from "@/components/Layouts/SideBarElement.vue";
export default {
  name: "SideBar",
  components: {
    SideBarElement
  }
};
</script>
<style>
.icon {
  vertical-align: text-bottom;
}
.sidebar-sticky {
  position: sticky;
  top: 0;
  height: calc(100vh - 48px);
}
.sidebar {
  background-color: #607d8b;
  position: fixed;
  left: 0;
  margin-top: 60px;
  padding: 56px 0 0;
  height: 100vh;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  z-index: 900;
}
</style>

