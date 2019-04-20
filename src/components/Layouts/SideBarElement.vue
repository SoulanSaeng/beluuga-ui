<template>
      <a class="nav-link sidebar-element" href="#">
        <v-icon class="icon" :name="iconName" :scale="scale" :color="color"></v-icon>
      {{title}}
      </a>
</template>
<script>
export default {
  name: "SideBarElement",
  components: {
  },
  props: {
      iconName : String, 
      scale: String, 
      color: String,
      link: String,
      title: String,
  }
};
</script>
<style>
.icon {
  vertical-align: text-bottom;
}
.sidebar-element{
  transition:  border-color .3s,background-color .3s,color .3s
}
.sidebar-element:hover {
  background-color:#182023;
  color:#e5f4fc;
}
.nav-link {
  font-weight: 400;
  color:#a7c7ce;
}
.nav-link .icon {
  margin-right: 15px;
}

</style>

