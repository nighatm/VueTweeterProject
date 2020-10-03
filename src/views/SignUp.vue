<template>
  <div id="signup-content">
    <h1 id="sign-head">Sign up for Tweeter account!</h1>
    <router-link to="/login">Already a User.. Login Here!</router-link>

    <signup-form />
  </div>
</template>

<script>
import SignupForm from "../components/SignUpForm.vue";
export default {
  name: "signup-page",
  components: {
    SignupForm
  }
};
</script>

<style scoped>
#sign-head {
  text-align: center;
}
#twitter-img {
  width: 100px;
}
</style>
