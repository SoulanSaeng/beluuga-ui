<template>
    <div class="col-md-auto" id="fromDestination">
      <div class="input-group mb-7">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <v-icon name="map-pin"/>
          </span>
        </div>
        <input type="text" class="form-control" placeholder="destination"
         aria-label="destination" aria-describedby="basic-addon1">
      </div>
    </div>
</template>

<script>
  export default {
    name: 'DestinationTextInput',
  }
</script>

<style scoped>
