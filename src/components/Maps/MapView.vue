<template>
  <div>
    <div class="map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map"/>
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";
import { mapGetters } from "vuex";

export default {
  name: "MapView",

  props: {
    config: Object,
    apiKey: String
  },

  data() {
    return {
      google: null,
      map: null
    };
  },
  async mounted() {
    const googleMapsApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    });
    this.google = googleMapsApi;
    this.initMap();
  },
  computed: {
    ...mapGetters(["rides"])
  },
  methods: {
    initMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.config);
    }
  }
};
</script>

<style scoped>
.map {
  height: 70vh;
}
</style>