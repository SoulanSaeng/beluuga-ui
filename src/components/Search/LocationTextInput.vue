<template>
  <div class="row mt-4 justify-content-center">
    <div class="col search shadow">
        <form class="search-bar">
          <div class="form-row">
            <div class="col-4">
              <div class="inner-addon">
                <v-icon class="icon-placeholder" name="location-arrow" scale="1" color="grey"/>
                <input type="text" class="form-control" placeholder="Eg : Montreal" id="location">
              </div>
            </div>
            <a href="#" class="btn btn switch-btn">
              <v-icon class="switch-icon" name="exchange-alt" scale="1.2" color="grey"/>
            </a>
            <div class="col-4">
              <div class="inner-addon">
                <v-icon class="icon-placeholder" name="map-marker-alt" scale="1" color="grey"/>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Try : Toronto"
                  id="destination"
                >
              </div>
            </div>
            <div class="col-3">
              <a href="#" class="btn btn-primary search-btn">
                <v-icon class="search-icon" name="search" scale="1" color="white"/>Search
              </a>
            </div>
          </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationTextInput"
};
</script>

<style scoped>
.icon-placeholder {
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
}

.search-btn {
  border-radius: 3rem;
}

.search-icon {
  margin-bottom: 4px;
  margin-right: 5px;
}

.search {
  height: 80px;
  padding: 2%;
  border-radius: 15px;
}


#location {
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
  padding-left: 40px;
}
#destination {
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 1rem;
  padding-left: 40px;
}

.switch-btn {
  width: 6%;
  padding-top: 4px;
  border-radius: 5rem;
}
</style>
