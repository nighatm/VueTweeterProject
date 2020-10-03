<template>
  <div id="container-home">
    <h1>This is the User home page</h1>
    <div>
      <router-link to="/profile">Settings for account</router-link> |

      <router-link to="/logout">Logout</router-link>
    </div>
    <!-- Navigation bar -->
    <create-tweets />
    <show-tweets />

    <!-- <div v-if="loginToken != undefined">
    
  </div> -->

    <div>
      <p>XXXXXXXXXXXX</p>
      <button class="tw-button">Follow</button>
      <br />
      <button class="tw-button">Unfollow</button>
      <br />
      <button class="tw-button">Logout</button>
    </div>
  </div>
</template>
<script>
import cookies from "vue-cookies";
import CreateTweets from "../components/CreateTweets.vue";
import ShowTweets from "../components/ShowTweets.vue";

export default {
  name: "home",
  components: {
    CreateTweets,
    ShowTweets
  },
  data() {
    return {
      loginToken: cookies.get("loginToken")
    };
  }
};
</script>
<style>
#conteiner-home {
  display: grid;
  width: 100%;
}
#side-navigation {
  width: 20%;
  border-right: #f5f8fa;
  padding: 8vh 2vh;
}
#twitter-logo {
  height: 60px;
  width: 60px;
  border-radius: 4px;
  color: #1da1f2;
}
#icon {
  flex: center;
  padding: 2vh 4vh;
  border-radius: 50%;
  margin-right: auto;
}
</style>
