<template>
  <div>
    <Header/>
    <div class="container">
      <SearchBar/>
      <Filters/>
      <Listings :rides="rides"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SearchBar from "@/components/Search/SearchBar.vue";
import Filters from "@/components/Search/Filters.vue";
import Listings from "@/components/Rides/Listings.vue";
import Header from "@/components/Layouts/Header.vue";
import { GET_RIDES } from "@/store/actions.type";

export default {
  name: "RideSearch",
  components: {
    Header,
    SearchBar,
    Filters,
    Listings
  },

  methods: {
    fetchRides() {
      this.$store.dispatch(GET_RIDES);
    }
  },

  mounted() {
    this.fetchRides();
  },

  computed: {
    rides() {
      return this.fetchRides();
    },
    ...mapGetters(["rides"])
  }
};
</script>

<style>
</style>