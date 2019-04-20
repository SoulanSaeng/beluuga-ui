<template>
  <div class="row">
    <div class="col" v-if="this.progress.step === 1">
      <UserAddressStep
        :progress="progress"
        :shouldValidate="shouldValidate"
        v-on:isValid="$emit('isValid', e)"
      />
    </div>
    <div class="col" v-if="this.progress.step === 2">
      <UserDriverLicenseStep
        :progress="progress"
        :shouldValidate="shouldValidate"
        v-on:isValid="$emit('isValid', e)"
      />
    </div>
    <div class="col" v-if="this.progress.step === 3">
      <UserVehiculeStep
        :progress="progress"
        :shouldValidate="shouldValidate"
        v-on:isValid="$emit('isValid', e)"
      />
    </div>
  </div>
</template>

<script>
import UserAddressStep from "@/components/Forms/UserAddressStep";
import UserDriverLicenseStep from "@/components/Forms/UserDriverLicenseStep";
import UserVehiculeStep from "@/components/Forms/UserVehiculeStep";

export default {
  name: "DriverStepperForm",
  props: {
    progress: Object,
    shouldValidate: Boolean
  },
  data() {
    return {
      canMove: false
    };
  },
  methods: {},
  components: {
    UserAddressStep,
    UserDriverLicenseStep,
    UserVehiculeStep
  }
};
</script>

<style>
</style>