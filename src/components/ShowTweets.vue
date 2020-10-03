<template>
  <div>
    <button class="tw-button" @click="showTweets">Show the tweets</button>
    <div v-for="tweet in tweets" :key="tweet.tweetId">
      <h3>Tweet Message: {{ tweet.content }}</h3>
      <h4>This tweet is comming from: {{ tweet.username }}</h4>

      <h3></h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "showtweets-page",
  data() {
    return {
      tweets: []
    };
  },
  methods: {
    showTweets: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          params: {
            userId: cookies.get("userId")
          }
        })
        .then(response => {
          this.tweets = response.data;
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
