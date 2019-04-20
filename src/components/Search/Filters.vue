<template>
  <div class="row mt-5">
    <div class="col">
      <div class="col-sm mb-4" id="numOfPassengers">
        <button type="button" class="btn btn-secondary mr-2">People 
        </button>
        <button type="button" class="btn btn-secondary mr-2">Date 
        </button>
      </div>
    </div>
    <div class="col-md-push-6" v-if="shouldShowRevealSwitch">
      <RevealMapWidget/>
    </div>
  </div>
</template>

<script>

import RevealMapWidget from "./RevealMapWidget.vue";
import { mapGetters } from "vuex";

export default {
  name: "Filters",
  components: {
    RevealMapWidget
  },
  computed : {
    shouldShowRevealSwitch(){
      return this.rides.length > 0
    },
    ...mapGetters(["rides"])
  }
};
</script>

<style scoped>
</style>
