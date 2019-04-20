<template>
  <div>
    <div class="form-row" v-for="(error, index) in errors" :key="index">
      <div
        v-if="error && error.length > 0"
        class="alert alert-dismissible fade show"
        v-bind:class="type"
        role="alert"
      >
        <strong>{{error}}</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormAlert",
  props: {
    errors: Array,
    level: String
  },
  computed: {
    type: function() {
      let prefix = "alert-";
      switch (this.level) {
        case "primary":
          prefix += "primary";
          break;
        case "secondary":
          prefix += "secondary";
          break;
        case "success":
          prefix += "success";
          break;
        case "danger":
          prefix += "danger";
          break;
        case "warning":
          prefix += "warning";
          break;
        case "info":
          prefix += "info";
          break;
        case "light":
          prefix += "light";
          break;
        case "dark":
          prefix += "dark";
          break;
        default:
          prefix += "danger";
          break;
      }
      return { [prefix]: true };
    }
  }
};
</script>

