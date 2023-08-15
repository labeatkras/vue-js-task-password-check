Vue.createApp({
  data() {
    return {
      passwordOne: "",
      passwordTwo: "",
      isEqual: false,
      passwordHidden: true,
    };
  },
  methods: {
    togglePassword() {
      this.passwordHidden = !this.passwordHidden;
    },
    checkEqual() {
      this.isEqual =
        this.passwordOne === this.passwordTwo && this.passwordOne !== "";
    },
  },
  computed: {
    buttonText() {
      if (this.passwordHidden === true) {
        return "Show Password";
      } else {
        return "Hide Password";
      }
    },

    inputType() {
      if (this.passwordHidden === true) {
        return "password";
      } else {
        return "text";
      }
    },
    lowerCase() {
      return this.isEqual && this.passwordOne.match(/[a-z]/);
    },

    upperCase() {
      return this.isEqual && this.passwordOne.match(/[A-Z]/);
    },
    containsNumbers() {
      return this.isEqual && this.passwordOne.match(/[0-9]/);
    },
    containsSpecialCharacters() {
      return this.isEqual && this.passwordOne.match(/[^A-Za-z0-9]/);
    },
    passwordLength() {
      return this.isEqual && this.passwordOne.length > 10;
    },
    passwordChars() {
      return this.passwordOne.length;
    },
  },
}).mount("#app");
