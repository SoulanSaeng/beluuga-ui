<!-- Base Component for all the steppers. Each stepper needs to implement the isValid method  -->
<script>
export default {

  name: "BaseStep",

  props: {
    notify: Number
  },
  
  watch: {
    notify() {
      this.$emit("isValid", this.isValid());
      this.wasValidated = true;
    }
  },
  methods: {

    /** Method which indicates to the parent that the form is valid  **/
    isValid() {
      return false;
    },

    notEmpty(str) {
      return str !== "" || str.length !== 0;
    }
  },

/** Property that tells the VueJS class binder that we have validated the form.  **/
  data() {
    return {
      wasValidated: false
    };
  }
};
</script>
<style></style>

