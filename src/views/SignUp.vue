<template>
  <div id="signup-content">
    <router-link to="/login">Login</router-link>
    <img
      id="twitter-img"
      src="https://icon-library.com/images/tweeter-icon/tweeter-icon-17.jpg"
      alt="twitter icon image"
    />
    <h1 id="sign-head">Sign up for twitter account!</h1>
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
