<template>
  <div>
    <div class="stepper-title">
      <h5>Can you drive?</h5>
      <p>We want to make sure you tick all of the boxes.</p>
      <div class="row pt-5">
        <div class="col-6">
          <ul class="list-group">
            <li class="list-group-item">18 years and over.</li>
            <li class="list-group-item">A valid government issued drivers license.</li>
            <li class="list-group-item">2+ years of driving experience.</li>
          </ul>
        </div>
      </div>
    </div>
    <form class="pt-5">
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
              <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
              <label class="custom-file-label" for="driverLicenseFile">Drivers license</label>
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
  name: "UserDriverLicenseStep",
  methods: {
    isValid() {
      return true;
    },
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
