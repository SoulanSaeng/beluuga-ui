<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
<style>
#app {
  background-color: white;
  height: 100vh;
  width: 100vw;
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
