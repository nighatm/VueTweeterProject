<template>
  <div>
    <h3>View Profile Page</h3>
    <button class="tw-button" @click="showProfiles">Find Profiles</button>

    <h3 v-for="user in users" :key="user">
      {{ user.username }} <br />
      {{ user.email }} <br />
      {{ user.birthdate }} <br />
      {{ user.bio }} <br />
    </h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: []
    };
  },

  showProfiles: function() {
    axios
      .request({
        url: "https://tweeterest.ml/api/users",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
        },
        data: {}
      })
      .then(response => {
        console.log(response.data);
        this.users = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped></style>
