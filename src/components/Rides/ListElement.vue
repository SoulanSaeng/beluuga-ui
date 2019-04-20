<template>
  <div
    class="card shadow "
    @mouseenter="$emit('hovered', details)"
    @mouseleave="$emit('unhovered', details)"
  >
    <div class="card-body ride">
      <div class="row no-gutters align-items-center">
        <div class="col-8">
          <div class="text-xs font-weight-bold text-secondary mb-1">{{ride.name}}</div>
          <div class="mb-0 text-gray">{{ride.rating}} stars</div>
        </div>
        <div class="col-3 ml-2">
          <v-icon name="user" scale="2" color="#dddfeb"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ride:hover {
  box-shadow: 1px 1px 4px;
}
</style>

<script>
export default {
  data() {
    return {
      details: null
    };
  },
  mounted() {
    this.details = this.ride;
  },

  name: "ListElement",
  props: {
    ride: Object
  }
};
</script>
