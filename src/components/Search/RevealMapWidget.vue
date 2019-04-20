<template>
    <div class="custom-control custom-switch">
      <input type="checkbox" v-on:change="toggleMap" class="custom-control-input" id="mapswitch">

      <label class="custom-control-label" for="mapswitch">Show Map</label>
    </div>
</template>

<script>
  export default {
    name: 'RevealMapWidget',
    props: {
      showMap: Boolean
    },
      methods: {
        toggleMap: function(e) {
          this.$store.commit('showMaps', e.target.checked)
        }
      }
  }
</script>

<style scoped>


</style>
