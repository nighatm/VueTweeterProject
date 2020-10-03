<template>
  <div id="login">
    <h1>Welcome to Twitter Clone</h1>
    <p></p>
    <h2>Login</h2>
    <p>Email</p>
    <input
      type="text"
      placeholder="Enter email"
      id="email-input"
      v-model="email"
    />
    <p>Password</p>
    <input
      type="password"
      placeholder="Enter password"
      id="password-input"
      v-model="password"
    />
    <br />
    <br />
    <button @click="loginUser">Login</button>
    <h3>{{ loginStatus }}</h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      email: "",
      password: "",
      loginStatus: ""
    };
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading...";
      axios
        .request({
          url: "https://tweeterest.ml/api/login",
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          console.log(response);
          this.loginStatus = "Success";
          cookies.set("session", response.data.loginToken);
          this.$router.push("/");
        })
        .catch(error => {
          //show user login failure
          console.log(error);
          this.status = "Login Error!";
        });
    }
  }
};
</script>

<style scoped></style>
