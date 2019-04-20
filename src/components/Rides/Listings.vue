<template>
  <div class="row" v-if="showMaps">
    <div class="col-6">
      <div v-for="ride in rides" v-bind:key="ride.id" class="col mb-2">
        <ListElement class="ride" v-bind:ride="ride" v-on:hovered="hlMarker"/>
      </div>
    </div>
    <div class="col-6">
      <MapView :apiKey="getMapCreds" :config="getMapCfg">
        <template slot-scope="{ google, map }">
          <MapMarkers
            v-for="marker in markers"
            :key="marker.id"
            :marker="marker"
            :google="google"
            :map="map"
          />
        </template>
      </MapView>
    </div>
  </div>

  <div class="row" v-else>
    <div v-for="ride in rides" v-bind:key="ride.id" class="col-3 mb-2">
      <ListElement class="ride" v-bind:ride="ride" v-on:hovered="hlMarker"/>
    </div>
  </div>
</template>

<script>
import ListElement from "./ListElement.vue";
import MapView from "../Maps/MapView.vue";
import MapMarkers from "../Maps/MapMarkers";

import { SHOW_MAPS } from "@/store/actions.type.js";
import {cfg} from '@/common/config'
import { mapSettings } from "@/common/map.config.js";
import { mapGetters } from "vuex";

export default {
  components: {
    ListElement,
    MapView,
    MapMarkers,
  },
  name: "Listing",
  props: {
    rides: Array,
    showMap: Boolean
  },
  methods: {
    getApiKey() {
      return cfg.GOOGLE_API_KEY;
    },
    getMarkers(){
      return this.rides.map(r => {
        return {
          id : r.id,
          title: r.name,
          position : r.destination
        }
      })
    },
    hlMarker(){
      
    }
  },
  computed: {
    getMapCfg() {
      return {
        ...mapSettings,
        center: this.rides[0].destination
      };
    },
    getMapCreds() {
      return this.getApiKey();
    },
    markers(){
      return this.getMarkers();
    },
    ...mapGetters([SHOW_MAPS])
  }
};
</script>
<style scoped>
</style>