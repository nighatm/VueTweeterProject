<template>
  <div>
    <div id="show-tweet">
      <button class="tw-button" @click="showTweets">Show the tweets</button>
      <div v-for="tweet in tweets" :key="tweet.tweetId">
        <h3>These you your Tweets: {{ tweet.username }}</h3>
        <h4>Tweet Message: {{ tweet.content }}</h4>

        <textarea id="" cols="30" rows="10" v-model="content"> </textarea>
        <button class="tw-button" @click="editTweets(tweet.tweetId)">
          Edit/Update Tweet
        </button>

        <button class="tw-button" @click="deleteTweet(tweet.tweetId)">
          Delete Tweet
        </button>
      </div>
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
      tweets: [],
      content: "",
      loginToken: cookies.get("session")
    };
  },
  props: {
    tweetId: Number
  },

  methods: {
    showTweets: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "GET",
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
    },
    editTweets: function(tweetId) {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: tweetId,
            content: this.content
          }
        })
        .then(response => {
          console.log(response);
          // this.tweets = content;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteTweet: function(tweetId) {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: tweetId,
            content: this.content
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    likeTweet: function(tweetId) {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: tweetId
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },

    unlikeTweet: function(tweetId) {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "0a7lJfhSqh40fBqUWmIO71IRKww5z9bzzvLNSvLZH5FB9"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: tweetId
          }
        })
        .then(response => {
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
