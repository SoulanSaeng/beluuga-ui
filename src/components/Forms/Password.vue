<template>
  <div class="form-group">
    <label for="pwd">{{label}}</label>
    <input
      type="password"
      id="pwd"
      required
      :input="notifyParent"
      :class="isValidPassword"
      class="form-control"
      v-model="password"
    >
    <div class="valid-feedback"></div>
    <div class="invalid-feedback">
      Your password must be longer than 8 characters at least a special
      character and a capitalized character.
    </div>
  </div>
</template>

<script>
export default {
  name: "Password",
  props: {
    label: String,
  },
  data() {
    return {
      password: "",
    };
  },
  methods: {
    numerical(c) {
      return c >= "0" && c <= "9";
    },
    capital(c) {
      return c >= "A" && c <= "Z";
    },
    validatePassword(token) {
      let capital = false;
      let numerical = false;
      if (token.length < 8) return false;
      else
        for (var i = 0; i < token.length; i++) {
          let c = token.charAt(i);
          if (this.numerical(c)) numerical = true;
          if (this.capital(c)) capital = true;
          if (capital && numerical) break;
        }
      return capital && numerical;
    }
  },
  computed: {
    notifyParent(event) {
      if (this.validatePassword(this.password))
        this.$emit("password", this.password);
      else this.$emit("password", null);
    },
    isValidPassword() {
      return {
        "is-valid": this.validatePassword(this.password),
        "is-invalid":
          !this.validatePassword(this.password) && this.password !== ""
      };
    }
  }
};
</script>