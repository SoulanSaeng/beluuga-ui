<template>
  <div>
    <div class="stepper-title">
      <h5>What will you drive?</h5>
      <p>Let your passengers know how to identify you.</p>
    </div>
    <form class="pt-4" v-bind:class="{'was-validated' : wasValidated}">
      <div class="form-row">
        <div class="form-group col-3">
          <label for="make">Make</label>
          <input
            type="text"
            id="make"
            v-model="carMake"
            class="form-control"
            placeholder="Honda"
            required
          >
          <div class="invalid-feedback">Please tell us the make of the car.</div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-3">
          <label for="model">Model</label>
          <input
            type="dropdown"
            id="model"
            v-model="carModel"
            class="form-control"
            placeholder="Civic"
            required
          >
          <div class="invalid-feedback">Please provide the car model.</div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-3">
          <label for="year">Year</label>
          <input
            type="text"
            id="year"
            v-model="carYear"
            class="form-control"
            placeholder="1999"
            required
          >
          <div class="invalid-feedback">Please tell us what is the year of the car.</div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-3">
          <label for="licensePlate">License Plate</label>
          <input
            type="text"
            id="licensePlate"
            v-model="licenseNumber"
            class="form-control"
            placeholder="HKV910"
            required
          >
          <div class="invalid-feedback">Please provide your license plate number.</div>
        </div>
      </div>
      <div class="form-row mt-4">
        <div class="stepper-title">
          <h6>Upload a picture of your car.</h6>
          <p>This step is optional.</p>
        </div>
      </div>
      <div class="form-row">
        <div class="col-6">
          <div class="input-group mb-3">
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="driverLicenseFile"
                aria-describedby="driverLicenseFile"
              >
              <label class="custom-file-label" for="driverLicenseFile">Photo of your car</label>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseStep from "@/components/Forms/BaseStep";
export default {
  extends: BaseStep,
  name: "UserVehiculeStep",
  props: {
    notify: Number
  },
  data() {
    return {
      carMake: "",
      carYear: "",
      carModel: "",
      file: ""
    };
  },
  methods: {
    isValid() {
      return (
        this.notEmpty(this.carMake) &&
        this.notEmpty(this.carYear) &&
        this.notEmpty(this.carModel)
      );
    }
  }
};
</script>

<style>
</style>