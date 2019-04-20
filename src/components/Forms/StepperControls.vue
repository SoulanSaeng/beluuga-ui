<template>
    <div class="row stepper-controls">
      <div class="col">
        <button class="btn btn-info m-1" v-on:click="$emit('goBack')">Previous</button>
        <button class="btn btn-info m-1" v-on:click="$emit('goNext')">Next</button>
      </div>
    </div>
</template>

<script>
export default {
  name: "StepperControls"
};
</script>

<style>
</style>
