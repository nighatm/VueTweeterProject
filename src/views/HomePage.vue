<template>
  <div id="container-home">
    <h1>This is the home page</h1>
    <!-- side nav bar -->
    <div id="side-navigation">
      <button id="twitter-logo">
        <i class="fab fa-twitter"></i>
      </button>
      <div id="icon">
        <button>
          <i></i>
          <p></p>
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "home",
  components: {},
  data() {
    return {};
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
