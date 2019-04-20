<template>
  <div class="container-fluid">
    <Header/>
    <ProgressBar :progress="progress"/>
    <div class="container pt-5">
      <div class="row">
        <div class="col" v-if="this.progress.step === 1">
          <UserAddressStep
            :notify="notify"
            v-on:isValid="updateMoveNext"
          />
        </div>
        <div class="col" v-if="this.progress.step === 2">
          <UserDriverLicenseStep
            :notify="notify"
            v-on:isValid="updateMoveNext"
          />
        </div>
        <div class="col" v-if="this.progress.step === 3">
          <UserVehiculeStep
            :notify="notify"
            v-on:isValid="updateMoveNext"
          />
        </div>
      </div>
      <StepperControls v-on:goBack="goBack" v-on:goNext="goNext"/>
    </div>
  </div>
</template>

<script>

import Header from "@/components/Layouts/Header";
import ProgressBar from "@/components/Layouts/ProgressBar";
import StepperControls from "@/components/Forms/StepperControls";
import UserAddressStep from "@/components/Forms/UserAddressStep";
import UserDriverLicenseStep from "@/components/Forms/UserDriverLicenseStep";
import UserVehiculeStep from "@/components/Forms/UserVehiculeStep";

export default {
  data() {
    return {
      progress: {
        step: 1,
        totalSteps: 4
      },
      notify: 0, 
    };
  },
  components: {
    Header,
    ProgressBar,
    StepperControls,
    UserAddressStep,
    UserDriverLicenseStep,
    UserVehiculeStep
  },
  methods: {
    updateMoveNext(validates) {
      if(validates) this.increment();
    },
    goBack() {
      if (this.progress.step > 1) this.progress.step--;
    },
    increment(){
      if (this.progress.step < this.progress.totalSteps) this.progress.step++;
    },
    goNext() {
      this.notify++;
    },
  }
};
</script>

<style>
</style>


    
