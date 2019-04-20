<template>
  <div class="form-group">
    <label for="email">Email</label>
    <input
      id="email"
      v-model="email"
      class="form-control"
      :input="notifyParent"
      :class="isValidEmail"
    >
    <div class="invalid-feedback">Please enter a valid email.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        email: ""
    };
  },
  methods: {
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  },
  computed: {
    notifyParent(){
        if (this.validateEmail(this.email)){
            this.$emit('email', this.email);
        }
        else this.$emit('email', null);
    },
    isValidEmail() {
      return {
        "is-valid": this.validateEmail(this.email),
        "is-invalid": !this.validateEmail(this.email) && this.email !== ""
      };
    }
  }
};
</script>
