<template>
  <div>
    <div class="stepper-title">
      <h5>Tell us more about you..</h5>
      <p>We need to know where you are to match you with the best users.</p>
    </div>
    <form class="pt-5" v-bind:class="{'was-validated' : wasValidated}">
      <div class="form-row">
        <div class="form-group col-4">
          <label for="address">Street</label>
          <input
            type="text"
            id="address"
            v-model="userAddress"
            class="form-control"
            placeholder="Main St"
            required
          >
          <div class="invalid-feedback">Please provide a street name.</div>
        </div>
        <div class="form-group col-4">
          <label for="number">Number</label>
          <input
            type="text"
            id="number"
            v-model="userHouseNumber"
            class="form-control"
            placeholder="1234"
            required
          >
          <div class="invalid-feedback">Please provide a house number.</div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-4">
          <label for="country">Country</label>
          <CountrySelect id="country" v-on:countrySelected="updateCountry"/>
        </div>
        <div class="form-group col-4">
          <label for="province">Province</label>
          <input
            type="text"
            id="province"
            v-model="userProvince"
            class="form-control"
            placeholder="Ontario"
            required
          >
          <div class="invalid-feedback">Please provide your province.</div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-4">
          <label for="province">Postal Code</label>
          <input
            type="text"
            id="postalcode"
            v-model="userPostalCode"
            class="form-control"
            placeholder="H2T1B4"
            required
          >
          <div class="invalid-feedback">Please provide a postal code.</div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import CountrySelect from '@/components/Forms/CountrySelect';
import BaseStep from '@/components/Forms/BaseStep'

export default {
  extends: BaseStep,
  name: "UserAddressStep",
  components: {
    CountrySelect
  },
  methods: {
    isValid() {
      return (
        this.notEmpty(this.userAddress) &&
        this.notEmpty(this.userPostalCode) &&
        this.notEmpty(this.userHouseNumber) &&
        this.notEmpty(this.userCountry) &&
        this.notEmpty(this.userProvince)
      );
    },
    updateCountry(value) {
      this.userCountry = value;
    },
  },
  data() {
    return {
      userAddress: "",
      userPostalCode: "",
      userHouseNumber: "",
      userCountry: "",
      userProvince: "",
    };
  }
};
</script>

<style>
</style>